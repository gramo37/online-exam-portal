// Ignore this File

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import image from "./logo.png";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
    };
  }

  render() {
    return (
      <>
        <nav className="flex justify-around items-center bg-white shadow-md">
          <Link to="/">
            <div className="w-20 cursor-pointer">
              <img src={image} alt="" />
            </div>
          </Link>
          <div>
            <ul className="flex">
              <li
                className={`mx-1 cursor-pointer hover:bg-gray-300 px-4 py-2 rounded-md ${
                  this.props.active === "home"
                    ? "border-b-2 border-blue-400"
                    : false
                }`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`mx-1 cursor-pointer hover:bg-gray-300 px-4 py-2 rounded-md ${
                  this.props.active === "about" ? true : false
                }`}
              >
                <Link to="/">About</Link>
              </li>
              <li
                className={`mx-1 cursor-pointer hover:bg-gray-300 px-4 py-2 rounded-md ${
                  this.props.active === "contact" ? true : false
                }`}
              >
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="cursor-pointer flex justify-center items-center">
            <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
            <div
              className=""
              onClick={() => {
                this.setState({ showOptions: !this.state.showOptions });
              }}
            >
              <ArrowDropDownIcon />
            </div>
          </div>
          <div
            className={`${
              this.state.showOptions ? "opacity-100" : "opacity-0"
            } absolute translate-x-72 translate-y-[6.8rem] bg-white px-2 py-4 rounded-md`}
          >
            <ul>
              <li className="hover:bg-gray-300 px-2 py-3 cursor-pointer rounded-md">
                Show Profile
              </li>
              <li className="hover:bg-gray-300 px-2 py-3 cursor-pointer rounded-md">
                Log Out
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
