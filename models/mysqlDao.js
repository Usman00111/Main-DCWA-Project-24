//this imports promise-mysql 
const mysql = require('promise-mysql');

//this creates a pool of database connections and if successful it assigns the pool to th pool variable if not eror message is shown 
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

//func to get/fetch all students
const getStudents = () => {
    return pool.query('SELECT * FROM student ORDER BY sid');
};

//func to add a student 
const addStudent = (sid, name, age) => {
    return pool.query('INSERT INTO student (sid, name, age) VALUES (?, ?, ?)', [sid, name, age]);
};

//func to get grades 
const getGrades = () => {
    return pool.query(`
        SELECT student.name AS student_name, module.name AS module_name, grade.grade 
        FROM grade
        JOIN student ON grade.sid = student.sid
        JOIN module ON grade.mid = module.mid
        ORDER BY student.name, grade.grade ASC
    `);
};


module.exports = {getStudents, addStudent, getGrades };