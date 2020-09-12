const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const UserRoutes = require('./routes/userRoutes');

app.use('/users', UserRoutes);

module.exports = app;
