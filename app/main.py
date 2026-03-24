from fastapi import FastAPI
from .routes import players

app = FastAPI()

app.include_router(players.router)

@app.get("/")
def root():
    return {"message": "Welcome to the CS:GO Player API!"}