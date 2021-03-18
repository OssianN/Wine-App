const express = require('express');
const route = express.Router();
const path = require('path');
const { getData } = require('./getData');
const { postNewWine } = require('./postNewWine');
const { deleteWine } = require('./deleteWine');
const { updateWine } = require('./updateWine');

route.post('/getUserWines', async (req, res) => {
  const { wineList } = req.body;
  try {
    if (wineList) {
      const data = await getData(wineList);
      return res.status(200).send(JSON.stringify(data));
    }
    res.status(200).json([]);
  } catch (err) {
    console.error(err, 'IN GET /WINES');
    res.status(500).send('IN GET /WINES');
  }
});

route.post('/', async (req, res) => {
  try {
    const data = await postNewWine(req.body);
    res.status(203).send(JSON.stringify(data));
  } catch (err) {
    console.error(err, 'IN POST /WINES');
    res.status(500).send(err, 'IN POST /WINES');
  }
});

route.put('/', async (req, res) => {
  try {
    const data = await updateWine(req.body);
    res.status(200).json(data);
  } catch (err) {
    console.error(err, 'IN PUT /WINES');
    res.status(500).send(err, 'IN PUT /WINES');
  }
});

route.delete('/', (req, res) => {
  try {
    deleteWine(req.body);
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