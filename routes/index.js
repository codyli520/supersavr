exports.view = function(req, res){
	res.render('index',{"username": username, "goal":goal,"saving":saving, "needs":needs});
};

