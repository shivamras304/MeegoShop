const route = require('express').Router();
const MeegoItem = require("../db/models").models.MeegoItem;

//Fetch all the items
route.get("/", (req, res) => {
  MeegoItem.findAll({})
    .then((items) => res.send(items))
    .catch((err) => console.log(err))
})

exports.route = route;
