 const {Users} = require('../models')
 const db  = require('../models/index')
 const User  = db.users;


//create user
exports.createUser = async(req,res)=>{
  try{

  const {name,email,mobile,gender,password} = req.body;

  const user = new User({
    name:name,
    email:email,
    mobile:mobile,
    gender:gender,
    password:password,
  })
  
  
  const getUser =await user.save();
  return res.status(201).send({message:"user created successfully",data:getUser})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
  

}


//get single user

exports.getUser = async (req,res)=>{
  try{
    const id = req.params.id
    const user = await User.findOne({ where: { user_id:id } });
    return res.status(200).send({message:"user get successfully",data:user})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
   
}

//get all users
exports.getAllUser = async (req,res)=>{
  try{
    
   
    const user = await User.findAll();
    return res.status(200).send({message:"users get successfully",data:user})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
  
}


//get all users by query
// exports.getAllUser = async (req,res)=>{
//   try{
    
   
//     const user = await User.findAll({ where: {gender:req.query.gender } });
//     return res.status(200).send({message:"users get successfully",data:user})

//   }catch(err){
//     return res.status(500).send({status:false,message:err.message})
//   }

  



//update users
exports.updateUser = async (req,res)=>{
  try{
    const id = req.params.id
    const userId = await User.findOne({ where: { user_id:id} });
     if(userId){

       const data = Object.keys(req.body)

       data.forEach((update)=>{
        userId[update] = req.body[update]
       })

       await userId.save();

       return res.status(201).send({message:"user update successfully",data:userId})
     }
     else{

      return res.status(400).send({message:"user not found"})
     }

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
   
}


//delete user
exports.deleteUser = async (req,res)=>{
  try{
    const id = req.params.id
    const user = await User.findOne({ where:{ user_id:id } });
    await user.destroy()

    return res.status(200).send({message:"user deleted successfully"})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
   
}
