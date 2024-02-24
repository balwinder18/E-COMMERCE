const express = require("express");

const product = require("./routes/porductRoutes");
const user  = require("./routes/userRoutes");
const order = require("./routes/orderroues");
const errorMiddleware  = require("../backened/middleware/error");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload"); 
const app = express();

app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

app.use("/api/v1" ,product);
app.use("/api/v1",user);
app.use("/api/v1",order);
// middleware (errorhandler)

app.use(errorMiddleware);



module.exports = app ;