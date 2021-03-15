const WineDataBase = require('./schema');
const { getImage } = require('../scraping/cheerio');

const postNewWine = async data => {
  const { title, country, year, shelf, row } = data;
  const img = await getImage(title);
  const wine = new WineDataBase({
    title,
    country,
    year,
    shelf,
    row,
    img,
  })
  wine.save();
}

module.exports.postNewWine = postNewWine;