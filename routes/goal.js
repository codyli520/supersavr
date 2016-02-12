var data = require("../items.json");

exports.view = function(req, res){  
	res.render('goal', data);
};

exports.getItemDetail = function(req, res) {
	var itemID = req.params.id;
    itemID = parseInt(itemID);
  	var item = data['item'][itemID-1];
    console.log(item);// of by one, our first project has index 0
  	res.json(item);
}
        