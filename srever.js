require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/db');
const blogRoutes = require('./routes/route');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.use('/blog', blogRoutes);

app.listen(port, () => {
  dbConnection()
    .then(() => console.log('success'))
    .catch((err) => console.log(err));
  console.log(`Example app listening on port ${port}`);
});