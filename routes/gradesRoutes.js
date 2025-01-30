const express = require('express');
const router = express.Router();
const db = require('../models/mysqlDao');

//get all grades func
router.get('/grades', (req, res) => {
    db.getGrades()
        .then((grades) => res.render('grades', {grades }))
        .catch ((err) => res.send(err));
});

module.exports = router;
