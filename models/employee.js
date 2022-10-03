const { Sequelize, DataTypes } = require("sequelize");

 module.exports = (Sequelize, DataTypes)=>{
  const employee = Sequelize.define('employee',{
    name:DataTypes.STRING,
    },{
        paranoid:true,
       // hooks: {
          // beforeValidate: (user, options) => {
          //   user.mood = 'happy';
          // },
          //afterValidate: (user, options) => {
           // console.log("hook is working");
          //  user.name = 'Toni';
         // }
        //}
        
    });

    employee.addHook('afterValidate','employNam',(user,option)=>{
      console.log("outer hook is working");
      user.name = "Raja"
    })

  return employee;
 }

