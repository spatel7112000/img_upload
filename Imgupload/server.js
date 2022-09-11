const mongoose = require('mongoose')
const port = 5000
const express = require('express')
const app = express()
const config = require('./config/config')
config()
const router = require('./routes/routes')


app.use(express.json());
app.use('/', router)


app.listen(port, ()=>{
    console.log('Server is Listening On', `${port}`)
})