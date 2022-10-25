import { sendEmail } from "../../utils/sendEmail";

const axios = require("axios");

// const host = `http://localhost:5000`
const host = `https://online-exam-portal-by-gramo.herokuapp.com`


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 23 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(cname) {
  let cvalue = null;
  const d = new Date();
  d.setTime(d.getTime() - 10 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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

export const clearState = () => async (dispatch) => {
  dispatch({
    type: "loginRequest",
  });
  dispatch({
    type: "storeDetailsRequest",
  });
  dispatch({
    type: "OTPSendRequire",
  });
  dispatch({
    type: "OTPVerifyRequire",
  });
  dispatch({
    type: "registerRequest",
  });
  dispatch({
    type: "RequireSendingLink",
  });
};

export const clearOtp = () => async (dispatch) => {

  dispatch({
    type: "OTPSendRequire",
  });
  dispatch({
    type: "OTPVerifyRequire",
  });

};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

    const link = `${host}/api/v1/login`;
    const { data } = await axios.post(
      link,
      {
        email: email,
        password: password
      },
      {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      }
    );

    setCookie("authToken", data.token, 1);

    dispatch({
      type: "loginSuccess",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "loginFailure",
      payload: error.response.data,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "RequireLogout",
    });

    deleteCookie("authToken");

    dispatch({
      type: "LogoutSuccess",
      payload: {
        success: "true",
        message: "Logout successful",
      },
    });
  } catch (error) {
    dispatch({
      type: "LogoutFailure",
      payload: error.response.data,
    });
  }
};

// Store details entered by user while signing in
export const storeSignInDetails = (userCredentials) => async (dispatch) => {
  try {
    dispatch({
      type: "storeDetailsRequest",
    });

    // await localStorage.removeItem("userCredentials");
    // await localStorage.setItem(
    //   "userCredentials",
    //   JSON.stringify(userCredentials)
    // );

    dispatch({
      type: "storeDetailsSuccess",
      payload: userCredentials,
    });
  } catch (error) {
    dispatch({
      type: "storeDetailsFailure",
      payload: error.response.data,
    });
  }
};

export const sendOTP = (email) => async (dispatch) => {
  try {
    dispatch({
      type: "OTPSendRequire",
    });

    const link = `${host}/api/v1/sendOTP`;
    const { data } = await axios.post(
      link,
      {
        email,
      },
      {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      }
    );

    dispatch({
      type: "OTPSendSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "OTPSendFailure",
      payload: error.response.data,
    });
  }
};

export const verifyOTP = (email, otp) => async (dispatch) => {
  try {
    dispatch({
      type: "OTPVerifyRequire",
    });

    const link = `${host}/api/v1/verifyOTP`;
    const { data } = await axios.post(
      link,
      {
        email,
        otp,
      },
      {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      }
    );

    dispatch({
      type: "OTPVerifySuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "OTPVerifyFailure",
      payload: error.response.data,
    });
  }
};

export const signInUser = (userCredentials, role) => async (dispatch) => {
  try {
    dispatch({
      type: "registerRequest",
    });

    const link = `${host}/api/v1/signup`;
    console.log(userCredentials, role);
    const { data } = await axios.post(
      link,
      {
        name: userCredentials.name,
        email: userCredentials.email,
        password: userCredentials.password,
        role: role,
      },
      {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      }
    );

    setCookie("authToken", data.token, 1);

    await localStorage.removeItem("userCredentials");

    dispatch({
      type: "registerSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "registerFailure",
      payload: error.response.data,
    });
  }
};

export const sendLink = (email) => async (dispatch) => {
  try {
    dispatch({
      type: "RequireSendingLink",
    });

    const link = `${host}/api/v1/sendVerificationLink`;
    const { data } = await axios.post(
      link,
      { email: email },
      {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      }
    );

    let message = `Copy Paste this token: ${data.message}`
    let subject = 'Reset Token'
    let successMessage = "Paste the reset token sent to you here."
    console.log(data)

    await sendEmail(email, message, subject, successMessage, dispatch);

  } catch (error) {
    dispatch({
      type: "SendingLinkFailure",
      payload: error.response.data,
    });
  }
};

export const verifyLink = (password, resetToken) => async (dispatch) => {
  try {
    dispatch({
      type: "RequireVerifyingLink",
    });

    const link = `${host}/api/v1/resetPassword/${resetToken}`;
    const { data } = await axios.post(
      link,
      {
        password: password.password,
        confirmPassword: password.confirmPassword,
      },
      {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      }
    );

    setCookie("authToken", data.token, 1);

    dispatch({
      type: "VerifyingLinkSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "VerifyingLinkFailure",
      payload: error.response.data,
    });
  }
};

// Send OTP for Email change
export const sendOTPForEditEmail = (email) => async (dispatch) => {
  try {
    dispatch({
      type: "OTPSendRequire",
    });

    const link = `${host}/api/v1/sendOtpEditEmail`;
    const token = getCookie("authToken")
    const { data } = await axios.post(
      link,
      {
        email,
        authToken: token
      },
      {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      }
    );

    dispatch({
      type: "OTPSendSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "OTPSendFailure",
      payload: error.response.data,
    });
  }
};

export const editEmail = (email) => async (dispatch) => {
  try {
    dispatch({
      type: "RequestEditName"
    })

    const link = `${host}/api/v1/editEmail`;
    const token = getCookie("authToken")
    const { data } = await axios.post(
      link,
      {
        email,
        authToken: token
      },
      {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      }
    );

    dispatch({
      type: "EditNameSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "EditNameFailure",
      payload: error.response.data,
    });
  }
}

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });
    const token = getCookie("authToken")
    // console.log(token)
    const link = `${host}/api/v1/loadUser`;
    const { data } = await axios.post(link, {
      authToken: token
    }, {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    });
    console.log(data)
    dispatch({
      type: "loadUserSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
      payload: error.response.data,
    });
  }
};

export const changeName = (name) => async (dispatch) => {
  try {
    dispatch({
      type: "RequestEditName",
    });

    const link = `${host}/api/v1/editName`;
    const token = getCookie("authToken")
    const { data } = await axios.post(
      link,
      {
        name,
        authToken: token
      },
      {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      }
    );
    dispatch({
      type: "EditNameSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "EditNameFailure",
      payload: error.response.data,
    });
  }
};
