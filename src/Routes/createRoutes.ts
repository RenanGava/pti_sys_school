import { Router } from "express"
import { ProfessorControler } from "../Controller/ProfessorControler"
import { AlunoController } from "../Controller/AlunoController"
import { FornecedorController } from "../Controller/FornecedorController"




const createRouter = Router()

createRouter.post('/aluno', new AlunoController().hanldeCreate)
createRouter.post('/professor', new ProfessorControler().hanldeCreate)
createRouter.post('/fornecedor', new FornecedorController().hanldeCreate)




export { createRouter }