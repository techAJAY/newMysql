const db  = require('../models/index')
 const Image  = db.image;
 



//create images
exports.createImages = async(req,res)=>{
    try{
  
    const {title,url} = req.body;

    const image = new Image({
      title:title,
      url:url
    })

    await image.save()
    return res.status(201).send({message:"image created successfully",data:image})
  
    }catch(err){
      return res.status(500).send({status:false,message:err.message})
    }
    
  
  }
  

//get all image
exports.getAllImage = async (req,res)=>{
  try{
    
   
    const image = await Image.findAll();
    return res.status(200).send({message:"image get successfully",data:image})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
  
}


  