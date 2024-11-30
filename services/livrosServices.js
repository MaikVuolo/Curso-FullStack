import fs from "fs";

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivrosId (id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))   
    const busca = livros.filter( livro => livro.id === id ) [0]
    
    return busca
}

function postLivro (novoLivro) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))  

    return fs.writeFileSync("livros.json", JSON.stringify([...livros, novoLivro]))
}

function patchLivro (modificacao, id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))  
    const indiceModificacao = livros.findIndex( livro => livro.id === id)
    const conteudoModificado = { ...livros[indiceModificacao], ...modificacao}
    livros[indiceModificacao] = conteudoModificado
    
   return fs.writeFileSync("livros.json", JSON.stringify(livros))

}

function deleteLivro (id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))  
    const  indiceModificacao = livros.findIndex( livro => livro.id === id)
    livros.splice(indiceModificacao,1)

    return fs.writeFileSync("livros.json", JSON.stringify(livros))
}

export { getTodosLivros, getLivrosId, postLivro, patchLivro, deleteLivro };