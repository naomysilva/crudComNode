const db = require('./db')

const Post = db.sequelize.define('postagems', {
    name: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.TEXT
    },
    mensagem: {
        type: db.Sequelize.STRING

    }
})

module.exports = Post