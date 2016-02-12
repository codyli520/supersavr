exports.view = function(req, res){
	res.render('add',{"username": username, "goal":goal,"saving":saving, "needs":needs});
};

