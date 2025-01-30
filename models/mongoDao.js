const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";// this is a default mongodb URL 
const dbName = "proj2024MongoDB";

let db;
//connect to mongodb
MongoClient.connect(url, { useUnifiedTopology: true })
    .then((client) => {
        db = client.db(dbName);
    })
    .catch((err) => console.log("MongoDB connection error:", err));

    //func to get all lecturers
const getLecturers = () => {
    return db.collection('lecturers').find().sort({_id: 1 }).toArray();
};

module.exports = {getLecturers };