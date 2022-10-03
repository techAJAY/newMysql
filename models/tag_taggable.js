const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes)=>{
    const tag_taggable = Sequelize.define('tag_taggable',{
        tagId: {
            type: DataTypes.INTEGER,
            unique: 'tt_unique_constraint'
          },
          taggableId: {
            type: DataTypes.INTEGER,
            unique: 'tt_unique_constraint',
            references: null
          },
          taggableType: {
            type: DataTypes.STRING,
            unique: 'tt_unique_constraint'
          }
      })
  
    return tag_taggable;
   }
  
  

