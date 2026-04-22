from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app import models, schemas, database

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

router = APIRouter(prefix="/game", tags=["game"])

@router.post("/start", response_model=schemas.ManagerResponse)
def start_career(manager: schemas.ManagerCreate, db: Session = Depends(get_db)):
    # Simple logic: delete old manager if exists (for single career mode)
    db.query(models.Manager).delete()
    
    db_manager = models.Manager(name=manager.name, budget=1000000, career_points=0)
    db.add(db_manager)
    db.commit()
    db.refresh(db_manager)
    return db_manager

@router.get("/status", response_model=schemas.GameStatus)
def get_game_status(db: Session = Depends(get_db)):
    manager = db.query(models.Manager).first()
    if not manager:
        raise HTTPException(status_code=404, detail="No active career found")
    
    return {"manager": manager, "team": manager.team}

@router.post("/select-team/{team_id}", response_model=schemas.ManagerResponse)
def select_team(team_id: int, db: Session = Depends(get_db)):
    manager = db.query(models.Manager).first()
    if not manager:
        raise HTTPException(status_code=404, detail="No active career found")
    
    team = db.query(models.Team).filter(models.Team.id == team_id).first()
    if not team:
        raise HTTPException(status_code=404, detail="Team not found")
    
    manager.team_id = team_id
    db.commit()
    db.refresh(manager)
    return manager

@router.post("/create-team", response_model=schemas.ManagerResponse)
def create_custom_team(team_data: schemas.TeamCreate, db: Session = Depends(get_db)):
    manager = db.query(models.Manager).first()
    if not manager:
        raise HTTPException(status_code=404, detail="No active career found")
    
    new_team = models.Team(name=team_data.name, ranking=99) # New teams start at the bottom
    db.add(new_team)
    db.commit()
    db.refresh(new_team)
    
    manager.team_id = new_team.id
    db.commit()
    db.refresh(manager)
    return manager
