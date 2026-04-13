let express=require('express')
const { getusers } = require('../controllers/usersControllers')
let router=express.Router()


router.get('/',getusers)

module.exports=router