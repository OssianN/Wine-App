const express = require('express');
const app = express();
const cors = require('cors');
const wine = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.SECRET_KEY;
const { connection } = mongoose;

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true } );

connection
  .once('open', () => {
    console.log('SUCCESS, connected to DB');
})
  .on('error', err => console.log('Ooopsiwhoops, some sort of error', err));

const port = 5000;
app.use(express.json());
app.use(cors());
app.use(express.static('client/build'));

app.use('/', wine);

app.listen(port, () => console.log(`test-api is running on port ${port}`));
