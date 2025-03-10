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

// Delete an enquiry
router.delete("/enquiries/:id", async (req, res) => {
  try {
    const deletedEnquiry = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedEnquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }
    res.json({ message: "Enquiry deleted successfully" });
  } catch (error) {
    console.error("Error deleting enquiry:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
