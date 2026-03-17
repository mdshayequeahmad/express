const express = require('express');
const app = express();

const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

app.listen(4000, () => {
    console.log('Server is up and running on port 4000.');
});