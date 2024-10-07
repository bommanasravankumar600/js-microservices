const express = require("express");

const app = express();
app.use("/", (req, res) => {
  return res.status(200).json({ message: "welcome to customer" });
});

app.listen(8002, () => {
  console.log("customer service is listening to port", 8002);
});
