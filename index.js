const express = require('express'),
  app = express();

app.set('views', __dirname + '/pages');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/pages/static'));

app.get('/', async(req, res) => {
  res.render('index')
})

app.listen('8080')