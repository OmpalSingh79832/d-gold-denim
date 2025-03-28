// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const productRoute = require("./route/productRoute");
const ProductEnquiry = require('./model/ProductEnquiry');
const contactRoute = require('./route/contact');

const cookiesParser = require("cookie-parser");
const bodyParser = require('body-parser');

require("dotenv").config();
const app = express();
const db = require("./connectdb");

// app.use(cors({
//   origin: "*",
//   
//   credentials: true
// }));

app.use(
  cors({
    origin:  "http://localhost:5174",
    methods: ['GET', 'POST', 'DELETE', "PUT"],
    credentials: true,
})
);
app.use(cookiesParser());
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", express.static("upload/products"));
app.use('/api/contact', contactRoute);  // Add the route for handling enquiries
db();

app.use("/api", productRoute);

// API to save form data
app.post('/api/productenquiries', async (req, res) => {
  const { quantity, country, email, message, images, name } = req.body;
  const enquiry = new ProductEnquiry({ quantity, country, email, message, images, name });
  try {
    await enquiry.save();
    res.status(201).json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit enquiry', error });
  }
});

// API to get all enquiries
app.get('/api/productenquiries', async (req, res) => {
  try {
    const enquiries = await ProductEnquiry.find();
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve enquiries', error });
  }
});
app.delete('/api/productenquiries/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEnquiry = await ProductEnquiry.findByIdAndDelete(id);
    if (!deletedEnquiry) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }
    res.status(200).json({ message: 'Enquiry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete enquiry', error });
  }
});

app.put("/api/productenquiries/:id", async (req, res) => {
  try {
    const { status } = req.body; // Get status from request body
    const enquiryId = req.params.id;

    // Validate status value
    if (!["Pending", "Fulfilled"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedEnquiry = await ProductEnquiry.findByIdAndUpdate(
      enquiryId,
      { status },
      { new: true }
    );

    if (!updatedEnquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    res.status(200).json({ message: "Status updated successfully", enquiry: updatedEnquiry });
  } catch (error) {
    console.error("Error updating enquiry status:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// app.use(express.static(path.join(__dirname, "../front-end/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
// });


// Start server
const PORT = process.env.PORT || 8500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
