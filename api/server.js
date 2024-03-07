

const express = require("express")


const app = express();

let users = [
  { id: 1, name: "Carl" },
  { id: 2, name: "Markus" },
  { id: 3, name: "Tilda" },
];

const getUserIdFormUsers = () => {
    let highestId = 0;
    users.forEach(user => {
        if (user.id > highestId) {
            highestId = user.id
        }
    })
    return highestId + 1 
}

// Use middleware to handle url encoded data
app.use(express.urlencoded({ extended: true }))

app.use(express.json())


// GET: users - get all users
app.get("/api/v1/users", (req, res) => {
    res.json(users)
})

//POST: users - add new user
app.post("/api/v1/users", (req, res) => {
    const user = {
        ...req.body,
        id: getUserIdFormUsers()
    }

    if (!user.name) {
        return res.status(400).json({
            message: "Must have a valid name"
        })
    }

    users.push(user)
    res.json(users)
})


// GET: user - get spesific user on id
app.get("/api/v1/users/:id", (req, res) => {
    const id = req.params.id
    const user = users.find(u => u.id == id)
    if (!user) {
        res.status(404).json({
            message: "User not found"
        })
    }
    res.json(user)
})


app.listen(3000, () => {
    console.log("Server listening on :3000")
})