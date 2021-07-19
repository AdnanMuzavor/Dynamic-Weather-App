const express = require("express");
const app= express();
const port=3000;
const path= require("path");
const hbs= require('hbs');
const staticpath=path.join(__dirname,"../public");
const partialpath=path.join(__dirname,"../template/partials");
const viewspath=path.join(__dirname,"../template/views");
app.use(express.static(staticpath));
app.set("view engine","hbs");
app.set("views",viewspath);
hbs.registerPartials(partialpath);

app.get("/",(req,res)=>{
    // res.send("I am your home page")
    res.render('index');
});
 app.get("/weather",(req,res)=>{
    res.render('weather');
 })
 app.get("/about",(req,res)=>{
    res.render('about');
 })
app.get("*",(req,res)=>{

    res.render('404err',{
        errMsg:"OOps! Page Not Found"
    });
})
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})