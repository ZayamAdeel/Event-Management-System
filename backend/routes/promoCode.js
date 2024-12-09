import express from "express";
import { createPromoCode, getAllPromoCodes } from "../controllers/promoCodeController.js";

const router = express.Router();

router.post("/create", createPromoCode);
router.get("/", getAllPromoCodes);

export default router;
