const mongoose = require("mongoose")

const answerSchema = new mongoose.Schema({
    examId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "exam"
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    responses: [{
        questionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "question"
        },
        answers: {
            type: Number
        }
    }]
})

const answerModel = new mongoose.model("answer", answerSchema)

module.exports = answerModel