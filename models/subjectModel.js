const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    subject: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

const subjectModel = new mongoose.model("subject", subjectSchema)

module.exports = subjectModel