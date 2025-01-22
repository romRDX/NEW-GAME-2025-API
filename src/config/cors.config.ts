const corsOptions = {
  origin: "*", // ["http://meusite.com", "http://outrodominio.com"], // Domínios permitidos
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Cabeçalhos permitidos
  credentials: true, // Permite envio de cookies se necessário
};

module.exports = corsOptions;
