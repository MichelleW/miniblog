const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const posts = require('./routes/api/Posts')

const app = express();

// Setup bodyParse Middleware
app.use(bodyParser.json());

// DB config 
const db = require('./config/keys').mongoURI;

// Connect to Mongo  
mongoose
  .connect('mongodb://localhost/db', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

app.use('/api/posts', posts);

app.use(bodyParser.urlencoded({
  extended: false
})); 

// create port to user
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on ...${port}`));