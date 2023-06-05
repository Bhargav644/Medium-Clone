const path = require("path");
const mongoose = require("mongoose");

// requireing env variables
require("dotenv").config({
  path: path.join("config/.env"),
});

const password = process.env.MONGODB_PASSWORD;
const database = process.env.DATABASE_NAME;

const URI = `mongodb+srv://bhargavbusiness644:${password}@cluster0.utgiuuw.mongodb.net/${database}`;

mongoose.connect(URI);

const dbConnection = mongoose.connection;

dbConnection.on("connected", () => {
  // The connection event is emitted once the connection is established
  console.log("Connected to database:", dbConnection.name);
});
// Check the name of the connected database

module.exports = mongoose;