const dbConfig = require("../config/db.config");
const {Sequelize,DataTypes} = require("sequelize");
const { DB } = require("../config/db.config");

const sequelize = new Sequelize('sequelize','root', '', {
  host:'localhost',
  dialect:'mysql',
  operatorsAliases:0,

});


    sequelize.authenticate()
    .then(()=>{
        console.log("connected");
    }).catch(err=>{
        console.log(err);
    })
    

    const db ={};
    db.Sequelize = Sequelize
    db.sequelize = sequelize

    db.users = require('./users')(sequelize, DataTypes)
    db.post = require('./post')(sequelize, DataTypes)
    db.post_tag = require('./post_tag')(sequelize, DataTypes)
    db.tags = require('./tag')(sequelize, DataTypes)

    //one to one
    // db.users.hasOne(db.post,{foreignKey:'user_id', as:'POST DETAILS'})
    // db.post.belongsTo(db.users,{foreignKey:'user_id', as:'USER iNFO'})


    //one to many
    //db.users.hasMany(db.post,{foreignKey:'user_id', as:'POST DETAILS'})
    db.post.belongsTo(db.users,{foreignKey:'user_id', as:'USER iNFO'})

    //many TO many
    db.users.hasMany(db.post,{foreignKey:'user_id', as:'POST DETAILS'})
    db.post.belongsToMany(db.tags,{through:'post_tag',foreignKey:'post_Id'})
    db.tags.belongsToMany(db.post,{through:'post_tag',foreignKey:'tag_Id'})


    db.sequelize.sync({force:false})   //it can delete all table data:// match:/sequlize$/
    .then(()=>{
        console.log('sync again');
    })

   module.exports = db;