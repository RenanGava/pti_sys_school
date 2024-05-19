-- Cria a tabela "aluno"
CREATE TABLE aluno (
    nome VARCHAR(100),
    data_de_nascimento VARCHAR(50) NOT NULL,
    cpf VARCHAR(30) NOT NULL PRIMARY KEY,
    endereco VARCHAR(150) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(50) NOT NULL
);