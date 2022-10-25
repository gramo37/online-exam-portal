const userModel = require("../models/userModel");
const otpModel = require("../models/otpModel");
const sendEmail = require("../utils/sendMail");
const sendToken = require("../utils/sendToken");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

exports.signUpUser = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  try {
    const saved_otp = await otpModel.findOne({ email });

    // if (!saved_otp) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "OTP Expired. Please Sign up again.",
    //   });
    // }

    // if (!saved_otp.isMailVerified) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "Please verify OTP first",
    //   });
    // }

    const user = await userModel.create({
      name,
      email,
      password,
      role,
    });

    // saved_otp.deleteOne({ email });

    sendToken(res, user, 200);
  } catch (error) {
    // console.log(error)
    if (error.code === 11000) {
      error.message = `Duplicate Email entered`;
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.sendOTP = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(401).json({
        success: false,
        message: "Email Exists. Please Login.",
      });
    }

    // Create and save OTP
    const new_otp = Math.floor(100000 + Math.random() * 900000);
    let otp = await otpModel.create({
      email,
      otp: new_otp,
    });

    // Delete OTP after 5 minutes
    setTimeout(async () => {
      await otp.deleteOne({ email });
    }, process.env.OTP_EXPIRE * 60 * 1000);

    const msg = `Your OTP is ${new_otp}`;
    sendEmail(res, email, "Please find the OTP", msg);
  } catch (error) {
    console.log(error.code);
    if (error.code === 11000) {
      return res.status(500).json({
        success: false,
        message: "OTP Already Sent. Please check your mail.",
      });
    }
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.verifyOTP = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    const saved_otp = await otpModel.findOne({ email });

    if (!saved_otp) {
      return res.status(500).json({
        success: false,
        message: "OTP Expired. Please Sign Up Again",
      });
    }

    const is_otp_matched = await saved_otp.comparePassword(otp);

    if (!is_otp_matched) {
      return res.status(500).json({
        success: false,
        message: "OTP not matching",
      });
    }

    saved_otp.isMailVerified = true;
    await saved_otp.save();
    return res.status(200).json({
      success: true,
      message: "OTP verified",
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(500).json({
        success: false,
        message: "User Not Found. Please Login.",
      });
    }
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(404).json({
        success: false,
        message: "Password Not Matching.",
      });
    }

    sendToken(res, user, 200);
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

// Send Verification Link
exports.sendVerificationLink = async (req, res, next) => {
  {
    try {
      const { email } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User Not Found",
        });
      }
      // Get ResetPassword Token
      const resetToken = await user.getResetPasswordToken();

      await user.save({ validateBeforeSave: false });

      const resetPasswordURL = `${process.env.FRONTEND_URL}/api/v1/reset/password/${resetToken}`;
      const message = `Reset Password using: \n\n${resetPasswordURL}. \n\n Ignore if not requested.`;

      return res.status(200).json({
        success: true,
        message: resetToken
      })
      
      // try {
      //   await sendEmail(res, email, "Password Recovery", message);
      // } catch (error) {
      //   user.resetPasswordToken = undefined;
      //   user.resetPasswordExpire = undefined;
      //   await user.save({ validateBeforeSave: false });
      //   return res.status(500).json({
      //     success: false,
      //     message: error.message,
      //   });
      // }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

// Reset Password
exports.resetPassword = async (req, res, next) => {
  try {
    // Creating token hash of the provided token
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.resetToken)
      .digest("hex");

    // Find the user with the given token
    const user = await userModel.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid token or expired token",
      });
    }

    if (req.body.password !== req.body.confirmPassword) {
      return res.status(404).json({
        success: false,
        message: "Passwords are not matching",
      });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    sendToken(res, user, 200);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.loadUser = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Edit Email after verifying through OTP
exports.sendOTPForEditEmail = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    const { email } = req.body;

    // Check if Email is changed
    if (user.email !== email) {
      // Create and save OTP
      const new_otp = Math.floor(100000 + Math.random() * 900000);
      let otp = await otpModel.create({
        email,
        otp: new_otp,
      });

      // Delete OTP after 5 minutes
      setTimeout(async () => {
        await otp.deleteOne({ email });
      }, process.env.OTP_EXPIRE * 60 * 1000);

      const msg = `Your OTP is ${new_otp}`;
      sendEmail(res, email, "Please find the OTP", msg);
    } else {
      return res.status(500).json({
        success: false,
        message: "Same Mail ID entered",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await userModel.findById(req.user._id);
    const saved_otp = await otpModel.findOne({ email });

    if (!saved_otp) {
      return res.status(404).json({
        success: false,
        user,
        message: "OTP Expired. Please Sign up again.",
      });
    }

    if (!saved_otp.isMailVerified) {
      return res.status(404).json({
        success: false,
        user,
        message: "Please verify OTP first",
      });
    }

    user.email = email;
    await user.save();
    return res.status(200).json({
      success: true,
      user,
      message: "Mail id changed Successfully"
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Edit Name
exports.editName = async (req, res, next) => {
  try {
    const {name} = req.body;
    const user = await userModel.findById(req.user._id);
    user.name = name;
    await user.save();
    return res.status(200).json({
      success: true,
      user,
      message: "Name Edited Successfully"
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}