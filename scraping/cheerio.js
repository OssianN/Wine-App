const cheerio = require('cheerio');
const fetch = require('node-fetch');

const getImage = async title => {
  if (!title) return 'no image';

  const searchTitle = title.split(' ').join('+');
  const cleanSearchTitle = searchTitle.normalize('NFD').replace(/[\u0300-\u036f’]/g, "");

  const vivinoSite = await fetch(`https://www.vivino.com/search/wines?q=${cleanSearchTitle}`);
  const body = await vivinoSite.text();
  const html = cheerio.load(body);

  const element = html('.wine-card__image');
  const img = element ? element[0] : null;
  const attribute = img ? img.attribs.style : null;
  const imgURL = attribute ? attribute.match(/\/\/.*(?=\))/) : null;

  return imgURL ? imgURL[0] : 'no image';
}

module.exports.getImage = getImage;