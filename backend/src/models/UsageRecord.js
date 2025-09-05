import mongoose from "mongoose";

const UsageRecordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  period: String, // e.g., "2025-08"
  dataGBUsed: Number,
  voiceMinutesUsed: Number,
  smsUsed: Number,
  billAmount: Number,
  currentPlanCode: String
}, { timestamps: true });

export default mongoose.model("UsageRecord", UsageRecordSchema);
