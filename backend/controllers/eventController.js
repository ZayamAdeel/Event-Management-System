import Event from "../models/Event.js";
import PromoCode from "../models/PromoCode.js";

export const createEvent = async (req, res) => {
  try {
    const { title, date, location, description, ticketPrices } = req.body;
    const promoMaterials = req.files.map((file) => file.path);

    const event = new Event({
      title,
      date,
      location,
      description,
      ticketPrices: JSON.parse(ticketPrices),
      promoMaterials,
    });

    await event.save();
    res.status(201).json({ message: "Event created successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create event." });
  }
};

export const getTicketSales = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findById(eventId);

    if (!event) return res.status(404).json({ error: "Event not found." });

    res.status(200).json(event.ticketPrices.map((ticket) => ({
      category: ticket.category,
      quantity: ticket.sold,
    })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch ticket sales." });
  }
};

export const applyPromoCode = async (req, res) => {
  try {
    const { promoCode } = req.body;

    const code = await PromoCode.findOne({ code: promoCode, isActive: true });

    if (!code) return res.status(404).json({ error: "Invalid or expired promo code." });

    res.status(200).json({ message: "Promo code applied.", discount: code.discount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to apply promo code." });
  }
};
