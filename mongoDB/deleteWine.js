const WineDataBase = require('./schema');

const deleteWine = async data => {
  const { shelf, row } = data;
  await WineDataBase.findOneAndDelete({
    shelf,
    row
  });
};

module.exports.deleteWine = deleteWine;