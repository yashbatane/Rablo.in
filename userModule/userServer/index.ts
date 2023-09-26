import express from "express";

const app = express();
const port = 5001;

app.get("/", (req, res) => {
  res.send("Hello from userServer");
});

app.listen(port, () => {
  console.log(`userServer listening at http://localhost:${port}`);
});
