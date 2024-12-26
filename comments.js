// Create web server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use static files
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Data
const comments = [
  { username: 'Tom', comment: 'I am Tom' },
  { username: 'Jerry', comment: 'I am Jerry' }
];

// Get comments
app.get('/comments', (req, res) => {
  res.render('comments', { comments });
});

// Post comments
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect('/comments');
});

// Start web server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});