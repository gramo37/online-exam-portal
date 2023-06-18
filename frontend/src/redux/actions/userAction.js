import { sendEmail } from "../../utils/sendEmail";

import * as api from "../../api/user.js";

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
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
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

    const loginDetails = {
      email: email,
      password: password
    }

    const { data } = await api.loginUser(loginDetails)

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

    const { data } = api.sendOTP({ email });

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

    const { data } = api.verifyOTP({ email, otp });

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

    const signInDetails = {
      name: userCredentials.name,
      email: userCredentials.email,
      password: userCredentials.password,
      role: role,
    }

    const { data } = await api.signInUser(signInDetails)

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

    const { data } = await api.sendLink({ email });

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

    // const passwordDetails = {
    //   password: password.password,
    //   confirmPassword: password.confirmPassword,
    // }

    const { data } = await api.verifyLink(password, resetToken)

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

    const token = getCookie("authToken")
    const authDetails = {
      email,
      authToken: token
    }

    const { data } = await api.sendOTPForEditEmail(authDetails);

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

    const token = getCookie("authToken")
    const authDetails = {
      email,
      authToken: token
    }

    const { data } = await api.editEmail(authDetails);

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
    const { data } = await api.loadUser({ authToken: token })

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

    const token = getCookie("authToken")
    const authDetails = {
      name,
      authToken: token
    }
    const { data } = await api.changeName(authDetails);

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
