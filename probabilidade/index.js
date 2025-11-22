import express from "express";
import cors from "cors";
import { spawn } from "child_process";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/predict", (req, res) => {
  const { curso, nota } = req.body;

  const python = spawn("python", ["predict.py"]);

  python.stdin.write(JSON.stringify({ curso, nota }));
  python.stdin.end();

  python.stdout.on("data", (data) => {
    try {
      const resultado = JSON.parse(data.toString());
      res.json(resultado);
    } catch (e) {
      res.status(500).json({ erro: "Erro ao interpretar retorno do Python." });
    }
  });

  python.stderr.on("data", (data) => {
    console.error("Erro Python:", data.toString());
  });
});

app.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});
