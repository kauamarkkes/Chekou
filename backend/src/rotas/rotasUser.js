//by joao
// rota de usuario

const express = require("express"); //lib express
const router = express.Router(); // variavel da rota

router.get("/", (req, res) => {res.send("pagina de usuario");}); //rota de usuario junto com mensagem


module.exports = router; //exportação da rota
