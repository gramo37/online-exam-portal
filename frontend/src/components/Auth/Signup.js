import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useDispatch, useSelector } from "react-redux";
import { storeSignInDetails, sendOTP, signInUser } from "../../redux/actions/userAction";
import { useAlert } from "react-alert";
var passwordValidator = require("password-validator");

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  var schema = new passwordValidator();

  const [progress, setProgress] = useState(0);

  const user = useSelector((state) => state.user);
  const otpStatus = useSelector((state) => state.otp);

  const [showPassword, setShowPassword] = useState(false);

  // Check if user is logged In.
  // If yes then go to "/"
  // useEffect(()=>{

  // }, [])

  // Direct Signin
  useEffect(() => {
    if (user.loading !== undefined && !user.loading) {
      if (!user.error !== undefined && user.error !== "") {
        alert.show(user.error.message)
      } else if (user.user !== undefined && user.user !== "" && user.user.success) {
        alert.success("Signin Successful")
        navigate("/home")
      }
    }
    console.log(user, user.loading)
  }, [user])

  // Un comment when sending otp
  // useEffect(() => {
  //   console.log(user, otpStatus)
  //   if (otpStatus.error !== "" && otpStatus.error !== undefined) {
  //     alert.error(otpStatus.error.message);
  //   } else if (otpStatus.otpStatus && otpStatus.otpStatus !== undefined) {
  //     alert.success(otpStatus.otpStatus.message);
  //     navigate("/verifyOTP");
  //   }
  // }, [user, otpStatus]);

  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isTeacher, setIsTeacher] = useState(false);

  const handleChangeProfession = () => {
    setIsTeacher(!isTeacher);
  };

  const signupChangeHandler = async (e) => {
    await setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const signupSubmit = async (e) => {
    setProgress(10);
    e.preventDefault();
    let role = "student";
    if (isTeacher) {
      role = "teacher";
    }

    if (
      userCredentials.name === "" ||
      userCredentials.email === "" ||
      userCredentials.password === ""
    ) {
      alert.error("Please Enter all details.");
      setProgress(0);
      return;
    }

    schema
      .is().min(8, "Paswword must be atleast 8 characters") // Minimum length 8
      .is().max(100, "Paswword cannot exceed 100 characters") // Maximum length 100
      .has().uppercase(1, "Paswword must contain atleast 1 uppercase characters") // Must have uppercase letters
      .has().lowercase(2, "Paswword must contain atleast 2 lowercase characters") // Must have lowercase letters
      .has().digits(2, "Paswword must contain atleast 2 digits") // Must have at least 2 digits
      .is().not().oneOf(["Passw0rd", "Password123", "abc123", "qwerty123", "123123", "000000"], "Password is too weak");

    const passwordValidations = schema.validate(userCredentials.password, { details: true })

    if (passwordValidations.length !== 0) {
      alert.error(passwordValidations[0].message)
      setProgress(0);
      return
    }

    // if (userCredentials.password.length < 8) {
    //   alert.error("Password must be more than 8 characters");
    //   return;
    // }

    setProgress(25);
    // Store name, email, password, role in state
    await dispatch(
      storeSignInDetails({
        name: userCredentials.name,
        email: userCredentials.email,
        password: userCredentials.password,
        role: role,
      })
    );
    setProgress(80);
    // Send OTP
    // await dispatch(sendOTP(userCredentials.email));
    // Direct Signin
    await dispatch(signInUser(
      {
        name: userCredentials.name,
        email: userCredentials.email,
        password: userCredentials.password,
      },
      role
    ))
    setProgress(100);
  };

  return (
    <>
      <LoadingBar
        color="#2b7a2b"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="flex justify-center items-center h-[100vh] w-full">
        <div className="hidden sm:flex flex-col justify-center items-center h-full w-1/4 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="flex flex-col justify-center items-center">
            <div className="text-2xl font-bold text-white">Welcome Back!</div>
            <div className="text-center my-2 text-gray-300 italic">
              Login with your Personal Information
            </div>
            <div className="button">
              <Link to="/">
                <button className="rounded-full border-2 px-4 py-2 text-white font-bold hover:bg-white hover:text-gray-400 my-4">
                  LOG IN
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-stretch h-full w-full sm:w-3/4 bg-white">
          <div className="flex items-center justify-center flex-col my-12">
            <div className="text-4xl text-green-600 my-2">Create Account</div>
            <div className="sub-heading my-2 text-lg text-gray-400 italic">
              Use your email for registration
            </div>
          </div>
          <form
            className="flex flex-col justify-center items-center"
            onChange={(e) => signupChangeHandler(e)}
            onSubmit={(e) => signupSubmit(e)}
          >
            <div className="border-1 border-blue-200 sm:w-[50%] w-[85vw] mb-4">
              <div className="bg-blue-100 flex items-center my-2">
                <div className="absolute ml-2">
                  <AccountCircleOutlinedIcon />
                </div>
                <input
                  style={{ backgroundColor: "transparent" }}
                  className="w-full to-translate pl-12 rounded-md py-2"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={userCredentials.name}
                // onChange={(e)=>signupChangeHandler(e)}
                />
              </div>
              <div className="bg-blue-100 flex items-center my-2">
                <div className="absolute ml-2">
                  <EmailOutlinedIcon />
                </div>
                <input
                  style={{ backgroundColor: "transparent" }}
                  className="w-full to-translate pl-12 rounded-md py-2"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={userCredentials.email}
                // onChange={(e)=>signupChangeHandler(e)}
                />
              </div>

              <div className="bg-blue-100 flex items-center my-2">
                <div className="absolute ml-2">
                  <LockOutlinedIcon />
                </div>
                <input
                  style={{ backgroundColor: "transparent" }}
                  className="w-full to-translate pl-12 rounded-md py-2"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={userCredentials.password}
                // onChange={(e)=>signupChangeHandler(e)}
                />
                <div
                  className="relative right-0 cursor-pointer pr-2"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </div>
              </div>
            </div>
            {/* <div className="passwordStrength">
              {console.log(passwordStrength(userCredentials.password).value)}
              {passwordStrength(userCredentials.password).value}
            </div> */}
            <div
              style={{ height: "2rem" }}
              className="flex items-center justify-center w-full"
            >
              <div
                className="flex items-center justify-center mx-2"
              >
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  value="profession"
                  name="profession"
                  id="profession"
                  checked={isTeacher}
                  onChange={() => handleChangeProfession()}
                />
                <p
                  className="text-md text-gray-400 italic"
                >
                  Are you a teacher?
                </p>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="rounded-full border-2 border-green-500 border-solid py-2 px-12 sm:py-3 sm:px-16 mt-4 shadow-md text-green-500 font-bold hover:bg-green-300"
              >
                SIGN UP
              </button>
            </div>
            <div>
              <Link to="/">
                <button
                  type="submit"
                  className="sm:hidden rounded-full bg-green-500 py-2 px-12 sm:py-3 sm:px-16 mt-4 shadow-md text-white font-bold hover:bg-green-300"
                >
                  LOG IN
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
