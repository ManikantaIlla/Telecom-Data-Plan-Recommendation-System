import { Router } from "express";
import { authRequired, allowRoles } from "../middleware/auth.js";
import Plan from "../models/Plan.js";

const router = Router();

router.get("/", authRequired, async (_req, res) => {
  const plans = await Plan.find().limit(100);
  res.json(plans);
});

router.post("/", authRequired, allowRoles("admin"), async (req, res) => {
  const plan = await Plan.create(req.body);
  res.status(201).json(plan);
});

export default router;
