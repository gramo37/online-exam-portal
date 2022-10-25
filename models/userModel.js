const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto")

const userSchema = mongoose.Schema({
    // userId: {
    //     type: Number,
    //     unique: true,
    //     Length: [10, "Wrong ID"]
    // },
    name: {
        type: String,
        required: [true, "Please Enter your Name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Email to proceed"],
        unique: true,
        validate: [validator.isEmail, "Enter a valid Email"]
    },
    password: {
        type: String,
        required: true,
        minLength: [6, "Minimum Length must be 6"],
        select: false
    },
    role: {
        type: String
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "question"
    }],
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    myExam:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "exam"
    }],
    myExamwithScores:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "exam"
    }],
    exam: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "exam"
    }],
    completedExam: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "exam"
    }],
    resetPasswordToken: String,
    resetPasswordExpire: Date
});

userSchema.pre("save", async function (next) {
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = async function (password) {
    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  
    return resetToken;
  };

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;