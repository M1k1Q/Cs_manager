CREATE TABLE players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    team VARCHAR(50),
    role VARCHAR(20),

    kd FLOAT,
    adr FLOAT,
    kast FLOAT,
    rating FLOAT,

    aim FLOAT,
    gamesense FLOAT,
    clutch FLOAT,
    aggression FLOAT,
    consistency FLOAT,

    overall FLOAT
);