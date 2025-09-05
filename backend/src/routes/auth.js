import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });
  const token = jwt.sign({ sub: user._id, role: user.role, email: user.email }, process.env.JWT_SECRET || "devsecret", { expiresIn: "1d" });
  res.json({ token, role: user.role, name: user.name });
});

router.post("/register", async (req, res) => {
  const { email, password, name, role } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, passwordHash, name, role });
  res.status(201).json({ id: user._id, email: user.email });
});

export default router;
