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
  phone VARCHAR(12), 
  email VARCHAR(255), 
  languages VARCHAR(255), 
  photo_url TEXT, 
  about TEXT
)
