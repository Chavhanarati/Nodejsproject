let express  = require("express");
let cors = require("cors");
let app  = express();
let dbConfig = require("./config/dbConfig");
let loginRouter = require("./router/loginRouter");
let customerRouter = require("./router/customerRouter");
let productRouter = require("./router/productRouter")
let productCategoryRouter = require("./router/productCategoryRouter");
let orderRouter = require("./router/orderRouter");

dbConfig.dbConnection;  // calling this variable to get the connection 
dbConfig.adminAccount();

app.use(express.json());
app.use(cors());            // disable cors policy 



app.use("/api/login",loginRouter);
app.use("/api/customer",customerRouter);
app.use("/api/product",productRouter);
app.use("/api/productCategory",productCategoryRouter);
app.use("/api/order",orderRouter);

app.listen(3000,()=>console.log("server running on port number 3000"));