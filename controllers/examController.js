const answerModel = require("../models/answerModel");
const examModel = require("../models/examModel");
const questionModel = require("../models/questionModel");
const scoreModel = require("../models/scoreModel");
const userModel = require("../models/userModel")

exports.createExam = async (req, res, next) => {
    try {
        const teacher = await userModel.findById(req.user._id);
        const { startDate, endDate } = req.body

        if (!teacher) {
            return res.status(404).json({
                success: true,
                message: "Teacher not found"
            })
        }

        let start = new Date(startDate)
        let end = new Date(endDate)

        if(start.getTime() >= end.getTime()) {
            return res.status(401).json({
                success: false,
                message: "End date Must Be Greater than Start Date"
            })
        }

        const exam = await examModel.create({
            teacher: teacher._id,
            students: teacher.students,
            questions: teacher.questions,
            examExpiryDate: endDate,
            examStartDate: startDate
        })

        teacher.students.map(async (studentId) => {
            let student = await userModel.findById(studentId);
            student.exam.push(exam._id);
            await student.save()
        })

        teacher.questions = []

        teacher.myExam.push(exam._id)
        await teacher.save()

        return res.status(200).json({
            success: true,
            exam
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// For teachers to check exams created by them
exports.getMyExams = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id).populate("myExam").populate("myExamwithScores")
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            })
        }

        let exams = []
        for (let i = 0; i < user.myExam.length; i++) {
            const item = user.myExam[i];
            const answer = await answerModel.find({
                examId: item._id
            })
            let responses = answer.length
            exams.push({
                exam: item,
                responses
            })
        }

        let calculatedExams = []
        for (let i = 0; i < user.myExamwithScores.length; i++) {
            const item = user.myExamwithScores[i];
            const answer = await answerModel.find({
                examId: item._id
            })
            let responses = answer.length
            calculatedExams.push({
                exam: item,
                responses
            })
        }

        return res.status(200).json({
            success: true,
            exams,
            calculatedExams
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// For Students to Get Exams for them
exports.getExams = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id).populate("exam").populate("completedExam")
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            })
        }
        let exams = [];
        for (let i = 0; i < user.exam.length; i++) {
            const item = user.exam[i];
            console.log(item)
            let teacher = await userModel.findById(item.teacher)
            exams.push({
                id: item._id,
                examExpiryDate: item.examExpiryDate,
                examStartDate: item.examStartDate,
                teacher
            })
        }
        let completedExams = [];
        for (let i = 0; i < user.completedExam.length; i++) {
            const item = user.completedExam[i];
            console.log(item)
            let teacher = await userModel.findById(item.teacher)
            completedExams.push({
                id: item._id,
                examExpiryDate: item.examExpiryDate,
                examStartDate: item.examStartDate,
                teacher
            })
        }
        return res.status(200).json({
            success: true,
            exams,
            completedExams
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// Checks if the time is valid for the exam and starts the exam
exports.takeExam = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id)
        const exam = await examModel.findById(id).populate("questions")
        if (!exam) {
            return res.status(404).json({
                success: false,
                message: "Exam Not found"
            })
        }
        let startDate = new Date(exam.examStartDate)
        let endDate = new Date(exam.examExpiryDate)
        let currDate = new Date()

        console.log(currDate.getTime(), startDate.getTime(), endDate.getTime())

        if (currDate.getTime() >= startDate.getTime() && currDate.getTime() <= endDate.getTime()) {
            const questions = exam.questions
            return res.status(200).json({
                success: true,
                questions
            })
        }

        else if (currDate.getTime() <= startDate.getTime()) {
            return res.status(401).json({
                success: false,
                message: "Exam is yet to start"
            })
        }

        else if (currDate.getTime() >= endDate.getTime()) {
            return res.status(401).json({
                success: false,
                message: "Exam is already completed"
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.getAnswer = async (req, res, next) => {
    try {
        const { answers } = req.body
        const { examId } = req.params
        const student = await userModel.findById(req.user._id)
        const response = await answerModel.create({
            examId,
            studentId: student._id,
            responses: answers
        })

        // Add exam in completed exam list
        student.completedExam.push(examId)

        // Delete exam from student
        console.log(student)
        for (let i = 0; i < student.exam.length; i++) {
            const item = student.exam[i];
            console.log(item.toString(), examId.toString())
            if (item.toString() == examId.toString()) {
                student.exam.splice(i, 1)
                break
            }
        }
        console.log(student)
        await student.save()
        res.status(200).json({
            success: true,
            response
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.calculateScore = async (req, res, next) => {
    try {
        const { examId } = req.params
        const exam = await examModel.findById(examId)
        const teacher = await userModel.findById(req.user._id)
        console.log(exam)

        if (!exam) {
            return res.status(404).json({
                success: false,
                message: "Exam not found"
            })
        }

        const responses = await answerModel.find({
            examId
        })

        console.log(responses, "hula")
        if (!responses) {
            return res.status(404).json({
                success: false,
                message: "Exam not found"
            })
        }

        let totalResult = []
        for (let i = 0; i < responses.length; i++) {
            const item = responses[i];
            const student = item.studentId
            let score = 0
            for (let i = 0; i < item.responses.length; i++) {
                const item2 = item.responses[i];
                const answer = await questionModel.findById(item2.questionId).select("+answer")
                if (!answer) {
                    continue
                }
                if (item2.answers === answer.answer) {
                    score += 1
                }
            }
            console.log(score)

            const totalScore = await scoreModel.create({
                studentId: student,
                score,
                examId
            })
            totalResult.push(totalScore)
        }

        // Removing exam from my Exam list
        for (let i = 0; i < teacher.myExam.length; i++) {
            const item = teacher.myExam[i];
            if (item.toString() === examId.toString()) {
                teacher.myExam.splice(i, 1)
                break
            }
        }

        // Adding exam to exam List
        teacher.myExamwithScores.push(examId)
        await teacher.save()

        res.status(200).json({
            success: true,
            totalResult
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Get Score of all students for a particular exam id
exports.getMyScore = async (req, res, next) => {
    try {
        // const student = await userModel.findById(req.user._id) 
        const { examId } = req.params

        const scores = await scoreModel.find({
            examId
        }).populate("studentId").populate("examId")

        res.status(200).json({
            success: true,
            scores
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Get Score in a particular Exam
exports.getScore = async (req, res, next) => {
    try {
        const { examId } = req.params
        const student = await userModel.findById(req.user._id)
        const score = await scoreModel.find({
            studentId: student._id,
            examId: examId
        }).populate("examId")
        res.status(200).json({
            success: true,
            score
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Send Scores to respective Students
exports.sendScores = async (req, res, next) => {
    try {

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}