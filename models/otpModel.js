const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const otpSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter a valid Email"],
        unique: true,
        validate: [validator.isEmail, "Enter a valid Email"]
    },
    otp: {
        type: String,
        required: [true, "Please Enter OTP"]
    },
    isMailVerified: {
        type: Boolean,
        default: false
    }
});

otpSchema.pre("save", async function (next) {
    if(this.isModified("otp")) {
        this.otp = await bcrypt.hash(this.otp, 10);
    }
    next();
})

otpSchema.methods.comparePassword = async function(otp) {
    return await bcrypt.compare(otp, this.otp);
    // if(this.otp === otp) {
    //     return true;
    // }
    // else
    //     return false;
}

const otpModel = mongoose.model("OTP", otpSchema);

module.exports = otpModel;