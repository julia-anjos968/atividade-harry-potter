import express from "express";
import bruxos from "./src/data/bruxos.js";

const serverPort = 3000;

const app = express ();
app.use(express.json());

// Rota principal 
app.get ("/", (req, res) => {
    res.send("Bem vindo ao Mundo de Harry Potter");
});

// Rota dos bruxos
app.get("/bruxos", (req, res) => {
    res.json(bruxos);
});


app.listen(serverPort,() => {
    console.log(`Api dos bruxos está no ar http://localhost:${serverPort}`);
})