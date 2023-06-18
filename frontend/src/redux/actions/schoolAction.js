import * as api from "../../api/school.js"

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const searchStudent = (keyword) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireGetStudents"
        })

        const token = getCookie("authToken")
        const {data} = await api.searchStudent({authToken: token}, keyword);

        dispatch({
            type: "GetStudentSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GetStudentFail",
            payload: error.response.data
        })
    }
}

export const searchTeacher = (keyword) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireGetTeachers"
        })
        
        const token = getCookie("authToken")
        const {data} = await api.searchTeacher({authToken: token}, keyword);

        dispatch({
            type: "GetTeacherSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GetTeacherFail",
            payload: error.response.data
        })
    }
}

export const getStudentProfile = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireGetStudents"
        })

        const { data } = await api.getStudentProfile(id);
        console.log(data);

        dispatch({
            type: "GetStudentSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GetStudentFail",
            payload: error.response.data
        })
    }
}

export const getMyStudents = () => async (dispatch) => {
    try {
        dispatch({
            type: "RequireGetStudents"
        })

        const token = getCookie("authToken")
        const { data } = await api.getMyStudents({authToken: token});

        dispatch({
            type: "GetStudentSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GetStudentFail",
            payload: error.response.data
        })
    }
}

export const addRemoveStudent = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireAddStudents"
        })

        const token = getCookie("authToken")
        const { data } = await api.addRemoveStudent({authToken: token}, id);

        dispatch({
            type: "AddStudentSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "AddStudentFail",
            payload: error.response.data
        })
    }
}

export const getExam = () => async (dispatch) => {
    try {
        dispatch({
            type: "RequireGetExam"
        })

        const token = getCookie("authToken")
        const { data } = await api.getExam({authToken: token})

        dispatch({
            type: "GetExamSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "GetExamFail",
            payload: error.response.data
        })
    }
}

export const getMyExam = () => async (dispatch) => {
    try {
        dispatch({
            type: "RequireMyExam"
        })

        const token = getCookie("authToken")
        const { data } = await api.getMyExam({authToken: token})

        dispatch({
            type: "GetMyExamSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GetMyExamFailure",
            payload: error.response.data
        })
    }
}

export const createExam = (startDate, endDate) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireCreateExam"
        })

        const token = getCookie("authToken")
        const examDetails = {
            startDate,
            endDate,
            authToken: token
        }
        const { data } = await api.createExam(examDetails)

        dispatch({
            type: "CreateExamSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "CreateExamFailure",
            payload: error.response.data
        })
    }
}

export const clearCreateExam = () => async (dispatch) => {
    dispatch({
        type: "clearCreateExam"
    })
}

export const clearSendAnswer = () => async (dispatch) => {
    dispatch({
        type: "clearSendAnswer"
    })
}

export const takeExam = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireTakeExam",
        })

        const token = getCookie("authToken")
        const {data} = await api.takeExam({authToken: token, id}, id);

        dispatch({
            type: "TakeExamSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "TakeExamFailure",
            payload: error.response.data
        })
    }
}

export const sendAnswers = (answers, examId) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireSendAnswers"
        })
        
        const token = getCookie("authToken")
        const answerDetails = {
            answers,
            authToken: token
        }
        const { data } = await api.sendAnswers(answerDetails, examId);

        dispatch({
            type: "SendAnswerSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "SendAnswerFailure",
            payload: error.response.data
        })
    }
}

export const calculateScore = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireCalScore"
        })

        const token = getCookie("authToken")
        const {data} = await api.calculateScore({authToken: token}, id);

        dispatch({
            type: "CalScoreSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "CalScoreFailure",
            payload: error.response.data
        })
    }
}

export const getScore = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireGetScore"
        })
        
        const token = getCookie("authToken")
        const {data} = await api.getScore({authToken: token}, id);

        dispatch({
            type: "GetScoreSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GetScoreFailure",
            payload: error.response.data
        })
    }
}

// Get Scores of all students for a particular exam id
export const getScores = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireGetScore"
        })
        
        const token = getCookie("authToken")
        const {data} = await api.getScores({authToken: token}, id);

        dispatch({
            type: "GetScoreSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GetScoreFailure",
            payload: error.response.data
        })
    }
}