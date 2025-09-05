import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  name: String,
  role: { type: String, enum: ["customer", "analyst", "admin"], default: "customer" },
  preferences: {
    budget: Number,
    dataPriority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
    voicePriority: { type: String, enum: ["low", "medium", "high"], default: "low" }
  }
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
