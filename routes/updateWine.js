const WineDataBase = require('../mongoDB/wine-schema');
const { getImage } = require('../scraping/cheerio');

const updateWine = async data => {
  const { title, country, year, _id } = data;
  const img = await getImage(title);
  const response = await WineDataBase.findOneAndUpdate(
    {
      _id,
    },
    {
      title, country, year, img,
    },
    {
      new: true,
    }
  );
  return response;
};

module.exports.updateWine = updateWine;
