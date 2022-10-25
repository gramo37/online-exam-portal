const mongoose = require("mongoose")

const examSchema = new mongoose.Schema({
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "question"
    }],
    examExpiryDate: {
        type: String,
    },
    examStartDate: {
        type: String
    },
    // subject: {
    //     type: String
    // }
})

const examModel = new mongoose.model("exam", examSchema)

module.exports = examModel;