import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import planRoutes from "./routes/plan.js";
import userRoutes from "./routes/user.js";
import recoRoutes from "./routes/reco.js";

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// DB
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/telecom_reco";
mongoose.connect(mongoUri).then(() => console.log("Mongo connected")).catch(err => console.error(err));

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/plans", planRoutes);
app.use("/reco", recoRoutes);

app.get("/", (_req, res) => res.json({ ok: true, service: "telecom-backend" }));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`API on :${port}`));
