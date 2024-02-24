const mongoose = require("mongoose");


const orderschema = new mongoose.Schema({
    shippingInfo:{
          address:{
            type: String,
            required:true,
          },
          city:{
            type: String,
            required:true,
          },
          state:{
            type: String,
            required:true,
          },
          country:{
            type: String,
            required:true,
          },

         pincode:{
            type: Number,
            required:true,
          }

    },

    orderItems:[
      {
        name:{
            type:String,
            required:true,
        }  ,
        price:{
            type:Number,
            required:true,
        },
        quantity:{
            type:Number,
            required:true,
        },
       image:{
            type:String,
            required:true,
            default:"sampleimage"
        },
        product:{
            type:mongoose.Schema.ObjectId,
            ref:"product",
            required:true,
        }
      }
    ],

    paymentInfo:{
           id:{
            type:String,
            required:true,
           },
           paidAt:{
            type:Date,
            required:true,
           }

    },

    itemPrice:{
        type :Number,
         required:true, 
    },
    taxPrice:{
        type :Number,
         required:true, 
    },
    shippingPrice:{
        type :Number,
         required:true, 
    },
    totalPrice:{
        type :Number,
         required:true, 
    },

    orderStatus:{
        type:String,
        required:true,
        default:"processing"
    },

    deliveredAt:Date,

    createdAt:{
        type:Date,
        Default:Date.now,
    }
    



}) ; 


// exports.getallorders 
//exports.updateorders

   module.exports = mongoose.model("order",orderschema);