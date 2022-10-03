const db  = require('../models/index')
 const tag_Taggable  = db.tag_taggable;
 



//create post
exports.createTag_Taggable_ID = async(req,res)=>{
    try{
  
    const {tagId,taggableId,taggableType} = req.body;

    const tags = new tag_Taggable({
        tagId:tagId,
        taggableId:taggableId,
        taggableType:taggableType,
      
    })

    await tags.save()
    return res.status(201).send({message:"tags created successfully",data:tags})
  
    }catch(err){
      return res.status(500).send({status:false,message:err.message})
    }
    
  
  }
  

//get all post
exports.getAllTags = async (req,res)=>{
  try{
    
   
    const tags = await tag_Taggable.findAll();
    return res.status(200).send({message:"tags get successfully",data:tags})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
  
}


  