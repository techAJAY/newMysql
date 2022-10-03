const db  = require('../models/index')
const post_tag  = db.post_tag;
 



//create postTags
exports.createPostTag = async(req,res)=>{
    try{
  
    const {postId,tagId} = req.body;

    const Post_tag = new post_tag({
        post_Id:postId,
        tag_Id:tagId,
    })

    await Post_tag.save()
    return res.status(201).send({message:"Post created successfully",data:Post_tag})
  
    }catch(err){
      return res.status(500).send({status:false,message:err.message})
    }
    
  
  }
  

  //get all postTags
exports.getAllPostTags = async (req,res)=>{
    try{
      const post_tag = await post_tag.findAll({
        
      })

      return res.status(200).send({message:"post_tag get successfully",data:post_tag})
  
    }catch(err){
      return res.status(500).send({status:false,message:err.message})
    }
    
  }

  