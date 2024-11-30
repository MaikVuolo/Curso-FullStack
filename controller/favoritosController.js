import { deleteLivroFavoritos, getTodosFavoritos, insereFavorito } from "../services/favoritosServices.js";

class FavoritosController {
    static async buscaFavorito (req, res) {
       try {
           const livros = getTodosFavoritos();
           res.status(200).send(livros);
       } catch (err) {
           res.status(500).send(err.message);
       }
   }

   static async insereLivrosFavorito (req, res){
    try {
            const id = req.params.id
            insereFavorito(id)
            res.status(201).send('Livro inserido com sucesso');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }   

    static async excluiLivroFavorito ( req, res ){
        try {
            const { id } = req.params;
            if (id && Number(id)){
                deleteLivroFavoritos(id)
    
                res.status(200).send(`Delete no livro de id ${id} realizada com sucesso.`)

            }else{
                res.status(422).send('Id inválido')
            }
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}


export default FavoritosController;