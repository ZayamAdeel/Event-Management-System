import mongoose from "mongoose";

const PromoCodeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discount: { type: Number, required: true }, // Percentage discount
  isActive: { type: Boolean, default: true },
});

const PromoCode = mongoose.model("PromoCode", PromoCodeSchema);

export default PromoCode;
