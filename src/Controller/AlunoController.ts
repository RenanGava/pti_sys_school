import { Request, Response } from "express";
import { AlunoService } from "../Service/AlunoService";



export class AlunoController{



    async hanldeCreate(req: Request, res: Response){

        console.log(req.body);
        
        const alunoService = new AlunoService();
        await alunoService.create(req.body)
    
        return res.render("index.ejs")
    }


    async handlelist(req: Request, res: Response){
        const alunoService = new AlunoService();

        return res.json(await alunoService.list())
    }
}