import { Router } from "express";
import { authRequired, allowRoles } from "../middleware/auth.js";
import User from "../models/User.js";
const router = Router();

router.get("/me", authRequired, async (req, res) => {
  const me = await User.findById(req.user.sub).lean();
  res.json({ email: me.email, name: me.name, role: me.role, preferences: me.preferences });
});

router.get("/", authRequired, allowRoles("admin", "analyst"), async (_req, res) => {
  const users = await User.find().select("email role name").limit(200);
  res.json(users);
});

export default router;
