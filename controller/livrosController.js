import { deleteLivro, getLivrosId, getTodosLivros, patchLivro, postLivro } from "../services/livrosServices.js";

class LivrosController {
     static async buscaLivro (req, res) {
        try {
            const livros = getTodosLivros();
            res.status(200).send(livros);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async buscaLivroPorId (req, res) {
        try {
            const id = req.params.id ;
            if (id && Number(id)){
                const livroEncontrado = getLivrosId(id);
                
                res.status(200).send(livroEncontrado);
            }else{
                res.status(422).send('Id inválido')
            }
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async insereLivro (req, res){
        try {
            const novoLivro = req.body;
            if(req.body.nome){
                postLivro(novoLivro)
                res.status(201).send('Livro inserido com sucesso');
           }else{
            res.status(422).send('O campo nome é obrigatório')
        }
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async updateLivro (req, res) {
        try {
            const { id } = req.params;
            if (id && Number(id)){
                const modificacao = req.body;
                console.log(modificacao);
                
                patchLivro(modificacao, id)
    
                res.status(200).send(`Update no livro de id ${id} realizada com sucesso.`)

            }else{
                res.status(422).send('Id inválido')
            }
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async excluiLivro ( req, res ){
        try {
            const { id } = req.params;
            if (id && Number(id)){
                deleteLivro(id)
    
                res.status(200).send(`Delete no livro de id ${id} realizada com sucesso.`)

            }else{
                res.status(422).send('Id inválido')
            }
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

export default LivrosController;