const { pool } = require("../db/connection");

const getProjects = function () {
  return new Promise((resolve, reject) => {
    const statement = "SELECT * FROM projects;";
    pool
    .query(statement)
    .then((result) => {
      resolve(result.rows);
    })
    .catch((err) => {
      console.error("Error executing query:", err);
      reject(err)
    })
  })
}

const getHomes = function () {
  return new Promise((resolve, reject) => {
    const statement = "SELECT * FROM projects WHERE project_type='Homes';";

    pool
    .query(statement)
    .then((result) => {
      resolve(result.rows);
    })
    .catch((err) => {
      console.error("Error executing query:", err);
      reject(err)
    })
  })
}

const getCondos = function () {
  return new Promise((resolve, reject) => {
    const statement = "SELECT * FROM projects WHERE project_type='Condos';";

    pool
    .query(statement)
    .then((result) => {
      resolve(result.rows);
    })
    .catch((err) => {
      console.error("Error executing query:", err);
      reject(err)
    })
  })
}

const getPictures = function () {
  return new Promise((resolve, reject) => {
    const statement = "SELECT * FROM pictures;"
    pool.query(statement)
    .then((result) => {
      resolve(result.rows)
    })
    .catch((err) => {
      reject(err)
    })
  })
}

module.exports = {
  getProjects,
  getHomes, 
  getCondos,
  getPictures
}