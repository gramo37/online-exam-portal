import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Modal = (props) => {
  return (
    <>
      <div
        style={{ backgroundColor: "#f0f8ffe8" }}
        className="fixed h-full w-full top-0 left-0 z-50 flex justify-center items-center"
      >
        <div className="flex justify-between w-5/6 opacity-100 bg-white z-20">
          <div className="w-full">{props.Form}</div>
          <div>
            <div
              onClick={props.toggle}
              className="flex items-start cursor-pointer h-full mr-2 mt-2 bg-white opacity-100"
            >
              <div>
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
