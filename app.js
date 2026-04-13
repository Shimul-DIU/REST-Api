let express=require('express')
let cors=require('cors')
const userRouter = require('./routes/userRouter')

let app=express()
app.use(cors())

app.use('/api/users',userRouter)


module.exports=app