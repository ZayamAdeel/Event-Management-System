import React, { useState } from "react";
import "./OrganizerPanel.css";

const OrganizerPanel = () => {
  const [eventDetails, setEventDetails] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    ticketPrices: [],
  });

  const [promoMaterials, setPromoMaterials] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const [ticketSales, setTicketSales] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    setPromoMaterials(e.target.files);
  };

  const addTicketPrice = (category, price) => {
    setEventDetails((prev) => ({
      ...prev,
      ticketPrices: [...prev.ticketPrices, { category, price }],
    }));
  };

  const createEvent = async () => {
    // Logic to send eventDetails and promoMaterials to the backend
    alert("Event Created Successfully!");
  };

  const applyPromoCode = () => {
    // Logic to apply promo code
    alert(`Promo code "${promoCode}" applied.`);
  };

  return (
    <div className="organizer-panel">
      <h1>Event Organizer Panel</h1>
      
      <section className="event-creation">
        <h2>Create New Event</h2>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={eventDetails.title}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          value={eventDetails.date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={eventDetails.location}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={eventDetails.description}
          onChange={handleInputChange}
        ></textarea>
        
        <h3>Ticket Categories</h3>
        <button onClick={() => addTicketPrice("VIP", 100)}>Add VIP Ticket</button>
        <button onClick={() => addTicketPrice("Regular", 50)}>Add Regular Ticket</button>
        <ul>
          {eventDetails.ticketPrices.map((ticket, index) => (
            <li key={index}>{ticket.category}: ${ticket.price}</li>
          ))}
        </ul>
        
        <h3>Promotional Materials</h3>
        <input type="file" multiple onChange={handleFileUpload} />
        <button onClick={createEvent}>Create Event</button>
      </section>
      
      <section className="ticket-management">
        <h2>Ticket Management</h2>
        <h3>Real-Time Ticket Sales</h3>
        <ul>
          {ticketSales.map((sale, index) => (
            <li key={index}>
              {sale.category} - {sale.quantity} tickets sold
            </li>
          ))}
        </ul>
        
        <h3>Promo Codes</h3>
        <input
          type="text"
          placeholder="Enter Promo Code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button onClick={applyPromoCode}>Apply Promo Code</button>
      </section>
    </div>
  );
};

export default OrganizerPanel;
