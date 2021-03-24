const cheerio = require('cheerio');
const fetch = require('node-fetch');

const getHtmlFromTitle = (title) => {
  return new Promise(async ( resolve, reject ) => {
    try {
      const searchTitle = title.split(' ').join('+');
      const cleanSearchTitle = searchTitle.normalize('NFD').replace(/[\u0300-\u036f’]/g, "");
      const vivinoSite = await fetch(`https://www.vivino.com/search/wines?q=${cleanSearchTitle}`);
      const body = await vivinoSite.text();
      resolve(cheerio.load(body));
    } catch (err) {
      reject(err);
    }
  })
}

const getWineImg = html => {
  try {
    const imgElement = html('.wine-card__image');
    const firstImg = imgElement[0];
    const attribute = firstImg.attribs.style;
    return attribute?.match(/\/\/.*(?=\))/);
  } catch (err) {
    return null;
  }
}

const getWineRating = html => {
  try {
    const ratingElement = html('.average__number');
    return ratingElement[0].children[0].data;
  } catch (err) {
    return 'no rating found'
  }
}

const getWinePage = async html => {
  const winePage = html('.wine-card__image-wrapper')[0].children[0].next.attribs.href;
  const vivinoLinkSite = await fetch(`https://www.vivino.com${winePage}`);
  const body = await vivinoLinkSite.text();
  const wineHtml = cheerio.load(body);
  return wineHtml('link')[32].attribs.href;
}

const getVivinoData = async title => {
  try {
    const html = await getHtmlFromTitle(title);
    const imgURL = getWineImg(html);
    const rating = getWineRating(html);
    const vivinoUrl = await getWinePage(html);
  
    return [imgURL[0], rating, vivinoUrl];
  } catch (err) {
    return 'no data found';
  }
}

module.exports.getVivinoData = getVivinoData;