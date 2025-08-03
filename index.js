const express = require("express");

const app = express();
const port = 3000;

// Middleware para validar se o parâmetro é um número decimal válido
const validateDecimal = (req, res, next) => {
  const decimal = parseInt(req.params.decimal, 10);
  if (isNaN(decimal)) {
    return res.status(400).json({ error: "Invalid decimal number" });
  }
  req.decimal = decimal; // Adiciona o valor decimal ao objeto de requisição para uso posterior
  next();
};

// Endpoint para converter decimal para binário
app.get("/to-binary/:decimal", validateDecimal, (req, res) => {
  const binary = req.decimal.toString(2); // Converte o número decimal para binário
  res.json({ decimal: req.decimal, binary }); // Retorna a resposta como JSON
});

// Endpoint para converter decimal para hexadecimal
app.get("/to-hex/:decimal", validateDecimal, (req, res) => {
  const hex = req.decimal.toString(16).toUpperCase(); // Converte para hexadecimal e deixa em maiúsculas
  res.json({ decimal: req.decimal, hex });
});

// Novo endpoint para converter decimal para octal
app.get("/to-octal/:decimal", validateDecimal, (req, res) => {
  const octal = req.decimal.toString(8); // Converte para octal
  res.json({ decimal: req.decimal, octal });
});

// Endpoint para converter binário para decimal
app.get("/from-binary/:binary", (req, res) => {
  const binary = req.params.binary;
  if (!/^[01]+$/.test(binary)) {
    return res.status(400).json({ error: "Invalid binary number" });
  }
  const decimal = parseInt(binary, 2);
  res.json({ binary, decimal });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});