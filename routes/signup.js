var data = require("../public/data.json");
exports.view = function(req, res){  
	// Your code goes here
    var newUser = {"username": req.query.username, "password": req.query.password, "goal": req.query.goal, "saving" : "0"}
    console.log("name is: " + newUser.username + " " + "password is: " + newUser.password + " goal is: " + newUser.goal);
    
	data["user"].push(newUser);
    console.log("data length is: " + data["user"].length);
    
    var usrname = req.query.username;
	res.render('signup', {'username' : usrname});
};