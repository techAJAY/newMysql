const db  = require('../models/index')
 const Video  = db.video;
 



//create video
exports.createVideo = async(req,res)=>{
    try{
  
    const {title,text} = req.body;

    const video = new Video({
      title:title,
      text:text
     
    })

    await video.save()
    return res.status(201).send({message:"video created successfully",data:video})
  
    }catch(err){
      return res.status(500).send({status:false,message:err.message})
    }
    
  
  }
  

//get all video
exports.getAllVideo = async (req,res)=>{
  try{
    
   
    const video = await video.findAll();
    return res.status(200).send({message:"video get successfully",data:video})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
  
}


  