//imports express framework, creates new router instance and imports data from mongoDao
const express = require('express');
const router = express.Router();
const db = require('../models/mongoDao');

//get all lecturer 
router.get('/lecturers', (req, res) => { //when http get req is made this will excute when someone goes localhoast3004/lecturers
    db.getLecturers()
    .then((lecturers) => res.render('lecturers', {lecturers}))
    .catch((err) => res.send(err));
});

module.exports = router;