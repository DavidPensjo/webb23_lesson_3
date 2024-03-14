const express = require("express");
const router = express.Router();

// Example route
router.post("/authorForm", (req, res) => {
  // Logic to handle book creation
  res.send("Author added");
});

module.exports = router;
