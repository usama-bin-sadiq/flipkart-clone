const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
 
dotenv.config();

mongoose.connect(`mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PORT}/flipkart_clone`,{
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database Connected!");
});

app.use(bodyParser.json());

app.use('/api', userRoutes);



app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on Port ${process.env.PORT}`);
})

