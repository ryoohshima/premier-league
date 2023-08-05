const express = require('express');
const path = require('path');
const app = express();

const index = require('./routes/index');
const teams = require('./routes/teams');
const players = require('./routes/players');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', index);
app.use('/teams', teams);
app.use('/players', players);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});