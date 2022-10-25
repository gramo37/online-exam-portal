import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { changeName } from "../../../redux/actions/userAction";

const EditProfileNameForm = (props) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [value, setvalue] = useState(user.user?.user?.name);

  const onChangeHandler = (e) => {
    setvalue(e.target.value);
  };

  const onSubmit = async (e) => {
    await dispatch(changeName(value));
  };

  return (
    <>
        <div className="w-full opacity-100 bg-white z-20">
          <div className="flex px-4 py-4 m-auto ">
            <div className="flex flex-col w-full">
              <h2 className="text-center text-lg font-semibold">Edit Name</h2>
              <div className="flex items-center justify-center">
                <label htmlFor="name" className="mx-1 w-1/6">
                  Name:
                </label>
                <input
                  className="bg-gray-100 my-2 py-2 pl-2 w-5/6 mx-1 rounded-md"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={value}
                  onChange={onChangeHandler}
                />
              </div>
              <button
                onClick={onSubmit}
                className="bg-blue-300 hover:bg-blue-500 my-2 px-4 py-2 rounded-md w-1/3 mx-auto"
              >
                Edit Name
              </button>
            </div>
            
          </div>
        </div>
    </>
  );
};

export default EditProfileNameForm;
