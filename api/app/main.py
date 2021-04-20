from fastapi import Depends, FastAPI, HTTPException, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from sqlalchemy.orm import Session
from app.api import crud, models, schemas
from app.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:9000",
    "http://web:3000"
    "http://web"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    response = Response("Internal server error", status_code=500)
    try:
        request.state.db = SessionLocal()
        response = await call_next(request)
    finally:
        request.state.db.close()
    return response

# DB Dependency
def get_db(request: Request):
    return request.state.db

# health checker
@app.get("/health")
async def root():
    return {"message": "I am healthy"}

# Basic crud operations
@app.post("/brewers/", response_model=schemas.Brewer)
def create_brewer(brewer: schemas.BrewerCreate, db: Session = Depends(get_db)):
    db_user = crud.get_brewer_by_name(db, name=brewer.name)
    if db_user:
        raise HTTPException(status_code=400, detail="Brewer already registered")
    return crud.create_brewer(db=db, brewer=brewer)

@app.get("/brewers/", response_model=List[schemas.Brewer])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    brewers = crud.get_brewers(db, skip=skip, limit=limit)
    return brewers

@app.delete("/brewers/{brewer_id}", status_code=200)
def delete_brewer(brewer_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_brewer_by_id(db, brewer_id)
    if db_user == None:
        raise HTTPException(status_code=404, detail="Brewer does not exist")
    return crud.delete_brewer(db, brewer_id)

@app.get("/brewers/{brewer_id}", response_model=schemas.Brewer)
def read_brewer(brewer_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_brewer(db, brewer_id=brewer_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="Brewer not found")
    return db_user

@app.post("/brewers/{brewer_id}/recipes/", response_model=schemas.Recipe)
def create_recipe_for_brewer(
    brewer_id: int, recipe: schemas.RecipeCreate, db: Session = Depends(get_db)
):
    return crud.create_brewer_recipe(db=db, recipe=recipe, brewer_id=brewer_id)

@app.get("/recipes/", response_model=List[schemas.Recipe])
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    recipes = crud.get_recipes(db, skip=skip, limit=limit)
    return recipes

@app.delete("/recipes/{recipe_id}", status_code=200)
def delete_recipe(recipe_id: int, db: Session = Depends(get_db)):
    db_recipe = crud.get_recipe_by_id(db, recipe_id)
    if db_recipe == None:
        raise HTTPException(status_code=404, detail="Recipe not found")
    return crud.delete_brewer_recipe(db, recipe_id)