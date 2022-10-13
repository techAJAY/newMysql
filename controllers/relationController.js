const db  = require('../models/index');
//const Post = require('../models/post');
 const Post  = db.post;
 const User  = db.users;
 const tags  = db.tags;
 const post_tag  = db.post_tag;
 const Image  = db.image;
 const Video  = db.video;
 const comment = db.comment;



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
//  exports.BelongsTo  = async (req,res)=>{
//   try{
    
//     const id = req.params.id
//     const user = await Post.findAll({
//       attributes:['PostName','title','content'],
//       include:[{
//         model:User,
//         as:'USER iNFO',
//         attributes: ['name', 'gender','mobile'],
       
//       }],
//       where:{Post_id:id}
//     });

//       return res.status(200).send({message:"users get successfully",data:user})
  
   
//   }catch(err){
//     return res.status(500).send({status:false,message:err.message})
//   }
  
// }






exports.BelongsTo  = async (req,res)=>{
    try{
      
      const id = req.params.id
      const user = await Post.scope(['includeUsers','selectPost']).findAll({where:{Post_id:id}});
  
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
     
    //tags and post
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

  
//-------image,video and comment---------//


//ONE TO Many Polymorphic
exports.PolymorphicHashMany = async (req,res)=>{
  try{
    
    //const id = req.params.id
    //--IMAGE,VIDEO TO COMMENT---//
    const user = await Video.findAll({
      attributes:['title','text'],
      include:[{
        model:comment,
        attributes:['title','commentType'],
      }]
    });
    
    return res.status(200).send({message:"users get successfully",data:user})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
  
}




//many TO Many Polymorphic
exports.PolymorphicManyToMany = async (req,res)=>{
  try{
    
    //image to tag
    // const user = await Image.findAll({
    //   include:[tags]
    // });

    //image to tag
    // const user = await Video.findAll({
    //   include:[tags]
    // });

    //TAG TO IMAGE AND VIDEO
    const user = await tags.findAll({
      include:[Video,Image]
    })
    
    return res.status(200).send({message:"users get successfully",data:user})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
  
}
