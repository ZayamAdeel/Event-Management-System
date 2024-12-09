import PromoCode from "../models/PromoCode.js";

export const createPromoCode = async (req, res) => {
  try {
    const { code, discount } = req.body;

    const promoCode = new PromoCode({ code, discount });
    await promoCode.save();

    res.status(201).json({ message: "Promo code created successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create promo code." });
  }
};

export const getAllPromoCodes = async (req, res) => {
  try {
    const promoCodes = await PromoCode.find();
    res.status(200).json(promoCodes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch promo codes." });
  }
};
