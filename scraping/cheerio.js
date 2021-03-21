const cheerio = require('cheerio');
const fetch = require('node-fetch');

const getVivinoData = async title => {
  if (!title) return 'no image';

  const searchTitle = title.split(' ').join('+');
  const cleanSearchTitle = searchTitle.normalize('NFD').replace(/[\u0300-\u036f’]/g, "");

  const vivinoSite = await fetch(`https://www.vivino.com/search/wines?q=${cleanSearchTitle}`);
  const body = await vivinoSite.text();
  const html = cheerio.load(body);

  const imgElement = html('.wine-card__image');
  const firstImg = imgElement?.[0];
  const attribute = firstImg?.attribs?.style;
  const imgURL = attribute?.match(/\/\/.*(?=\))/);

  const ratingElement = html('.average__number');
  const rating = ratingElement?.[0]?.children?.[0]?.data;

  return imgURL || rating ? [imgURL?.[0], rating] : 'no image';
}

module.exports.getVivinoData = getVivinoData;