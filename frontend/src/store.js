// const {createStore} = require("react-redux")
// import {createStore} from "redux";

import {configureStore} from "@reduxjs/toolkit";
import { createUserReducer, OTPReducer, userReducer, verificationLinkReducer } from "./redux/reducers/userReducer";
import {questionReducers, questionFunctionReducers, optionReducer} from "./redux/reducers/questionReducer"
import { addStudentReducer, createExamReducer, examReducer, myExamReducer, schoolReducer, scoreReducer, sendAnswersReducer, takeExamReducer } from "./redux/reducers/schoolReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        signInDetails: createUserReducer,
        otp: OTPReducer,
        linkStatus: verificationLinkReducer,

        questions: questionReducers,
        questionsFunction: questionFunctionReducers,
        options: optionReducer,

        school: schoolReducer,
        addStudent: addStudentReducer,
        exam: examReducer,
        myExam: myExamReducer,
        score: scoreReducer,

        createExam: createExamReducer,
        takeExam: takeExamReducer,
        sendAnswer: sendAnswersReducer
    }
});

// const store = configureStore()

export default store;