const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const chefsData = require("./Data/data.json");
const popularRecipeData = require("./Data/popularRecipeData.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Data is Running");
});
app.get("/allData", (req, res) => {
  res.send(chefsData);
});

app.get("/popularrecipe", (req, res) => {
  res.send(popularRecipeData);
});

app.get("/allData/:id", (req, res) => {
  const id = req.params.id;
  const selectedChefData = chefsData.find((d) => d.id === id);
  res.send(selectedChefData);
});

app.listen(port, () => {
  console.log(`server is Running on : ${port} `);
});
