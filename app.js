const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const employes=require("./models/employe")

const app = express()
app.use(cors())

app.post("/view",(req,res)=>{
res.send("hello")
})

app.post("/add",(req,res)=>{
    res.send("hello")
    })

app.post("/search",(req,res)=>{
    res.send("hello")
    })

app.post("/delete",(req,res)=>{
    res.send("hello")
    })

app.listen(8084,()=>{
    console.log("server started")
})