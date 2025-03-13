const mongoose = require('mongoose');

const ProductEnquirySchema = new mongoose.Schema({
  quantity: String,
  country: String,
  email: String,
  message: String,
  name:String,
  images:String,
  status: { type: String, enum: ["Pending", "Fulfilled"], default: "Pending" },
});

module.exports = mongoose.model('ProductEnquiry', ProductEnquirySchema);
