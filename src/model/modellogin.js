const db = require('../../config/dbconfig')

const loginData = function(fetchData) {
    this.user_id = fetchData.user_id,
        this.username = fetchData.username,
        this.password = fetchData.password;
}

loginData.selectData = function(data, result) {
    console.log(data)
        //console.log(encrypt)

    let sql = 'SELECT * FROM login WHERE username = ?'
    db.query(sql, data, (err, res) => {
        console.log(res.length);
        if (res.length == 0) {
            result(err, null);
        } else {
            if (err) {
                console.log("Error while fetching the values from database")
                result(err, null)
            } else {
                console.log(res)
                result(null, res)
            }

        }

    })
}

loginData.fetchUser = function(id, result) {
    console.log("id:", id);

    let sql = "select * from login where user_id = ?";
    db.query(sql, id, (err, res) => {
        if (res.length == 0) {
            console.log("error while fetching dtails of user:", err)
            result(err, null);
        } else {
            console.log("user details are:", res);
            result(null, res);
        }
    })
}


module.exports = loginData