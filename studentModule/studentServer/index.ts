import express from "express";

const app = express();
const port = 5002;

app.get("/", (req, res) => {
  res.send("Hello from studentServer");
});

app.listen(port, () => {
  console.log(`studentServer listening at http://localhost:${port}`);
});
