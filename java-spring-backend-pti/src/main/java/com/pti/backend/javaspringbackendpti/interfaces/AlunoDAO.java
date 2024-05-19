package com.pti.backend.javaspringbackendpti.interfaces;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import com.pti.backend.javaspringbackendpti.models.Aluno;
import org.springframework.transaction.annotation.Transactional;


@Repository
public interface AlunoDAO extends JpaRepository<Aluno, Long> {


    // Insere um novo aluno
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO aluno (nome, data_de_nascimento, CPF, endereco, email, telefone) VALUES (?1, ?2, ?3, ?4, ?5, ?6)", nativeQuery = true)
    void inserirAluno(String nome, String dataNascimento, String cpf, String endereco, String email, String telefone);
    
    // Encontra um aluno pelo nome
    @Query(value = "SELECT * FROM aluno WHERE nome = ?", nativeQuery = true)
    Aluno findByNome(String nome);

    // Encontra um aluno pelo CPF
//    @Transactional(readOnly = true)
//    @Query(value = "SELECT * FROM aluno WHERE cpf = ?1", nativeQuery = true)
//    static Aluno findByCpf(String cpf) {
//        return entityManager.createNativeQuery("SELECT * FROM aluno WHERE cpf = ?", Aluno.class)
//                .setParameter(1, cpf)
//                .getSingleResult();
//    }


}
