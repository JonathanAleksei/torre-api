const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())
const usersRoutes = require('./api/routes/users');

app.use('/users', usersRoutes);

module.exports = app;