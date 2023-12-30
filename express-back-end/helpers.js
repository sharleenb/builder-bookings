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
        reject(err);
      });
  });
};

const getHomes = function () {
  let statement = `SELECT * FROM projects WHERE project_type='Homes' `;

  return new Promise((resolve, reject) => {
    pool
      .query(statement)
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        console.error("Error executing query:", err);
        reject(err);
      });
  });
};

const getHomeBuilders = function () {
  return new Promise((resolve, reject) => {
    const statement =
      "SELECT DISTINCT builder FROM projects WHERE project_type='Homes';";
    pool
      .query(statement)
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getHomeLocations = function () {
  return new Promise((resolve, reject) => {
    const statement =
      "SELECT DISTINCT city FROM projects WHERE project_type='Homes';";
    pool
      .query(statement)
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

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
        reject(err);
      });
  });
};

const getCondoBuilders = function () {
  return new Promise((resolve, reject) => {
    const statement =
      "SELECT DISTINCT builder FROM projects WHERE project_type='Condos';";
    pool
      .query(statement)
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getCondoLocations = function () {
  return new Promise((resolve, reject) => {
    const statement =
      "SELECT DISTINCT city FROM projects WHERE project_type='Condos';";
    pool
      .query(statement)
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getFiveHomes = function () {
  return new Promise((resolve, reject) => {
    const statement =
      "SELECT * FROM projects WHERE project_type='Homes' LIMIT 4;";

    pool
      .query(statement)
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getFiveCondos = function () {
  return new Promise((resolve, reject) => {
    const statement =
      "SELECT * FROM projects WHERE project_type='Condos' LIMIT 4;";

    pool
      .query(statement)
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getMembers = function () {
  return new Promise((resolve, reject) => {
    const statement = "SELECT * FROM members ORDER BY member_type DESC;";

    pool
      .query(statement)
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getMemberTypes = function () {
  return new Promise((resolve, reject) => {
    const statement = "SELECT DISTINCT member_type FROM members ORDER BY member_type DESC;"

    pool
      .query(statement)
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

module.exports = {
  getProjects,
  getHomes,
  getCondos,
  getHomeBuilders,
  getHomeLocations,
  getCondoBuilders,
  getCondoLocations,
  getFiveHomes,
  getFiveCondos,
  getMembers,
  getMemberTypes
};
