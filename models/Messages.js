const mongoose = require("mongoose");

const configSchema = new mongoose.Schema({
  sender_id: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  recipients: {
    type: String,
    required: true,
  },
  totalRecipients: {
    type: Number,
    required: true,
  },
  timeSent: {
    type: Date,
    default: Date.now,
  },
});

const Config = mongoose.model("message", configSchema);

module.exports = Config;
