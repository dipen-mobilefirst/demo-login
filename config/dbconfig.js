const mysql = require('mysql');
//local mysql db connection
const dbconfig = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
});
dbconfig.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = dbconfig;