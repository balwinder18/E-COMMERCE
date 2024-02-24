const catchasyncerror = require("../middleware/catchasyncerror");
const User  = require("../models/usermodels");
const Errorhander = require("../utils/errorhander");
const sendtoken = require("../utils/jwttokencookies");

const sendEmail = require("../utils/SendEmail");
const cloudinary = require('cloudinary');

exports.registeruser =   async (req,res,next)=>{
  
  
//     const mycloud = await cloudinary.v2.uploader.upload( req.body.avatar , {
//       folder:"avatars",
//       width: 150,
//       crop: "scale"

// })   


const {name , email, password,role} = req.body;

const user = await User.create({
  name,
  email,
  password,
  role,

  // avatar:{
  //     public_id: mycloud.public_id,
  //     url:mycloud.secure_url
      
  // },
   
     

}); 

sendtoken(user,201,res);
 

     
       
       
       
       
}    ;

  exports.loginuser = async(req,res,next)=>{

     const {email,password} = req.body;


     if(!email || !password){
      return res.status(400).json({
        message:"invalid email or password",
      })
     } 
      
      const user = await User.findOne({email}).select("+password");

      if(!user){
        return res.status(400).json({
          message:"invalid email or password",
        })
      }

      const ispasswordmatched = await user.comparePassword(password);

      if(!ispasswordmatched){
        return res.status(400).json({
          message:"invalid email or password",
        })
      }

   const token = user.getJWTToken();

   sendtoken(user,201,res);

  } 


  exports.logout = (req,res,next) =>{
     res.cookie("token",null,{
      httponly:true,
      expires:new Date(Date.now())
     })

    res.status(200).json({
      success:true,
      message:"logged out ",
    })
  };


  exports.forgotpassword = async (req,res,next) =>{

       const user  = await User.findOne({email:req.body.email});

       if(!user){
        return next( new Errorhander("user not found",404));
       }

       const token = user.getResetPasswordToken();
       await user.save({validateBeforeSave:false});

       const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${token}`;

       const message = `your reset password token is :- \n\n ${resetpasswordurl} \n\n if you have not requested this ,please egnore it`;

       try {
          await sendEmail({
            email: user.email,
            subject: `Ecommerce Password Recovery`,
            message
          })
           
          res.status(400).json({
            success:true,
            message:`message sent to ${user.email} successfully `
          })
       } catch (error) {
           
             user.resetPasswordToken = undefined;
             user.resetPasswordExpire = undefined; 

             await user.save({validateBeforeSave:false});

             return next(new Errorhander(error.message , 500));
       }

  };   


  //  exports.resetPassword = function()   not doing rn 


  exports.getUserDetails = async (req,res,next) => {
        const user  = await User.findById(req.user.id);

        res.status(400).json({
          success:true,
          user,
        })
  }; 


  // exports.updatePasword = async (req,res,next)=>{
  //   const user  = await User.findById(req.user.id).select("+password"); 
         
  //   const ispasswordmatched = await user.comparePassword(req.body.oldpassword);

  //   if(!ispasswordmatched){
  //     return res.status(400).json({
  //       message:"old password does not mtched",
  //     })
  //   }

  //   if(req.body.newPassword!==req.body.confirmPassword){
  //     return res.status(400).json({
  //       message:" password does not matched",
  //     })
  //   }

  //   user.password = req.body.newPassword;

  //   await user.save();

  //   sendtoken(user,200,res)

  // }


  