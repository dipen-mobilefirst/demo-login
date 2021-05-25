const modellogin = require('../model/modellogin');
const bcrypt = require('bcrypt');



exports.renderloginpage = function(req, res) {
    res.render("loginpage", { SuccessMsg: req.flash('Success'), ErrorMsg: req.flash('Error') });
}

exports.login = async function(req, res) {
    let encrpyt = " "
    const uname = req.body.username
    const password = req.body.password
    console.log(uname);
    console.log(password);
    if (req.body == null) {
        req.flash("Error", 'Please enter Username and Password!!');
        res.redirect('/')
    }

    modellogin.selectData(uname, function(error, data) {
        if (data == null) {
            req.flash('Error', 'Invalid Username or Password!!');
            res.redirect('/');
        } else {
            console.log('result', data)

            const uname = data[0].username;
            const pwd = data[0].password;
            console.log(uname);
            console.log(pwd);

            bcrypt.compare(password, pwd).then((result => {
                console.log('result:', result);
                if (result) {
                    req.flash('Success', `Welcome ${data[0].username}!!`);
                    res.redirect('/home/' + data[0].user_id);
                } else {
                    req.flash('Error', 'Invalid Password!!')
                    res.redirect('/');
                }
            })).catch((err) => {
                //console.error(err);
                req.flash('Error', 'Invalid Password!!')
                res.redirect('/');
            })

        }

    })
}