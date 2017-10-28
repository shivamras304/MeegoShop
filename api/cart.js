const route = require('express').Router();
const MeegoItem = require("../db/models").models.MeegoItem;
const Op = require("sequelize").Op;

route.get("/", (req, res) => {
  const cartItemIds = JSON.parse(req.query.cartItemIds)
  console.log(cartItemIds);
  //Query all the ids using cartData.ids
  MeegoItem.findAll({
    where: {
      id: {
        [Op.in]: cartItemIds
      }
    }
  })
    .then((items) => res.send(items))
    .catch((err) => console.log(err))
})

exports.route = route;
