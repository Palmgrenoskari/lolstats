import express from "express";
import config from "./utils/config";

const app = express();
const port = 3000;

const API_KEY = config.API_KEY;
// Temporary
const player_name = "Nahg";

const API_URL = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${player_name}?api_key=${API_KEY}`;

app.get("/api/summoner", async (req, res) => {
  try {
    const response = await fetch(API_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

app.listen(port, () => {
  console.log(`Our awesome LoL App is listering to http://localhost:${port}`);
});
