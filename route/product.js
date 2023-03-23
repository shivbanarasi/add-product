const { json } = require('body-parser');
const express=require('express');
const db=require('../mysqlco/connn')
const route=express.Router();


route.get('/api/add',(req,res)=>{
    res.render('form',{
        title:'add product'
    })
})

route.get("/deletedata/:id",(req,res)=>{
    var del=req.params.id;
    console.log(del);
    db.query(`delete from expence_tracker where id="${del}"`,(err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })
    
})



route.get("/",(req,res)=>{
    db.query("SELECT * FROM expence_tracker ",(err,result)=>{    
       
        console.log(result);
        let tot=0;
        for(let i of result){
           tot+= i.amount;
        }
        console.log(tot)
        res.render('pro',{
            res:result,
            total:tot ,
            title:'home'   
        })
    
})

})





route.post("/add",(req,res)=>{
    
       const discription=req.body.discription
       const category=req.body.category
       const amount=req.body.amount
       console.log(discription,category,amount)
    db.query(`insert into expence_tracker(discription,category,amount) 
    values('${discription}','${category}',${amount})`,(err,result)=>{
        if(err){
            console.log(err)
        }       
    } )
    res.redirect('/')
    
})



module.exports=route;
