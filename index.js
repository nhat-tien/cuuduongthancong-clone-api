const express = require("express");
const app = express();
const port = process.env.port || 3000;
const data = require("./data.json");

app.get("/api", (req,res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`express app listening on ${port}`);
})