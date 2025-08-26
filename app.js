const express = require("express")
const productroute = require("./routes/product_route")
const app = express()
const PORT = 80

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Welcome to the e-commerce site")
})
app.use("/product",productroute)



app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

