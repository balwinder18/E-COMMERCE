const Apifeatures = require("../utils/apifeatures");

const Product = require("../models/ProductModels");
const Errorhander = require("../utils/errorhander");
const CatchError = require("../middleware/catchasyncerror");
const catchasyncerror = require("../middleware/catchasyncerror");

exports.createProducts = async (req,res,next)=>{
     req.body.user = req.user.id;
    const product = await Product.create(req.body);
     
    res.status(201).json({
       success:true,
       product
    })
};



exports.getAllProducts = async (req,res)=>{
   const resultperpage = 4;
   const productscount = await Product.countDocuments()
  const apifeatures = new  Apifeatures(Product.find() , req.query).search().filter().pagination(resultperpage);
  const products = await  apifeatures.query;
   res.status(201).json({
       success:true,
       products,
       productscount,
       resultperpage
   });

};

exports.updateproducts = async(req,res,next)=>{

  let product  = await Product.findById(req.params.id);

    if(!product){
      return next(new Errorhander("product not found" , 404))
    }

     product = await Product.findByIdAndUpdate(req.params.id , req.body,{
      new:true,
      runValidators:true,
      useFindAndModify:false

    })
        
    
  res.status(201).json({
      success:true,
      product
  })

}  ;
  
  exports.deleteproducts = async(req,res,next)=>{

    let product  = await Product.findById(req.params.id);
  
    if(!product){
      return next(new Errorhander("product not found" , 404))
    }  
       
     
       await product.deleteOne();

       res.status(201).json({
        success:true,
        message:"deleted"
    }) 

  }
  ;

  exports.getproductdetails = async (req,res,next)=>{
    let product  = await Product.findById(req.params.id);
  
      if(!product){
        return next(new Errorhander("product not found" , 404))
      }
      

    res.status(201).json({
        success:true,
         product,
         
         
    }) 


  };

//   exports.Reviews = async (req,res,next)=>{
//     const {rating,comment,productId } = req.body;
    
//     const review = {
//        user :req.user._id,
//        name:req.user.name,
//        rating:Number(rating),
//        comment
//     }
//         const product = Product.findById(productId);

//         const isreviewed = product.reviews.find((rev)=>
//           rev.user.toString()=== rev.user._id.toString()
//         );

//        if(isreviewed){
//        product.reviews.forEach((rev)=> {
//         if(rev.user.toString()=== rev.user._id.toString())
//         (rev.rating = rating),(rev.comment = comment)
//        });


//        } else {
//           product.reviews.push(review);
//           product.numofreviews =  product.reviews.length;

//        }

//     let avg=0;

//     product.rating = product.reviews.forEach((rev)=>{
//       avg+=rev.rating;
//     })/product.review.length;


//     await product.save({validateBeforeSave:false});

//     res.status(400).json({
//       success:true,
//     })
//  }