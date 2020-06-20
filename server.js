const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
}

// Add routes for handling DB
app.use(routes);

// connect to mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/thecodinglounge");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port https://localhost:${PORT}!`);
});
