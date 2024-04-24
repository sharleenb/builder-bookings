const Express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const App = Express();
const BodyParser = require("body-parser");
const {
  getHomes,
  getProjects,
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
  getThumbnail,
} = require("./helpers");
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
App.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../react-front-end/public/uploads/"); // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname
      // file.fieldname + "-" + req.params.id + path.extname(file.originalname)
    ); // Define the filename of the uploaded file
  },
});

const upload = multer({ storage: storage });
App.use(
  "/uploads",
  Express.static(path.join(__dirname, "../react-front-end/public/uploads"))
);

App.get("/api/contact", (req, res) =>
  res.send({
    message: "contact us ",
  })
);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});

App.post("/api/upload-file/:id", upload.single("thumbnail"), (req, res) => {
  const projectId = req.params.id;
  try {
    const image = req.file.filename;
    addThumbnail(image, projectId)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.status(500).json({ error: "Internal Server Error" });
      });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ success: false, error: "File upload failed" });
  }
});

App.get("/api/get-thumbnail/:id", (req, res) => {
  const projectId = req.params.id;
  getThumbnail(projectId)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/homes", (req, res) => {
  getHomes()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/home/builders", (req, res) => {
  getHomeBuilders()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/home/locations", (req, res) => {
  getHomeLocations()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/condos", (req, res) => {
  getCondos()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/condo/builders", (req, res) => {
  getCondoBuilders()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/condo/locations", (req, res) => {
  getCondoLocations()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/projects", (req, res) => {
  getProjects()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/edit-project/:id", (req, res) => {
  const projectId = req.params.id;
  getProjectDetails(projectId)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.put("/api/edit-project/:id", (req, res) => {
  const projectId = req.params.id;
  const values = req.body;
  editProjectDetails(values, projectId)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.post("/api/add-project", (req, res) => {
  addProject(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.delete("/api/delete-project/:id", (req, res) => {
  const projectId = req.params.id;
  deleteProject(projectId)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/pictures", (req, res) => {
  getPictures()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/five/homes", (req, res) => {
  getFiveHomes()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/five/Condos", (req, res) => {
  getFiveCondos()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/members", (req, res) => {
  getMembers()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/member-types", (req, res) => {
  getMemberTypes()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/edit-member/:id", (req, res) => {
  const memberId = req.params.id;
  getMemberDetails(memberId)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.put("/api/edit-member/:id", (req, res) => {
  const memberId = req.params.id;
  const values = req.body;
  editMemberDetails(values, memberId)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.post("/api/add-member", (req, res) => {
  addMember(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.delete("/api/delete-member/:id", (req, res) => {
  const memberId = req.params.id;
  deleteMember(memberId)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/socials", (req, res) => {
  getSocials()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/active-socials", (req, res) => {
  getActiveSocials()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.put("/api/edit-socials", (req, res) => {
  const promises = [];
  for (const [key, value] of Object.entries(req.body)) {
    if (key > 0) {
      const socialId = key;
      const updatedInfo = value;
      promises.push(editActiveSocials(socialId, updatedInfo));
    }
  }
  Promise.all(promises)
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/blogs", (req, res) => {
  getBlogs()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.get("/api/edit-blog/:id", (req, res) => {
  const blogId = req.params.id;
  getBlogDetails(blogId)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.put("/api/edit-blog/:id", (req, res) => {
  const blogId = req.params.id;
  const values = req.body;
  editBlogDetails(values, blogId)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.post("/api/add-blog", (req, res) => {
  addBlog(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

App.delete("/api/delete-blog/:id", (req, res) => {
  const blogId = req.params.id;
  deleteBlog(blogId)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});
