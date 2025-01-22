import express, { Request, Response } from "express";
import cors from "cors";
import authRoutes from "./routes/authRotes";

const app = express();
const PORT = 3000;

// Configuração de CORS
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

// Rota inicial
app.get("/", (req: Request, res: Response) => {
  res.send("Servidor com TypeScript configurado!");
});

// Rotas de autenticação
app.use("/auth", authRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
