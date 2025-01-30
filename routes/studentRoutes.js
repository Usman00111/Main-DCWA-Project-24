const express = require('express');
const router = express.Router();
const db = require('../models/mysqlDao');

router.get('/students', (req, res) => {
    db.getStudents()
    .then((students) => res.render('students', {students}))
    .catch((err) => res.send(err));
});

module.exports = router;