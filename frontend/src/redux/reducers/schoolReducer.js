import { createReducer } from "@reduxjs/toolkit";

// Used for searching teachers and students
export const schoolReducer = createReducer({}, {
    RequireGetStudents: (state) => {
        state.student = ""
        state.error = ""
        state.loading = true
    },
    GetStudentSuccess: (state, action) => {
        state.student = action.payload
        state.error = ""
        state.loading = false
    },
    GetStudentFail: (state, action) => {
        state.student = ""
        state.error = action.payload
        state.loading = false
    },
    RequireGetTeachers: (state) => {
        state.student = ""
        state.error = ""
        state.loading = true
    },
    GetTeacherSuccess: (state, action) => {
        state.student = action.payload
        state.error = ""
        state.loading = false
    },
    GetTeacherFail: (state, action) => {
        state.student = ""
        state.error = action.payload
        state.loading = false
    }
})

export const addStudentReducer = createReducer({}, {
    RequireAddStudents: (state) => {
        state.message = ""
        state.error = ""
        state.loading = true
    },
    AddStudentSuccess: (state, action) => {
        state.message = action.payload
        state.error = ""
        state.loading = false
    },
    AddStudentFail: (state, action) => {
        state.message = ""
        state.error = action.payload
        state.loading = false
    }
})

export const examReducer = createReducer({}, {
    RequireGetExam: (state) => {
        state.exam = ""
        state.error = ""
        state.loading = true
    },
    GetExamSuccess: (state, action) => {
        state.exam = action.payload
        state.error = ""
        state.loading = false
    },
    GetExamFail: (state, action) => {
        state.exam = ""
        state.error = action.payload
        state.loading = false
    }
})

export const myExamReducer = createReducer({}, {
    RequireMyExam: (state) => {
        state.exam = ""
        state.error = ""
        state.loading = true
    },
    GetMyExamSuccess: (state, action) => {
        state.exam = action.payload
        state.error = ""
        state.loading = false
    },
    GetMyExamFailure: (state, action) => {
        state.exam = ""
        state.error = action.payload
        state.loading = false
    }
})

export const createExamReducer = createReducer({}, {
    RequireCreateExam: (state) => {
        state.loading = true
        state.error = ""
        state.status = ""
    },
    CreateExamSuccess: (state, action) => {
        state.loading = false
        state.error = ""
        state.status = action.payload
    },
    CreateExamFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
        state.status = ""
    },
    clearCreateExam: (state) => {
        state.loading = false
        state.error = ""
        state.status = ""
    }
})

export const takeExamReducer = createReducer({}, {
    RequireTakeExam: (state) => {
        state.loading = true
        state.error = ""
        state.status = ""
    },
    TakeExamSuccess: (state, action) => {
        state.loading = false
        state.error = ""
        state.status = action.payload
    },
    TakeExamFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
        state.status = ""
    }
})

export const sendAnswersReducer = createReducer({}, {
    RequireSendAnswers: (state) => {
        state.loading = true
        state.error = ""
        state.status = ""
    },
    SendAnswerSuccess: (state, action) => {
        state.loading = false
        state.error = ""
        state.status = action.payload
    },
    SendAnswerFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
        state.status = ""
    },
    clearSendAnswer: (state) => {
        state.loading = false
        state.error = ""
        state.status = ""
    }
})

export const scoreReducer = createReducer({}, {
    RequireCalScore: (state) => {
        state.loading = true
        state.error = ""
        state.score = ""
    },
    CalScoreSuccess: (state, action) => {
        state.loading = false
        state.error = ""
        state.score = action.payload
    },
    CalScoreFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
        state.score = ""
    },
    RequireGetScore: (state) => {
        state.loading = true
        state.error = ""
        state.score = ""
    },
    GetScoreSuccess: (state, action) => {
        state.loading = false
        state.error = ""
        state.score = action.payload
    },
    GetScoreFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
        state.score = ""
    }
})