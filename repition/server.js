

const express = require("express");
const path = require("path")

// Create absolute path for "dist folder"
const distPath = path.join(__dirname, "/dist")
const staticPath = path.join(distPath,"/static")

// Create server app
const app = express();

// Add static dependecy
app.use(express.static(staticPath))

// GET: /
app.get("/", (req, res) => {
    // res.send("Hello World")
    res.sendFile(`${distPath}/index.html`);
})

// GET: /contact
app.get("/contact", (req, res) => {
    res.sendFile(`${distPath}/contact.html`)
})

// Utelise port to serve server
app.listen(3000, () => {
    console.log("Server running on port 3000")
})