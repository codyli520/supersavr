var data = require("../public/data.json");
exports.view = function(req, res){
    console.log(data);
    for (var i = 0; i < data["user"].length; i++) {
        if(username == data["user"][i].username){
            
            if(req.query.newGoal != null){
                data["user"][i].goal = req.query.newGoal;
                data["user"][i].saving = 0;
            }
            
            var goal = data["user"][i].goal;
            var saving = data["user"][i].saving;
            var amountNeeded = (parseInt(data["user"][i].goal)- parseInt(data["user"][i].saving)).toString()
            if(parseInt(amountNeeded) < 0)
                data["user"][i].needs = 0
            else
                data["user"][i].needs = amountNeeded;
            var needs = data["user"][i].needs;
            
            if(parseInt(needs) == 0)
                res.render('indexNewGoal', {"username": username, "goal": goal, "saving": saving, "needs": needs })
            else
                res.render('index', {"username": username, "goal": goal, "saving": saving, "needs": needs})
        }
    }
};

