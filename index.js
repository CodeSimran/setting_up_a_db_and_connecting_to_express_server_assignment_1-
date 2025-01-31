const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to database');
})
.catch((error) => {
  console.error('Error connecting to database:', error.message);
});
app.get('/', (req, res) => {
  res.send('Customer Management System Backend is Running');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
