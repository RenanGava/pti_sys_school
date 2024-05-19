package com.pti.backend.javaspringbackendpti.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.pti.backend.javaspringbackendpti.models.*;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
public class CadastroController {

    private final CadastroService cadastroService;

    @Autowired
    public CadastroController(CadastroService cadastroService) {

        this.cadastroService = cadastroService;
    }

    @PostMapping("/aluno")
    @ResponseBody
    public ResponseEntity<String> cadastrarAluno(@RequestBody Aluno alunoRequest) { // (@RequestBody Aluno alunoRequest) {
        cadastroService.cadastrarAluno(
            alunoRequest.getNome(),
            alunoRequest.getDataNascimento(),
            alunoRequest.getCpf(),
            alunoRequest.getEndereco(),
            alunoRequest.getEmail(),
            alunoRequest.getTelefone()
        );
        return ResponseEntity.ok("Aluno cadastrado com sucesso!");
    }

//    @GetMapping("/aluno/{cpf}")
//    public ResponseEntity<Aluno> obterAluno(@PathVariable String cpf) {
//        Aluno aluno = AlunoDAO.findByCpf(cpf);
//        if (aluno != null) {
//            return ResponseEntity.ok(aluno);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

    @PostMapping("/professor")
    @ResponseBody
    public ResponseEntity<String> cadastrarProfessor(@RequestBody Professor professorRequest) {
        cadastroService.cadastrarProfessor(
            professorRequest.getNome(),
            professorRequest.getCpf(),
            professorRequest.getEmail(),
            professorRequest.getDisciplina()
        );
        return ResponseEntity.ok("Professor cadastrado com sucesso!");
    }

//    @GetMapping("/professor/{id}")
//    public ResponseEntity<Professor> obterProfessor(@PathVariable Long id) {
//        Professor professor = new Professor();
//        return ResponseEntity.ok(professor);
//    }


    @PostMapping("/fornecedor")
    @ResponseBody
    public ResponseEntity<String> cadastrarFornecedor(@RequestBody Fornecedor fornecedorRequest) {
        cadastroService.cadastrarFornecedor(
            fornecedorRequest.getNome_fantasia(),
            fornecedorRequest.getCnpj(),
            fornecedorRequest.getTelefone()
        );
        return ResponseEntity.ok("Fornecedor cadastrado com sucesso!");
    }
}
