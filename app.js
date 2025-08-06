const express = require("express");
const validateDecimalParam = require("./validateDecimal");
const validateBinaryParam = require("./validateBinary");

const app = express();


// Endpoint para converter decimal para binário
app.get("/to-binary/:decimal", validateDecimalParam, (req, res) => {
  const binary = req.decimal.toString(2); // Converte o número decimal para binário
  res.json({ decimal: req.decimal, binary }); // Retorna a resposta como JSON
});

// Endpoint para converter decimal para hexadecimal
app.get("/to-hex/:decimal", validateDecimalParam, (req, res) => {
  const hex = req.decimal.toString(16).toUpperCase(); // Converte para hexadecimal e deixa em maiúsculas
  res.json({ decimal: req.decimal, hex }); // Retorna a resposta como JSON
});

// Endpoint para converter decimal para octal
app.get("/to-octal/:decimal", validateDecimalParam, (req, res) => {
  const octal = req.decimal.toString(8); // Converte para octal
  res.json({ decimal: req.decimal, octal }); // Retorna a resposta como JSON
});

// Endpoint para converter binário para decimal
app.get("/from-binary/:binary", validateBinaryParam, (req, res) => {
  const decimal = req.binary.toString(10); // Converte para decimal
  res.json({ binary: req.binary, decimal }); // Retorna a resposta como JSON
});

module.exports = app;