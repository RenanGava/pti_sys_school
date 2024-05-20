import { prisma } from "../prisma/prisma"

interface IFornecedor{
    nome: string
    cnpj: string
    tel: string
    email: string
    endereco: string
    disciplina: string
}

export class FornecedorService{

    async create(data: IFornecedor){

        const fornecedor = await prisma.fornecedor.create({
            data: {
                cnpj: data.cnpj,
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