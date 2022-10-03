const { Sequelize, DataTypes } = require("sequelize");

 module.exports = (Sequelize, DataTypes)=>{
  const video = Sequelize.define('video',{
    title:DataTypes.STRING,
    text:DataTypes.STRING,
    });

  return video;
 }