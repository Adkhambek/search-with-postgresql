CREATE DATABASE search;

CREATE TABLE users(
    id serial primary key,
    first_name varchar(32) not null,
    last_name varchar(32) not null,
    contact varchar(15) not null
);

CREATE TABLE books(
    id serial primary key,
    name varchar(64) not null,
    date varchar(12) not null,
    category varchar(32) not null
);

CREATE TABLE films(
    id serial primary key,
    name varchar(64) not null,
    date varchar(12) not null,
    category varchar(32) not null
);

INSERT INTO users (
    first_name,
    last_name,
    contact
) VALUES ('Adham', 'Muzaffarov', '998998000334'),
('Donishmad', 'Olimjonov', '998946209914'),
('Imron', 'Shoimov', '998974409931'),
('MuhammadYusuf', 'O''rmonov', '998999054094'),
('Asliddin', 'Shukurjonov', '998903380565'),
('Ahrorbek', 'Abdurahimov', '998993299674'),
('Jamoliddin', 'Rixsiyev', '998971051560'),
('Abduvohid', 'Abdufattoyev', '998331251800'),
('Hasan', 'Muzaffarov', '998941200212'),
('Abubakir', 'Abdullayev', '998934571238');

INSERT INTO books (
    name,
    date,
    category
) VALUES ('Atomic Habits', '2018', 'self-help'),
         ('Rich dad, poor dad', '1997', 'personal finance'),
         ('O''tkanlar kunlar', '1920', 'tarix'),
         ('Jimjitlik', '1989', 'drama'),
         ('Ikki eshik orasi', '1986', 'badiiy'),
         ('Yulduzli tunlar', '1978', 'tarixiy'),
         ('Avlodlar davoni', '1980', 'tarixiy'),
         ('Dunyoni ishlari', '2005', 'badiiy'),
         ('Thinking, fast and slow', '2011', 'self-help'),
         ('Think and Grow Rich', '1937', 'self-help');

INSERT INTO films (
    name,
    date,
    category
) VALUES ('Social Network', '2010', 'Biography, Drama'),
         ('iGenius', '2011', 'Documentary'),
         ('The Founder', '2016', 'Biography, Drama'),
         ('Limitless', '2011', 'science-fiction, thriller'),
         ('The Accountant', '2016', 'Action, Drama, thriller'),
         ('Who Am I', '2014', 'thriller'),
         ('Lucy', '2014', 'science-fiction, thriller'),
         ('Now you see me', '2013', 'Detective, Crime, Thriller'),
         ('Shutter island', '2010', 'Detective, Drama, Thriller'),
         ('The Dark Knight', '2008', 'Action, Crime, Sci-Fi');
