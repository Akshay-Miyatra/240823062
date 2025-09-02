const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Miyatra_akshay:Akshay_29@cluster0.ujxun6h.mongodb.net/student",{

})

const studentschema = new mongoose.Schema({
    name:String,
    department:String,
    startyear:Number,
    endyear:Number,
    enrollment:Number,
    address:String,
})

const Student = mongoose.model("Student",studentschema)

console.log("MongoDb connected successfully")

const student = new Student({
    name: "miyatra akshay",
    department:"computer science",
    startyear:2020,
    endyear:2024,
    enrollment:12345,
    address:"123 main st",
})
student
.save()
.then(()=>{
    console.log("student save successfully")
})
.catch((error)=>{
    console.log("error saving student:",error)
})