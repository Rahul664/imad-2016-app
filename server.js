var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/font-awesome.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'font-awesome.css'));
});

app.get('/ui/font-awesome.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'font-awesome.min.css'));
});

app.get('/ui/pstyle.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pstyle.css'));
});


app.get('/ui/reset.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'reset.css'));
});


app.get('/ui/review.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'review.css'));
});


app.get('/ui/app.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'app.html'));
});


app.get('/ui/eshop.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'eshop.html'));
});

app.get('/ui/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});

app.get('/ui/music.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'music.html'));
});

app.get('/ui/profile.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});

app.get('/ui/video.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'video.html'));
});

app.get('/ui/1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.jpg'));
});

app.get('/ui/2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2.jpg'));
});


app.get('/ui/banner.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'banner.jpg'));
});

app.get('/ui/games.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'games.png'));
});

app.get('/ui/appban.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'appban.jpg'));
});

app.get('/ui/eshopban.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'eshopban.png'));
});

app.get('/ui/favicon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'favicon.png'));
});

app.get('/ui/music.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'music.png'));
});

app.get('/ui/musicban.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'musicban.jpg'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
