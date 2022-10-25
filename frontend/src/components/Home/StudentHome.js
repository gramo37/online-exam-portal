import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import EditProfileNameForm from "./Profile/EditProfileName";
import EditProfileEmailForm from "./Profile/EditProfileEmail";
import Modal from "../Modal/Modal";
import { getExam } from "../../redux/actions/schoolAction";
import Exam from "./Exam/Exam";
import SearchPerson from "./SearchPerson";

const StudentHome = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const exam = useSelector((state) => state.exam)

  const [editName, seteditName] = useState(false);
  const [editEmail, seteditEmail] = useState(false);

  useEffect(async () => {
    await dispatch(getExam())
  }, [])

  useEffect(() => {
    console.log(exam)
  }, [exam])

  return (
    <>
      <div className="flex justify-center items-start">
        <div className="slowLoad flex flex-col  w-4/6">
      <SearchPerson searchFor="Teacher" />
          <h2 className="text-center mt-2 text-lg font-bold">Remaining Exams</h2>
          <div className="">
            {exam?.exam?.exams?.length === 0 ? <h2 className="text-center mt-2 italic">No Exams to display</h2> : exam?.exam?.exams?.map((item) => {
              return (<Exam key={item._id} id={item._id} exam={item} isCompleted={false}/>)
            })}
          </div>
          <h2 className="text-center mt-2 text-lg font-bold">Completed Exams</h2>
          <div className="">
            {exam?.exam?.completedExams?.length === 0 ? <h2 className="text-center mt-2 italic">No Exams to display</h2> : exam?.exam?.completedExams?.map((item) => {
              return (<Exam key={item._id} id={item._id} exam={item} isCompleted={true}/>)
            })}
          </div>
        </div>
        <div className={`w-2/6 sticky top-20 right-0 mx-2 flex flex-col`}>
          <div className="bg-white border-2 shadow-sm my-2 p-3 rounded-md">
            <h2 className="text-center text-2xl font-semibold">My Profile</h2>
            <div className="text-left my-2 text-md font-semibold italic">
              <div className="flex justify-between items-center">
                <p style={{ wordWrap: "break-word" }} className="w-5/6 break-words">Name: {user.user?.user?.name}</p>
                <div
                  className="w-1/6 cursor-pointer font-normal flex justify-center"
                  onClick={() => seteditName(!editName)}
                >
                  <EditIcon />
                </div>
              </div>
            </div>
            <div className="text-left my-2 text-md italic text-gray-500">
              <div className="flex justify-between items-center">
                <p style={{ wordWrap: "break-word" }} className="w-5/6 break-words">Email: {user.user?.user?.email}</p>
                <div
                  className="w-1/6 cursor-pointer font-normal flex justify-center"
                  onClick={() => seteditEmail(!editEmail)}
                >
                  <EditIcon />
                </div>
              </div>
            </div>
            <div className="text-left my-2 text-md italic text-gray-500">
              Role: {user.user?.user?.role}
            </div>
          </div>
        </div>
        {/* Modals */}

        {editName && (
          <Modal
            Form={<EditProfileNameForm toggle={() => seteditName(!editName)} />}
            toggle={() => seteditName(!editName)}
          />
        )}

        {editEmail && (
          <Modal
            Form={
              <EditProfileEmailForm toggle={() => seteditEmail(!editEmail)} />
            }
            toggle={() => seteditEmail(!editEmail)}
          />
        )}
      </div>
    </>
  );
};

export default StudentHome;
