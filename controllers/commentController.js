const db  = require('../models/index')
 const Comment  = db.comment;
 



//create comment
exports.createComment = async(req,res)=>{
    try{
  
    const {title,commentId,commentType} = req.body;

    const comment = new Comment({
      title:title,
      commentId:commentId,
      commentType:commentType
      
    })

    await comment.save()
    return res.status(201).send({message:"comment created successfully",data:comment})
  
    }catch(err){
      return res.status(500).send({status:false,message:err.message})
    }
    
  
  }
  

//get all comment
exports.getAllComment = async (req,res)=>{
  try{
    
   
    const comment = await Comment.findAll();
    return res.status(200).send({message:"comment get successfully",data:comment})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
  
}


  