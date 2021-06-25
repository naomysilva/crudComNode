const Sequelize = require('sequelize')

const sequelize = new Sequelize('cruds', 'root', 'admin', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};