const express = require('express'); //imports express framwrk
const router = express.Router(); //creates new router instance 
const db = require('../models/mysqlDao'); //imports databse functions from mysqldao.js 

//get all grades func
router.get('/grades', (req, res) => { // http get req for grade page so when goes /grades this will excute 
    db.getGrades()
        .then((grades) => res.render('grades', {grades }))
        .catch ((err) => res.send(err));
});

module.exports = router;
