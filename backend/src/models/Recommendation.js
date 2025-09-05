import mongoose from "mongoose";

const RecommendationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  planCode: String,
  score: Number,
  rationale: String
}, { timestamps: true });

export default mongoose.model("Recommendation", RecommendationSchema);
