from pydantic import BaseModel

class PlayerCreate(BaseModel):
    name: str
    team: str
    role: str
    kd: float
    adr: float
    kast: float
    rating: float
    aim: float
    gamesense: float
    clutch: float
    aggression: float
    consistency: float


class PlayerResponse(PlayerCreate):
    id: int
    overall: float

    class Config:
        from_attributes = True