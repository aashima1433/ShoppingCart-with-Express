const sequelize = require('sequelize');
const { DataTypes } = require('sequelize/lib/sequelize');
const db = new sequelize('shopdb','shopper','shopass',{
 host: 'localhost',
 dialect: 'mysql',
 pool: {
   min: 0,
   max: 5,
 }

})

const User = db.define('users', {
    uuid :{
        primarykey: true,
        type: sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
        //autoIncrement: true,
        
    },
    name: {
        type: sequelize.STRING,
        allowNull: false,
    }
})

const Product = db.define('products',{
       uuid: {
        primarykey: true,
        type: sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    name:
    {
        type: sequelize.STRING,
        allowNull: false
    },
    manufacterer: sequelize.STRING,
    price: {
        type: sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }


})

db.sync()
 .then(()=> console.log("database has been created"))
 .catch((err)=> console.error("error creating database"))

exports = module.exports = {
    User, Product
}