const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.get("/", (req, res) => {
    const sql = "SELECT * FROM helps";
    db.query(sql, (err, data) => {
        if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.status(200).json(data);
    });
});

router.post("/", (req, res) => {
    const newHelps = req.body;
    const sql = "INSERT INTO helps SET ?";
    db.query(sql, newHelps, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;