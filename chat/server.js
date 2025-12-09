import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import { v4 as uuidv4 } from "uuid";

const sessions = new Map();

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

function criarSessao() {
  const sessionId = uuidv4();
  const session = {
    historico: [{ role: "system", content: promptInicial }],
    contadorPerguntas: 0,
    resultadoFinal: null,
  };
  sessions.set(sessionId, session);
  return { sessionId, session };
}

function getSessao(sessionId) {
  return sessions.get(sessionId) || null;
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
  const { message, sessionId: clientSessionId } = req.body;

  let sessionId = clientSessionId;
  let session;

  // 1) Se é "Começar" ou não veio sessionId → cria nova sessão
  if (message === "Começar" || !sessionId) {
    const criada = criarSessao();
    sessionId = criada.sessionId;
    session = criada.session;
  } else {
    session = getSessao(sessionId);
    if (!session) {
      // sessão perdida/expirada
      const criada = criarSessao();
      sessionId = criada.sessionId;
      session = criada.session;
    }
  }

  // 2) Se não for "Começar", adiciona resposta do usuário e incrementa contador
  if (message !== "Começar") {
    session.historico.push({ role: "user", content: message });
    session.contadorPerguntas++;
  }

  console.log(`Sessão ${sessionId} | Perguntas: ${session.contadorPerguntas}`);

  try {
    let promptAtual = session.historico
      .map((h) => `${h.role}: ${h.content}`)
      .join("\n");

    if (session.contadorPerguntas === 8) {
      promptAtual += "\nAgora, faça a análise final e sugira as carreiras.";
    }

    const resposta = await chamarOpenAI(promptAtual);

    if (session.contadorPerguntas < 8) {
      session.historico.push({ role: "assistant", content: resposta });

      return res.json({
        reply: resposta,
        final: false,
        sessionId,  // 👈 devolve o id
      });
    } else if (session.contadorPerguntas === 8) {
      session.resultadoFinal = resposta;
      console.log("Resultado final gerado:", session.resultadoFinal);

      return res.json({
        reply: "Obrigado por responder! Seu resultado está pronto.",
        final: true,
        sessionId, // 👈 devolve também aqui
      });
    }

    // Se por algum motivo passar de 8, força final
    return res.json({
      reply: "Questionário finalizado.",
      final: true,
      sessionId,
    });
  } catch (err) {
    console.error("Erro detalhado:", err);
    res
      .status(500)
      .json({ error: "Erro ao processar a requisição", details: err.message });
  }
});


app.get("/resultado", (req, res) => {
  const { sessionId } = req.query;

  if (!sessionId) {
    return res.status(400).json({ error: "sessionId é obrigatório." });
  }

  const session = getSessao(sessionId);
  if (!session || !session.resultadoFinal) {
    return res
      .status(404)
      .json({ error: "Resultado ainda não disponível ou sessão inválida." });
  }

  const mensagemDeErro =
    "Não foi identificado nenhuma área de atuação, tente novamente.";

  if (session.resultadoFinal.includes(mensagemDeErro.trim())) {
    // opcional: limpar a sessão
    sessions.delete(sessionId);
    console.log(
      `Sessão ${sessionId}: resultado 'Não identificado' – sessão reiniciada.`
    );
    return res.json({
      resultado: session.resultadoFinal,
      reiniciado: true,
    });
  }

  return res.json({
    resultado: session.resultadoFinal,
    reiniciado: false,
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em ${PORT}`);
  console.log("Aguardando conexões do frontend...");
});

//py -m pip install openai
//npm install express cors dotenv openai
//node server.js