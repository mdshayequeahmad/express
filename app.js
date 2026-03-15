const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Home Page');
});

app.get('/contact/:userId', (req, res) => {
    const id = req.params.userId;
    const name = req.query.name;
    const age = req.query.age;
    res.send(`Hello from contact Page for user ${id} - ${name}, ${age}`);
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}.`);
});