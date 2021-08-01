const WineDataBase = require('../mongoDB/wine-schema')
const { getVivinoData } = require('../scraping/cheerio')

const updateWine = async data => {
  const { title, year, price, comment, _id } = data
  const [img, rating, country, vivinoUrl] = await getVivinoData(title, year)
  const response = await WineDataBase.findOneAndUpdate(
    {
      _id,
    },
    {
      title,
      country,
      year,
      price,
      comment,
      img,
      rating,
      vivinoUrl,
    },
    {
      new: true,
    }
  )
  return response
}

module.exports.updateWine = updateWine
