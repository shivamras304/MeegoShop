const route = require('express').Router();
const MeegoItem = require("../db/models").models.MeegoItem;
const Op = require("sequelize").Op
const path = require("path")

//Fetch all the items
route.get("/",
  (req, res, next) => {
    req.headers["get-json-data"] === "yes" ? next() :
    res.sendFile(path.join(__dirname.replace("/api", ""), "public_static", "admin.html"))
  },
  (req, res) => {
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
  console.log("Delete reached")
  MeegoItem.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => res.redirect("."))
    .catch((err) => console.log(err))
})

exports.route = route;
