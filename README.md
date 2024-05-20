# Cadastro de Alunos, Professores e Fornecedores - Node.js Express Backend

Este é um projeto Node.js com Express que oferece uma API REST para cadastrar alunos, professores e fornecedores em um sistema de gerenciamento escolar. Ele fornece endpoints para cada tipo de entidade, permitindo que os dados sejam enviados e salvos no banco de dados.

## Funcionalidades

Cadastro de Alunos: Endpoint para cadastrar um novo aluno com os seguintes campos: nome, data de nascimento, CPF, endereço, e-mail e telefone.

Cadastro de Professores: Endpoint para cadastrar um novo professor com os seguintes campos: nome, CPF, e-mail e disciplina.

Cadastro de Fornecedores: Endpoint para cadastrar um novo fornecedor com os seguintes campos: nome fantasia, CNPJ e telefone.

## Sumário
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Rotas de Cadastro](#rotas-de-cadastro)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação
Instruções para configurar o ambiente e instalar as dependências do projeto.

```bash
git clone https://github.com/RenanGava/pti_sys_school.git
cd pti_sys_school
npm install
```

## Configuração
Detalhes sobre como configurar as variáveis de ambiente e outras configurações necessárias para executar o projeto.

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
```
PORT=3000
DATABASE_URL=your-database-url
```
A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Tecnologias Utilizadas

- Node Js
- Express
- PostgreSQL
- Prisma ORM
- HTML
- CSS

## Uso

Instruções sobre como iniciar e usar o projeto.

Para iniciar o servidor de desenvolvimento:

```
npm start

```

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

## Contribuição

Regras e diretrizes para contribuir com o projeto.

1. Fork o repositório.
2. Crie uma branch para sua feature (git checkout -b feature/nova-feature).
3. Commit suas mudanças (git commit -m 'Adiciona nova feature').
4. Faça o push para a branch (git push origin feature/nova-feature).
5. Abra um Pull Request.

## Licença

Informações sobre a licença do projeto.

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
