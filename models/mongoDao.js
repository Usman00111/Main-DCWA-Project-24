const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "proj2024MongoDB";

let db;
MongoClient.connect(url, { useUnifiedTopology: true })
    .then((client) => {
        db = client.db(dbName);
    })
    .catch((err) => console.log("MongoDB connection error:", err));

const getLecturers = () => {
    return db.collection('lecturers').find().sort({_id: 1 }).toArray();
};

module.exports = {getLecturers };