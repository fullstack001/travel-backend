import mongoose from "mongoose";

const GuidSchema = new mongoose.Schema({
  guid_id: {
    type: Number,
  },
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Guid = mongoose.model("guid", GuidSchema);

export default Guid;
