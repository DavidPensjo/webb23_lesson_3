

const path = require("path")
const express = require("express")

const moment = require("moment");
require("moment-timezone");

 const generateTimezoneHTml = (timeInStockholm, timeInSeoul) => `
        <html>
            <body>
                <p>Stockholm: ${timeInStockholm.format(
                  "YYYY-MM-DD HH:mm:ss"
                )}</p>
                <p>Seoul: ${timeInSeoul.format("YYYY-MM-DD HH:mm:ss")}</p>
            </body>
        </html>

    `;

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

// GET: /now
app.get("/now", (req, res) => {
    const timeInStockholm = moment().tz("Europe/Stockholm");
    const timeInSeoul = moment().tz("Asia/Seoul");

    console.log(timeInStockholm)
    console.log(timeInSeoul);

   
    res.send(generateTimezoneHTml(timeInStockholm, timeInSeoul));
})

app.get("/now/form", (req, res) => {
    res.sendFile(`${distPath}/now_form.html`)
})

app.post("/now/form", (req, res) => {
    const { datetime } = req.body

    const timeInStockholm = moment(datetime).tz("Europe/Stockholm")
    const formattedTime = timeInStockholm.format("YYYY-MM-DD HH:mm")
    console.log(formattedTime);

    const timeInSeoul = timeInStockholm.clone().tz("Asia/Seoul")
    const formattedTimeInSeoul = timeInSeoul.format("YYYY-MM-DD HH:mm");
    console.log(formattedTimeInSeoul);

    res.send(generateTimezoneHTml(timeInStockholm, timeInSeoul));

})


app.listen(3000, () => {
    console.log("Server listening on :3000")
})