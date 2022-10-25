const express = require("express");
const app = express.Router();
const {signUpUser, sendOTP, verifyOTP, loginUser, sendVerificationLink, resetPassword, loadUser, editEmail, sendOTPForEditEmail, editName} = require("../controllers/userController");
const isAuthenticatedUser = require("../utils/auth");

app.route("/signup").post(signUpUser)
app.route("/sendOTP").post(sendOTP)
app.route("/verifyOTP").post(verifyOTP)
app.route("/login").post(loginUser)
app.route("/sendVerificationLink").post(sendVerificationLink)
app.route("/resetPassword/:resetToken").post(resetPassword)
app.route("/loadUser").post(isAuthenticatedUser , loadUser)
app.route("/editName").post(isAuthenticatedUser, editName)
app.route("/sendOtpEditEmail").post(isAuthenticatedUser , sendOTPForEditEmail)
app.route("/editEmail").post(isAuthenticatedUser, editEmail)

module.exports = app;