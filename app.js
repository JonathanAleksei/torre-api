const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())
const usersRoutes = require('./api/routes/users');

app.get('/', (req, res) => {
    res.status(200).json({
        message: "proxy server live ready"
    })
})
app.use('/users', usersRoutes);

module.exports = app;