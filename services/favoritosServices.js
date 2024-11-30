import fs from "fs";

function getTodosFavoritos(){
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deleteLivroFavoritos (id){
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))  
    const  indiceModificacao = livros.findIndex( livro => livro.id === id)
    livros.splice(indiceModificacao,1)

    return fs.writeFileSync("favoritos.json", JSON.stringify(livros))
}

function insereFavorito (id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))  
    const livrosFavoritos = JSON.parse(fs.readFileSync("favoritos.json"))  
     
    const livroEncontrado = livros.find( livro => livro.id === id)

    const novaListaLivrosFavoritos = [...livrosFavoritos, livroEncontrado]

    return fs.writeFileSync("favoritos.json", JSON.stringify(novaListaLivrosFavoritos))
}

export { getTodosFavoritos, deleteLivroFavoritos, insereFavorito };