from app.database import engine, Base
from app import models

def reset_database():
    print("Cleaning database...")
    
    # Drop all existing tables (wipes data and schema)
    Base.metadata.drop_all(bind=engine)
    
    # Recreate tables from scratch (fresh start)
    Base.metadata.create_all(bind=engine)
    
    print("Database cleared")

if __name__ == "__main__":
    reset_database()
