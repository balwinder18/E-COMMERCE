const jwt = require("jsonwebtoken");
const User = require("../models/usermodels");
const Errorhander = require("../utils/errorhander");


exports.isAuthenticated = async (req,res,next)=>{
     
    const {token}= req.cookies;

    if(!token){
        return next(new Errorhander("user not found",200));
    } 
      
    const decodedata =  jwt.verify(token , process.env.JWT_SECRET);

   req.user =  await User.findById(decodedata.id);
  
      next();
  

    
} 


// exports.authorizedRoles = (...roles) =>{
//     return (req,res,next)=>{
//         if(!roles.includes(req.user.roles)){
//         return next(new Errorhander("you are not auhtorized ",200))
//     } 

//         next();
         
        
//     }   

// }
   
     
     
