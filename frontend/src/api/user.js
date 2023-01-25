import axios from "axios";

// const url = '';
const url = `https://online-exam-portal.onrender.com`

const options = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
}

export const loginUser = (loginDetails) => axios.post(`${url}/api/v1/login`, loginDetails, options);
export const sendOTP = (email) => axios.post(`${url}/api/v1/sendOTP`, email, options);
export const verifyOTP = (otpDetails) => axios.post(`${url}/api/v1/verifyOTP`, otpDetails, options);
export const signInUser = (signInDetails) => axios.post(`${url}/api/v1/signup`, signInDetails, options);
export const sendLink = (email) => axios.post(`${url}/api/v1/sendVerificationLink`, email, options);
export const verifyLink = (passwordDetails, resetToken) => axios.post(`${url}/api/v1/resetPassword/${resetToken}`, passwordDetails, options);
export const sendOTPForEditEmail = (authDetails) => axios.post(`${url}/api/v1/sendOtpEditEmail`, authDetails, options);
export const editEmail = (authDetails) => axios.post(`${url}/api/v1/editEmail`, authDetails, options);
export const loadUser = (authDetails) => axios.post(`${url}/api/v1/loadUser`, authDetails, options);
export const changeName = (authDetails) => axios.post(`${url}/api/v1/editName`, authDetails, options);
