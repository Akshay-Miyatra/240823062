const express = require("express");
const mongoose = require("mongoose");

const studentRoute = require("./Routes/SongRoute.js");
const app = express();
const PORT = 80;
app.use(express.json());

mongoose.connect("mongodb+srv://Miyatra_akshay:Akshay_29@cluster0.ujxun6h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.use("/song", studentRoute);

app.listen(PORT, () => {
  console.log("server is running : 127.0.0.1" + PORT);
});