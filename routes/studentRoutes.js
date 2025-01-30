const express = require('express');
const router = express.Router();
const db = require('../models/mysqlDao');

//get all students renderis students,ejs 
router.get('/students', (req, res) => {
    db.getStudents()
    .then((students) => res.render('students', {students}))
    .catch((err) => res.send(err));
});

//get add student page render addstudent.ejs 
router.get('/students/add', (req, res) => {
    res.render('addStudent');
});

//post add student to mysql 
router.post('/students/add', (req, res) => {
    const { sid, name, age } = req.body;
    db.addStudent(sid, name, age)
        .then(() => res.redirect('/students'))
        .catch((err) => res.send("Error: Student ID already exists!"));
});



module.exports = router;