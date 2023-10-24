//connection between backend and mongodb using mongoose
//BACKEND : config --> model --> controller --> routes --> server

const mongoose = require('mongoose');
require('dotenv').config();
const Mongo_URL = process.env.Mongo_URL;
async function dbConnection() {
    try {
        await mongoose.connect(Mongo_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {dbConnection};