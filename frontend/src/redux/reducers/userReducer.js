import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const userReducer = createReducer(initialState, {
  loginRequest: (state) => {
    state.loading = true;
    state.user = "";
    state.error = "";
  },
  loginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.error = "";
  },
  loginFailure: (state, action) => {
    state.loading = false;
    state.user = "";
    state.error = action.payload;
  },

  RequestEditName: (state) => {
    state.loading = true;
    state.user = "";
    state.error = "";
  },
  EditNameSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.error = "";
  },
  EditNameFailure: (state, action) => {
    state.loading = false;
    state.user = "";
    state.error = action.payload;
  },

  RequireLogout: (state) => {
    state.loading = true;
    state.user = "";
    state.error = "";
  },
  LogoutSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.error = "";
  },
  LogoutFailure: (state, action) => {
    state.loading = false;
    state.user = "";
    state.error = action.payload;
  },

  registerRequest: (state) => {
    state.loading = true;
    state.user = "";
    state.error = "";
  },
  registerSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.error = "";
  },
  registerFailure: (state, action) => {
    state.loading = false;
    state.user = "";
    state.error = action.payload;
  },

  loadUserRequest: (state) => {
    state.loading = true;
    state.error = "";
    state.user = "";
  },
  loadUserSuccess: (state, action) => {
    state.loading = false;
    state.error = "";
    state.user = action.payload;
  },
  loadUserFailure: (state, action) => {
    state.loading = false;
    state.user = "";
    state.error = action.payload;
  },
});

// Store details of user before sign in
export const createUserReducer = createReducer(
  {
    userCredentials: {},
  },
  {
    storeDetailsRequest: (state) => {
      state.userCredentials = {};
    },
    storeDetailsSuccess: (state, action) => {
      state.userCredentials = action.payload;
    },
    storeDetailsFailure: (state, action) => {
      state.error = action.payload;
    },
  }
);

// Send OTP
export const OTPReducer = createReducer(
  {},
  {
    OTPSendRequire: (state) => {
      state.otpStatus = "";
      state.error = "";
    },
    OTPSendSuccess: (state, action) => {
      state.otpStatus = action.payload;
      state.error = "";
    },
    OTPSendFailure: (state, action) => {
      state.otpStatus = "";
      state.error = action.payload;
    },

    OTPVerifyRequire: (state) => {
      state.otpStatus = "";
      state.otpStatus = "";
    },
    OTPVerifySuccess: (state, action) => {
      state.otpStatus = action.payload;
      state.error = "";
    },
    OTPVerifyFailure: (state, action) => {
      state.otpStatus = "";
      state.error = action.payload;
    },
  }
);

export const verificationLinkReducer = createReducer(
  {},
  {
    RequireSendingLink: (state) => {
      state.linkStatus = "";
      state.error = "";
    },
    SendingLinkSuccess: (state, action) => {
      state.linkStatus = action.payload;
      state.error = "";
    },
    SendingLinkFailure: (state, action) => {
      state.linkStatus = "";
      state.error = action.payload;
    },

    RequireVerifyingLink: (state) => {
      state.linkStatus = "";
      state.error = "";
    },
    VerifyingLinkSuccess: (state, action) => {
      state.linkStatus = action.payload;
      state.error = "";
    },
    VerifyingLinkFailure: (state, action) => {
      state.linkStatus = "";
      state.error = action.payload;
    },
  }
);

// Process of Sign Up

// First the details entered by user are stored in state
//
