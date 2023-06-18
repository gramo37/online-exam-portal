import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearOtp, editEmail, sendOTPForEditEmail, verifyOTP } from "../../../redux/actions/userAction";
import LoadingBar from "react-top-loading-bar";
import { useAlert } from "react-alert";

const EditProfileEmailForm = (props) => {
  const dispatch = useDispatch();
  const otpStatus = useSelector(state=>state.otp);
  const alert = useAlert()

  const [progress, setProgress] = useState(0);

  const user = useSelector((state) => state.user);

  const [value, setvalue] = useState(user.user?.user?.email);
  const [otp, setOtp] = useState("");
  const [showOtpWindow, setShowOtpWindow] = useState(false)

  useEffect(() => {
    console.log(otpStatus)
    if(otpStatus.error !== '' && otpStatus.error !== undefined) {
      alert.error(otpStatus.error.message)
      setShowOtpWindow(false)
    } else if(otpStatus.otpStatus !== '' && otpStatus.otpStatus !== undefined) {
      alert.success(otpStatus.otpStatus.message)
      setShowOtpWindow(true)
    }
  }, [otpStatus, alert])
  

  const onChangeHandler = (e) => {
    setvalue(e.target.value);
  };

  const onSubmit = async (e) => {
    console.log(value);
    setProgress(40);
    await dispatch(sendOTPForEditEmail(value));
    setProgress(100);
  };
  
  const submitOTP = async () => {
    console.log(otp)
    setProgress(33);
    await dispatch(verifyOTP(value, otp))
    setProgress(66);
    await dispatch(editEmail(value))
    setProgress(100);
    await dispatch(clearOtp())
  }

  return (
    <>
    <LoadingBar
        color="#2b7a2b"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {!showOtpWindow ? <div className="w-full opacity-100 bg-white z-20">
        <div className="flex px-4 py-4 m-auto ">
          <div className="flex flex-col w-full">
            <h2 className="text-center text-lg font-semibold">Edit Email</h2>
            <div className="flex items-center justify-center">
              <label htmlFor="name" className="mx-1 w-1/6">
                Email:
              </label>
              <input
                className="bg-gray-100 my-2 py-2 pl-2 w-5/6 mx-1 rounded-md"
                type="email"
                placeholder="Enter your Email"
                name="email"
                value={value}
                onChange={onChangeHandler}
              />
            </div>
            <button
              onClick={onSubmit}
              className="bg-blue-300 hover:bg-blue-500 my-2 px-4 py-2 rounded-md w-1/3 mx-auto"
            >
              Edit Email
            </button>
          </div>
        </div>
      </div>:
         <div className="w-full lg:w-1/2 opacity-100 bg-white z-20">
         <div className="flex px-4 py-4 m-auto ">
           <div className="flex flex-col w-full">
             <h2 className="text-center text-lg font-semibold">Verify OTP</h2>
             <div className="flex items-center justify-center">
               <label htmlFor="name" className="mx-1 w-1/6">
                 OTP :
               </label>
               <input
                 className="bg-gray-100 my-2 py-2 pl-2 w-5/6 mx-1 rounded-md"
                 type="number"
                 placeholder="Enter OTP"
                 name="otp"
                 value={otp}
                 onChange={(e)=>{setOtp(e.target.value)}}
               />
             </div>
             <button
               onClick={submitOTP}
               className="bg-blue-300 hover:bg-blue-500 my-2 px-4 py-2 rounded-md w-1/3 mx-auto"
             >
               Verify OTP
             </button>
           </div>
         </div>
       </div>
      }

    </>
  );
};

export default EditProfileEmailForm;
