var user = require("../public/data.json");

exports.view = function(req, res){
    for (var i = 0; i < user["user"].length; i++) {
	   if(username == user["user"][i].username){
            
            if(req.query.newGoal != null){
                user["user"][i].goal = req.query.newGoal;
            }
           var goal = user["user"][i].goal; 
            res.render('editGoal', {"goal":goal});

        }
    }
};