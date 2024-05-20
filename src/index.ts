import express, { Request, Response } from 'express';
import { config } from 'dotenv'
import path from 'path';
import { ProfessorControler } from './Controller/ProfessorControler';
import { createRouter } from './Routes/createRoutes';


config()
const app = express()
app.set('view engine', "ejs")
app.set('views', path.join(__dirname, "./public", "/views"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));

app.use("/create", createRouter)


app.get("/", (req: Request, res: Response) => {
    
    res.render('index.ejs')
})

app.listen(3000, () => {
    console.log("Rodando!");
})