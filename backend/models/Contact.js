const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  image: String,
});
module.exports = mongoose.model("Contact", contactSchema);
