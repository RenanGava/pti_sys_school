# Cadastro de Alunos, Professores e Fornecedores - Java Spring Backend

Este é um projeto Java Spring Boot que oferece uma API REST para cadastrar alunos, professores e fornecedores em um sistema de gerenciamento escolar. Ele fornece endpoints para caeda tipo de entidade, permitindo que os dados sejam enviados e salvos no banco de dados. Funcionalidades

* Cadastro de Alunos: Endpoint para cadastrar um novo aluno com os seguintes campos: nome, data de nascimento, CPF, endereço, e-mail e telefone.

* Cadastro de Professores: Endpoint para cadastrar um novo professor com os seguintes campos: nome, CPF, e-mail e disciplina.

* Cadastro de Fornecedores: Endpoint para cadastrar um novo fornecedor com os seguintes campos: nome fantasia, CNPJ e telefone.

## Sumário
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Rotas de Cadastro](#rotas-de-cadastro)
- [Testes](#testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação


## Configuração

## Tecnologias Utilizadas

- Java
- Spring Boot
- Sping Data JPA
- PostgreSQL

## Configuração

## Uso

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
```
PORT=3000
DATABASE_URL=your-database-url
```
A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura de Diretórios
Descrição da estrutura de diretórios do projeto.

```
nome-do-projeto/
├── node_modules/
├── prisma/
├── src/
│   ├── controllers/
│   ├── interfaces/
│   ├── models/
│   ├── public/
│   │   ├── css/
|   |   ├── assets/
|   |   ├── viewa/
│   │   └── js/
│   ├── services/
│   └── views/
├── tests/
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

## Rotas de Cadastro

### Usuários
- `POST /users/register` - Registra um novo usuário.
  - **Request Body:**
    ```json
    {
      "name": "Nome do Usuário",
      "email": "email@exemplo.com",
      "password": "senha123"
    }
    ```
  - **Response:**
    ```json
    {
      "message": "Usuário registrado com sucesso",
      "user": {
        "id": 1,
        "name": "Nome do Usuário",
        "email": "email@exemplo.com"
      }
    }
    ```

- `GET /users/:id` - Retorna detalhes de um usuário específico.
  - **Response:**
    ```json
    {
      "id": 1,
      "name": "Nome do Usuário",
      "email": "email@exemplo.com"
    }
    ```

## Testes

## Contribuição

## Licença
