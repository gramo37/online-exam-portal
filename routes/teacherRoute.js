const express = require("express");
const { addTeacher, showTeachers, searchTeacher, addStudent, showStudents, searchStudent, getStudentProfile } = require("../controllers/teacherController");
const isAuthenticatedUser = require("../utils/auth");
const authorizeRoles = require("../utils/authorizeRoles");
const app = express.Router();

app.route('/addTeacher/:id').post(isAuthenticatedUser, addTeacher)
app.route('/showTeachers').get(isAuthenticatedUser, showTeachers)
app.route('/searchTeacher').post(isAuthenticatedUser, searchTeacher)

app.route('/addStudent/:id').post(isAuthenticatedUser, authorizeRoles("teacher"), addStudent)
app.route('/showStudents').post(isAuthenticatedUser, authorizeRoles("teacher"), showStudents)
app.route('/searchStudent').post(isAuthenticatedUser, authorizeRoles("teacher"),  searchStudent)
app.route('/getStudentProfile/:id').get(getStudentProfile)

module.exports = app;