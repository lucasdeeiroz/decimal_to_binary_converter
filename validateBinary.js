// Middleware para validar se o parâmetro é um número binário válido
const validateBinaryParam = (req, res, next) => {
    const binary = parseInt(req.params.binary, 2);
        if (isNaN(binary)) {
            return res.status(400).json({ error: "Invalid binary number" });
        }
        req.binary = binary;
    next();
};
module.exports = validateBinaryParam;