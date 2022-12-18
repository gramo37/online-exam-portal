import axios from "axios";

const host = '';

const options = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
}

export const getQuestions = (authDetails) => axios.post(`${host}/api/v1/getAllQuestions`, authDetails);
export const createQuestion = (questionDetails) => axios.post(`${host}/api/v1/createQuestion`, questionDetails);
export const editQuestion = (questionDetails, id) => axios.post(`${host}/api/v1/updateQuestion/${id}`, questionDetails, options);
export const deleteQuestion = (questionDetails, id) => axios.post(`${host}/api/v1/deleteQuestion/${id}`, questionDetails, options);
export const deleteOption = (optionDetails, id) => axios.post(`${host}/api/v1/deleteOption/${id}`, optionDetails, options);
