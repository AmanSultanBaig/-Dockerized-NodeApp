const express = require("express");
const app = express();

const port = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send("Node App Dockerized Successfully!")
})

app.listen(port, () => console.log(`App is running on ${port}`))