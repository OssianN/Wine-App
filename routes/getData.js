const WineDataBase = require('../mongoDB/wine-schema');

const getData = async wineList => await WineDataBase.find(
  { _id: { $in: [...wineList] } }
);

module.exports.getData = getData;
