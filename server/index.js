const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { mongoUrl } = require('../config');

const app = express();
const port = process.env.PORT || 8081;

mongoose.connect(mongoUrl);

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static('build'));

app.set('view engine', 'ejs');

require('./passport-handler')(app);
require('./models');
require('./routes')(app, passport);

app.listen(port);
console.log(`The magic happens on port ${port}`);
