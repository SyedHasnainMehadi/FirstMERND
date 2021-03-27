const mongoose = require("mongoose");
const fileUpload = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("imageUpload", fileUpload);
