let express=require('express')
let cors=require('cors')
let app=express()
app.use(express.urlencoded({extended:true}))

app.use(cors())

const userRouter = require('./routes/userRouter')
app.use('/api/users',userRouter)


module.exports=app