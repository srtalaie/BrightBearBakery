//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
const secret = process.env.INSTAGRAM_SECRET;

//Middleware for data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes for Pages
app.get('/insta-collage', function(req, res){
    request(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}&count=20AppSecret:${secret}`, function(error, response, body){
        if(error){throw error};

        res.send(JSON.parse(body));
    });
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get('/styles', function(req, res){
    res.sendFile(path.join(__dirname, "./public/assets/css/style.css"));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get('/menu', function(req, res){
    res.sendFile(path.join(__dirname, "./public/menu.html"));
});

app.get('/app', function(req, res){
    res.sendFile(path.join(__dirname, "./app.js"));
});

app.get('/bundle', function(req, res){
    res.sendFile(path.join(__dirname, "./bundle.js"));
});

require("./routes/img-routes/img-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });