const express = require("express")
const Router = express.Router();

const productcontroller = require('../controllers/product_controller')


Router.get("/index", productcontroller.index);
Router.get("/show/:id", productcontroller.show);
Router.post("/store", productcontroller.store);
Router.put("/update/:id", productcontroller.update);
Router.delete("/delete/:id", productcontroller.delete);

module.exports = Router;