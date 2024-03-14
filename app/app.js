const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

// Use CORS for all routes
app.use(cors());

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
const distPath = path.join(__dirname, "../dist");
const staticPath = path.join(distPath, "static");
app.use(express.static(staticPath));

// Routes
const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);

// Fallback route for serving your frontend's entry point in SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

module.exports = app;
