# 💻 Aplicação Desktop com Cadastro, Login e Tela Protegida

Este projeto é uma aplicação desktop desenvolvida com React, Electron e Axios no frontend, e Node.js + Express no backend. Ele tem como objetivo praticar conceitos de cadastro, login e telas protegidas.

## 📋 Objetivo

Criar uma aplicação desktop com:
- Tela de **Cadastro**
- Tela de **Login**
- Tela protegida com **lista de usuários**

## 🎯 Regras do Desafio

### Backend (Node.js + Express)

- **POST `/register`**: Cadastra um novo usuário (em memória ou arquivo JSON)
- **POST `/login`**: Valida o usuário
- **GET `/dashboard`**: Retorna dados apenas para usuários logados
- Armazenamento de usuários no formato:
  ```json
  {
    "id": "uuid",
    "email": "usuario@exemplo.com",
    "password": "texto_puro"
  }
  
## Frontend (React + Axios + Electron)
- Tela de cadastro com campos de e-mail e senha
- Tela de login
- Token salvo no localStorage
- Dashboard acessada apenas após login
- Axios configurado para enviar token no header Authorization

### 🧪 Atividades Práticas

- ✅ Criar tela de registro  
- ✅ Criar tela de login com redirecionamento após sucesso  
- ✅ Criar middleware no backend que verifica o token  
- ✅ Na tela protegida, buscar dados com o token salvo  
- ✅ Implementar logout  

---

### 🛡️ Dicas de Segurança

Nunca salve senha em texto puro em produção (use **bcrypt**)  
O token deve ser armazenado com cuidado (`localStorage`, `secureStorage`)  
Rotas protegidas devem sempre verificar o token  

---

### 📦 Tecnologias Utilizadas

Frontend - React · Axios · Electron  
Backend - Node.js · Express  
Persistência - Arquivo JSON ou in-memory  

---

### 🚀 Como Rodar o Projeto

1. Clone o repositório  
```bash
git clone https://github.com/paolamayuri/trabalho-fullstack.git
cd trabalho-fullstack
```

2 Instale e rode o backend

```bash
cd backend
npm install
npm start
```
3. Instale e rode o frontend

```bash
cd ../frontend
npm install
npm start
```
