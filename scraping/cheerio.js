const cheerio = require('cheerio');
const fetch = require('node-fetch');

const getImage = async title => {
  const searchTitle = title.split(' ').join('+')
  const cleanSearchTitle = searchTitle.normalize('NFD').replace(/[\u0300-\u036f’]/g, "");

  const vivinoSite = await fetch(`https://www.vivino.com/search/wines?q=${cleanSearchTitle}`);
  const body = await vivinoSite.text();
  const html = cheerio.load(body);

  const img = html('.wine-card__image')[0].attribs.style;
  const imgURL = img.match(/\/\/.*(?=\))/)

  return imgURL[0];
}

module.exports.getImage = getImage;