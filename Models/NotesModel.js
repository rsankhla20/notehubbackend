const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  content: String,
});

module.exports = mongoose.model("Note", notesSchema);
