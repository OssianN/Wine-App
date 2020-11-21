const WineDataBase = require('./schema');

const getData = async () => await WineDataBase.find();

module.exports.getData = getData;
