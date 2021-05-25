const db = require("../../config/dbconfig")

const registerData = function(fetchData) {
    this.username = fetchData.username,
        this.password = fetchData.password;
}

registerData.enterData = function(data, result) {
    /*console.log(uname)
    console.log(encrypt)*/
    console.log(data);
    const sql = 'INSERT INTO login SET ?';

    db.query(sql, data, function(err, res) {
        if (err) {
            console.log("error while inserting into database");
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    })
}

module.exports = registerData;