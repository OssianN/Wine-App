const WineDataBase = require('../mongoDB/wine-schema');
const { getVivinoData } = require('../scraping/cheerio');

const postNewWine = async data => {
  const { title, country, year, shelf, row } = data;
  const [img, rating, vivinoUrl] = await getVivinoData(title);
  const wine = new WineDataBase({
    title,
    country,
    year,
    shelf,
    row,
    img,
    rating,
    vivinoUrl,
  })
  const response = await wine.save();
  return response;
}

module.exports.postNewWine = postNewWine;