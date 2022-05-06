const bd = require('./database')

const User = bd.sequelize.define('user', {
    nome: {
        type: bd.Sequelize.STRING
    },
    senha: {
        type: bd.Sequelize.STRING
    }
})

//Forçar a criação da tabela no banco de dados
//User.sync({force: true})

module.exports = User