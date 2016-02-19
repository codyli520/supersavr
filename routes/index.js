var data = require("../public/data.json");
exports.view = function(req, res){
   /* for (var i = 0; i < data["user"].length; i++) {
        if(username == data["user"][i].username){
            var amountNeeded = (parseInt(data["user"][i].goal)- parseInt(data["user"][i].saving)).toString()
                    data["user"][i].needs = amountNeeded;
                    res.render('index', data["user"][i]);
                    console.log(data);
                    username = data["user"][i]["username"];
                    password = data["user"][i]["password"];
                    goal = data["user"][i]["goal"];
                    saving = data["user"][i]["saving"];
                    needs = (parseInt(goal) - parseInt(saving)).toString();
                    console.log("Need " + amountNeeded);
                    return;
        }
    }*/
    console.log(data);
    for (var i = 0; i < data["user"].length; i++) {
        if(username == data["user"][i].username){
            var goal = data["user"][i].goal;
            var saving = data["user"][i].saving;
            var needs = data["user"][i].needs;
            res.render('index', {"username": username, "goal": goal, "saving": saving, "needs": needs })
        }
    }
};

