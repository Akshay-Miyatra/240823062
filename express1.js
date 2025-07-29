const express = require("express")
const { param } = require("express/lib/application")
const req = require("express/lib/request")
const res = require("express/lib/response")
const app = express()

app.get("/",(req,res)=>{
    res.send("hello mca class ")
})
app.get("/home",(req,res)=>{
    res.send("this is my home page")
})

//methods
app.get("/",(req,res)=>{
    res.send("this is my page")
})

app.get("/show/:id",(req,res)=>{
    const student_id = req.params.id
    res.send(`oen student with id"${student_id}`)
})



app.listen(80,()=>{
    console.log("Server is running t http://localhost:80")
})