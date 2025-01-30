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

const getStudents = () => {
    return pool.query('SELECT * FROM student ORDER BY sid');
};

module.exports = {getStudents };