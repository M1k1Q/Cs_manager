from pydantic import BaseModel

class PlayerCreate(BaseModel):
    name: str
    team_id: int
    role: str
    kd: float
    adr: float
    kast: float
    rating: float


class PlayerResponse(PlayerCreate):
    id: int
    overall: float

    class Config:
        from_attributes = True

class TeamCreate(BaseModel):
    name: str
    ranking: int

class TeamResponse(TeamCreate):
    id: int

    class Config:
        from_attributes = True

class ManagerCreate(BaseModel):
    name: str

class ManagerResponse(BaseModel):
    id: int
    name: str
    team_id: int | None = None
    budget: int
    career_points: int

    class Config:
        from_attributes = True

class GameStatus(BaseModel):
    manager: ManagerResponse
    team: TeamResponse | None = None
