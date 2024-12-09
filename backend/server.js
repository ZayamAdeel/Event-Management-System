import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import eventRoutes from "./routes/event.js";
import promoCodeRoutes from "./routes/promoCode.js";

dotenv.config();
const app = express();
const port = 5000;
app.use(express.json());
const dbURI = process.env.MONGOURI;
mongoose.connect('mongodb+srv://zayam:12345@cluster0.one6m.mongodb.net/').then(() => {
console.log("Connection successful");
}).catch((error) => {
console.error("Connection error", error);
});

// Routes
app.use("/api/events", eventRoutes);
app.use("/api/promos", promoCodeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
