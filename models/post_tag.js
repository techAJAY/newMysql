const { Sequelize, DataTypes } = require("sequelize");

 module.exports = (Sequelize, DataTypes)=>{
  const post_tag = Sequelize.define('post_tag',{
    //postTag_id:{
        //type: DataTypes.INTEGER,
       // autoIncrement: true,
       // primaryKey: true,
       // allowNull: false    //required:true
    //},
    post_Id:DataTypes.INTEGER,
    tag_Id:DataTypes.INTEGER,
    });

  return post_tag;
 }

