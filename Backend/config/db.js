const mysql = require("mysql");

const db = mysql.createConnection({
  // host: "localhost",
  // user: "root",
  // password: "",
  // database: "aquacare",
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAM
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connected");
  }
});

module.exports = db;
