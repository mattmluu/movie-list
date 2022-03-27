DROP DATABASE IF EXISTS moviesDB;
CREATE DATABASE moviesDB;
USE moviesDB;

CREATE TABLE fakeData (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL
);

INSERT INTO fakeData (title) VALUES ('Escape From Planet Earth');
INSERT INTO fakeData (title) VALUES ('Kikis Delivery Service');
INSERT INTO fakeData (title) VALUES ('Weathering With You');
INSERT INTO fakeData (title) VALUES ('Spider-Man: Into The Spider-Verse');
INSERT INTO fakeData (title) VALUES ('Rush Hour 2');
INSERT INTO fakeData (title) VALUES ('The Amogus Movie');

CREATE TABLE movies (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  watched INT NOT NULL
);