const mongoose = require("mongoose")

const SongSChema = new mongoose.Schema({
    title:String,
    artist: String,
    category:String,
    album:String,
    url:String,
    photo:String,
    year:String

})

const Song = mongoose.model("Song",SongSChema)

module.exports = Song