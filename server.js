// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require('nodemailer');

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

// Basic route that sends the user first to the AJAX Page
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Email
// =============================================================

var transporter = nodemailer.createTransport({
  service: 'Godaddy',
  auth: {
    user: 'vit@vitbenton.com',
    pass: 'sevon1982'
  }
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
