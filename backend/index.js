// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const productRoute = require("./route/productRoute");

const contactRoute = require('./route/contact');

require("dotenv").config();
const app = express();
const db = require("./connectdb");

app.use(cors({
  origin: "*",
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use("/products", express.static("upload/products"));
app.use('/api/contact', contactRoute);  // Add the route for handling enquiries
db();

app.use("/api", productRoute);

// Start server
const PORT = process.env.PORT || 8500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
