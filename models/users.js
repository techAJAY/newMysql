const { Sequelize, DataTypes } = require("sequelize");

 module.exports = (Sequelize, DataType)=>{
  const Users = Sequelize.define('users',{
      user_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false    //required:true

      },
    name:{
      type:DataTypes.STRING(20),
      allowNull: false,
      
    },
    email:{
      type:DataTypes.STRING(20),
      //allowNull: false,
      //defaultValue:'ajay@gmail.com'
    },
    gender:{
      type:DataTypes.STRING(20),
      //defaultValue:'male',
      //allowNull: false,
    },
    
    mobile:{
      type: DataType.STRING(10),
      //allowNull: false,
      // validate: {
      //   notNull: { args: true, msg: "You must enter Phone Number" },
      //   len: { args: [11,11], msg: 'Phone Number is invalid' },
      //   isInt: { args: true, msg: "You must enter Phone Number" },
      // }
    },


  },{
    //tableName:'usertaable'
  })

  return Users;
 }

