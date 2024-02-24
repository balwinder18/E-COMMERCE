const nodemailer = require("nodemailer");

const sendEmail = async (options)=>{
   const transporter = nodemailer.createTransport({
      service:process.env.SE_SERVICE,
      host:process.env.SE_HOST,
      port:process.env.SE_PORT,
      auth:{
        user:process.env.SE_MAIL,
        pass:process.env.SE_PASSWORD,
      }
   }); 
    
    const mailoptions = {
        from:process.env.SE_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.text,
    }
   

}; 
  
module.exports = sendEmail;