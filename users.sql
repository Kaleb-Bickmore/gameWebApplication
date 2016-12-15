DROP DATABASE IF EXISTS quiz;
CREATE DATABASE quiz;

\c quiz;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  score VARCHAR
);

INSERT INTO users (name,score)
  VALUES ('Kaleb', 5);
