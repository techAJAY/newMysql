const dbConfig = require("../config/db.config");
const {Sequelize,DataTypes} = require("sequelize");


//database connection
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
    db.image = require('./image')(sequelize, DataTypes)
    db.video = require('./video')(sequelize, DataTypes)
    db.comment = require('./comment')(sequelize, DataTypes)
    db.tag_taggable = require('./tag_taggable')(sequelize, DataTypes)
    db.employee = require('./employee')(sequelize, DataTypes)


    //one to one
    // db.users.hasOne(db.post,{foreignKey:'user_id', as:'POST DETAILS'})
    // db.post.belongsTo(db.users,{foreignKey:'user_id', as:'USER iNFO'})


    //one to many
    // db.users.hasMany(db.post,{foreignKey:'user_id', as:'POST DETAILS'})
    db.post.belongsTo(db.users,{foreignKey:'user_id', as:'USER iNFO'})

    //many TO many
    db.users.hasMany(db.post,{foreignKey:'user_id', as:'POST DETAILS'})
    db.post.belongsToMany(db.tags,{through:'post_tag',foreignKey:'post_Id'})
    db.tags.belongsToMany(db.post,{through:'post_tag',foreignKey:'tag_Id'})


    //------SCOP-------//
    db.post.addScope('includeUsers',{
       include:{
        model:db.users,
        attributes: ['name', 'gender','mobile'],
        as:'USER iNFO',
       }
    });

    db.post.addScope('selectPost',{
       attributes: ['PostName','title','content'], 
     })


  
     //------------IMAGE,VIDEO AND COMMENT----------------//
     
     db.image.hasMany(db.comment,{
        foreignKey:'commentId',
         constraints:false,
         scope:{
            commentType:'image'
         }})

         db.video.hasMany(db.comment,{
            foreignKey:'commentId',
             constraints:false,
             scope:{
                commentType:'video'
             }})


     db.comment.belongsTo(db.image,{foreignKey:'commentId',constraints:false})

     db.comment.belongsTo(db.video,{foreignKey:'commentId',constraints:false})  


      
     //-------tagTaggable with image and videos---------//
     
     //image to tag:
    db.image.belongsToMany(db.tags,{
        through:{
            model:db.tag_taggable,
            unique:false,
            scope:{
                taggableType:'image'
            }
        },
        foreignKey:'taggableId',
        constraints:false
    })

   //tag to image:
   db.tags.belongsToMany(db.image,{
    through:{
        model:db.tag_taggable,
        unique:false,
        scope:{
            taggableType:'image'
        }
    },
    foreignKey:'tagId',
    constraints:false
   })




    //video to tag:
    db.video.belongsToMany(db.tags,{
        through:{
            model:db.tag_taggable,
            unique:false,
            scope:{
                taggableType:'video'
            }
        },
        foreignKey:'taggableId',
        constraints:false
    })

   //tag to video:
   db.tags.belongsToMany(db.video,{
    through:{
        model:db.tag_taggable,
        unique:false,
        scope:{
            taggableType:'video'
        }
    },
    foreignKey:'tagId',
    constraints:false
   })

    db.sequelize.sync({force:false})   //it can delete all database data:// match:/sequlize$/
    .then(()=>{
        console.log('sync again');
    })

   module.exports = db;