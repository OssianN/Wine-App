const WineDataBase = require('../mongoDB/wine-schema');
const { getVivinoData } = require('../scraping/cheerio');

const postNewWine = async data => {
  const { title, year, shelf, column } = data;
  const [img, rating, country, vivinoPrice, vivinoUrl] = await getVivinoData(title, year);
  const usePrice = data.price || vivinoPrice;
  const wine = new WineDataBase({
    title,
    country,
    year,
    shelf,
    column,
    img,
    rating,
    price: usePrice,
    vivinoUrl,
  })
  const response = await wine.save();
  return response;
}

module.exports.postNewWine = postNewWine;