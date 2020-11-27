const express = require('express');
const app = express();
const cors = require('cors');
const wine = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.SECRET_KEY;
const db = process.env.MONGODB_URL;
const { connection } = mongoose;

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true } );

connection
  .once('open', () => {
    console.log('SUCCESS, connected to DB');
  })
  .on('error', err => console.log('Ooopsiwhoops, some sort of error', err));

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 
  'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if( req.method === 'OPTIONS'){
    req.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});
app.use(express.json());
app.use(express.static('client/build'));
app.use('/wines', wine);

const localPort = 5000;
app.listen(process.env.PORT || localPort, () => console.log(`test-api is running on port ${localPort}`));
