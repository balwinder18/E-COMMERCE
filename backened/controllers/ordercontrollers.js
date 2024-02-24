const Order  = require("../models/ordermodels");
const product = require("../models/ProductModels");


exports.newOrder = async(req,res,next)=>{
    const{ shippingInfo ,orderItems,paymentInfo,itemPrice,taxPrice,shippingPrice,totalPrice } = req.body;

    const order = await Order.create({
        shippingInfo ,orderItems,paymentInfo,itemPrice,taxPrice,shippingPrice,totalPrice, paidAt : Date.now() , user:req.user._id 
    });

    res.status(400).json({
        success:true,
        order
    })


}; 

//  exports.getOrders = async (req,res,next)=>{
//   const order= await Order.findById(req.params.id).populate("user" , "name email");

//   if(!order){
//     return res.status(200).json({
//         message:"order not found",
//     })
//   } 
    
//   res.status(400).json({
//     success:true,
//     order,
//   })           admin work
                
//  };

 exports.myOrders = async (req,res,next)=>{
    const orders= await Order.find({user:req.user.id});
     
    res.status(400).json({
        success:true,
        orders,
      })

 }