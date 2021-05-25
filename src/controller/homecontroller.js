var fetchdata = require('../model/modellogin');
var deleteuser = require('../model/modeldeleteuser');

exports.home = function(req, res) {
    var userid = req.params.user_id;
    console.log("fetching id from url:", userid);


    fetchdata.fetchUser(userid, function(error, result) {
        if (result.error) {
            console.log(error);
            req.flash("Error", 'error while fetching data!!');
            res.redirect("/");
        } else {
            res.render('home', { SuccessMsg: req.flash('Success'), ErrorMsg: req.flash('Error'), data: result });
        }
    })
}

exports.deleteUser = function(req, res) {
    var userid = req.params.user_id;
    console.log("userid:", userid);

    deleteuser.deleteuser(userid, function(err, result) {
        if (result.err) {
            console.log(err);
            req.flash("Error", 'Error while deleting');
            res.redirect('/home/' + userid);

        } else {
            req.flash("Success", 'Successfully user deleted!!');
            res.redirect('/');
        }
    })


}