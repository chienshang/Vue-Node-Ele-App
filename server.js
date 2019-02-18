const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to mongodb
mongoose.connect('mongodb://localhost:27017/TreasuryManagementSystem', { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// 引入user.js
app.use("/api/users", require("./routers/api/users"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on prot ${port}`);
});