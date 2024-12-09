import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  category: { type: String, required: true },
  price: { type: Number, required: true },
  sold: { type: Number, default: 0 },
});

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String },
  ticketPrices: [TicketSchema],
  promoMaterials: [{ type: String }],
});

const Event = mongoose.model("Event", EventSchema);

export default Event;
