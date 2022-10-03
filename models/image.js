const { Sequelize, DataTypes } = require("sequelize");

 module.exports = (Sequelize, DataTypes)=>{
  const image = Sequelize.define('image',{
    title:DataTypes.STRING,
    url:DataTypes.STRING,
    });

  return image;
 }
