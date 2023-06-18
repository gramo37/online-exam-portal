import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { loginUser } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import LoadingBar from "react-top-loading-bar";

const Login = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const alert = useAlert();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isLoginClicked, setisLoginClicked] = useState(false)

  useEffect(() => {
    if (user.loading !== undefined && !user.loading && isLoginClicked) {
      if (!user.error !== undefined && user.error !== "") {
        alert.show(user.error.message)
      } else if (user.user !== undefined && user.user !== "" && user.user.success) {
        alert.success("Login Successful")
        navigate("/dashboard")
      }
    }
    console.log(user, user.loading)
  }, [user, alert, isLoginClicked, navigate])


  const [userCredentials, setuserCredentials] = useState({
    email: "",
    password: ""
  })

  // const demo = useSelector(state=>stae/)

  const [showPassword, setShowPassword] = useState(false);

  // const [loginIsClicked, setLoginIsClicked] = useState(false);

  const loginChangeHandler = (e) => {
    setuserCredentials({ ...userCredentials, [e.target.name]: e.target.value })
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    setProgress(40)
    setisLoginClicked(true)
    // Dispatch Login 
    await dispatch(loginUser(userCredentials.email, userCredentials.password));
    setProgress(100)
    console.log(userCredentials)
    // setLoginIsClicked(true)
  };

  const demoTeacherLoginSubmit = async (e) => {
    e.preventDefault();
    setProgress(40)
    setisLoginClicked(true)
    // Dispatch Login 
    await dispatch(loginUser("demoTeacher@gmail.com", "Pass@405"));
    setProgress(100)
  }

  const demoStudentLoginSubmit = async (e) => {
    e.preventDefault();
    setProgress(40)
    setisLoginClicked(true)
    // Dispatch Login 
    await dispatch(loginUser("demostudent@gmail.com", "Pass@405"));
    setProgress(100)
  }

  return (
    <>
      <LoadingBar
        color="#2b7a2b"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center h-[100vh] w-full border-2">
        <div className="hidden sm:flex flex-col justify-center items-center border-2 h-full w-1/4 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="flex flex-col justify-center items-center">
            <div className="text-2xl font-bold text-white">New User ?</div>
            <div className="text-center my-2 text-gray-300 italic">
              Register Yourself Now !
            </div>
            <div className="button">
              <Link to="/signup">
                <button className="rounded-full border-2 px-4 py-2 text-white font-bold hover:bg-white hover:text-gray-400 my-4">
                  SIGN UP
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-stretch border-2 h-full w-full sm:w-3/4 bg-white">
          <div className="flex items-center justify-center flex-col my-12">
            <div className="text-4xl text-green-600 my-2">Welcome Back!</div>
            <div className="sub-heading my-2 text-lg text-gray-400 italic">
              Login with your Personal Information
            </div>
          </div>
          <form
            className="flex flex-col justify-center items-center"
            onChange={(e) => loginChangeHandler(e)}
            onSubmit={(e) => loginSubmit(e)}
          >
            <div className="border-1 border-blue-200 sm:w-[50%] w-[85vw] mb-4">
              <div className="bg-blue-100 flex items-center my-2">
                <div className="absolute ml-2">
                  <EmailOutlinedIcon />
                </div>
                <input
                  style={{ backgroundColor: "transparent" }}
                  className="w-full to-translate py-2 pl-12 rounded-md"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={userCredentials.email}
                />
                {/* <div className="opacity-0 pr-2">
                <VisibilityOutlinedIcon />
              </div> */}
              </div>

              <div className="bg-blue-100 flex items-center">
                <div className="absolute ml-2">
                  <LockOutlinedIcon />
                </div>
                <input
                  style={{ backgroundColor: "transparent" }}
                  className="w-full py-2 pl-12 rounded-md"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={userCredentials.password}
                />
                <div
                  className="relative right-0 cursor-pointer pr-2 flex justify-end items-center"
                  onClick={() => {
                    setShowPassword(!showPassword)
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
            <div className="flex">
              <Link to="/password/forgot" className="text-blue-400">
                Forgot Password ?
              </Link>
            </div>
            <div className="flex flex-col">
              <button
                type="submit"
                className="rounded-full border-2 border-green-500 border-solid py-2 px-1 sm:py-1 sm:px-2 mt-4 shadow-md text-green-500 font-bold hover:bg-green-300"
              >
                LOG IN
              </button>
              <button
                className="rounded-full border-2 border-green-500 border-solid py-2 px-1 sm:py-1 sm:px-2 mt-4 shadow-md text-green-500 font-bold hover:bg-green-300"
                onClick={demoTeacherLoginSubmit}
              >
                Demo Teacher Login
              </button>

              <button
                className="rounded-full border-2 border-green-500 border-solid py-2 px-1 sm:py-1 sm:px-2 mt-4 shadow-md text-green-500 font-bold hover:bg-green-300"
                onClick={demoStudentLoginSubmit}
              >
                Demo Student Login
              </button>

            </div>
            <div>
              <Link to="/signup">
                <button
                  type="submit"
                  className="sm:hidden rounded-full bg-green-500 py-2 px-12 sm:py-3 sm:px-16 mt-4 shadow-md text-white font-bold hover:bg-green-300"
                >
                  SIGN IN
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login