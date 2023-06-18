import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import CheckIcon from "@mui/icons-material/Check";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useNavigate } from "react-router-dom";
import TokenIcon from '@mui/icons-material/Token';
import { useDispatch } from "react-redux";
import { verifyLink, loadUser } from "../../redux/actions/userAction";
import { useAlert } from "react-alert";
var passwordValidator = require("password-validator");

const VerifyLink = () => {
  const [progress, setProgress] = useState(0);
  // const { resetToken } = useParams();
  var schema = new passwordValidator()

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate()
  // const linkStatus = useSelector((state) => state.linkStatus);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState({
    resetToken: "",
    password: "",
    confirmPassword: "",
  });

  // useEffect(() => {
  //   console.log(linkStatus)
  //   if (linkStatus.error !== undefined && linkStatus.error !== "") {
  //     alert.error(linkStatus.error.message)
  //   } else if (linkStatus.linkStatus !== undefined && linkStatus.linkStatus !== "") {
  //     alert.success("Password changed successfully. Please Login.")
  //     navigate("/home")
  //   }
  // }, [linkStatus])

  const changeHandler = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setProgress(20)

    schema
      .is().min(8, "Paswword must be atleast 8 characters") // Minimum length 8
      .is().max(100, "Paswword cannot exceed 100 characters") // Maximum length 100
      .has().uppercase(1, "Paswword must contain atleast 1 uppercase characters") // Must have uppercase letters
      .has().lowercase(2, "Paswword must contain atleast 2 lowercase characters") // Must have lowercase letters
      .has().digits(2, "Paswword must contain atleast 2 digits") // Must have at least 2 digits
      .is().not().oneOf(["Passw0rd", "Password123", "abc123", "qwerty123", "123123", "000000", "password", "12345678", "Password"], "Password is too weak");

    const passwordValidations = schema.validate(password.password, { details: true })

    if (passwordValidations.length !== 0) {
      alert.error(passwordValidations[0].message)
      setProgress(0);
      return
    }

    setProgress(40)
    await dispatch(verifyLink(password, password.resetToken));
    await dispatch(loadUser());
    setProgress(100)
    alert.success("Password changed successfully.")
    navigate("/home")
    // console.log(password, resetToken);
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
        <div className="flex flex-col justify-center items-stretch h-full w-full bg-white">
          <div className="flex items-center justify-center flex-col my-12">
            <div className="text-4xl text-green-600 my-2">Reset Password</div>
            <div className="sub-heading my-2 text-lg text-gray-400 italic">
              Please Set Your New Password.
            </div>
          </div>
          <form
            className="flex flex-col justify-center items-center"
            onChange={(e) => changeHandler(e)}
            onSubmit={(e) => onSubmit(e)}
          >

            <div className="flex items-center">
              <div className="absolute ml-2">
                {/* <LockOutlinedIcon /> */}
                <TokenIcon />
              </div>
              <input
                className="bg-green-100 pl-12 py-3 my-2 rounded-md w-[18rem] sm:w-[20rem]"
                type="password"
                placeholder="Enter Token"
                name="resetToken"
                value={password.resetToken}
              // onChange={(e)=>signupChangeHandler(e)}
              />
              <div
                style={{ pointerEvents: "none" }}
                className="translate-x-96 cursor-pointer opacity-0 "
              >
                <VisibilityOutlinedIcon />
              </div>
            </div>

            <div className="flex items-center">
              <div className="absolute ml-2">
                <LockOutlinedIcon />
              </div>
              <input
                className="bg-green-100 pl-12 py-3 my-2 rounded-md w-[18rem] sm:w-[20rem]"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password.password}
              // onChange={(e)=>signupChangeHandler(e)}
              />
              <div
                className="translate-x-96 cursor-pointer"
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

            <div className="flex items-center">
              <div className="absolute ml-2">
                <CheckIcon />
              </div>
              <input
                className="bg-green-100 pl-12 py-3 my-2 rounded-md w-[18rem] sm:w-[20rem]"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={password.confirmPassword}
              // onChange={(e)=>signupChangeHandler(e)}
              />
              <div
                className="translate-x-96 cursor-pointer"
                onClick={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                }}
              >
                {showConfirmPassword ? (
                  <VisibilityOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </div>
            </div>

            <div>
              <button
                style={{ padding: "10px" }}
                type="submit"
                className="rounded-full bg-green-500 mt-4 shadow-md text-white font-bold hover:bg-green-300"
              >
                RESET PASSWORD
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyLink;
