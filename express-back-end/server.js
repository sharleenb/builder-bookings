const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const { getHomes, getProjects, getCondos, getHomeBuilders, getHomeLocations, getCondoBuilders, getCondoLocations, getFiveHomes, getFiveCondos, getMembers, getMemberTypes } = require('./helpers');
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.get('/api/contact', (req, res) => res.send({
  message: "contact us ",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

App.get('/api/homes', (req, res) => {
  getHomes()
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.status(500).json({error: "Internal Server Error"});
  })
})

App.get('/api/home/builders', (req, res) => {
  getHomeBuilders()
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.status(500).json({error: "Internal Server Error"})
  })
})

App.get('/api/home/locations', (req, res) => {
  getHomeLocations()
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.status(500).json({error: "Internal Server Error"})
  })
})

App.get('/api/condos', (req, res) => {
  getCondos()
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.status(500).json({error: "Internal Server Error"});
  })
})

App.get('/api/condo/builders', (req, res) => {
  getCondoBuilders()
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.status(500).json({error: "Internal Server Error"})
  })
})

App.get('/api/condo/locations', (req, res) => {
  getCondoLocations()
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.status(500).json({error: "Internal Server Error"})
  })
})

App.get('/api/projects', (req, res) => {
  getProjects()
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.status(500).json({error: "Internal Server Error"});
  })
})

App.get('/api/pictures', (req, res) => {
  getPictures()
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.status(500).json({error: "Internal Server Error"});
  })
})

App.get('/api/five/homes', (req, res) => {
  getFiveHomes()
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.status(500).json({error: "Internal Server Error"});
  })
})

App.get('/api/five/Condos', (req, res) => {
  getFiveCondos()
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.status(500).json({error: "Internal Server Error"});
  })
})

App.get('/api/members', (req, res) => {
  getMembers()
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.status(500).json({error: "Internal Server Error"});
  })
})

App.get('/api/member-types', (req, res) => {
  getMemberTypes()
  .then((result) => {
    res.json(result);
  })
  .catch((error) => {
    res.status(500).json({error: "Internal Server Error"});
  })
})