const mongoose = require('mongoose');

// Define the schema for the contact form
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  product: { type: String, required: true },
  country: { type: String, required: true },
  message: { type: String, required: true },
});

// Create a model based on the schema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
