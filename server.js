// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require('nodemailer');
var path = require("path");

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

	if (!sender == '' || !name == '' || !message == ''){

		console.log("Email sent from: " + sender);

		var transporter = nodemailer.createTransport({
		  service: 'gmail',
		  auth: {
		    user: 'viteksk8alot@gmail.com',
		    pass: 'qgoxwhjjfuivgdxu'
		  }
		});

		var mailOptions = {
		  from: 'viteksk8alot@gmail.com',
		  to: 'vit@vitbenton.com',
		  subject: 'Sending Email using Node.js from: ' + sender,
		  text: message
		};

		transporter.sendMail(mailOptions, function(error, info){
		  if (error) {
		    console.log(error);
		  } else {
		    console.log('Email sent: ' + info.response);
		  }
		});

		res.redirect("/");

	};

});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
