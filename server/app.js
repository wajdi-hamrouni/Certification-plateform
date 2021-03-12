var cloudinary = require('cloudinary').v2
const express = require('express')
const path = require('path')
const app = express();
const bodyPaser = require('body-parser')

require('dotenv').config()
app.use(bodyPaser.json())



app.get('/',(req,res)=>{
 // TODO
})
app.post('/create',(req,res)=>{
 // TODO
})

module.exports = app