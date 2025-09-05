import { Router } from "express";
import axios from "axios";
import { authRequired } from "../middleware/auth.js";
import Recommendation from "../models/Recommendation.js";

const router = Router();
const ML_URL = process.env.ML_SERVICE_URL || "http://localhost:8001";

router.post("/generate", authRequired, async (req, res) => {
  const { userId } = req.body;
  try {
    const { data } = await axios.post(`${ML_URL}/recommend`, { userId });
    const rec = await Recommendation.create({ userId, planCode: data.planCode, score: data.score, rationale: data.rationale });
    res.json(rec);
  } catch (e) {
    res.status(500).json({ error: "ML service unavailable", detail: e.message });
  }
});

router.get("/mine", authRequired, async (req, res) => {
  const list = await Recommendation.find({ userId: req.user.sub }).sort({ createdAt: -1 }).limit(5);
  res.json(list);
});

export default router;
