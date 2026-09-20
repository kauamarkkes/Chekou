//by joao
// script do servidor express

const express = require('express'); //variavel com a lib express
const app = express(); //servidor na variavel app
const cors = require("cors"); //lib do cors (necessario para falar com o front-end)
const PORTA = 3000;
app.use(cors()); //permissao para outra porta conversar com o servidor
const user = require("./rotas/loguin"); //arquivo da rotas de usuario
const taref = require("./rotas/tarefas"); //arquivo da rota de tarefas
app.use(express.json()); //ler tudo em formato json
 //o que acontecer mandar para rotasTaref

app.use("/login", user); //o que acontecer na url usuarios, mandar para a variavel user
app.use("/tarefas", taref); //o que acontecer em tarefas, mandar para taref

app.get("/", (req, res) => {res.send("servidor rodando");}); // requisição pagina inicial
app.listen(PORTA, () => {console.log("localhost port 3000");}); //porta do servidor




