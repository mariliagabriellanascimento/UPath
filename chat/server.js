import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const promptInicial = `
Você é um orientador vocacional experiente. Seu objetivo é ajudar o usuário a descobrir qual área acadêmica ele tem mais afinidade.
Sua tarefa é entrevistar o usuário com EXATAMENTE 8 perguntas.


Perguntas:
1. Qual tipo de atividade você mais gosta de fazer no dia a dia?
2. Quando você enfrenta um problema difícil, o que você costuma fazer para resolvê-lo?
3. O que te motiva mais: entender como as coisas funcionam, ajudar pessoas, criar algo novo, ou liderar projetos?
4. Você prefere trabalhar com números, pessoas, natureza, arte ou ideias abstratas?
5. Como você se sente ao trabalhar em equipe?
6. Que tipo de matéria escolar você mais gostava (ou gosta)?
7. Em que tipo de ambiente você se sente mais produtivo: escritório, laboratório, ao ar livre, palco/estúdio ou sala de reunião?
8. Qual é o seu sonho ou plano futuro?


Áreas possíveis:
1. Exatas (ex: Engenharia, Matemática, Computação)
2. Humanas (ex: História, Psicologia, Filosofia)
3. Biológicas (ex: Medicina, Enfermagem, Biologia)
4. Artes (ex: Música, Teatro, Design, Artes Visuais)
5. Negócios (ex: Administração, Economia, Marketing)


IMPORTANTE:
- NUNCA faça mais de uma pergunta, SEMPRE FAÇA UMA PERGUNTA POR VEZ MESMO QUE O USUÁRIO NÃO RESPONDA CORRETAMENTE.
- Use linguagem simples, amigável e empática com EXEMPLO.
- gere o exemplo sem ser tendencioso.
- SEMPRE faça a pergunta em PORTUGUÊS.
- GERE EXEMPLO PARA todas as perguntas EXETO (3°,4°,7° e 8°) .
- sempre coloque vírgulas ',' NUNCA COLOQUE 'ou' emtre os exemplos gerados.
- no final de cada exemplo gerado para a pergunta coloque 'entre outros'.
- antes de cada pergunta coloque o número dela (1°, 2°, 3° ...).
- Não faça mais que 8 perguntas.
- Após a 8ª resposta, analise todo o histórico e sugira de 3 possíveis áreas acadêmicas que combinam com o perfil do usuário.
- GERE SÓ 3 possiveis CURSOS ACADÊMICAS NÃO ÁREAS (Ex: enfermagem, pedagogia, direito ...)
- Seja claro e objetivo.
- Não gera NENHUMA DESCRIÇÃO.
- Não fale NADA antes da pergunta, só faça a pergunta.
- Não gera NADA além do resultado sugerido das possíveis áreas.
- Caso não consiga identificar a área, mostrar exatamente este texto:
  "Não foi identificado nenhuma área de atuação, tente novamente.
- SÓ GERE ESSA MENSAGEM NO FINAL DO QUESTIONÁRIO. 
"
`;

let historico = [];
let contadorPerguntas = 0;
let resultadoFinal = null;

function resetChat() {
  historico = [{ role: "system", content: promptInicial }];
  contadorPerguntas = 0;
  resultadoFinal = null;
  console.log("Chat reiniciado.");
}

async function chamarOpenAI(prompt) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 150,
  });

  return completion.choices[0].message.content.trim();
}

// Rota principal do chat
app.post("/chat", async (req, res) => {
  const { message } = req.body;

if (message === "Começar") {
  resetChat();
} else {
  historico.push({ role: "user", content: message });
  contadorPerguntas++;
}

  console.log(`Contador de perguntas: ${contadorPerguntas}`);

  try {
    let promptAtual = historico.map(h => `${h.role}: ${h.content}`).join("\n");

    if (contadorPerguntas === 8) {
      promptAtual += "\nAgora, faça a análise final e sugira as carreiras.";
    }

    const resposta = await chamarOpenAI(promptAtual);

    if (contadorPerguntas < 8) {
      historico.push({ role: "assistant", content: resposta });
      res.json({ reply: resposta, final: false });
    } else if (contadorPerguntas === 8) {
      resultadoFinal = resposta;
      console.log("Resultado final gerado:", resultadoFinal);
      res.json({ reply: "Obrigado por responder! Seu resultado está pronto.", final: true });
      
    }

  } catch (err) {
    console.error("Erro detalhado:", err);
    res.status(500).json({ error: "Erro ao processar a requisição", details: err.message });
  }
});

app.get("/resultado", (req, res) => {
const mensagemDeErro = "Não foi identificado nenhuma área de atuação, tente novamente.";

  if (resultadoFinal) {
 
    if (resultadoFinal.includes(mensagemDeErro.trim())) {
      console.log("Resultado 'Não Identificado' detectado. Reiniciando chat...");
      resetChat();
      return res.json({ resultado: resultadoFinal, reiniciado: true }); 
    }
    return res.json({ resultado: resultadoFinal, reiniciado: false });

  } else {
    res.status(404).json({ error: "Resultado ainda não disponível ou chat não finalizado" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Aguardando conexões do frontend...");
});

//py -m pip install openai
//npm install express cors dotenv openai
//node server.js