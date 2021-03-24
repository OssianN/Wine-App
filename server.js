const express = require('express');
const app = express();
const wine = require('./routes');
const passport = require("passport");
const users = require("./routes/users");
const path = require('path')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
require('dotenv').config();
require("./config/passport")(passport);

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const { connection } = mongoose;
mongoose.connect(process.env.SECRET_KEY, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false  } );
connection
  .once('open', () => console.log('SUCCESS, connected to DB'))
  .on('error', err => console.log('Ooopsiwhoops, some sort of error', err));

app.use(express.json());
app.use(express.static('client/build'));
app.use(passport.initialize());
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
})
app.use('/wines', wine);
app.use("/users", users);

const port = 5000;
app.listen(process.env.PORT || port, () => console.log(`server running on port ${process.env.PORT || port}`));
