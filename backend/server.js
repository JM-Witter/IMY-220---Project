const express = require("express");

const app = express();
const PORT = 3000;

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

        console.log(username, " ", password);
        if (username == "bob" && password == "pass123") {
            console.log("Loggin in");

            return res.status(201).json({
                message: "Logging in"
            });
        } else {
            console.log("Incorrect login details");

            return res.status(401).json({
                error: "Invalid login details"
            });
        }
    } catch (error) {
        return res.status(500).json({
            error: "Failed to login",
            details: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});
