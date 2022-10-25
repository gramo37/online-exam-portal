const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  question: String,
  // subject: String,
  options: [{ type: String }],
  answer: {
    type: Number,
    select: false
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  subject: {
    type: String
  }
});

const questionModel = new mongoose.model("question", questionSchema);

module.exports = questionModel;
