//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

//Middleware for data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes for Pages
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
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

require("./routes/img-routes/img-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });