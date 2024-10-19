const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { connection } = require('./config/database');

const app = express();
const { PORT }  = process.env;

app.use(cors());

connection
    .then(() => {
        console.log('Database Connected!');
    })
    .catch(err => {
        console.log('Error Happened: ', err);
    })

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./routes/route'));

app.listen(PORT, () => {
    console.log(`App running at http://127.0.0.1:${PORT}`);
});
