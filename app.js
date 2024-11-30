import express from "express";
import rotas from "./routes/index.js";


const port = 8000;

const app = express();
rotas(app)

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
    
})

