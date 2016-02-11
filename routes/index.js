var data2 = require("../data2.json");

exports.view = function(req, res){
    var usrname = req.query.username;
    var password = req.query.password;
    var flag = 0;
    
    console.log("usrname is: " + usrname);
    for (var i = 0; i < data2["user"].length; i++) {
        console.log("username at " + i + " is: " +data2["user"][i].username );
        if(usrname == data2["user"][i].username){
            flag = 1;
            if(password == data2["user"][i].password){
                res.render('index', data2["user"][i]);
                return;
            }
        }
    }
    if(flag == 0){
        res.render('login',{'noSuchUser' : '*User Does Not Exist!'});
    }else{
        res.render('login', {'wrongPassword' : '*Wrong Password!'});
    }
	
};
        