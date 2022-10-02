const db  = require('../models/index');
//const Post = require('../models/post');
 const Post  = db.post;
 const User  = db.users;
 const tags  = db.tags;
 const post_tag  = db.post_tag;


 //hashOne
 exports.hashOne = async (req,res)=>{
    try{
      
      const id = req.params.id
      const user = await User.findAll({
        attributes: ['name', 'gender','mobile'],

        include:[{
          model:Post,
          as:'POST DETAILS',
          attributes:['postName','title','content'],
        }],
        where:{user_id:id}
      });
      
      return res.status(200).send({message:"users get successfully",data:user})
  
    }catch(err){
      return res.status(500).send({status:false,message:err.message})
    }
    
  }





  //BelongsTo 
 exports.BelongsTo  = async (req,res)=>{
  try{
    
    const id = req.params.id
    const user = await Post.findAll({
      attributes:['PostName','title','content'],
      include:[{
        model:User,
        as:'USER iNFO',
        attributes: ['name', 'gender','mobile'],
       
      }],
      where:{Post_id:id}
    });

      return res.status(200).send({message:"users get successfully",data:user})
  
   
  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
  
}



//many to many
exports.manyToMany = async (req,res)=>{
  try{
    //post to tags
    // const user = await Post.findAll({
    //   attributes:['title'],
    //   include:[{
    //     model:tags,
    //     attributes:['tagName']
    //   }]
    // });

    const user = await tags.findAll({
      attributes:['tagName'],
      include:[{
          model:Post,
          attributes:['postName','title','content']
      }],
      
    });


    
    return res.status(200).send({message:"users get successfully",data:user})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
  
}

  

