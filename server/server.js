const express = require('express');
const app = express();
const cors = require('cors');
const wine = require('./routes/routes');
const mongoose = require('mongoose');
require('dotenv').config();

const dbName = 'WineDB';
const pswd = 'S7uEAKEI3gQaut7g';
console.log(process.env.PASSWORD)
const uri = `mongodb://ossian:${pswd}@winedb-shard-00-00.a5qld.mongodb.net:27017,winedb-shard-00-01.a5qld.mongodb.net:27017,winedb-shard-00-02.a5qld.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-13pr7v-shard-0&authSource=admin&retryWrites=true&w=majority`;
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
app.use('/', wine);

app.listen(port, () => console.log(`test-api is running on port ${port}`));
