const mysql = require('mysql')

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "#571146Lang",
database:"CRUDDatabase" 
})

module.exports = db;