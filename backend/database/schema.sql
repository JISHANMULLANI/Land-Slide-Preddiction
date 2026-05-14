CREATE DATABASE landslide_db;

USE landslide_db;

CREATE TABLE predictions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rainfall FLOAT,
    slope FLOAT,
    soil FLOAT,
    prediction VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);