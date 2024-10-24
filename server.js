const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Set View Engine
app.set('view engine', 'ejs');

// Facebook Authentication
passport.use(new FacebookStrategy({
  clientID: 'YOUR_APP_ID',
  clientSecret: 'YOUR_APP_SECRET',
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function (accessToken, refreshToken, profile, done) {
  // Here you would save the profile information to a database if needed
  return done(null, profile);
}));

// Initialize Passport
app.use(passport.initialize());

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication
    res.redirect('/');
  }
);

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
