require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();
const saltRounds = 10;

const { ACCESS_TOKEN_SECRET } = process.env;

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    const values = [name, email, hashedPassword];

    db.query(sql, values, (err, data) => {
      if (err) {
        console.error('Error registering user:', err);
        return res.status(500).json({ error: 'Error registering user' });
      }
      return res.status(201).json({ status: 'Success', message: 'User registered successfully' });
    });
  } catch (err) {
    console.error('Error hashing password:', err);
    return res.status(500).json({ error: 'Error hashing password' });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], async (err, results) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.status(500).json({ error: "Error querying database" });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: "Email or password is incorrect" });
      }

      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const userData = { name: user.name };
        console.log(ACCESS_TOKEN_SECRET)
        const token = jwt.sign({ id: user.id, name: user.name }, ACCESS_TOKEN_SECRET, {
          expiresIn: "1d",
        });

        return res.status(200).json({ status: "Success", token, user: userData });
      } else {
        return res.status(401).json({ error: "Email or password is incorrect" });
      }
    });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Error logging in" });
  }
});

module.exports = router;
