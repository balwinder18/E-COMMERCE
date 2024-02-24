const Errorhander = require("../utils/errorhander");

module.exports = (err,req,res,next)=>{
     err.statuscode = err.statuscode || 500;
     err.message = err.message || "product not found";

     res.status(err.statuscode).json({
        success:false,
        error : err
     });
};