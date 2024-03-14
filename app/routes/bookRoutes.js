const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Logic to handle GET requests to /api/books
  res.json({ message: "Fetching all books" });
});

// Add more routes as needed

module.exports = router;
