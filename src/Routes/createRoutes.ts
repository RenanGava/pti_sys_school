import { Router } from "express"
import { ProfessorControler } from "../Controller/ProfessorControler"




const createRouter = Router()

createRouter.post('/aluno')
createRouter.post('/professor', new ProfessorControler().hanlde)




export { createRouter }