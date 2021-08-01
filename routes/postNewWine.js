const WineDataBase = require('../mongoDB/wine-schema')
const { getVivinoData } = require('../scraping/cheerio')

const postNewWine = async data => {
  const { title, year, price, comment, shelf, column } = data
  const [img, rating, country, vivinoUrl] = await getVivinoData(title, year)
  const wine = new WineDataBase({
    title,
    country,
    year,
    price,
    comment,
    shelf,
    column,
    img,
    rating,
    vivinoUrl,
  })
  const response = await wine.save()
  return response
}

module.exports.postNewWine = postNewWine
