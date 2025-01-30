const mysql = require('promise-mysql');

let pool;
mysql.createPool({
    connectionLimit: 3,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'proj2024mysql'
}).then((p) => {
    pool = p;
}).catch((e) => {
    console.log("DB Connection Error: " + e);
});

//func to get all students
const getStudents = () => {
    return pool.query('SELECT * FROM student ORDER BY sid');
};

//func to add a student 
const addStudent = (sid, name, age) => {
    return pool.query('INSERT INTO student (sid, name, age) VALUES (?, ?, ?)', [sid, name, age]);
};


module.exports = {getStudents, addStudent };