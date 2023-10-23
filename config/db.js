const mongoose = require('mongoose');

async function dbConnection() {
  try {
    await mongoose.connect('mongodb+srv://fatimaawdeh21:<password>@cluster0.gmyfudr.mongodb.net/<database-name>?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

module.exports = dbConnection;
