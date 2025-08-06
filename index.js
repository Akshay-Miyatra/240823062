const express = require("express")
const studentRoute = require("./routes/studentRoute")
const app = express()
const port = 80

app.use(express.json())

app.use("/student",studentRoute)

app.get('/', (req, res) => {
  res.send('Welcome to the home page');
});


app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}/`)
})
