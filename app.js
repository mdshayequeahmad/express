const express = require('express');
const app = express();
const orderRouter = require('./routes/orders');
const userRouter = require('./routes/users');

app.use('/orders', orderRouter);
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log(`Server is up and running on port 3000.`);
});