const express = require("express")
const routes = require("./routes")
const cors = require("cors")

const PORT = process.env.PORT || 3333;

const app = express();

const dbConfig = require('../config/dbConfig')
dbConfig()

app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(3333, function(){
    console.log("Servidor online!")
});