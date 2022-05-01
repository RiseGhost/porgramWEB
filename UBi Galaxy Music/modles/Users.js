const bd = require('./database')

const User = bd.sequelize.define('user', {
    nome: {
        type: bd.Sequelize.STRING
    },
    senha: {
        type: bd.Sequelize.STRING
    }
})

//User.sync({force: true})

module.exports = User