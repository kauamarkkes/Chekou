//by joao
// script do servidor express

const express = require('express'); //variavel com a lib express
const app = express(); //servidor na variavel app
const PORTA = 3000;
const user = require("./rotas/rotasUser"); //arquivo da rotas de usuario
const taref = require("./rotas/tarefas"); //arquivo da rota de tarefas
app.use(express.json()); //ler tudo em formato json
 //o que acontecer mandar para rotasTaref

app.use("/usuario", user); //o que acontecer na url usuarios, mandar para a variavel user
app.use("/tarefas", taref); //o que acontecer em tarefas, mandar para taref

app.get("/", (req, res) => {res.send("servidor rodando");}); // requisição pagina inicial
app.listen(PORTA, () => {console.log("localhost port 3000");}); //porta do servidor




