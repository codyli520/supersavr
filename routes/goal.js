var data = require("../items.json");

exports.view = function(req, res){  
    data.goal= goal;
    data.saving=saving;
    data.percentage = (parseInt(saving)*100/parseInt(goal)).toString();
    //user_json.concat(data); 
    console.log(data);
	res.render('goal', data );
};

exports.getItemDetail = function(req, res) {
	var itemID = req.params.id;
    itemID = parseInt(itemID);
  	var item = data['item'][itemID-1];
    console.log(item);// of by one, our first project has index 0
  	res.json(item);
}
        