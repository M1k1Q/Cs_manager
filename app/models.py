from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

class Player(Base):
    __tablename__ = "players"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    team_id = Column(Integer, ForeignKey("teams.id"))
    role = Column(String(20))

    kd = Column(Float)
    adr = Column(Float)
    kast = Column(Float)
    rating = Column(Float)

    overall = Column(Float)

class Team(Base):
    __tablename__ = "teams"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    ranking = Column(Integer)

class Manager(Base):
    __tablename__ = "managers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    team_id = Column(Integer, ForeignKey("teams.id"), nullable=True)
    budget = Column(Integer, default=1000000)
    career_points = Column(Integer, default=0)

    # Relationships (Optional but helpful for ORM)
    team = relationship("Team")