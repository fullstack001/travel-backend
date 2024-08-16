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

dotenv.config();

const app = express();

connectDB();
// createAdmin();
// saveData();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "2000mb", extended: false }));
app.use(
  cors({
    origin: "*", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

app.use("/api/auth", auth);
app.use("/api/admin", admin);
app.use("/api/resa", resa);

app.get("/", (req, res) => {
  res.send(" API Running");
});
const port = process.env.PORT || 5005;
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
