const fs = require('fs');
const express = require('express');
const route = express.Router();
const { getData } = require('../mongoDB/getData');
const { postNewWine } = require('../mongoDB/postNewWine');
const { deleteWine } = require('../mongoDB/deleteWine');

const readData = () => {
  return fs.readFileSync('./data.json', (err, data) => {
    if (err) console.error(err, 'error in read');
    if (!data) return false;
    return data;
  });
};

const writeData = data => {
  return fs.writeFile('./data.json', data, err => {
    if (err) console.error(err, 'error in post');
    return data;
  });
}

route.get('/', (req, res) => {
  try {
    res.send(JSON.stringify('This is the wine we whine about'));
  } catch (err) {
    console.error(err, 'IN GET ROOT');
    res.send(err, 'IN GET ROOT');
  }
});

route.get('/wines', async (req, res) => {
  try {
    const data = await getData();
    res.status(200).send(JSON.stringify(data));
  } catch (err) {
    console.error(err, 'IN GET /WINES');
    res.status(500).send('IN GET /WINES');
  }
});

route.post('/wines', (req, res) => {
  try {
    postNewWine(req.body);
    res.status(203).send();
  } catch (err) {
    console.error(err, 'IN POST /WINES');
    res.status(500).send(err, 'IN POST /WINES');
  }
});

route.delete('/wines', (req, res) => {
  try {
    deleteWine(req.body);
    res.status(200).send();
  } catch (err) {
    console.error(err, 'IN DELETE /WINES');
    res.status(500).send(err, 'IN DELETE /WINES');
  }
});

module.exports = route;