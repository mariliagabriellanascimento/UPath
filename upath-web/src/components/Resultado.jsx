import { useEffect, useState } from "react";
import "./chat.css";

const BACKEND_URL = "http://localhost:3000";

export default function Resultado() {
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    const carregar = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/resultado`);
        const data = await res.json();
        setResultado(data.resultado);
      } catch {
        setResultado("Erro ao carregar resultado.");
      }
    };
    carregar();
  }, []);

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
