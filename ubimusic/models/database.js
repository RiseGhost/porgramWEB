const Sequelize = require("sequelize")
const sequelize = new Sequelize("music", "root", "25789", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    socketPath: '/var/run/mysqld/mysqld.sock'
})


//database:
sequelize.authenticate().then((function(){
    console.log("Conectado com sucesso")
})).catch((function(erro){
    console.log("Erro na conexão: " + erro)
}))
//************************ */

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}