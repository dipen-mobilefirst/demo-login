const modelregister = require('../model/modelregister');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.userRegister = function(req, res) {
    res.render("register", { SuccessMsg: req.flash('Success'), ErrorMsg: req.flash('Error'), title: 'compregister' });
}

exports.registervalue = async function(req, res) {
    value = req.body;

    if (value != null) {
        const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = encryptedPassword;
        const data = new modelregister(value);
        data.password = encryptedPassword;
        console.log(data);
        modelregister.enterData(data, function(err, result) {
            console.log(result);
            if (result.error) {
                req.flash('Error', 'Something went wrong while adding user!');
                res.redirect('/register');
            } else {
                req.flash('Success', 'User added successfully!');
                res.redirect('/');
            }
        });
    }

}