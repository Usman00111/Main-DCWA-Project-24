const express = require('express');
const router = express.Router();
const db = require('../models/mongoDao');

//get all lecturer 
router.get('/lecturers', (req, res) => {
    db.getLecturers()
    .then((lecturers) => res.render('lecturers', {lecturers}))
    .catch((err) => res.send(err));
});

module.exports = router;