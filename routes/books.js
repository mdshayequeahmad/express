const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Fetching all books...');
    res.send('Here is the list of books!');
});

router.post('/', (req, res) => {
    const bookData = req.body;

    console.log('Received book data:', bookData);

    res.send('Book has been added!');
});

module.exports = router;