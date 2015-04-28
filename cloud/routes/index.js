var AV = require('avoscloud-sdk').AV;
AV.initialize("1d147hc7zd3oqe3it5azybqph50a3y5fp51f3l9gy14zkfsc", "sswde0nyktisz327n1b517rnuc5ju38lja5iphoow5aqr8ua");


exports.register = function(req, res, next){
	res.render('register');
}

exports.login = function(req, res, next){
	res.render('login');
}

exports.logout = function(req, res) {
    AV.User.logOut();
    res.redirect('/user/register');
}

exports.handleRegister = function(req, res, next){
	var username = req.param('username');
	var phone = req.param('phone');
	var email = req.param('email');
	var password = req.param('password');

	var user = new AV.User();
	user.set("username",username);
	user.set("phone",phone);
	user.set("email",email);
	user.set("password",password);


	user.signUp(null, {
		success: function(user) {
			res.redirect("/");
		},
		error: function(user, error) {
			console.log("User signUp Error: " + error.code + " " + error.message);
		}
	});
			
}

exports.handleLogin = function(req, res, next){
	var username = req.param('username');
	var password = req.param('password');
	AV.User.logIn(username, password).then(function(currentUser) {
      res.redirect('/');
      console.log(currentUser);
    },function(error) {
      console.log(error);
  });
}

exports.index = function(req, res) {
	var currentUser = AV.User.current();
    if(currentUser){
    	res.render('index', {currentUser: currentUser.attributes});
    }
    else{
    	res.render('index', {currentUser: null});
    }
}

exports.hello = function(req, res){
	res.send("Hello World");
}
