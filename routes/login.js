var data = require("../data.json");

exports.view = function(req, res){
    var usrname = req.query.username;
    var password = req.query.password;
    var flag = 0;
    
    console.log("usrname is: " + usrname);
    if (usrname != undefined){
        for (var i = 0; i < data["user"].length; i++) {
            console.log("username at " + i + " is: " +data["user"][i].username );
            if(usrname == data["user"][i].username){
                flag = 1;
                if(password == data["user"][i].password){
                    res.render('index', data["user"][i]);
                    return;
                }
            }
        }

        if(flag == 0){
            res.render('login',{'noSuchUser' : '*User Does Not Exist!'});
        }else if(flag == 1){
            res.render('login', {'wrongPassword' : '*Wrong Password!'});
        }
    }
    else
        res.render('login');
};