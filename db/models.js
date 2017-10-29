const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;
const DB = require("../config.json").DB;

const db = new Sequelize(
  DB.DATABASE,
  DB.USER,
  DB.PASSWORD,
  {
    host: DB.HOST,
    dialect: DB.DIALECT
  }
)

const MeegoItem = db.define(
  DB.TABLES.MEEGOITEM,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }
)

db.sync({alter: true})
  .then(() => { console.log("Database Configured")} )
  .catch((err) => { console.log(err) } )


let items = [
  {
    id: 1,
    title: "Lorem Ipsum",
    image: "https://goo.gl/fuSdoy",
    desc: "Lorem ipsum dolor sit amet",
    price: "4.99"
  },
  {
    id: 2,
    title: "Bonorum et Malorum",
    image: "https://goo.gl/8XxPtw",
    desc: "Ut enim ad minima veniam",
    price: "5.99"
  },
  {
    id: 3,
    title: "Finibus Bonorum",
    image: "https://goo.gl/p5Yxii",
    desc: "At vero eos et accusamus et iusto odio dignissimos",
    price: "15.99"
  },
  {
    id: 4,
    title: "Excepteur sint occaecat",
    image: "https://goo.gl/QKx3pA",
    desc: "Quis nostrum exercitationem ullam",
    price: "4.99"
  },
  {
    id: 5,
    title: "Temporibus autem",
    image: "https://goo.gl/He9y2Y",
    desc: "Puibusdam et aut officiis debitis aut",
    price: "7.99"
  }
  ,{
    id: 6,
    title: "Voluptatum deleniti",
    image: "https://goo.gl/ypZ8wt",
    desc: "Atque corrupti quos dolores et quas",
    price: "8.99"
  },
  {
    id: 7,
    title: "Et harum quidem",
    image: "https://goo.gl/6jLFeV",
    desc: "Rerum facilis expedita distinctio",
    price: "11.99"
  },
  {
    id: 8,
    title: "Nam libero tempore",
    image: "https://goo.gl/uacKZu",
    desc: "Cum soluta eligendi optio cumque",
    price: "12.99"
  },
]
exports.models = {
  MeegoItem
}
