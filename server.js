
// Dependencies
// =============================================================
var dotenv = require('dotenv');
var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require('nodemailer');
var path = require("path");
var validator = require('validator');//for contact form validation
// var email = require('./email.env')

//load environment variables
dotenv.config();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
// =============================================================

// permit access to public file
app.use(express.static('public'));

// homepage route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// redirect any route to homepage
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Email
// =============================================================

app.post("/contact", function(req, res) {

	var sender = req.body.email;
	var name = req.body.name;
	var message = req.body.message;

	console.log(sender);

	if (!validator.isEmpty(sender) && !validator.isEmpty(name) && !validator.isEmpty(message) && validator.isEmail(sender)){

		console.log("Email sent from: " + sender);

		var transporter = nodemailer.createTransport({
		  service: 'gmail',
		  auth: {
		    user: process.env.EMAIL_USER,
		    pass: process.env.EMAIL_PASS
		  }
		});

		var mailOptions = {
		  from: process.env.EMAIL_USER,
		  replyTo: sender,
		  to: 'vit@vitbenton.com',
		  subject: sender + " contacted you through VitBenton.com!",
		  text: message
		};

		transporter.sendMail(mailOptions, function(error, info){
		  if (error) {
		    console.log(error);
		  } else {
		    console.log('Email sent: ' + info.response);
		  }
		});

		res.send(true);

	} else {
		res.send(false);
	};

});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
