module.exports = funct=>()=>{
     Promise.resolve(funct(req,res,next)).catch(next);

}