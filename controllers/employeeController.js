const employee = require('../models/employee');
const db  = require('../models/index')
 const Employee  = db.employee;
 



//create comment
exports.createEmployee = async(req,res)=>{
    try{

    const {name}  = req.body;
    const employee = await Employee.create({name:name})
    return res.status(201).send({message:"employee created successfully",data:employee})
  
    }catch(err){
      return res.status(500).send({status:false,message:err.message})
    }
    
  
  }
  

//get all comment
exports.getEmployee = async (req,res)=>{
  try{
    
   
    const comment = await Employee.findAll({
       paranoid:false,
       
    });
    return res.status(200).send({message:"comment get successfully",data:comment})

  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }
  
}


  