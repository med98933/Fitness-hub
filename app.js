const express = require('express');
const app = express();
const userRoutes = require('./routes/user');







app.use('/api/auth', userRoutes);
module.exports = app;