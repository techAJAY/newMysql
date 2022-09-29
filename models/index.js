const dbConfig = require("../config/db.config");
const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize('sequelize','root', '', {
  host:'localhost',
  dialect:'mysql',
  operatorsAliases:0,

});


    sequelize.authenticate()
    .then(()=>{
        console.log("connected");
    }).catch(err=>{
        console.log(err);
    })
    

    const db ={};
    db.Sequelize = Sequelize
    db.sequelize = sequelize

    db.users = require('./users')(sequelize, DataTypes)

    db.sequelize.sync({force:false})   //it can delete all table data:// match:/sequlize$/
    .then(()=>{
        console.log('resync');
    })

   module.exports = db;