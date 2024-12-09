import express from "express";
import multer from "multer";
import { createEvent, getTicketSales, applyPromoCode } from "../controllers/eventController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/create", upload.array("promoMaterials"), createEvent);
router.get("/ticket-sales/:eventId", getTicketSales);
router.post("/promo-code", applyPromoCode);

export default router;
