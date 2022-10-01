const db  = require('../models/index')
 const Salary  = db.salary;
 const User  = db.users;




exports.createSalary = async(req,res)=>{
    try{
  
    const {salary,user_id} = req.body;

    const createSalary =await Salary.create({salary:salary,user_id:user_id})
    return res.status(201).send({message:"Salary created successfully",data:createSalary})
  
    }catch(err){
      return res.status(500).send({status:false,message:err.message})
    }
    
  
  }
  


  