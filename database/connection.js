require("env2")(".env");
const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL;
mongoose
  .connect(dbUrl)
  .then(() => console.log("database is connected "))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;
