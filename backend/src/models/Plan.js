import mongoose from "mongoose";

const PlanSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  name: String,
  monthlyPrice: Number,
  dataGB: Number,
  voiceMinutes: Number,
  sms: Number,
  validityDays: Number,
  tags: [String]
}, { timestamps: true });

export default mongoose.model("Plan", PlanSchema);
