import { useEffect, useState, useRef } from "react";
import "./chat.css";

const BACKEND_URL = "http://localhost:3000";

export default function Chat({ setFinalizou }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const startedRef = useRef(false);

  // Função para adicionar mensagens
  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  // Mostrar indicador "digitando..."
  const setLoadingState = (v) => setLoading(v);

  // Envia mensagem ao backend
  const sendMessage = async (message) => {
    setLoadingState(true);

    try {
      const response = await fetch(`${BACKEND_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      addMessage(data.reply, "assistant");
      if (data.final) {
        setTimeout(() => {
          setFinalizou(true);
        }, 1500);
      }
    } catch (err) {
      addMessage(
        "Erro ao conectar com o servidor. Verifique se o backend está rodando.",
        "assistant"
      );
    } finally {
      setLoadingState(false);
    }
  };

  // Envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    addMessage(input, "user");
    const msg = input;
    setInput("");
    await sendMessage(msg);
  };

  // Primeira pergunta (start)
  useEffect(() => {
    if (startedRef.current) return; // impede rodar 2x
    startedRef.current = true; // marca como iniciado

    const iniciar = async () => {
      setLoadingState(true);
      try {
        const res = await fetch(`${BACKEND_URL}/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: "Começar" }),
        });

        const data = await res.json();
        addMessage(data.reply, "assistant");
      } catch {
        addMessage("Não foi possível conectar ao servidor.", "assistant");
      } finally {
        setLoadingState(false);
      }
    };

    iniciar();
  }, []);

  return (
    <div className="chat-wrapper">
      <header className="chat-header">
        <h1>Orientador Vocacional</h1>
        <p>Responda 8 perguntas para descobrir sua vocação.</p>
      </header>

      <div className="messages-area">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`bubble ${m.sender === "user" ? "user" : "assistant"}`}
          >
            {m.text}
          </div>
        ))}

        {loading && (
          <div className="typing">
            <span></span>
            <span></span>
            <span></span>
            <p>Orientador está digitando...</p>
          </div>
        )}
      </div>

      <form className="input-area" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite sua resposta..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
