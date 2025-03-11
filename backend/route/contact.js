const express = require("express");
const router = express.Router();
const Contact = require("../model/Contact");

// Get all enquiries
router.get("/enquiries", async (req, res) => {
  try {
    const enquiries = await Contact.find();
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Submit an enquiry (ADD THIS)
router.post("/submit", async (req, res) => {
  try {
    const { firstName, lastName, phone, email, product, country, message } = req.body;

    if (!firstName || !lastName || !phone || !email || !product || !country || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEnquiry = new Contact({
      firstName,
      lastName,
      phone,
      email,
      product,
      country,
      message,
    });

    await newEnquiry.save();
    res.status(201).json({ message: "Enquiry submitted successfully", enquiry: newEnquiry });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Delete an enquiry
router.delete("/enquiries/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Invalid enquiry ID" });
    }

    const deletedEnquiry = await Contact.findByIdAndDelete(id);

    if (!deletedEnquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    res.status(200).json({ message: "Enquiry deleted successfully", id });
  } catch (error) {
    console.error("Error deleting enquiry:", error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
