const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to add user
app.use((req, res, next) => {
    console.log('User middleware called!');
    req.user = "Guest";
    next();
});

// Middleware for /welcome route
app.use('/welcome', (req, res, next) => {
    console.log('Welcome route middleware');
    next();
});

// Route handler
app.get('/welcome', (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT} Ready to handle requests.`);
});