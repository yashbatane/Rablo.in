import express from "express";

const app = express();
const port = 5003;

app.get("/", (req, res) => {
  res.send("Hello from tutorServer");
});

app.listen(port, () => {
  console.log(`tutorServer listening at http://localhost:${port}`);
});
