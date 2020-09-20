const moment = require("moment");

//Création d'un middleware
const logger = (req, res, next) => {
  console.log("hello");
  //Obtenir l'url
  //console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }:${moment().format()}`
  );
  next();
};

module.exports = logger;
