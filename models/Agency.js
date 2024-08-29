import mongoose from "mongoose";

const AgencySchema = new mongoose.Schema({
  ageycy_id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    default: "",
  },
  tel: {
    type: String,
    default: "",
  },
  name2: {
    type: String,
  },
  email: {
    type: String,
  },
  website: {
    type: String,
  },
  status: {
    type: String,
  },
  tax: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Agency = mongoose.model("agency", AgencySchema);

export default Agency;
