import { Request, Response } from "express";
import { FornecedorService } from "../Service/FornecedorService";



export class FornecedorController{



    async hanldeCreate(req: Request, res: Response){

        console.log(req.body);
        
        const fornecedorService = new FornecedorService();
        await fornecedorService.create(req.body)
    
        return res.render("index.ejs")
    }


    async handlelist(req: Request, res: Response){
        const fornecedorService = new FornecedorService();

        return res.json(await fornecedorService.list())
    }
}