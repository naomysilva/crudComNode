const express = require("express");
const app = express();
var bodyParser = require('body-parser');
const handlebars = require("express-handlebars");
const Pagamento = require("./models/Post")


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/formulario', function(req, res) {
    res.render('formulario.handlebars');
});


app.post('/form', function(req, res) {
    //res.send("Nome: " + req.body.nome + "email: " + req.body.email + "mensagem: " + req.body.nome)
    Pagamento.create({
        name: req.body.name,
        email: req.body.email,
        mensagem: req.body.mensagem
    }).then(function() {
        res.send("Pagamento cadastrado")
    }).catch(function(erro) {
        res.send("erro é: " + erro)

    })
});

































app.listen(8081, function() {
    console.log("esta rodando")
})