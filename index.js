const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();
router.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
router.get('/', (req, res) => {
  res.status(200).send({ welcome: "This is the api for dev portal website"});
});

app.use('/index', router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
