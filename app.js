const express = require('express')
const app = express()
const sequelize = require('sequelize')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql2');
const dbConn = require('./config/db.config')
const userRouter = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')
const relationRoute = require('./routes/relationRoute')

const port = process.env.PORT || 3000

require('./models/index')


app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use('/test',async (req,res)=>{
    res.send("home page")
})



//userRoute
app.use(userRouter)

//salary router
app.use(postRoute)

app.use(relationRoute)





app.listen(port,()=>{
    console.log(`port is running on http://localhost:${port}`);
})