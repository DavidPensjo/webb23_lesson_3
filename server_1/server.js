

const path = require("path")
const express = require("express")

const distPath = path.join(__dirname, "/dist")
const staticPath = path.join(distPath, "/dist");

const app = express();

app.use(express.static(staticPath));

// Use middleware to handle url encoded data
app.use(express.urlencoded({ extended: true }))

// GET: /
app.get("/", (req, res) => {
    res.sendFile(`${distPath}/index.html`)
})

// GET: /contact
app.get("/contact", (req, res) => {
    res.sendFile(`${distPath}/contact.html`);
})

// POST: /contact
app.post("/contact", (req, res) => {
    console.log(req.body)
    res.sendFile(`${distPath}/response.html`);
})


app.listen(3000, () => {
    console.log("Server listening on :3000")
})