import joblib
import json
import sys
import pandas as pd
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODELOS_PATH = os.path.join(BASE_DIR, "Modelos")

try:
    clf = joblib.load(os.path.join(MODELOS_PATH, "modelo_aprovacao.pkl"))
    le = joblib.load(os.path.join(MODELOS_PATH, "label_encoder.pkl"))
    curso_stats = joblib.load(os.path.join(MODELOS_PATH, "curso_stats.pkl"))
    scaler = joblib.load(os.path.join(MODELOS_PATH, "scaler.pkl"))
    feature_names = joblib.load(os.path.join(MODELOS_PATH, "feature_names.pkl"))
except FileNotFoundError:
    print(json.dumps({"erro": "Arquivos .pkl não encontrados. Verifique a pasta 'Modelos'."}))
    sys.exit()

entrada_json = json.loads(sys.stdin.read())
curso_usuario = entrada_json["curso"]
nota_usuario = float(entrada_json["nota"])

if curso_usuario not in le.classes_:
    resposta = {"erro": f"Curso '{curso_usuario}' não encontrado."}
    print(json.dumps(resposta))
    sys.exit()

try:

    media_corte = curso_stats[curso_stats["Curso"] == curso_usuario]["nota_corte_media"].values[0]
    
    diferenca_usuario = nota_usuario - media_corte
    
    curso_cod = le.transform([curso_usuario])[0]

    entrada = pd.DataFrame({
        "Diferenca_para_Media": [diferenca_usuario],
        "Curso_enc": [curso_cod]
    })
  
    entrada = entrada[feature_names] 
    entrada_scaled = scaler.transform(entrada)

    prob = clf.predict_proba(entrada_scaled)[0][1]
    prob_percent = round(float(prob * 100), 2)
    
    status = "Provável Aprovação" if prob_percent > 50 else "Provável Reprovação"

    resposta = {
        "curso": curso_usuario,
        "nota": nota_usuario,
        "probabilidade": prob_percent,
        "status": status
    }
    
    print(json.dumps(resposta))

except Exception as e:
    print(json.dumps({"erro": f"Erro interno no Python: {str(e)}"}))
    sys.exit()

#py -m pip install joblib
#py -m pip install pandas
#py -m pip install scikit-learn