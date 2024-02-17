const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routers/authRoutes');
const userRoutes = require('./routers/userRoutes');
const connectDb = require('./config/dbConnection');
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
console.log("Connection String:", process.env.CONNECTION_STRING);

connectDb();

app.use(bodyParser.json());
app.use(express.static('frontend'));
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
