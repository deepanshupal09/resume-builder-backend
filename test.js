const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded());
app.get("/", (req, res) => {
    res.send({"hello":"g"});

});

app.listen(4003, () => {
  console.log("hello world");
});