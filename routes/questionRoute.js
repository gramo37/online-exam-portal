const express = require("express");
const app = express.Router();
const { createQuestion, getAllQuestions, updateQuestion, deleteQuestion, deleteOption } = require("../controllers/questionController");
const isAuthenticatedUser = require("../utils/auth");
const authorizeRoles = require("../utils/authorizeRoles")

app.route("/createQuestion").post(isAuthenticatedUser, authorizeRoles("teacher"), createQuestion)
app.route("/getAllQuestions").post(isAuthenticatedUser, authorizeRoles("teacher"), getAllQuestions)
app.route("/updateQuestion/:id").post(isAuthenticatedUser, authorizeRoles("teacher"), updateQuestion)
app.route("/deleteQuestion/:id").post(isAuthenticatedUser, authorizeRoles("teacher"), deleteQuestion)

app.route("/deleteOption/:id").post(isAuthenticatedUser, deleteOption);

module.exports = app;