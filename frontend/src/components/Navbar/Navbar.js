import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import image from "./logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, clearState } from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const Navbar = (props) => {
  const [showOptions, setshowOptions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogoutClicked, setIsLogoutClicked] = useState(false)
  const alert = useAlert();
  const user = useSelector((state) => state.user);

 // UseEffect for displaying logout message
  useEffect(async () => {
    console.log(user)
    if (user.error !== "" && user.error !== undefined && isLogoutClicked)  {
        alert.error("Sorry, Something went wrong")
        console.log("Error while logging out.", user.error);
    } else if(user.user !== "" && user.user !== undefined && isLogoutClicked) {
        alert.success(user.user.message);
        await dispatch(clearState())
        // await clearState(dispatch);
    } 
  }, [user])

  // useEffect(async ()=>{
  //   console.log(user)
  //   if(!isLogoutClicked && user.error !== "" && user.error !== undefined) {
  //     alert.error(user.error.message);
  //     // await dispatch(clearState());
  //     navigate("/")
  //   }
  // }, [user])

  const logout = async () => {
    setIsLogoutClicked(true);
    await dispatch(logoutUser());
    await dispatch(clearState());
    navigate("/");
  };

  return (
    <>
      <nav className="z-40 sticky top-0 right-0 flex justify-around items-center bg-white shadow-md">
        <Link to="/">
          <div className="w-20 cursor-pointer">
            <img src={image} alt="" />
          </div>
        </Link>
        <div>
          <ul className="flex">
            <li
              className={`mx-1 cursor-pointer hover:bg-gray-300 sm:px-4 sm:py-2 p-0 rounded-md sm:text-lg text-sm`}
            >
              <Link to="/" className={`${ props.active === "home" ? "border-b-2 border-blue-400" : false }`}>Home</Link>
            </li>
            <li
              className={`mx-1 cursor-pointer hover:bg-gray-300 sm:px-4 sm:py-2 p-0 rounded-md sm:text-lg text-sm`}
            >
              <Link to="/about" className={`${ props.active === "about" ? "border-b-2 border-blue-400" : false }`}>About</Link>
            </li>
            <li
              className={`mx-1 cursor-pointer hover:bg-gray-300 sm:px-4 sm:py-2 p-0 rounded-md sm:text-lg text-sm`}
            >
              <Link to="/contact" className={`${ props.active === "contact" ? "border-b-2 border-blue-400" : false }`}>Contact Us</Link>
            </li>
            {(user.user?.user != undefined) && <li
              className={`mx-1 cursor-pointer hover:bg-gray-300 sm:px-4 sm:py-2 p-0 rounded-md sm:text-lg text-sm`}
            >
              <Link to="/dashboard" className={`${ props.active === "dashboard" ? "border-b-2 border-blue-400" : false }`}>Dashboard</Link>
            </li>}
          </ul>

        </div>
        <div className="cursor-pointer flex justify-center items-center">
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{user.user?.user?.name.substring(0, 1)}</Avatar>
          <div
            className=""
            onClick={() => {
              setshowOptions(!showOptions);
            }}
          >
            <ArrowDropDownIcon />
          </div>
        <div
          className={`${
            showOptions ? "z-10 translate-y-16" : "-z-10 -translate-y-[120%]"
          } transition-all -translate-x-4 absolute top-0 bg-white px-2 py-4 shadow-lg border-2 rounded-md`}
        >
          {(user.user?.user != undefined) ? <ul>
            <li onClick={()=>navigate("/dashboard")} className="hover:bg-gray-300 px-2 py-3 cursor-pointer rounded-md">
              Dashboard
            </li>
            <li className="hover:bg-gray-300 px-2 py-3 cursor-pointer rounded-md">
              Change Password
            </li>
            <li
              onClick={() => logout()}
              className="hover:bg-gray-300 px-2 py-3 cursor-pointer rounded-md"
            >
              Log Out
            </li>
          </ul> :
          <ul>
            <li
              onClick={()=>navigate("/login")}
              className="hover:bg-gray-300 px-2 py-3 cursor-pointer rounded-md"
            >
              Log In
            </li>
            <li
              onClick={()=>navigate("/signup")}
              className="hover:bg-gray-300 px-2 py-3 cursor-pointer rounded-md"
            >
              Sign Up
            </li>
          </ul>
          }
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
