var data = require("../public/data.json");
exports.view = function(req, res){
    console.log(data);
    for (var i = 0; i < data["user"].length; i++) {
        if(username == data["user"][i].username){
            var goal = data["user"][i].goal;
            var saving = data["user"][i].saving;
            var amountNeeded = (parseInt(data["user"][i].goal)- parseInt(data["user"][i].saving)).toString()
             data["user"][i].needs = amountNeeded;
            var needs = data["user"][i].needs;
            res.render('index', {"username": username, "goal": goal, "saving": saving, "needs": needs })
        }
    }
};

