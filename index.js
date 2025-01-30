//imports
const express = require('express');
const app = express();

//embeded javascript used to create web pages and basically tells the express that all view files have a .ejs extention. (in view folder )
app.set('view engine', 'ejs');

//this is a middleware used to handle form submissions basically a post req & it parses forms data so we can read it 
app.use(express.urlencoded({ extended: true }));

//defining http get rq for the home page (/) and res.render will render views/home.ejs file as the response 
app.get('/', (req, res) => {
    res.render('home');
});

//starts the the server on port 3004 witht he message 
app.listen(3004, () => console.log("Server running on port 3004"));