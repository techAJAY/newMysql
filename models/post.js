const { Sequelize, DataTypes } = require("sequelize");

 module.exports = (Sequelize, DataTypes)=>{
  const Post = Sequelize.define('post',{
    post_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false    //required:true
    },
    
    postName:{
      type:DataTypes.STRING(20),
      
    },
    title:{
      type:DataTypes.STRING(20),
      
    },
    content:{
      type:DataTypes.STRING(20),
      
    },

    user_id:{
        type: DataTypes.INTEGER,
        //unique:true,
        //allowNull: false,
        //foreignKey:true,
       
      },



  },{
    //tableName:'usertaable'
  })

  return Post;
 }

