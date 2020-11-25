const express = require('express');
const route = express.Router();
const path = require('path');
const { getData } = require('../mongoDB/getData');
const { postNewWine } = require('../mongoDB/postNewWine');
const { deleteWine } = require('../mongoDB/deleteWine');

route.get('/', async (req, res) => {
  try {
    const data = await getData();
    res.header('Access-Control-Allow-Origin', 'https://floating-bayou-70784.herokuapp.com/');
    res.status(200).send(JSON.stringify(data));
  } catch (err) {
    console.error(err, 'IN GET /WINES');
    res.status(500).send('IN GET /WINES');
  }
});

route.post('/', (req, res) => {
  try {
    postNewWine(req.body);
    res.header('Access-Control-Allow-Origin', 'https://floating-bayou-70784.herokuapp.com/');
    res.status(203).send();
  } catch (err) {
    console.error(err, 'IN POST /WINES');
    res.status(500).send(err, 'IN POST /WINES');
  }
});

route.delete('/', (req, res) => {
  try {
    deleteWine(req.body);
    res.header('Access-Control-Allow-Origin', 'https://floating-bayou-70784.herokuapp.com/');
    res.status(200).send();
  } catch (err) {
    console.error(err, 'IN DELETE /WINES');
    res.status(500).send(err, 'IN DELETE /WINES');
  }
});

route.use((req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = route;