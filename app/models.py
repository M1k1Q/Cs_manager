from sqlalchemy import Column, Integer, String, Float
from .database import Base

class Player(Base):
    __tablename__ = "players"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    team = Column(String(50))
    role = Column(String(20))

    kd = Column(Float)
    adr = Column(Float)
    kast = Column(Float)
    rating = Column(Float)

    aim = Column(Float)
    gamesense = Column(Float)
    clutch = Column(Float)
    aggression = Column(Float)
    consistency = Column(Float)

    overall = Column(Float)