import livrosRoute from "./livrosRoute.js"
import favoritosRoute from "./favoritosRoute.js"
import express from "express"
import cors from "cors";

const rotas = ((app) => 
    app.use(
        cors({origin: "*"}),
        express.json(),
        livrosRoute,
        favoritosRoute
    ))

export default rotas;