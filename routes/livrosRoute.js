import { Router } from "express";
import LivrosController from "../controller/livrosController.js";

const route = Router();

route.get("/livros", LivrosController.buscaLivro)
route.get("/livros/:id", LivrosController.buscaLivroPorId)
route.post("/livros", LivrosController.insereLivro)
route.patch("/livros/:id", LivrosController.updateLivro)
route.delete("/livros/:id", LivrosController.excluiLivro)

export default route;