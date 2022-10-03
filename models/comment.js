const { Sequelize, DataTypes } = require("sequelize");

 module.exports = (Sequelize, DataTypes)=>{
  const comment = Sequelize.define('comment',{
    title:DataTypes.STRING,
    commentId:DataTypes.INTEGER,
    commentType:DataTypes.STRING,

    });

  return comment;
 }