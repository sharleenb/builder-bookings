const { query } = require("express");
const { pool } = require("../db/connection");
const { MulterError } = require("multer");

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
    const statement =
      "SELECT DISTINCT member_type FROM members ORDER BY member_type DESC;";

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

const getMemberDetails = function (memberId) {
  return new Promise((resolve, reject) => {
    const statement = `SELECT * FROM members WHERE id=$1 ;`;

    pool
      .query(statement, [memberId])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const editMemberDetails = function (values, memberId) {
  return new Promise((resolve, reject) => {
    const keys = Object.keys(values);
    const updateValues = Object.values(values);

    const setClause = keys
      .map((key, index) => `${key}=$${index + 1}`)
      .join(", ");
    const statement = `UPDATE members SET ${setClause} WHERE id=$${
      keys.length + 1
    } ;`;

    pool
      .query(statement, [...updateValues, memberId])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const addMember = function (newData) {
  return new Promise((resolve, reject) => {
    const statement =
      "INSERT INTO members (name, member_type, designation, phone, email, languages, photo_url, about) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
    const values = Object.values(newData);

    pool
      .query(statement, [...values])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const deleteMember = function (memberId) {
  return new Promise((resolve, reject) => {
    const statement = "DELETE FROM members WHERE id=$1";
    pool
      .query(statement, [memberId])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getSocials = function () {
  return new Promise((resolve, reject) => {
    const statement = "SELECT * FROM socials;";

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

const getActiveSocials = function () {
  return new Promise((resolve, reject) => {
    const statement = "SELECT * FROM socials WHERE active=true;";

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

const editActiveSocials = function (socialId, updatedInfo) {
  return new Promise((resolve, reject) => {
    const columns = Object.keys(updatedInfo);
    const data = Object.values(updatedInfo);
    const setClause = columns
      .map((key, index) => `${key}=$${index + 1}`)
      .join(", ");
    const statement = `UPDATE socials SET ${setClause} WHERE id=$${
      columns.length + 1
    };`;
    pool
      .query(statement, [...data, socialId])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getProjectDetails = function (projectId) {
  return new Promise((resolve, reject) => {
    const statement = `SELECT * FROM projects WHERE id=$1 ;`;

    pool
      .query(statement, [projectId])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const editProjectDetails = function (values, projectId) {
  return new Promise((resolve, reject) => {
    const keys = Object.keys(values);
    const updateValues = Object.values(values);

    const setClause = keys
      .map((key, index) => `${key}=$${index + 1}`)
      .join(", ");
    const statement = `UPDATE projects SET ${setClause} WHERE id=$${
      keys.length + 1
    } ;`;

    pool
      .query(statement, [...updateValues, projectId])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const addProject = function (newData) {
  return new Promise((resolve, reject) => {
    const statement =
      "INSERT INTO projects (project_name, city, province, address, price, status, builder, about_builder, project_type, occupancy, num_buildings, num_storeys, parking, maintenance_fees, amenities, thumbnail, photos, map_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)";
    const values = Object.values(newData);

    pool
      .query(statement, [...values])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

const deleteProject = function (projectId) {
  return new Promise((resolve, reject) => {
    const statement = "DELETE FROM projects WHERE id=$1";
    pool
      .query(statement, [projectId])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getBlogs = function () {
  return new Promise((resolve, reject) => {
    const statement = "SELECT * FROM blogs;";

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

const getBlogDetails = function (blogId) {
  return new Promise((resolve, reject) => {
    const statement = `SELECT * FROM blogs WHERE id=$1 ;`;

    pool
      .query(statement, [blogId])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const editBlogDetails = function (values, blogId) {
  return new Promise((resolve, reject) => {
    const keys = Object.keys(values);
    const updateValues = Object.values(values);

    const setClause = keys
      .map((key, index) => `${key}=$${index + 1}`)
      .join(", ");
    const statement = `UPDATE blogs SET ${setClause} WHERE id=$${
      keys.length + 1
    } ;`;

    pool
      .query(statement, [...updateValues, blogId])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const addBlog = function(newData) {
  return new Promise((resolve, reject) => {
    const statement =
      "INSERT INTO blogs (title, content, date_created) VALUES ($1, $2, $3)";
    const values = Object.values(newData);

    pool
      .query(statement, [...values])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const deleteBlog = function (blogId) {
  return new Promise((resolve, reject) => {
    const statement = "DELETE FROM blogs WHERE id=$1";
    pool
      .query(statement, [blogId])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const addThumbnail = function (image, projectId) {
  return new Promise((resolve, reject) => {
    const statement = "UPDATE projects SET thumbnail=$1 WHERE id=$2;"
    pool
      .query(statement, [image, projectId])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

const getThumbnail = function (projectId) {
  return new Promise((resolve, reject) => {
    const statement = "SELECT thumbnail FROM projects WHERE id=$1;"
    pool
      .query(statement, [projectId])
      .then((result) => {
        resolve(result.rows[0].thumbnail);
      })
      .catch((err) => {
        console.log(err);
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
  getMemberTypes,
  getSocials,
  getProjectDetails,
  editProjectDetails,
  getMemberDetails,
  editMemberDetails,
  addProject,
  deleteProject,
  addMember,
  deleteMember,
  getActiveSocials,
  editActiveSocials,
  getBlogs,
  getBlogDetails,
  editBlogDetails,
  addBlog,
  deleteBlog, 
  addThumbnail, 
  getThumbnail
};
