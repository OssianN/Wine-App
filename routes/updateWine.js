const WineDataBase = require('../mongoDB/wine-schema');
const { getVivinoData } = require('../scraping/cheerio');

const updateWine = async data => {
  const { title, year, _id } = data;
  const [img, rating, country, vivinoPrice, vivinoUrl] = await getVivinoData(title, year);
  const usePrice = data.price || vivinoPrice;
  console.log(usePrice)
  const response = await WineDataBase.findOneAndUpdate(
    {
      _id,
    },
    {
      title, country, year, price: usePrice, img, rating, vivinoUrl,
    },
    {
      new: true,
    }
  );
  return response;
};

module.exports.updateWine = updateWine;
