import { prisma } from "../prisma/prisma"

interface IAluno{
    nome: string
    cpf: string
    dataNascimento: string
    tel: string
    email: string
    endereco: string
}

export class AlunoService{

    async create(data: IAluno){

        const aluno = await prisma.aluno.create({
            data: {
                cpf: data.cpf,
                dataNascimento: data.dataNascimento,
                email: data.email,
                endereco: data.endereco,
                name: data.nome,
                telefone: data.tel
            }
        })

        return aluno
    }

    async list(){
        return await prisma.aluno.findMany()
    }
}