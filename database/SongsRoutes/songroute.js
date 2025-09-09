const express = require("express")
const Router = express.Router()
const songcontroller = require("../SongsController/songcontroller.js")

Router.get("/index",songcontroller.index)
Router.get("/show/:id",songcontroller.show)
Router.post("/store",songcontroller.store)
Router.put("/update/:id",songcontroller.update)
Router.delete("/delete/:id",songcontroller.delete)

module.exports = Router 