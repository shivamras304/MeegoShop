const express = require("express");
const config = require("./config.json");
const bodyParser = require("body-parser");
const path = require('path');

const routes = {
  admin: require("./api/admin").route,
  catalog: require("./api/catalog").route,
  cart: require("./api/cart").route
}

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/admin", routes.admin)
app.use("/catalog", routes.catalog)
app.use("/cart", routes.cart)
app.use("/", express.static(path.join(__dirname, "public_static")))

app.listen(config.SERVER.PORT,
   () => console.log(`The server is listening on http://localhost:${config.SERVER.PORT}`)
)
