import express from "express";
import dados from "./src/data/dados.js";

const {bruxos} = dados;
const {casas} = dados;
const {varinhas} = dados;
const {animais} = dados;
const {pocoes} = dados;

const serverPort = 3000;

const app = express ();
app.use(express.json());

// Rota principal 
app.get ("/", (req, res) => {
    res.send("Bem vindo ao Mundo de Harry Potter");
});

// Rota dos bruxos
app.get("/bruxos", (req, res) => {
    if (bruxos.length >0 ) { 
        res.status(200).json(bruxos);
} else {
    res.status(404).json ({
        mensagem: "Nenhum bruxo encontrado!"
    })
}
})

// Rota das casas
app.get("/casas", (req,res) => {
    if (casas.length >0) {
        res.status(200).json(casas);
} else {
    res.status(404).json ({
        mensagem: "Nenhuma casa encontrada!"
    })
}
})

// Rota das varinhas
app.get("/varinhas", (req, res) => {
    if (varinhas.length > 0) {
        res.status(200).json(varinhas);
} else {
    res.status(404).json ({
        mensagem: "Nenhuma varinha encontrada!"
    })
    }
});

//Rota dos animais
app.get("/animais", (req, res) => {
    if (animais.length > 0) {
        res.status(200).json(animais);
} else {
    res.status(404).json ({
        mensagem: "Nenhum animal encontrado!"
    })
    }
});

// Rota das poções
app.get("/pocoes", (req, res) => {
  if (pocoes.length > 0) {
        res.status(200).json(pocoes);
} else {
    res.status(404).json ({
        mensagem: "Nenhuma poção encontrada!"
    })
    }
});

// Rota do GetById varinhas
app.get ("/varinhas/:id", (req, res) => {
    const id = parseInt (req.params.id);

    const varinha = varinhas.find(v => v.id === id);

    if (varinha) {
  res.status(200).json(varinha);
} else {
  res.status(404).json({
    mensagem: "varinha nao encontrada!",
  })
}
});

// Rota do GetById animais
app.get ("/animais/:id", (req, res) => {
    const id = parseInt (req.params.id);

    const animal = animais.find(a => a.id === id);

    if (animal) {
  res.status(200).json(animal);
} else {
  res.status(404).json({
    mensagem: "animal nao encontrado!",
  })
}
})

// Rota do GetById poções
app.get ("/pocoes/:id", (req, res) => {
    const id = parseInt (req.params.id);

    const pocao = pocoes.find(p => p.id === id);

    if (pocao) {
  res.status(200).json(pocao);
} else {
  res.status(404).json({
    mensagem: "Pocao nao encontrada!",
  })
}
})

app.listen(serverPort,() => {
    console.log(`Api dos bruxos está no ar http://localhost:${serverPort} !!!`);
})