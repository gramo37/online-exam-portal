import axios from "axios";

const host = "";

const options = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
}

export const searchStudent = (authDetails, keyword) => axios.post(`${host}/api/v1/searchStudent?keyword=${keyword}`, authDetails);
export const searchTeacher = (authDetails, keyword) => axios.post(`${host}/api/v1/searchTeacher?keyword=${keyword}`, authDetails);
export const getStudentProfile = (id) => axios.get(`${host}/api/v1/getStudentProfile/${id}`);
export const getMyStudents = (authDetails) => axios.post(`${host}/api/v1/showStudents`, authDetails);
export const addRemoveStudent = (authDetails, id) => axios.post(`${host}/api/v1/addStudent/${id}`, authDetails);
export const getExam = (authDetails) => axios.post(`${host}/api/v1/getExams`, authDetails);
export const getMyExam = (authDetails) => axios.post(`${host}/api/v1/getMyExams`, authDetails);
export const createExam = (examDetails) => axios.post(`${host}/api/v1/createExam`, examDetails, options);
export const takeExam = (examDetails, id) => axios.post(`${host}/api/v1/takeExam/${id}`, examDetails, options);
export const sendAnswers = (answerDetails, examId) => axios.post(`${host}/api/v1/getAnswers/${examId}`, answerDetails, options);
export const calculateScore = (authDetails, id) => axios.post(`${host}/api/v1/calculateScore/${id}`, authDetails, options);
export const getScore = (authDetails, id) => axios.post(`${host}/api/v1/getScore/${id}`, authDetails, options);
export const getScores = (authDetails, id) => axios.post(`${host}/api/v1/getMyScore/${id}`, authDetails, options);