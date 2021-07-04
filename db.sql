CREATE DATABASE test;

CREATE TABLE IF NOT EXISTS users(
    id serial not null primary key,
    username character varying(16) not null,
    contact varchar(12) not null,
    gender smallint,
    is_merried boolean
);

CREATE TABLE orders(
    order_id serial not null primary key,
    user_id int not null references users(id)
);

INSERT INTO users (
    username,
    contact,
    gender,
    is_merried
) VALUES(
    'Adham',
    '998998000334',
    1,
    false
);

INSERT INTO users (
    username,
    contact,
    gender,
    is_merried
) VALUES('Hasan', '998942001202', 1, false),
        ('Fotima', '998781502805', 2, false);

SELECT * FROM users;

DELETE FROM users;
TRUNCATE TABLE users;
DROP TABLE users;

CREATE DATABASE demodb;

CREATE TABLE users(
    id serial primary key,
    first_name varchar(32),
    last_name varchar(32),
    age smallint,
    gender smallint,
    contact character varying(12),
    address varchar(32)
);

INSERT INTO users (
    first_name,
    last_name,
    age,
    gender,
    contact,
    address
) VALUES ('Adham', 'Muzaffarov', 21, 1, '998998000334', 'Toshkent'),
        ('Hasan', 'Muzaffarov', 18, 1, '998941200212', 'Toshkent'),
        ('Fotima', 'Muzaffarov', 18, 2, '998781502805', 'Toshkent'),
        ('Abdulloh', 'Muzaffarov', 14, 1, '998781502805', 'Toshkent');

SELECT 
        id,
        first_name || ' ' || last_name AS full_name,
        CASE
            WHEN gender = 1 THEN 'male'
            ELSE 'female'
        END AS jins
FROM users ORDER BY first_name ASC;

INSERT INTO users (
    last_name,
    age,
    gender,
    contact,
    address
) VALUES (
    'Sobirova', 18, 2, '998993456789', 'Toshkent'
);

SELECT 
        id,
        CONCAT(first_name, ' ', last_name) AS full_name,
        CASE
            WHEN gender = 1 THEN 'male'
            ELSE 'female'
        END AS jins
FROM users
WHERE age >= 21 AND age <= 18
ORDER BY first_name NULLS last;

SELECT 
        id,
        CONCAT(first_name, ' ', last_name) AS full_name,
        CASE
            WHEN gender = 1 THEN 'male'
            ELSE 'female'
        END AS jins,
        age
FROM users
WHERE age BETWEEN 18 AND 21
ORDER BY first_name NULLS last;

SELECT 
        id,
        CONCAT(first_name, ' ', last_name) AS full_name,
        CASE
            WHEN gender = 1 THEN 'male'
            ELSE 'female'
        END AS jins,
        age
FROM users
WHERE id IN(1,2)
ORDER BY first_name NULLS last;

SELECT 
        first_name ism,
        last_name familya,
        age yosh,
        gender jins,
        contact kontakt
FROM users
WHERE contact LIKE '%00%';

ALTER TABLE users ADD COLUMN email varchar(31);



