const route = require('express').Router();
const MeegoItem = require("../db/models").models.MeegoItem;
const Op = require("sequelize").Op

//Fetch all the items
route.get("/", (req, res) => {
  MeegoItem.findAll({})
    .then((items) => res.send(items))
    .catch((err) => console.log(err))
})

//Add a new todo
route.post("/", (req, res) => {
  MeegoItem.create({
    title: req.body.title,
    image: req.body.image,
    description: req.body.desc,
    price: Number(req.body.price)
  })
    .then((result) => res.redirect("."))
    .catch((err) => console.log(err))
})

route.delete("/:id", (req, res) => {
  MeegoItem.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  ).then(() => res.redirect("."))
    .catch((err) => console.log(err))
})

exports.route = route;
