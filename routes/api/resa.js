import express from "express";
const router = express.Router();

import Resa from "../../models/Resa";

router.post("/getresadata", async (req, res) => {
  const { orderKey, orderDirect, page = 1, limit = 10 } = req.body;
  const pageNumber = parseInt(page, 10);
  const pageSize = parseInt(limit, 10);
  try {
    // Fetch data with sorting and pagination
    const resaData = await Resa.find()
      .sort({ [orderDirect]: orderKey === "asc" ? 1 : -1 }) // Sort based on order and orderBy
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

router.post("/deletedata", async (req, res) => {
  const { orderKey, orderDirect, page = 1, limit = 10, id } = req.body;
  const pageNumber = parseInt(page, 10);
  const pageSize = parseInt(limit, 10);
  try {
    // Delete the document with the specified id
    await Resa.findByIdAndDelete(id);

    // Fetch data with sorting and pagination
    const resaData = await Resa.find()
      .sort({ [orderDirect]: orderKey === "asc" ? 1 : -1 }) // Sort based on order and orderBy
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

router.post("/putresadata", async (req, res) => {
  const { orderKey, orderDirect, newData, page = 1, limit = 10 } = req.body;
  const pageNumber = parseInt(page, 10);
  const pageSize = parseInt(limit, 10);
  try {
    console.log(newData);
    const newItem = {
      // Map your Excel columns to your Resa schema fields here
      dossier_no: newData.dossier_no,
      service_type: newData.service_type,
      arb_dep: newData.arb_dep,
      client: newData.client,
      agency: newData.agency,
      from: newData.from,
      hotel: newData.hotel,
      htl_region: newData.htl_region,
      service_date: newData.service_date,
      endofservice: newData.endofservice,
      no_of_ngts: newData.no_of_ngts,
      adult: newData.adult,
      child: newData.child,
      infant: newData.infant,
      teen: newData.teen,
      free: newData.free,
      flight_no: newData.flight_no,
      flight_time: newData.flight_time,
      resa_remark: newData.resa_remark,
      service: newData.service,
      service_detail: newData.service_detail,
      adult_price: newData.adult_price,
      child_price: newData.child_price,
      teen_price: newData.teen_price,
      total_price: newData.total_price,
      discount: newData.discount,
      net_price: newData.net_price,
      cash_credit: newData.cash_credit,
      cur: newData.cur,
      roe: newData.roe,
      invoce_on: newData.invoce_on,
      status: newData.status,
      effect_date: newData.effect_date,
      inv_no: newData.inv_no,
    };
    if (newData._id) {
      // Check if the document with the given _id exists
      let document = await Resa.findOne({ _id: newData._id });

      if (document) {
        // Update the document if it exists
        await Resa.updateOne({ _id: newData._id }, newItem);
      }
    } else {
      // If _id is empty or not provided, create a new document
      await Resa.create(newItem);
    }

    const resaData = await Resa.find()
      .sort({ [orderDirect]: orderKey === "asc" ? 1 : -1 }) // Sort based on order and orderBy
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
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
