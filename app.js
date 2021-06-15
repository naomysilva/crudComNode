const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Bem vindo ao meu crud")
})





































app.listen(8081, function() {
    console.log("servidor rodando")
})