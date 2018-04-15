// Dependencies
// =============================================================
const dotenv = require('dotenv');
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const path = require("path");
const validator = require('validator'); //for contact form validation
const compression = require('compression');

//load environment variables
dotenv.config();

// Sets up the Express App
// =============================================================
const app = express();
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// permit access to public file
app.use(express.static(path.join(__dirname, '/public'), {maxage: '1y'}));

// Routes
// =============================================================

// homepage route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// redirect any route to homepage
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//handle Googles robots
app.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: /");
});

//handle sitemap request
app.get('/sitemap.xml', function (req, res) {
    res.sendFile(path.join(__dirname, "public/sitemap.xml"));
});

// Email
// =============================================================

app.post("/contact", (req, res) => {

  let replyTo = req.body.email;
  let name = req.body.name;
  let text = req.body.message;
  let subject = `${name} @ ${replyTo} contacted you through VitBenton.com!`;

  if (!validator.isEmpty(replyTo) && !validator.isEmpty(name) && !validator.isEmpty(text) && validator.isEmail(replyTo)) {

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SER,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo,
      to: process.env.EMAIL_REC,
      subject,
      text
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
