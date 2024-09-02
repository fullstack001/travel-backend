import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import path from "path";

import connectDB from "./config/database";
import createAdmin from "./config/createAdmin";
import saveData from "./config/saveData";

import auth from "./routes/api/auth";
import admin from "./routes/api/admin";
import resa from "./routes/api/resa";
import hotel from "./routes/api/hotel";
import agency from "./routes/api/agency";
import service from "./routes/api/service";
import driver from "./routes/api/driver";
import vehicle from "./routes/api/vehicle";
import guid from "./routes/api/guid";

dotenv.config();

const app = express();

connectDB();
createAdmin();
// saveData();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "2000mb", extended: false }));

// // Serve static files from the dist directory
// app.use(express.static(path.join(__dirname, "dist")));

app.use("/api/auth", auth);
app.use("/api/admin", admin);
app.use("/api/resa", resa);
app.use("/api/hotel", hotel);
app.use("/api/agency", agency);
app.use("/api/service", service);
app.use("/api/driver", driver);
app.use("/api/vehicle", vehicle);
app.use("/api/guid", guid);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
