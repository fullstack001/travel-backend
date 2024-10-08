import mongoose from "mongoose";

const ResaSchema = new mongoose.Schema({
  dossier_no: {
    type: Number,
  },
  service_type: {
    type: String,
  },
  arb_dep: {
    type: String,
    default: "",
  },
  client: {
    type: String,
    default: "",
  },
  agency: {
    type: String,
  },
  from: {
    type: String,
  },
  hotel: {
    type: String,
  },
  htl_region: {
    type: String,
  },
  service_date: {
    type: Date,
  },
  endofservice: {
    type: Date,
  },
  no_of_ngts: {
    type: String,
  },
  adult: {
    type: String,
  },
  child: {
    type: String,
  },
  infant: {
    type: String,
  },
  teen: {
    type: String,
  },
  free: {
    type: String,
  },
  flight_no: {
    type: String,
  },
  flight_time: {
    type: String,
  },
  resa_remark: {
    type: String,
  },
  service: {
    type: String,
  },
  service_detail: {
    type: String,
  },
  adult_price: {
    type: String,
  },
  child_price: {
    type: String,
  },
  teen_price: {
    type: String,
  },
  total_price: {
    type: String,
  },
  net_price: {
    type: String,
  },
  cash_credit: {
    type: String,
  },
  cur: {
    type: String,
  },
  roe: {
    type: String,
  },
  invoce_on: {
    type: String,
  },
  status: {
    type: String,
  },
  effect_date: {
    type: Date,
  },
  inv_no: {
    type: String,
  },
  driver: {
    type: String,
  },
  guid: {
    type: String,
  },
  agency_ref_no: {
    type: String,
  },
  pickup_time: {
    type: String,
  },
  type_vehicle: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Resa = mongoose.model("resa", ResaSchema);

export default Resa;
