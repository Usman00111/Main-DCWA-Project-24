//this imports mongodb 
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";// this is a default mongodb URL also called connection string for local database
const dbName = "proj2024MongoDB";

let db;
//connect to mongodb if connected it assigns database to the proj2024 if not shows error 
MongoClient.connect(url, { useUnifiedTopology: true })
    .then((client) => {
        db = client.db(dbName);
    })
    .catch((err) => console.log("MongoDB connection error:", err));

    //func to get all lecturers data from collection and its sorts them by asc by id 
const getLecturers = () => {
    return db.collection('lecturers').find().sort({_id: 1 }).toArray();
};

module.exports = {getLecturers };