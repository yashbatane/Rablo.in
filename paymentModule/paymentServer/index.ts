import express from "express";

const app = express();
const port = 5004;

app.get("/", (req, res) => {
  res.send("Hello from paymentServer");
});

app.listen(port, () => {
  console.log(`paymentServer listening at http://localhost:${port}`);
});
