const db = require('../../config/dbconfig')

const removeuser = function(fetchData) {
    this.user_id = fetchData.user_id,
        this.username = fetchData.username,
        this.password = fetchData.password;
}

removeuser.deleteuser = function(id, result) {
    console.log(id);
    let sql = 'delete from login where user_id = ?';
    db.query(sql, id, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null)
        } else {
            console.log(res);
            result(null, res);
        }
    })
}

module.exports = removeuser;