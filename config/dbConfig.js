const mongoose = require('mongoose')

async function main(){
    try {
        // Se conseguir conectar com o banco
        await mongoose.connect("mongodb+srv://caio_rafael:belarmino1@cluster0.1rcav8h.mongodb.net/annotations?retryWrites=true&w=majority")
        console.log("Conectado ao banco!");
    } catch (error) {
        // Se não conseguir
        console.log(`Erro: ${error}`);
    }
}

module.exports = main