var data = require("../public/data.json");

exports.view = function(req, res){

    for (var i = 0; i < data["user"].length; i++) {
        if(username == data["user"][i].username){
            if(req.query.newPassword != null)
                data["user"][i].password = req.query.newPassword;
            res.render('account', {"username": username});
        }
    }
};