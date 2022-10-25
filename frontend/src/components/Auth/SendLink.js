import React, { useState, useEffect } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useDispatch, useSelector } from "react-redux";
import { sendLink } from "../../redux/actions/userAction";
import { useAlert } from "react-alert";
import LoadingBar from "react-top-loading-bar";
import { useNavigate } from "react-router-dom"

const SendLink = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();
  const [progress, setProgress] = useState(0);
  const linkStatus = useSelector((state) => state.linkStatus);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(linkStatus);
    if (
      linkStatus.error !== undefined &&
      linkStatus.error !== "" &&
      !linkStatus.error.success
    ) {
      alert.error(linkStatus.error.message);
    } else if (
      linkStatus.linkStatus !== undefined &&
      linkStatus.linkStatus !== "" &&
      linkStatus.linkStatus.success
    ) {
      alert.success(linkStatus.linkStatus.message);
    }
  }, [linkStatus]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setProgress(40);
    await dispatch(sendLink(email));
    setProgress(100);
    navigate("/api/v1/reset/password")
    console.log(email);
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
            <div className="text-4xl text-green-600 my-2">Forgot Password</div>
            <div className="sub-heading my-2 px-2 text-lg text-gray-400 text-center italic">
              We will send you the password reset link on mail. Kindly enter
              your Mail
            </div>
          </div>
          <form
            className="flex flex-col justify-center items-center"
            onSubmit={onSubmitHandler}
          >
            <div className="flex items-center">
              <div className="absolute ml-2">
                <EmailOutlinedIcon />
              </div>
              <input
                className="bg-green-100 border-2 pl-12 py-2 my-2 rounded-md w-[18rem] sm:w-[20rem]"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <button
                style={{padding: "10px"}}
                type="submit"
                className="rounded-md bg-green-500 mt-4 shadow-md text-white font-bold hover:bg-green-300"
              >
                Send Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SendLink;
