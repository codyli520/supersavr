var data = require("../public/data.json");

exports.view = function(req, res){
    
    var input = req.query.inputAmount;

    for (var i = 0; i < data["user"].length; i++) {
        if(username == data["user"][i].username){
            var resultSaving = parseInt(data["user"][i].saving) + parseInt(input); 
            var resultNeeds = parseInt(data["user"][i].needs) - parseInt(input); 
            data["user"][i].saving = resultSaving;   
            data["user"][i].needs = resultNeeds;  
        }
    }    
    res.render('add');

};