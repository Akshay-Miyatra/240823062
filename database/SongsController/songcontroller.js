const Song = require("../models/song.js")

exports.index = (req,res)=>{
    Song.find()
    .then((allSongs) => {
      console.log("All Songs Retrieved", allSongs);
      res.status(200).json({ message: "Songs Retrieved Successfully", data: allSongs });
    })
    .catch((error) => {
      console.error("Error retrieving songs:", error);
      res.status(500).json({ message: "Error retrieving songs", error });
    });
}

exports.show = (req,res)=>{
    res.send(`showing data for is :${req.params.id}\n`)
}


exports.store = (req,res)=>{
  const newsong = new Song({
    title:req.body.title,
    artist: req.body.artist,
    category:req.body.category,
    album:req.body.album,
    url:req.body.url,
    photo:req.body.photo,
    year:req.body.year
  })
  newsong
  .save()
  .then(()=>{
      console.log("New song added successfully")
  })
  .catch((error)=>{
      console.log("error to adding new song")
  })
  res.send({message:"data stored successfully",data:newsong})
}


exports.update = (req,res)=>{
    res.send(`data updated for is: ${req.body.name},${req.body.city}\n`)
}


exports.delete = (req,res)=>{
    res.send(`data deleted for id : ${req.body.name},${req.body.city}\n`)
}



