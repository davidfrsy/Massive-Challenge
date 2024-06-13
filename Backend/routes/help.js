const express = require("express");
const Help = require("../config/confighelp");

const router = express.Router();

router.post("/message", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newHelp = await Help.create({
        name,
        email,
        message,
        });

        return res.status(200).json({ status: "Success" });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ error: "Error registering user" });
    }
    });

    module.exports = router;