const mongoose = require("mongoose");


const connectDatabase = async ()=>{

  try{
    await mongoose.connect( process.env.MB_URI ,
      { useUnifiedTopology : true, useNewUrlParser:true});

    console.log("mongo connected successfully");
  } catch(error) {
    console.log(error);
    process.exit(1);

 }

}

module.exports = connectDatabase;