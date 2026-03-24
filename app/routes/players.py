from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app import models, schemas, database

router = APIRouter()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/players", response_model=schemas.PlayerResponse)
def create_player(player: schemas.PlayerCreate, db: Session = Depends(get_db)):
    overall = (player.kd * 80 + player.adr + player.kast + player.rating * 80) / 4
    
    db_player = models.Player(**player.model_dump(), overall=overall)
    db.add(db_player)
    db.commit()
    db.refresh(db_player)

    return db_player


@router.get("/players", response_model=List[schemas.PlayerResponse])
def get_players(db: Session = Depends(get_db)):
    return db.query(models.Player).all()