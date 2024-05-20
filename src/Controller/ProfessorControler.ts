import { Request, Response } from "express";
import { ProfessorService } from "../Service/ProfessorService";


export class ProfessorControler{

    async hanldeCreate(req: Request, res: Response){
        const professorService = new ProfessorService();

        console.log(req.body);
        await professorService.create(req.body)
    
        return res.render("index.ejs")
    }


    async handlelist(req: Request, res: Response){
        const professorService = new ProfessorService();

        return res.json(await professorService.list())
    }
} 