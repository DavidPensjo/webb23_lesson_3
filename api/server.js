

const express = require("express")


const app = express();

const users = [
  { id: 1, name: "Carl" },
  { id: 2, name: "Markus" },
  { id: 2, name: "Tilda" },
];

// Use middleware to handle url encoded data
app.use(express.urlencoded({ extended: true }))

app.get("/api/v1/users", (req, res) => {
    res.json(users)
})

app.listen(3000, () => {
    console.log("Server listening on :3000")
})