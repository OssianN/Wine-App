const WineDataBase = require('./schema');

const updateWine = async data => {
  const { title, country, year, shelf, row } = data;
  console.log(data)
  await WineDataBase.findOneAndUpdate(
    {
      shelf, row
    },
    {
      title, country, year
    }
  );
};

module.exports.updateWine = updateWine;
//Du kan nu uppdatera kort genom att klicka på dem. Formuläret är alltid i mitten istället för högs upp. Lite allmänna förbättringar.