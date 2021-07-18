import express from "express";

const app = express();
const HOST = "127.0.0.1";
const PORT = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  res.send('Hello World.');
})

app.listen(PORT, HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
})