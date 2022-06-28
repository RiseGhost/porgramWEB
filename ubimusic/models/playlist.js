const bd = require('./database')

const PlayList = bd.sequelize.define('playlist', {
    user_name: {
        type: bd.Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: bd.Sequelize.STRING
    },
    music: {
        type: bd.Sequelize.STRING
    }
})

//Forçar a criação da tabela no banco de dados
//PlayList.sync({force: true})

module.exports = PlayList