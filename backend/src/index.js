require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = parseInt(process.env.PORT);
const userRouter = require('./routes/userRouter');
const venueRouter = require('./routes/venueRouter');

app.use(
    cors({
        origin: "*",
        credentials: true
    })
);

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
app.use(venueRouter);

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});
