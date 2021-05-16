const mongoose = require('mongoose');
require('dotenv').config();
var ReactDOMServer = require('react-dom/server');
var http = require("http");
var url = require("url");
const Register = require('./models/register.model');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')

const Routershow = require('./router');

const app = express()

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response);
  }

  const uri = process.env.ATLAS_URI;
  mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  })

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cors())
  app.use(bodyParser.json())


  app.get('/', (req, res) => {
    res.write('Hello World!')
  })

  app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
  }))

  app.use('/api', Routershow);


  app.listen(8888, () => console.log(`Server running on port 8888`));
}
exports.start = start;