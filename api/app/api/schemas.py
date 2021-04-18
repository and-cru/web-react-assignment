from typing import List, Optional
from pydantic import BaseModel

class RecipeBase(BaseModel):
    title: str
    description: Optional[str] = None
    bean_type: Optional[str] = None
    brew_time: Optional[float] = 0.0
    brew_method: Optional[str] = None
    taste_notes: Optional[str] = None
    tags: Optional[str] = None

class RecipeCreate(RecipeBase):
    pass

class Recipe(RecipeBase):
    id: int
    brewer_id: int

    class Config:
        orm_mode = True

class BrewerBase(BaseModel):
    name: str

class BrewerCreate(BrewerBase):
    pass

class Brewer(BrewerBase):
    id: int
    recipes: Optional[List[Recipe]] = []

    class Config:
        orm_mode = True
