const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = 1551;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student'
});

// GET route to fetch all employees
app.get('/employee', (req, res) => {
    db.query('SELECT * FROM stud', (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
});

// POST route to add a new employee
app.post('/employee', (req, res) => {
    const { Name, Mail, Address } = req.body;
    const query = 'INSERT INTO `stud`(`Name`, `Mail`, `Address`) VALUES (?, ?, ?)';
    db.query(query, [Name, Mail, Address], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send('Successfully added');
        }
    });
});

// PUT route to update an existing employee by ID
app.put('/employee/:id', (req, res) => {
    const { id } = req.params;
    const { Name, Mail, Address } = req.body;
    const query = 'UPDATE `stud` SET `Name` = ?, `Mail` = ?, `Address` = ? WHERE `id` = ?';
    db.query(query, [Name, Mail, Address, id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Successfully updated');
        }
    });
});

// DELETE route to delete an employee by ID
app.delete('/employee/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM `stud` WHERE `Id` = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Successfully deleted');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
