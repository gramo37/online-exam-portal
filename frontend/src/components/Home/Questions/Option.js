import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Loader from "../../Loading/Loader";

const Option = (props) => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <label htmlFor="name" className="mx-1 w-1/6">
          Option:
        </label>

        <div className="bg-gray-100 my-2 py-2 pl-2 flex w-5/6 rounded-md justify-between">
          <input
            className="bg-gray-100 w-5/6 mx-1"
            type="text"
            placeholder="Add option"
            name={props.name}
            value={props.optionValue}
            onChange={props.onOptionValueChange}
          />

          <div
            onClick={() => {
              props.onClick(props.index);
            }}
            style={{ margin: "0px 13px" }}
            className="h-2 w-2 cursor-pointer"
          >
            {(props.showComponent && props.currentIndex === props.index) ? <Loader width="20px" height="20px" /> : <CloseIcon />}
          </div>
        </div>

      </div>
    </>
  );
};

export default Option;