import axios from "axios"

const host = `https://online-exam-portal-by-gramo.herokuapp.com`
// const host = `http://localhost:5000`

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
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

        const link = `${host}/api/v1/searchStudent?keyword=${keyword}`
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        }
        const token = getCookie("authToken")
        const { data } = await axios.post(link, {
            authToken: token
        })
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
        const link = `${host}/api/v1/searchTeacher?keyword=${keyword}`
        const token = getCookie("authToken")
        const { data } = await axios.post(link, {
            authToken: token
        })
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

        const link = `${host}/api/v1/getStudentProfile/${id}`
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        }

        const { data } = await axios.get(link)

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

        const link = `${host}/api/v1/showStudents`
        const token = getCookie("authToken")
        const { data } = await axios.post(link, {
            authToken: token
        })

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

        const link = `${host}/api/v1/addStudent/${id}`
        const token = getCookie("authToken")
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        }

        const { data } = await axios.post(link, {
            authToken: token
        })

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
        const link = `${host}/api/v1/getExams`
        const { data } = await axios.post(link, {
            authToken: token
        })

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
        const { data } = await axios.post(`${host}/api/v1/getMyExams`, {
            authToken: token
        })
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
        const link = `${host}/api/v1/createExam`
        const { data } = await axios.post(link, {
            startDate,
            endDate,
            authToken: token
        }, {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        })
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
        const link = `${host}/api/v1/takeExam/${id}`
        const { data } = await axios.post(link, {
            authToken: token
        }, {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        })

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
        const link = `${host}/api/v1/getAnswers/${examId}`
        const token = getCookie("authToken")
        const { data } = await axios.post(link, {
            answers,
            authToken: token
        }, {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        })
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
        const link = `${host}/api/v1/calculateScore/${id}`
        const { data } = await axios.post(link, {
            authToken: token
        }, {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        })
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
        const link = `${host}/api/v1/getScore/${id}`
        const token = getCookie("authToken")
        const {data} = await axios.post(link, {
            authToken: token
        }, {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        })
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
        const link = `${host}/api/v1/getMyScore/${id}`
        const token = getCookie("authToken")
        const {data} = await axios.post(link, {
            authToken: token
        },{
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        })
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