const mongoose = require('mongoose');

const ProductEnquirySchema = new mongoose.Schema({
  quantity: String,
  country: String,
  email: String,
  message: String,
});

module.exports = mongoose.model('ProductEnquiry', ProductEnquirySchema);
