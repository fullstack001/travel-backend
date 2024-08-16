import express from "express";
const router = express.Router();

import Resa from "../../models/Resa";

router.get("/getresadata", async (req, res) => {
  try {
    const resaData = await Resa.find();
    res.json(resaData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/getdailydata", async (req, res) => {
  const { date } = req.body;
  try {
    const resaData = await Resa.find({ service_date: date });
    res.json(resaData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default router;
