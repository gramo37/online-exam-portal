// Add teacher or remove teacher
const userModel = require("../models/userModel");
const ApiFeatures = require("../utils/apiFeatures");

exports.addTeacher = async (req, res, next) => {
  try {
    const teacher = await userModel.findById(req.params.id);
    const student = await userModel.findById(req.user._id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher Not Found",
      });
    }

    if (teacher.role === "student") {
      return res.status(401).json({
        success: false,
        message: "Cannot add student to teacher's list"
      })
    }

    // Adding yourself is not allowed
    if (teacher._id.toString() === student._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "Cannot add yourself in teachers list.",
      });
    }

    // Check if teacher is already present in the list remove the teacher
    if (student.teachers.includes(teacher._id)) {

      let temp = student.teachers.indexOf(teacher._id);
      student.teachers.splice(temp, 1);
      temp = teacher.students.indexOf(student._id);
      teacher.students.splice(temp, 1);
      await student.save();
      await teacher.save();
      return res.status(200).json({
        success: false,
        message: "Teacher Removed Successfully",
      });
    }

    student.teachers.push(teacher._id);
    teacher.students.push(student._id);
    await student.save();
    await teacher.save();
    return res.status(200).json({
      success: true,
      message: "Teacher Added Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Show my teachers
exports.showTeachers = async (req, res, next) => {
  try {
    const student = await userModel.findById(req.user._id).populate("teachers");
    return res.status(200).json({
      success: true,
      teacher: student.teachers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// search teacher by name email
exports.searchTeacher = async (req, res, next) => {
  try {
    const apifeature = new ApiFeatures(userModel, req.query)
      .search("teacher")
      .pagination();
    const teachers = await apifeature.query;

    res.status(200).json({
      success: true,
      teachers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add Student
exports.addStudent = async (req, res, next) => {
  try {
    const teacher = await userModel.findById(req.user._id);
    const student = await userModel.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student Not Found",
      });
    }

    if (student.role === "teacher") {
      return res.status(401).json({
        success: false,
        message: "Cannot add teacher to student's list"
      })
    }

    // Cannot add yourself as a student
    if (teacher._id.toString() === student._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "You cannot add yourself as a student",
      });
    }

    // If student is already added then remove him
    if (teacher.students.includes(student._id)) {
      // Remove Exams related to that student
      teacher.myExam.map((item) => {
        let index = student.exam.indexOf(item);
        student.exam.splice(index, 1);
      })

      // Remove student from teacher.students
      let temp = teacher.students.indexOf(student._id);
      teacher.students.splice(temp, 1);

      // Remove teacher from student.teachers
      temp = student.teachers.indexOf(teacher._id);
      student.teachers.splice(temp, 1);

      await teacher.save();
      await student.save();

      return res.status(200).json({
        success: true,
        message: "Student Removed Successfully",
      });
    }

    teacher.students.push(student._id);
    student.teachers.push(teacher._id);

    teacher.myExam.map((exam) => {
      student.exam.push(exam)
    })

    await teacher.save();
    await student.save();
    
    return res.status(200).json({
      success: true,
      message: "Student Added Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Show Students
exports.showStudents = async (req, res, next) => {
  try {
    const student = await userModel.findById(req.user._id).populate("students");
    return res.status(200).json({
      success: true,
      students: student.students,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Search Student
exports.searchStudent = async (req, res, next) => {
  try {
    const apifeature = new ApiFeatures(userModel, req.query)
      .search("student")
      .pagination();
    const students = await apifeature.query;

    res.status(200).json({
      success: true,
      students,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getStudentProfile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await userModel.findById(id).populate("teachers");
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student Not Found"
      })
    }
    return res.status(200).json({
      success: true,
      student
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}