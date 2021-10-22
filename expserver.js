const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("hello world! in express")
});

app.listen(3000, function (req, res) {
    console.log("server is  running at port no 3000");
});
