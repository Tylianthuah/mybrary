if(process.env.NODE_ENV !== "production" ){
    require("dotenv").config();
}

const express = require("express");
const app = express();
const ejs = require("ejs");
const layout = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/author")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


mongoose.connect(process.env.DATABASE_URL)

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(layout);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({limit:"10mb", extended: true}))

app.use("/", indexRouter);
app.use("/authors", authorRouter);


app.listen(process.env.PORT || 3000, ()=> {
    console.log("Server has started....");
})