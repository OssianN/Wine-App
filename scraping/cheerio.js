const cheerio = require('cheerio');
const fetch = require('node-fetch');

const getImage = async title => {
  const searchTitle = title.split(' ').join('+')

  const vivinoSite = await fetch(`https://www.vivino.com/search/wines?q=${searchTitle}`);
  const body = await vivinoSite.text();
  const html = cheerio.load(body);

  const img = html('figure.wine-card__image')[0].attribs.style;
  const imgURL = img.match(/\/\/.*(?=\))/)

  console.log(searchTitle)
  return imgURL[0];
}

module.exports.getImage = getImage;