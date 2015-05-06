var AV = require('avoscloud-sdk').AV;
AV.initialize("1d147hc7zd3oqe3it5azybqph50a3y5fp51f3l9gy14zkfsc", "sswde0nyktisz327n1b517rnuc5ju38lja5iphoow5aqr8ua");


exports.register = function(req, res, next){
	var currentUser = AV.User.current();
	if(currentUser !== null){
		res.render('register', {currentUser: currentUser.attributes});
	}
	else{
		res.render('register', {currentUser: null});
	}
}

exports.login = function(req, res, next){
	var currentUser = AV.User.current();
	if(currentUser !== null){
		res.render('login', {currentUser: currentUser.attributes});
	}
	else{
		res.render('login', {currentUser: null});
	}
}

exports.logout = function(req, res) {
    AV.User.logOut();
    res.redirect('/user/login');
}

exports.userinfo = function(req, res) {
	var currentUser = AV.User.current();
	if(currentUser !== null){
		res.render('userinfo', {currentUser: currentUser.attributes});
	}
	else{
		res.render('userinfo', {currentUser: null});
	}
}

exports.userwrite = function(req, res) {
	var currentUser = AV.User.current();
	if(currentUser !== null){
		res.render('userwrite', {currentUser: currentUser.attributes});
	}
	else{
		res.render('userwrite', {currentUser: null});
	}
}


//post
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
			res.redirect("/user/login");
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
	if(currentUser !== null){
		res.render('index', {currentUser: currentUser.attributes});
	}
	else{
		res.render('index', {currentUser: null});
	}
    
}

exports.hello = function(req, res){
	res.send("Hello World");
}
