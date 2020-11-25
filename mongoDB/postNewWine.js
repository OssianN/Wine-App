const WineDataBase = require('./schema');

const postNewWine = data => {
  const { title, country, year, shelf, row } = data;
  const wine = new WineDataBase({
    title,
    country,
    year,
    shelf,
    row
  })
  wine.save();
}

module.exports.postNewWine = postNewWine;