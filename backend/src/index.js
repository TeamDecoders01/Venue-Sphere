require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = parseInt(process.env.PORT);
const userRouter = require('./routes/userRouter');




app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connection is established');
    })
    .catch((err) => {
        console.log('Error connecting to the Database', err.message);
    });

app.use(express.json());

app.use('/auth', userRouter);


app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});
