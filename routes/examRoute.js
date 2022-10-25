const express = require("express");
const { createExam, getMyExams, getExams, takeExam, getAnswer, calculateScore, getMyScore, getScore } = require("../controllers/examController");
const isAuthenticatedUser = require("../utils/auth");
const authorizeRoles = require("../utils/authorizeRoles")
const app = express.Router()

app.route('/createExam').post(isAuthenticatedUser, authorizeRoles("teacher"), createExam)
app.route('/takeExam/:id').post(isAuthenticatedUser, takeExam)
app.route('/getAnswers/:examId').post(isAuthenticatedUser, getAnswer)
app.route('/calculateScore/:examId').post(isAuthenticatedUser, calculateScore)
app.route('/getMyScore/:examId').post(isAuthenticatedUser, getMyScore)
app.route('/getScore/:examId').post(isAuthenticatedUser, getScore)

app.route('/getMyExams').post(isAuthenticatedUser, authorizeRoles("teacher"), getMyExams)
app.route('/getExams').post(isAuthenticatedUser, getExams)

module.exports = app