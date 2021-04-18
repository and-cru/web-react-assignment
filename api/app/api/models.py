from sqlalchemy import Boolean, Column, ForeignKey, Integer, Float, String, Enum
from sqlalchemy.orm import relationship

from app.database import Base

class Brewer(Base):
    __tablename__ = "brewers"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String, unique=True, index=True)

    recipes = relationship("Recipe", back_populates="brewer")


class Recipe(Base):
    __tablename__ = "recipes"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String, index=True)
    bean_type = Column(String, index=True)
    description = Column(String, index=True)
    brew_method = Column(String, index=True)
    brew_time = Column(Float, index=True)
    taste_notes = Column(String, index=True)
    tags = Column(String, index=True)
    views = Column(Integer, index=True, default=0)
    brewer_id = Column(Integer, ForeignKey("brewers.id"))

    brewer = relationship("Brewer", back_populates="recipes")