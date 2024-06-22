const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.get("/", (req, res) => {
  const sql = "SELECT * FROM hasil_panen";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(data);
  });
});

router.post("/", (req, res) => {
  const newHasilPanen = req.body;
  const sql = "INSERT INTO hasil_panen SET ?";
  db.query(sql, newHasilPanen, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedHasilPanen = req.body;
  const sql = `UPDATE hasil_panen SET ? WHERE id = ${id}`;
  db.query(sql, updatedHasilPanen, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sqlDelete = `DELETE FROM hasil_panen WHERE id = ${id}`;
  db.query(sqlDelete, (err, result) => {
    if (err) throw err;

    const sqlCount = "SELECT COUNT(*) AS count FROM hasil_panen";
    db.query(sqlCount, (err, countResult) => {
      if (err) throw err;

      const count = countResult[0].count;
      if (count === 1) {
        const sqlSelectLast = "SELECT id FROM hasil_panen LIMIT 1";
        db.query(sqlSelectLast, (err, selectResult) => {
          if (err) throw err;

          const lastId = selectResult[0].id;
          const sqlResetAutoIncrement =
            "ALTER TABLE hasil_panen AUTO_INCREMENT = 1";
          db.query(sqlResetAutoIncrement, (err, alterResult) => {
            if (err) throw err;

            const sqlUpdateId = "UPDATE hasil_panen SET id = 1 WHERE id = ?";
            db.query(sqlUpdateId, [lastId], (err, updateResult) => {
              if (err) throw err;

              res.send("ID reset to 1 as only one data left in the table");
            });
          });
        });
      } else {
        res.send("Data deleted");
      }
    });
  });
});

// by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM hasil_panen where id=?";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(data,id);
  });
});

router.post("/data", (req, res) => {
  const {user_id} = req.body;
  const sql = "SELECT * FROM hasil_panen where user_id=?";
  db.query(sql, user_id, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(data);
  });
});

module.exports = router;
