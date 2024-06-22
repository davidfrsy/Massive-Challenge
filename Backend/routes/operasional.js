const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.get("/", (req, res) => {
  const sql = "SELECT * FROM operasional";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(data);
  });
});

router.post("/", (req, res) => {
  const newOperasional = req.body;
  const sql = "INSERT INTO operasional SET ?";
  db.query(sql, newOperasional, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedOperasional = req.body;
  const sql = `UPDATE operasional SET ? WHERE id = ${id}`;
  db.query(sql, updatedOperasional, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sqlDelete = `DELETE FROM operasional WHERE id = ${id}`;
  db.query(sqlDelete, (err, result) => {
    if (err) throw err;

    const sqlCount = "SELECT COUNT(*) AS count FROM operasional";
    db.query(sqlCount, (err, countResult) => {
      if (err) throw err;

      const count = countResult[0].count;
      if (count === 1) {
        const sqlSelectLast = "SELECT id FROM operasional LIMIT 1";
        db.query(sqlSelectLast, (err, selectResult) => {
          if (err) throw err;

          const lastId = selectResult[0].id;
          const sqlResetAutoIncrement =
            "ALTER TABLE operasional AUTO_INCREMENT = 1";
          db.query(sqlResetAutoIncrement, (err, alterResult) => {
            if (err) throw err;

            const sqlUpdateId = "UPDATE operasional SET id = 1 WHERE id = ?";
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
  const sql = "SELECT * FROM operasional where id=?";
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
  const sql = "SELECT * FROM operasional where user_id=?";
  db.query(sql, user_id, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(data);
  });
});

module.exports = router;
