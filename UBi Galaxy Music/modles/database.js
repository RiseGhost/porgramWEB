const Sequelize = require("sequelize")
const sequelize = new Sequelize("music", "root", "25789", {
    host: "localhost",
    dialect: "mysql"
})


//database:
sequelize.authenticate().then((function(){
    console.log("conectado com sucesso")
})).catch((function(erro){
    console.log("erro ao se conectar: " + erro)
}))
//************************ */

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}