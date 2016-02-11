var data2 = require("../data2.json");
exports.view = function(req, res){  
	// Your code goes here
    var newUser = {"username": req.query.username, "password": req.query.password, "goal": req.query.goal}
    console.log("name is: " + newUser.username + " " + "password is: " + newUser.password + " goal is: " + newUser.goal);
    
	data2["user"].push(newUser);
    console.log("data length is: " + data2["user"].length);
    
    var usrname = req.query.username;
	res.render('signup', {'username' : usrname});
};