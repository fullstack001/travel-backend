import express from "express";
const router = express.Router();

import Resa from "../../models/Resa";

router.post("/getresadata", async (req, res) => {
  const { page = 1, limit = 10 } = req.body;
  const pageNumber = parseInt(page, 10);
  const pageSize = parseInt(limit, 10);
  try {
    // Fetch data with pagination
    const resaData = await Resa.find()
      .skip((pageNumber - 1) * pageSize) // Skip to the correct page
      .limit(pageSize); // Limit the number of records

    // Count total documents
    const totalDocuments = await Resa.countDocuments();

    // Send response
    res.json({
      data: resaData,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalDocuments / pageSize),
      totalItems: totalDocuments,
    });
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
