var AV = require('avoscloud-sdk').AV;
AV.initialize("1d147hc7zd3oqe3it5azybqph50a3y5fp51f3l9gy14zkfsc", "sswde0nyktisz327n1b517rnuc5ju38lja5iphoow5aqr8ua");
var TestObject = AV.Object.extend("TestObject");

exports.register = function(req, res, next){
	var testObject = new TestObject();
	testObject.save({foo: "bar"}, {
		success: function(object) {
			console.log("SUCCESS!");
		}
	});
}

exports.index = function(req, res) {
  res.render('index');
}

exports.hello = function(req, res){
	res.send("Hello World");
}
