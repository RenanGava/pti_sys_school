<img src="https://github.com/paularcsarruda/pti_sys_school/assets/122739036/3bab0d2e-4155-47f4-bb9b-d513237cc435" width=250px>

# Projeto Integrador - Grupo 22

Repositório destinado a entrega do Projeto Integrador III do Senac. O grupo possui sete integrantes:

- Bruno Batista de Souza
- Camila Coradi Garcia Leal
- Viviane da Conceição Simões
- Waldecy da Silva Marques Neto
- Renan Dellecrode Gava
- Lucas José Pereira da Costa
- Paula Roberta Corrêa dos Santos Arruda

## Descrição do Projeto

Este é um projeto Node.js com Express que oferece uma API REST para cadastrar alunos, professores e fornecedores em um sistema de gerenciamento escolar. Ele fornece endpoints para cada tipo de entidade, permitindo que os dados sejam enviados e salvos no banco de dados.

>
>    - **Cadastro de Alunos**: Endpoint para cadastrar um novo aluno com os seguintes campos: nome, data de nascimento, CPF, endereço, e-mail e telefone.
>
>    - **Cadastro de Professores**: Endpoint para cadastrar um novo professor com os seguintes campos: nome, CPF, e-mail e disciplina.
>
>    - **Cadastro de Fornecedores**: Endpoint para cadastrar um novo fornecedor com os seguintes campos: nome fantasia, CNPJ e telefone.

## Link do Figma
https://www.figma.com/design/zDulNgpm092NGajc5XAGr0/Projeto-Integrador?node-id=54%3A64&t=yHcmdgqT7pxtFCiw-1

## Funcionalidades

Cadastro de Alunos: Endpoint para cadastrar um novo aluno com os seguintes campos: nome, data de nascimento, CPF, endereço, e-mail e telefone.

Cadastro de Professores: Endpoint para cadastrar um novo professor com os seguintes campos: nome, CPF, e-mail e disciplina.

Cadastro de Fornecedores: Endpoint para cadastrar um novo fornecedor com os seguintes campos: nome fantasia, CNPJ e telefone.

## Sumário
- [Protótipo Figma](#protótipo-figma)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Rotas de Cadastro](#rotas-de-cadastro)
- [Contribuição](#contribuição)
- [Licença](#licença)

### Protótipo Figma

>
O protótipo foi desenvolvido para representar o cadastro de alunos, professores e fornecedores de uma universidade. A interface do usuário foi projetada para ser intuitiva e fácil de navegar, utilizando modais que permitem abrir exclusivamente o cadastro selecionado ao clicar em uma opção. 
>

<img width="1830" alt="Captura de Tela 2024-05-20 às 3 59 43PM" src="https://github.com/paularcsarruda/pti_sys_school/assets/122739036/c03ea11e-a83a-4cae-b90d-cc97d8c72f4d">

<img width="1837" alt="Captura de Tela 2024-05-20 às 5 46 57 PM" src="https://github.com/RenanGava/pti_sys_school/assets/122739036/dcaff769-b48e-4651-a0c0-dc5c147bbe5c">


## Instalação
Instruções para configurar o ambiente e instalar as dependências do projeto.

```bash
git clone https://github.com/RenanGava/pti_sys_school.git
cd pti_sys_school
npm install ou yarn install
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
docker compose up --build <!--para rodar o banco de dados-->

<!--para rodar o servidor e renderizar as paginas-->
npm run start:dev 
ou
yarn start:dev

```

## Estrutura de Diretórios
Descrição da estrutura de diretórios do projeto.

```
PI_Senac/
├── node_modules/
├── prisma/
├── src/
│   ├── controllers/
|   ├── prisma/
│   ├── public/
│   │   ├── css/
|   |   ├── assets/
|   |   ├── views/
│   │   └── js/
│   └── services/
├── tests/
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

## Rotas de Cadastro

### Usuários
- `POST /create/aluno` - Registra um novo usuário.
  - **Request Body:**
    ```json
    {
      "name": "Nome do Usuário",
      "email": "email@exemplo.com",
      "dataNascimento": "26/10/2001",
      "cpf": "000.000.000-00",
      "endereco": "rua fulano de tal n 44",
      "tel": "(99)99999-9999"
    }
    ```

### Usuários
- `POST /create/professor` - Registra um novo usuário.
  - **Request Body:**
    ```json
    {
      "name": "Nome do Usuário",
      "email": "email@exemplo.com",
      "cpf": "000.000.000-00",
      "endereco": "rua fulano de tal n 44",
      "tel": "(99)99999-9999",
      "disciplina": "disciplina",
    }
    ```

### Usuários
- `POST /create/fornecedor` - Registra um novo usuário.
  - **Request Body:**
    ```json
    {
      "name": "Nome do Usuário",
      "email": "email@exemplo.com",
      "cnpj": "000.000.000-00",
      "endereco": "rua fulano de tal n 44",
      "tel": "(99)99999-9999"
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
