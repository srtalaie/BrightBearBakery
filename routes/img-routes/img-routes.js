const path = require('path');

module.exports = function(app){
    
    app.get('/images/hero-img', function(req, res){
        res.sendFile(path.join(__dirname, "../../public/assets/images/hero-img.png"));
    });

    app.get('/images/facebook-icon-img', function(req, res){
        res.sendFile(path.join(__dirname, "../../public/assets/images/icons/facebook-icon.png"));
    });

    app.get('/images/instagram-icon-img', function(req, res){
        res.sendFile(path.join(__dirname, "../../public/assets/images/icons/instagram-icon.png"));
    });

    app.get('/images/yelp-icon-img', function(req, res){
        res.sendFile(path.join(__dirname, "../../public/assets/images/icons/yelp-icon.png"));
    });
}