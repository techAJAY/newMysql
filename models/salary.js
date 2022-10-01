const { Sequelize, DataTypes } = require("sequelize");

 module.exports = (Sequelize, DataType)=>{
  const Salary = Sequelize.define('salaries',{
    salary_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false    //required:true
    },
    
    salary:{
      type:DataTypes.INTEGER(20),
      
    },
    
    user_id:{
        type: DataTypes.INTEGER,
        unique:true,
        //allowNull: false,
        //foreignKey:true,
       
      },



  },{
    //tableName:'usertaable'
  })

  return Salary;
 }

