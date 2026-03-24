-- create database cs_manager;
-- use cs_manager;


-- create table players(
-- 	ID int auto_increment primary key,
--     name varchar(50),
--     team varchar(50),
--     role varchar(50),

--     kd FLOAT,
--     adr FLOAT,
--     kast FLOAT,
--     rating FLOAT,
--     
--     aim int,
--     gamesense int,
--     clutch int,
--     aggression int,
--     consistency int,
--     overall int
-- );

-- INSERT INTO players (name, team, role, kd, adr, kast, rating, aim, gamesense, clutch, aggression, consistency, overall) VALUES

-- -- Team Spirit
-- ('Donk', 'Team Spirit', 'rifler', 1.35, 92.5, 78.2, 1.25, 95, 85, 88, 92, 90, 90),
-- ('Sh1ro', 'Team Spirit', 'AWPer', 1.28, 85.4, 82.1, 1.22, 93, 90, 92, 70, 88, 89),
-- ('Magixx', 'Team Spirit', 'IGL', 1.05, 72.3, 75.0, 1.00, 70, 95, 80, 60, 85, 80),

-- -- FaZe Clan
-- ('Karrigan', 'FaZe Clan', 'IGL', 0.98, 68.5, 73.2, 0.95, 65, 96, 85, 55, 88, 78),
-- ('Frozen', 'FaZe Clan', 'rifler', 1.22, 88.7, 80.5, 1.20, 90, 92, 90, 75, 91, 88),
-- ('Jcobbb', 'FaZe Clan', 'entry', 1.10, 84.2, 77.8, 1.08, 92, 80, 78, 95, 85, 86),
-- ('Broky', 'FaZe Clan', 'AWPer', 1.25, 87.9, 81.4, 1.21, 91, 88, 89, 72, 87, 87),

-- -- Team Vitality
-- ('ZyWoo', 'Team Vitality', 'AWPer', 1.40, 95.3, 83.5, 1.30, 96, 94, 93, 70, 95, 94),
-- ('ApEx', 'Team Vitality', 'IGL', 1.02, 70.1, 74.5, 0.98, 72, 97, 84, 65, 86, 79),
-- ('Mezi', 'Team Vitality', 'rifler', 1.18, 86.0, 79.9, 1.15, 88, 87, 85, 78, 89, 85),
-- ('FlameZ', 'Team Vitality', 'entry', 1.20, 90.2, 80.3, 1.18, 94, 82, 80, 93, 86, 87);

SELECT * from players;
-- SET SQL_SAFE_UPDATES = 0;
-- delete from players;
-- SET SQL_SAFE_UPDATES = 1;  