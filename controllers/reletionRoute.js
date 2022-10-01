const db  = require('../models/index');
const salary = require('../models/salary');
 const Salary  = db.salary;
 const User  = db.users;


 //hashOne
 exports.hashOne = async (req,res)=>{
    try{
      
      const id = req.params.id
      const user = await User.findAll({
        attributes: ['name', 'gender','mobile'],
        include:Salary,
        where:{user_id:id}
      });
      return res.status(200).send({message:"users get successfully",data:user})
  
    }catch(err){
      return res.status(500).send({status:false,message:err.message})
    }
    
  }


  //belongtO
 exports.hashOne = async (req,res)=>{
  try{
    
   
    const user = await User.findAll({
      include:Salary,
      where:{user_id:1}
    });
    return res.status(200).send({message:"users get successfully",data:user})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
  
}


