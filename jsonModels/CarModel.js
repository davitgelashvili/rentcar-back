const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  Price: {
    type: String,
    required: true,
  },
  L100km: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  cylinders: {
    type: String,
    required: true,
  },
  Engine: {
    type: String,
    required: true,
  },
  drive: {
    type: String,
    required: true,
  },
  fuel_type: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  gallery: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("cars", CarSchema);
