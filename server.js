const express = require('express');
const app = express();
const wine = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();

const db = process.env.MONGODB_URL;
const { connection } = mongoose;

mongoose.connect(process.env.SECRET_KEY, { useUnifiedTopology: true, useNewUrlParser: true } );
connection
  .once('open', () => console.log('SUCCESS, connected to DB'))
  .on('error', err => console.log('Ooopsiwhoops, some sort of error', err));

app.use(express.json());
app.use(express.static('client/build'));
app.use('/wines', wine);

const localPort = 5000;
app.listen(process.env.PORT || localPort, () => console.log(`test-api is running on port ${localPort}`));
