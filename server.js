
// Dependencies
// =============================================================
const dotenv = require('dotenv');
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const path = require("path");
const validator = require('validator');//for contact form validation
// var email = require('./email.env')

//load environment variables
dotenv.config();

// Sets up the Express App
// =============================================================
const app = express();
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
// =============================================================

// permit access to public file
app.use(express.static(path.join(__dirname, '/public')));

// homepage route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// redirect any route to homepage
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Email
// =============================================================

app.post("/contact", (req, res) => {

	let sender = req.body.email;
	let name = req.body.name;
	let message = req.body.message;

	console.log(sender);

	if (!validator.isEmpty(sender) && !validator.isEmpty(name) && !validator.isEmpty(message) && validator.isEmail(sender)) {

		console.log(`Email sent from: ${sender}`);

		const transporter = nodemailer.createTransport({
		  service: process.env.EMAIL_SER,
		  auth: {
		    user: process.env.EMAIL_USER,
		    pass: process.env.EMAIL_PASS
		  }
		});

		const mailOptions = {
		  from: process.env.EMAIL_USER,
		  replyTo: sender,
		  to: process.env.EMAIL_REC,
		  subject: `${sender} contacted you through VitBenton.com!`,
		  text: message
		};

		transporter.sendMail(mailOptions, (error, info) => {
		  if (error) {
		    console.log(error);
		  } else {
		    console.log(`Email sent: ${info.response}`);
		  }
		});

		res.send(true);

	} else {
		res.send(false);
	};

});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
