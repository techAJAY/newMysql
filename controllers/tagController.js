const db  = require('../models/index')
//const tags = require('../models/tag')
const tags  = db.tags;




//create tags
exports.createTags = async(req,res)=>{
    try{
  
    const {tagName} = req.body;

    const Tags = new tags({
        tagName:tagName,
    })

    await Tags.save()
    return res.status(201).send({message:"Post created successfully",data:Tags})
  
    }catch(err){
      return res.status(500).send({status:false,message:err.message})
    }
    
  
  }
  

//get all tags
exports.getAllTags = async (req,res)=>{
  try{
    
    const user = await tags.findAll({});
    
    return res.status(200).send({message:"users get successfully",data:user})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
  
}

  
  