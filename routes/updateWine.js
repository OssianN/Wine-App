const WineDataBase = require('../mongoDB/wine-schema');
const { getVivinoData } = require('../scraping/cheerio');

const updateWine = async data => {
  const { title, country, year, _id } = data;
  const [img, rating] = await getVivinoData(title);
  const response = await WineDataBase.findOneAndUpdate(
    {
      _id,
    },
    {
      title, country, year, img, rating,
    },
    {
      new: true,
    }
  );
  return response;
};

module.exports.updateWine = updateWine;
