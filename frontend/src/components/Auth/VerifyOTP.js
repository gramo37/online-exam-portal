import React, { useState, useEffect } from "react";
import SecurityIcon from "@mui/icons-material/Security";
import { useDispatch, useSelector } from "react-redux";
import { signInUser, verifyOTP, loadUser } from "../../redux/actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router";
import LoadingBar from "react-top-loading-bar";

const VerifyOTP = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const signInDetails = useSelector((state) => state.signInDetails);
  const otpStatus = useSelector((state) => state.otp);
  const alert = useAlert();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isVerifyOTPClicked, setisVerifyOTPClicked] = useState(false);

  useEffect(() => {
    console.log(user)
    if (
      otpStatus.otpStatus !== "" &&
      otpStatus.otpStatus !== undefined &&
      otpStatus.otpStatus.success &&
      !user.loading &&
      isVerifyOTPClicked
    ) {
      if (user.error !== undefined && user.error !== "") {
        alert.error(user.error.message);
      } else if (user.user !== "" && user.user !== undefined) {
        alert.success("User registered Successfully.");
        navigate("/home");
      }
    }
  }, [user]);

  useEffect(()=>{
    console.log(otpStatus)
    if (otpStatus.error !== "" && otpStatus.error !== undefined) {
      alert.error(otpStatus.error.message);
    }
  }, [otpStatus])

  useEffect(() => {
    console.log(signInDetails)
    if (signInDetails.userCredentials.name === undefined) {
      alert.error("Sorry, Something went wrong.");
      navigate("/signup");
    }
  }, []);

  const [otp, setotp] = useState("");

  const signupChangeHandler = (e) => {
    setotp(e.target.value);
  };

  const signupSubmit = async (e) => {
    e.preventDefault();
    // Verify OTP
    setProgress(30)
    await dispatch(verifyOTP(signInDetails.userCredentials.email, otp));
    setisVerifyOTPClicked(true)
    // Verify Register User
    console.log(signInDetails)
    setProgress(60)
    await dispatch(
      signInUser(
        {
          name: signInDetails.userCredentials.name,
          email: signInDetails.userCredentials.email,
          password: signInDetails.userCredentials.password,
        },
        signInDetails.userCredentials.role
      )
    );
    setProgress(80)
    await dispatch(loadUser());
    setProgress(100)
    // setotp("");
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
            <div className="text-4xl text-green-600 my-2">Verify OTP</div>
            <div className="sub-heading my-2 text-lg text-gray-400 italic">
              We have sent you the OTP on email.
            </div>
          </div>
          <form
            className="flex flex-col justify-center items-center"
            onChange={(e) => signupChangeHandler(e)}
            onSubmit={(e) => signupSubmit(e)}
          >
            <div className="flex items-center">
              <div className="absolute ml-2">
                <SecurityIcon />
              </div>
              <input
                style={{ width: "28rem" }}
                className="bg-green-100 pl-12 py-3 my-2 rounded-md"
                type="number"
                placeholder="Enter OTP"
                name="otp"
                value={otp}
              />
            </div>
            <div>
              <button
                type="submit"
                className="rounded-full bg-green-500 py-3 px-16 mt-4 shadow-md text-white font-bold hover:bg-green-300"
              >
                VERIFY OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;
