const express = require("express");
const app = express();
const port = 8000;

app.listen(port, () => {
    console.log("App is running...");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/application.html');
});

app.get("/edit", (req, res) => {
    res.sendFile(__dirname + '/edit.html');
});