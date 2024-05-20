import { prisma } from "../prisma/prisma"

interface IProfessor{
    nome: string
    cpf: string
    tel: string
    email: string
    endereco: string
    disciplina: string
}

export class ProfessorService{

    async create(data: IProfessor){

        const professor = await prisma.professor.create({
            data: {
                cpf: data.cpf,
                diciplina: data.disciplina,
                email: data.email,
                endereco: data.endereco,
                name: data.nome,
                telefone: data.tel
            }
        })

        return
    }

    async list(){
        return await prisma.professor.findMany()
    }
}