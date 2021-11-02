const WineDataBase = require('../mongoDB/wine-schema')

const deleteWine = async data => {
  const { _id } = data
  await WineDataBase.findOneAndDelete({ _id })
}

module.exports.deleteWine = deleteWine
