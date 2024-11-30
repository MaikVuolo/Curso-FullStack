import { Router } from "express";
import FavoritosController from "../controller/favoritosController.js";

const route = Router();

route.get("/favoritos", FavoritosController.buscaFavorito)
route.post("/favoritos/:id", FavoritosController.insereLivrosFavorito)
route.delete("/favoritos/:id", FavoritosController.excluiLivroFavorito)

export default route;