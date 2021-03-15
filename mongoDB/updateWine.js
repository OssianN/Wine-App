const WineDataBase = require('./schema');
const { getImage } = require('../scraping/cheerio');

const updateWine = async data => {
  const { title, country, year, shelf, row } = data;
  const img = await getImage(title);
  await WineDataBase.findOneAndUpdate(
    {
      shelf, row
    },
    {
      title, country, year, img
    }
  );
};

module.exports.updateWine = updateWine;
//Du kan nu uppdatera kort genom att klicka på dem. Formuläret är alltid i mitten istället för högs upp. Lite allmänna förbättringar.