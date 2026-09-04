const express = require("express");
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "endpoints working" });
});

app.post("/login", (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ 
                error: "Both username and password is required"
            });
        }

        // console.log(username, " ", password);
        if (username == "bob" && password == "pass123") {
            console.log("Loggin in");

            return res.status(201).json({
                message: "Login"
            });
        } else {
            console.log("Incorrect login details");

            return res.status(401).json({
                error: "Invalid login details"
            });
        }
    } catch (error) {
        return res.status(500).json({
            error: "Failed to login"
        });
    }
});


app.post("/signup", (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ 
                error: "Username, Email and Password is required"
            });
        }

        if (username != "bob") {
            console.log("Signing Up");

            return res.status(201).json({
                message: "Created Account"
            });
        } else {
            console.log("Username already exists");

            return res.status(409).json({
                error: "Username already exists"
            });
        }
    } catch (error) {
        return res.status(500).json({
            error: "Failed to create account",
            details: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});
