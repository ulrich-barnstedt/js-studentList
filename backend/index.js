const express = require("express");
const root = require("./routes/root");
const logger = require("./logger");
const cors = require("cors");
require("./db");

let app = express();
app.use(express.json());
app.use(logger);
app.use(cors());
app.use("/api", root);

app.listen(5000, () => {
    console.log("Listening on *:5000");
})
