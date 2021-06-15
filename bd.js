const Sequelize = require('sequelize')
const sequelize = new Sequelize('crud', 'root', 'admin', {
    host: "localhost",
    dialect: 'mysql'
})


const Postagens = sequelize.define('postagens', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.TEXT
    },
    assunto: {
        type: Sequelize.TEXT
    },
    mensagem: {
        type: Sequelize.TEXT
    }

})



















sequelize.authenticate().then(function() {
    console.log("conectado com sucesso!")
}).catch(function(erro) {
    console.log("Falha ao se conectar: " + erro)
})