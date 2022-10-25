const mongoose = require("mongoose")

const scoreSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    score: {
        type: Number
    },
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exam"
    }
})

const scoreModel = new mongoose.model("score", scoreSchema)

module.exports = scoreModel