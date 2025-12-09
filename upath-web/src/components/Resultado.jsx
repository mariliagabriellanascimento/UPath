import { useEffect, useState } from "react";
import { NODE_CHAT_URL } from "../services/api";
import "./Chat.css";

const BACKEND_URL = NODE_CHAT_URL;

export default function Resultado({ sessionId }) {
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    if (!sessionId) {
      setResultado("Sessão inválida. Tente refazer o teste.");
      return;
    }

    const carregar = async () => {
      try {
        const res = await fetch(
          `${BACKEND_URL}/resultado?sessionId=${encodeURIComponent(sessionId)}`
        );
        const data = await res.json();

        if (data.error) {
          setResultado(data.error);
        } else {
          setResultado(data.resultado);
        }
      } catch {
        setResultado("Erro ao carregar resultado.");
      }
    };

    carregar();
  }, [sessionId]);

  return (
    <div className="resultado-wrapper">
      {!resultado ? (
        <div className="resultado-loading">
          <p>Analisando suas respostas...</p>
          <div className="dots"><span></span><span></span><span></span></div>
        </div>
      ) : (
        <div className="resultado-content">
          <h2>Seu Resultado</h2>
          <p>Com base no seu perfil, aqui estão algumas áreas sugeridas:</p>

          <div className="resultado-texto">{resultado}</div>

          <button onClick={() => window.location.reload()}>
            Fazer o teste novamente
          </button>
        </div>
      )}
    </div>
  );
}
