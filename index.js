const express=require('express');

const bodyparser=require('body-parser');
const routepro=require('./route/product');
const app=express();
const port=3000;

app.set("view engine","ejs");



app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

app.use(routepro);



app.listen(port,()=>{
    console.log(`listning to the port : ${port}`)
})