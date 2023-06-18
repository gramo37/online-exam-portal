import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import SearchIcon from "@mui/icons-material/Search";
import { searchStudent, searchTeacher } from "../../redux/actions/schoolAction";
// import { loadUser } from "../../redux/actions/userAction";

import SuggestionBox from "./SuggestionBox";

const SearchPerson = (props) => {

  const [keyword, setKeyword] = useState("")
  const dispatch = useDispatch()
  const school = useSelector((state) => state.school)
  // const user = useSelector((state) => state.user);
  const message = useSelector((state) => state.addStudent);
  const {searchFor} = props

  useEffect(() => {
    if (searchFor === "Teacher") {
      dispatch(searchTeacher(keyword))
    } else if (searchFor === "Student") {
      dispatch(searchStudent(keyword))
    }
  }, [keyword, message, dispatch, searchFor])

  return (
    <>
      <div className="flex justify-center items-center mx-2 mt-2 p-3 rounded-md bg-white border-2 shadow-sm">
        <div className="w-[10%] flex justify-center">
          <SearchIcon />
        </div>
        <div className="w-[90%]">
          <input
            type="text"
            className="px-4 py-2 rounded-md w-full bg-gray-200"
            placeholder={`Search ${props.searchFor}`}
            value={keyword}
            onChange={(e) => { setKeyword(e.target.value) }}
          />
        </div>
      </div>
      {/* Suggestions box */}
      <div
        className={`${((keyword.length >= 6) ? "relative" : "hidden")
          } mx-2 p-3 rounded-md bg-white border-2 shadow-sm`}
      >
        <ul className="">
          {props.searchFor === "Student" && school?.student?.students?.map((item) => {
            return (
              <SuggestionBox linkTo="student" item={item}/>
            )
          })}
          {props.searchFor === "Teacher" && school?.student?.teachers?.map((item) => {
            return (
              <SuggestionBox linkTo="teacher" item={item}/>
            )
          })}
        </ul>
      </div>
    </>
  );
};

export default SearchPerson;
