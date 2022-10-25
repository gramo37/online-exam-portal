import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import SearchIcon from "@mui/icons-material/Search";
import { addRemoveStudent, searchStudent, searchTeacher } from "../../redux/actions/schoolAction";
import { loadUser } from "../../redux/actions/userAction";

import SuggestionBox from "./SuggestionBox";

const SearchPerson = (props) => {

  const [keyword, setKeyword] = useState("")
  const dispatch = useDispatch()
  const school = useSelector((state) => state.school)
  const user = useSelector((state) => state.user);
  const message = useSelector((state) => state.addStudent);

  useEffect(async () => {
    console.log(school, keyword)
    console.log(user)
    console.log(message)
    if (props.searchFor === "Teacher") {
      await dispatch(searchTeacher(keyword))
    } else if (props.searchFor === "Student") {
      await dispatch(searchStudent(keyword))
    }
  }, [keyword, message])

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
