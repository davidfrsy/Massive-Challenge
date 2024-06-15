require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../config");

const router = express.Router();
const saltRounds = 10;

const { ACCESS_TOKEN_SECRET } = process.env;

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    }); 
    // ganti

    return res.status(200).json({ status: "Success" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Error registering user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Fail" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    console.log(user.dataValues.name);
    if (isMatch) {
      const userData = {name: user.dataValues.name};
      const token = jwt.sign({ name: user.dataValues.name }, ACCESS_TOKEN_SECRET, {
        expiresIn: "1d",
      });

      return res.status(200).json({ status: "Success", token, user:userData });
    } else {
      return res.status(401).json({ error: "Password not matched" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Error logging in", err: error });
  }
});

module.exports = router;
