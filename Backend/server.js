const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aquacare'
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.status(500).json({ pesan: "Error", error: err });
        }
        if (data.length > 0) {
            return res.status(200).json({ pesan: "Success", data: data[0] });
        } else {
            return res.status(401).json({ pesan: "Fail" });
        }
    });
});

// Endpoint untuk mendapatkan data operasional
app.get("/operasional", (req, res) => {
    const sql = "SELECT * FROM operasional";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.status(200).json(data);
    });
});

// Add new operasional data
app.post('/operasional', (req, res) => {
    const newOperasional = req.body;
    const sql = 'INSERT INTO operasional SET ?';
    db.query(sql, newOperasional, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

  // Update operasional data
app.put('/operasional/:id', (req, res) => {
    const { id } = req.params;
    const updatedOperasional = req.body;
    const sql = `UPDATE operasional SET ? WHERE id = ${id}`;
    db.query(sql, updatedOperasional, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Delete operasional data
app.delete('/operasional/:id', (req, res) => {
    const { id } = req.params;
    const sqlDelete = `DELETE FROM operasional WHERE id = ${id}`;
    db.query(sqlDelete, (err, result) => {
        if (err) throw err;

        // Check the number of remaining rows
        const sqlCount = 'SELECT COUNT(*) AS count FROM operasional';
        db.query(sqlCount, (err, countResult) => {
            if (err) throw err;

            const count = countResult[0].count;
            if (count === 1) {
                const sqlSelectLast = 'SELECT id FROM operasional LIMIT 1';
                db.query(sqlSelectLast, (err, selectResult) => {
                    if (err) throw err;

                    const lastId = selectResult[0].id;

                    const sqlResetAutoIncrement = 'ALTER TABLE operasional AUTO_INCREMENT = 1';
                    db.query(sqlResetAutoIncrement, (err, alterResult) => {
                        if (err) throw err;

                        const sqlUpdateId = 'UPDATE operasional SET id = 1 WHERE id = ?';
                        db.query(sqlUpdateId, [lastId], (err, updateResult) => {
                            if (err) throw err;

                            res.send('ID reset to 1 as only one data left in the table');
                        });
                    });
                });
            } else {
                res.send('Data deleted');
            }
        });
    });
});

// Hasil Panen ####################################################################################

// Endpoint untuk mendapatkan data hasil panen
app.get("/hasilpanen", (req, res) => {
    const sql = "SELECT * FROM hasil_panen";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.status(200).json(data);
    });
});

// Add new hasil panen data
app.post('/hasilpanen', (req, res) => {
    const newOperasional = req.body;
    const sql = 'INSERT INTO hasil_panen SET ?';
    db.query(sql, newOperasional, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

  // Update hasil panen data
app.put('/hasilpanen/:id', (req, res) => {
    const { id } = req.params;
    const updatedOperasional = req.body;
    const sql = `UPDATE hasil_panen SET ? WHERE id = ${id}`;
    db.query(sql, updatedOperasional, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Delete hasilpanen data
app.delete('/hasilpanen/:id', (req, res) => {
    const { id } = req.params;
    const sqlDelete = `DELETE FROM hasil_panen WHERE id = ${id}`;
    db.query(sqlDelete, (err, result) => {
        if (err) throw err;

        // Check the number of remaining rows
        const sqlCount = 'SELECT COUNT(*) AS count FROM hasil_panen';
        db.query(sqlCount, (err, countResult) => {
            if (err) throw err;

            const count = countResult[0].count;
            if (count === 1) {
                const sqlSelectLast = 'SELECT id FROM hasil_panen LIMIT 1';
                db.query(sqlSelectLast, (err, selectResult) => {
                    if (err) throw err;

                    const lastId = selectResult[0].id;

                    const sqlResetAutoIncrement = 'ALTER TABLE hasil_panen AUTO_INCREMENT = 1';
                    db.query(sqlResetAutoIncrement, (err, alterResult) => {
                        if (err) throw err;

                        const sqlUpdateId = 'UPDATE hasil_panen SET id = 1 WHERE id = ?';
                        db.query(sqlUpdateId, [lastId], (err, updateResult) => {
                            if (err) throw err;

                            res.send('ID reset to 1 as only one data left in the table');
                        });
                    });
                });
            } else {
                res.send('Data deleted');
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
