const app = require("./app");


const dotenv= require("dotenv");
const connectDatabase = require("./config/database");
const cloudinary = require('cloudinary');

dotenv.config({path:"backened/config/dot.env"});





const port = process.env.PORT;
connectDatabase().then(()=>{
   
  
     app.listen(port, () => {
   
          console.log(`server is listening on ${port}`);
     });


});

cloudinary.config({
     cloud_name : process.env.CLOUDINARY_NAME,
     api_key: process.env.CLOUDINARY_API_KEY,
     api_secret: process.env.CLOUDINARY_API_SECRET
})


 
 // unhandled rejections not working cureently

//  process.on("unhandledRejection",(err)=>{
           
//       console.log(err);
//       console.log("shutting down the server")


//       Server.close(()=>{
//           process.exit(1);
//       })
//  })