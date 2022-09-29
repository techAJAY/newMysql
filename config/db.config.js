const mysql = require('mysql2');


// create here mysql connection

// const dbConn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'Sequelize'

// });

// dbConn.connect(function(error){
//     if(error) throw error;
//     console.log('Database Connected Successfully');


//    dbConn.query(`CREATE DATABASE Sequelize`,(err,result) =>{
//         if(err) throw err;
//         console.log("Database connected",result);
//     })


// let sql = "CREATE TABLE `salary` (`Sid` INT(20) NOT NULL AUTO_INCREMENT , `Sdate` INT(20) NOT NULL , `salary` INT(20) NOT NULL , `Uid` INT(20) NOT NULL , PRIMARY KEY (`Sid`)) ENGINE = InnoDB;"



//     dbConn.query(sql, (err)=>{
//                if(err) throw err;
//                 console.log("table created sucessfully");

//     })



// })

// module.exports = dbConn;


module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "Sequelize",
    dialect: "mysql",
  };