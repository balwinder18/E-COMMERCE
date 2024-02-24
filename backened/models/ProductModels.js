 const mongoose = require("mongoose");

 const Productschema = mongoose.Schema({
      
    name:{
        type:String,
        required :[true , "please enter product name"],
        trim:true
    },

    description:{
        type:String,
        required :[true , "please enter product descriptipon"]
    },

    price:{
        type:Number,
        required :[true , "please enter product Price"],
        maxlenght:[8,"price cannot excedd 8 characters"]
    },

    rating:{
        type:Number,
        default:0
    },

    image:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],

    category:{
           type:String,
           required:[true,"please enter product category"]
    },

    stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxlength:[4,"stock cannnotexceed 4 characters"],
        default:1
    },

    numofreviews:{
        type:Number,
        default:0
    },

    reviews:[{
        
        user:{
            type:mongoose.Schema.ObjectId,
            ref:"user",
            required:true

         },
        
        name:{
            type:String,
        required:true
        },

        rating:{
            type:Number,
        required:true
        },

       comment:{
        type:String,
        required:true
       }
    }],

    createdat:{
        type:Date,
        default:Date.now
    },

         user:{
            type:mongoose.Schema.ObjectId,
            ref:"user",
            required:true

         }




 });

 module.exports = mongoose.model("product",Productschema); 