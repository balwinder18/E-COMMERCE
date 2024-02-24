const mongoose = require("mongoose");
// const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userschema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"plesase enter ypur name"],
        maxLength:[30,"name shouls not exceed 30 caharcters"],
        minLength:[2,"please enter full name"]
    },
   email:{
    type: String,
    required:[true,"plesase enter ypur email"],
    unique:true,
    // validator:[validator.isEmail,"please enter valid email"]
   },

   password:{
    type: String,
        required:[true,
            "plesase enter ypur name"
        ],
        minLength:[8,"npassword shouls  exceed 8 caharcters"],
        select:false
   },

//    avatar:{
           
//     public_id:{
//         type:String,
//         required:true,
//     },

//     url:{
//         type:String,
//         required:true
    
//     }
// },  
    role:{
        type:String,
        required:true
    }  ,
       
    resetPasswordToken:String,
    resetPasswordExpire:Date,


   

})  ;

userschema.pre("save", async function(next) {
         if(!this.isModified("password")){
            next()
         }
       
     this.password = await bcrypt.hash(this.password , 10)
}) ;
 

 userschema.methods.getJWTToken = function(){

    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_ED
    })
 } ;
  
  userschema.methods.comparePassword = async function(enteredpassword){
      return await bcrypt.compare(enteredpassword, this.password);
  };
   userschema.methods.getResetPasswordToken = function () {
          const resettoken = crypto.randomBytes("20").toString("hex")


          this.resetPasswordToken = crypto.createHash("sha256").update(resettoken).digest("hex")

          this.resetPasswordExpire = Date.now() + 15 * 60 *1000

          return resettoken
   };
             

 module.exports = mongoose.model("user" , userschema);

































































































































































































































































































































