exports.index = (req,res)=>{
    res.send("welcome to the e comerce api")
}
exports.show = (req,res)=>{
    res.send(`Showing the data for id:${req.params.id}\n`)
}
exports.store = (req,res)=>{
    res.send(`Data recieve : ${req.body.name},${req.body.price}\n `)
}
exports.update = (req,res)=>{
    res.send(`Data update for id:${req.params.id} Name:${req.params.name} City:${req.params.price}\n`)
}
exports.delete = (req,res)=>{
    res.send(`Data deleted of id ${req.params.id}`)
}