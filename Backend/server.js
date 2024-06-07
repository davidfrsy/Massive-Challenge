const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const salt = 10;
const app = express();
const port = 3001;

// Konfigurasi CORS
const corsOptions = {
    origin: 'http://localhost:5173', // Sesuaikan dengan asal front-end Anda
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Mengizinkan cookie
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aquacare'
});

// Login dan Register
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const sql = "SELECT * FROM user WHERE email = ?";
        db.query(sql, [email], async (err, data) => {
            if (err) {
                return res.status(500).json({ pesan: "Error", error: err });
            }
            if (data.length > 0) {
                const user = data[0];
                
                const passwordMatch = await bcrypt.compare(password.toString(), user.password);
                
                if (passwordMatch) {
                    const name = user.name;
                    const token = jwt.sign({ name }, "jwt-secret-key", { expiresIn: '1d' });
                    res.cookie('token', token, { httpOnly: true, secure: true }); // pastikan menggunakan httpOnly dan secure
                    return res.json({ Status: "Success", data: user });
                } else {
                    return res.status(401).json({ Error: "Password not matched" });
                }
            } else {
                return res.status(401).json({ pesan: "Fail" });
            }
        });
    } catch (error) {
        return res.status(500).json({ pesan: "Internal Server Error", error });
    }
});

app.post('/register', (req, res) => {
    const sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
    
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: "Error hashing password" });
        }
        
        const values = [
            req.body.name,
            req.body.email,
            hash
        ];
        
        db.query(sql, values, (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Error inserting data into server" });
            }
            return res.status(200).json({ Status: "Success" });
        });
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
    const sqlDelete = `DELETE FROM operasional WHERE id = ?`;

    db.query(sqlDelete, [id], (err) => {
        if (err) {
            res.status(500).send('Error deleting data');
            return;
        }
        res.send('Data deleted');
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
    const sqlDelete = `DELETE FROM hasil_panen WHERE id = ?`;

    db.query(sqlDelete, [id], (err) => {
        if (err) {
            res.status(500).send('Error deleting data');
            return;
        }
        res.send('Data deleted');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
