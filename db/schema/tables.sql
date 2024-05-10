CREATE TABLE projects (
  id serial PRIMARY KEY, 
  project_name VARCHAR(255),
  city VARCHAR(255), 
  province VARCHAR(255), 
  address VARCHAR(255), 
  price VARCHAR(255), 
  status VARCHAR(255), 
  builder VARCHAR(255), 
  about_builder TEXT, 
  project_type VARCHAR(255), 
  occupancy VARCHAR(255), 
  num_buildings VARCHAR(255), 
  num_storeys VARCHAR(255), 
  parking VARCHAR(255), 
  maintenance_fees VARCHAR(255), 
  amenities TEXT, 
  thumbnail VARCHAR (255),
  photos TEXT ARRAY, 
  map_url TEXT
)

CREATE TABLE members (
  id serial PRIMARY KEY, 
  name VARCHAR(255),
  member_type VARCHAR(255), 
  designation VARCHAR(255), 
  phone VARCHAR(15), 
  email VARCHAR(255), 
  languages VARCHAR(255), 
  photo_url TEXT, 
  about TEXT
)

ALTER TABLE members RENAME COLUMN photo_url TO thumbnail;
ALTER TABLE members
ALTER COLUMN phone TYPE VARCHAR(20);

CREATE TABLE socials (
  id serial PRIMARY KEY, 
  name VARCHAR(255), 
  link_url TEXT, 
  icon TEXT, 
  active BOOLEAN
)

CREATE TABLE blogs (
  id serial PRIMARY KEY, 
  title VARCHAR(255), 
  content TEXT, 
  date_created DATE
)

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR (255) NOT NULL,
  password VARCHAR (255) NOT NULL
);

INSERT INTO users (email, password) VALUES ('alisyedrealtor@gmail.com', '$2a$10$Qio/eBsnSh/3eQZBTWtore42Ykc.u334Ge9oiRZNfdUaWL95ZcnbG')