const { Sequelize, DataTypes } = require("sequelize");

 module.exports = (Sequelize, DataTypes)=>{
  const tags = Sequelize.define('tags',{
    tagName:DataTypes.STRING(20),
    })

  return tags;
 }

