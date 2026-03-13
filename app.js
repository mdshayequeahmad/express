const express = require('express');
const app = express();
const PORT = 3000;

//Authentication middleware
app.use((req, res, next) => {
    console.log('Authentication middleware called!');
    next();
});

app.use('/library-2', (req, res, next) => {
    console.log('Book recomendation');
    next();
});

app.use('/library-3', (req, res, next) => {
    console.log('Special request to reserch paper from professor and seniors');
    next();
});

app.get('/library-2', (req, res) => {
    res.send('<h1>Library 2 Entered</h1>');
})

app.get('/library-3', (req, res) => {
    res.send('<h1>Library 3 Entered</h1>');
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT} Ready to handle requests.`);
});