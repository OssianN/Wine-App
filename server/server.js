const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const cors = require('cors');
const port = 5000;
const fs = require('fs');
const { parse } = require('path');

app.use(express.json());
app.use(cors());
app.use(fileUpload());

app.get('/', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*'
  });
  res.send(JSON.stringify('This is the wine we whine about'));
});


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

app.get('/wines', async (req, res) => {
  const data = readData();
  const parsedData = JSON.parse(data);
  res.send(JSON.stringify(parsedData));
});

app.post('/wines', (req, res) => {
  const data = readData();
  const parsedData = JSON.parse(data);
  const wineArr = parsedData.wineArr;
  wineArr.push(req.body);
  const finishedJson = { "wineArr": wineArr };
  const jsonWine = JSON.stringify(finishedJson);
  writeData(jsonWine);
  res.status(203).send();
});

// app.delete('/wines', (req, res) => {
//   const data = readData();
//   const parsedData = JSON.parse(data);
//   const wineArr = parsedData.wineArr;
//   wineArr.forEach(wine => )
//   const finishedJson = { "wineArr": wineArr };
//   const jsonWine = JSON.stringify(finishedJson);
//   writeData(jsonWine);
//   // res.status(203).send();
// });

app.listen(port, () => console.log(`test-api is running on port ${port}`));
