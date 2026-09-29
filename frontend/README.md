# Chekou

O Chekou é um organizador de tarefas inspirado no Trello, desenvolvido para auxiliar estudantes e pequenas equipes no gerenciamento de atividades, projetos e entregas.

O projeto faz parte da disciplina de Front-end Frameworks e será desenvolvido de forma evolutiva:

- **AV1:** Protótipo funcional utilizando React, dados locais, React Hooks para gerenciamento de estado e localStorage para persistência das informações.
- **AV2:** Evolução do sistema com integração de API, autenticação, gerenciamento de sessão e rotas protegidas.

O mesmo tema e repositório serão utilizados nas duas entregas.

---

# 1. Informações acadêmicas

- **Curso:** Ciência da Computação.
- **Disciplina:** Front-end Frameworks.
- **Período:** 2026.2.
- **Instituição:** UNINASSAU - GRAÇAS.
- **Professor(a):** Diogo Francisco Borba Rodrigues.
- **Turma:** 4NB.
- **Projeto:** Chekou.
- **Entrega atual:** AV1.
- **Repositório:** https://github.com/kauamarkkes/Chekou

---

# 2. Problema e público-alvo

Com o aumento das atividades acadêmicas e projetos em grupo, muitas tarefas acabam sendo organizadas em diferentes locais, como mensagens, anotações e ferramentas variadas.

Essa dispersão dificulta o acompanhamento dos prazos, responsáveis e andamento das atividades.

O Chekou tem como objetivo centralizar o gerenciamento das tarefas em uma única aplicação, permitindo organizar atividades, acompanhar status e visualizar o progresso dos projetos.

## Público-alvo

- Estudantes.
- Grupos de trabalhos acadêmicos.
- Pequenas equipes.
- Pessoas que precisam organizar projetos e tarefas.

---

# 3. Integrantes e contribuições

| Integrante | Matrícula | Função | Contribuições |
|---|---|---|---|
| **Kauã Henrique** | **01846088** | Scrum / Fullstack | Organização do projeto, planejamento e desenvolvimento das funcionalidades. |
| **Lázaro Antonio** | **01806088** | Front-end | Desenvolvimento das interfaces, componentes React e estilos. |
| **João Erick** | **01849942** | Back-end | Estruturação inicial do servidor e preparação da API. |
| **João victhor** | **01849774** | Testes | Validação das funcionalidades e identificação de problemas. |
| **Bruno José** | **01806289** | Fullstack | Integração das funcionalidades e organização dos dados. |


---

# 4. Funcionalidades

## Funcionalidades implementadas

- Dashboard inicial.
- Navegação entre páginas utilizando React Router.
- Listagem de tarefas.
- Criação e gerenciamento de tarefas.
- Alteração de status das tarefas.
- Filtros por situação.
- Organização por projetos.
- Componentes reutilizáveis.
- Gerenciamento de estado utilizando React Hooks.
- Persistência dos dados utilizando localStorage.

---

# Funcionalidades em desenvolvimento AV1

- Melhorias no fluxo de criação de tarefas.
- Validação de campos obrigatórios.
- Melhorias no quadro Kanban.
- Mensagens de lista vazia.
- Mensagens de sucesso e erro.
- Melhorias na experiência do usuário.

---

# Funcionalidades adicionais

## Painel de indicadores

Permite acompanhar informações das tarefas através de métricas:

- Quantidade de tarefas concluídas.
- Quantidade de tarefas pendentes.
- Organização por situação.
- Filtros de acompanhamento.

## Histórico de atividades

Permite registrar alterações realizadas nas tarefas:

- Criação.
- Alteração de status.
- Atualizações realizadas pelo usuário.

---

# 5. Tecnologias utilizadas

## Front-end

- React.
- JavaScript.
- Vite.
- React Router.
- CSS.

## Back-end

- Node.js.
- Express.
- CORS.

## Versionamento

- Git.
- GitHub.

---

# 6. Estrutura do projeto

```
Chekou/

├── frontend/

│   ├── src/

│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── global.css

└── backend/

    └── src/

        ├── server.js
        └── rotas/
```

---

# 9. Como executar o projeto

## Pré-requisitos

Necessário possuir instalado:

- Node.js
- npm
- Git

---

## Clonar o repositório

```
git clone https://github.com/kauamarkkes/Chekou.git

cd Chekou
```

---

# Executar Front-end

Entrar na pasta:

```
cd frontend
```

Instalar dependências:

```
npm install
```

Executar aplicação:

```
npm run dev
```

A aplicação estará disponível normalmente em:

```
http://localhost:5173
```

---

# Executar Backend

Entrar na pasta:

cd backend
```

Instalar dependências:

npm install
```

Executar servidor:

npm start
```

Servidor:

```
http://localhost:3000
```

---
