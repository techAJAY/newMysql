const db  = require('../models/index')
 const Post  = db.post;
 




exports.createPost = async(req,res)=>{
    try{
  
    const {postName,title,content,user_id} = req.body;

    const post = new Post({
      post_Id:postName,
      title:title,
      content:content,
      user_id:user_id
    })

    await post.save()
    return res.status(201).send({message:"Post created successfully",data:post})
  
    }catch(err){
      return res.status(500).send({status:false,message:err.message})
    }
    
  
  }
  

//get all users
exports.getAllPOST = async (req,res)=>{
  try{
    
   
    const post = await Post.findAll();
    return res.status(200).send({message:"post get successfully",data:post})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
  
}


  