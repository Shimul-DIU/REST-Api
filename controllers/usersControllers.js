let path=require('path')
let getusers=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/user.html'))
}

module.exports={getusers}