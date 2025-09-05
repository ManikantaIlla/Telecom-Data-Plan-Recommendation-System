from flask import Flask, request, jsonify
import os, random

app = Flask(__name__)

@app.route("/health")
def health():
    return {"ok": True, "service": "ml"}

@app.route("/recommend", methods=["POST"])
def recommend():
    payload = request.get_json(force=True)
    user_id = payload.get("userId")
    # Stub: return a fake plan with a random score
    plan_code = random.choice(["DATA_199", "UNLTD_399", "LITE_149"])
    score = random.random()
    rationale = "Collaborative filtering score (stub)."
    return jsonify({"userId": user_id, "planCode": plan_code, "score": score, "rationale": rationale})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8001)
