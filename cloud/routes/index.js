exports.index = function(req, res) {
  res.render('index');
}

exports.hello = function(req, res){
	res.send("Hello World");
}