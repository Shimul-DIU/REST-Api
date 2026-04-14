let path=require('path')
let express=require('express')
let app=express()
app.use(express.urlencoded({extended:true}))
const users = require('../models/user')
const { randomUUID } = require('crypto');

let getusers=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/user.html'))
}
let saveusers=(req,res)=>{
    let{firstName,lastName,fatherName,motherName,age,dof,divition,gender}=req.body;
    
    let user={
        id: randomUUID(),
        firstName,lastName,fatherName,motherName,age,dof,divition,gender
    }
    users.push(user)
    res.send(users)
}

module.exports={getusers,saveusers}