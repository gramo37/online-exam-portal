import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch } from "react-redux";
import {
  deleteQuestion,
  getQuestions,
} from "../../../redux/actions/questionAction";
import EditQuestionForm from "./EditQuestionModal";
import Modal from "../../Modal/Modal";

const Question = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [editQuestionModalToggle, setEditQuestionModalToggle] = useState(false);
  const dispatch = useDispatch();

  const deleteThisQuestion = async (e, id) => {
    await dispatch(deleteQuestion(id));
    await dispatch(getQuestions());
  };

  const editThisQuestion = (e) => {
    setShowOptions(!showOptions);
    setEditQuestionModalToggle(!editQuestionModalToggle);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <div className="flex justify-between mx-2 my-2 p-3 rounded-md bg-white border-2 shadow-sm">
        <div className="flex flex-col w-full rounded-md">
          <div className="flex my-2">
            <span className="font-semibold mx-2">Question:</span>
            <div className="italic mx-2">{props.question?.question}</div>
          </div>
          <div className="flex my-2">
            <span className="font-semibold mx-2">Options:</span>
            <div className="italic mx-2">
              <ul className="list-[circle] list-inside">
                {props.question?.options?.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="flex my-2">
            <span className="font-semibold mx-2">Answer:</span>
            <div className="italic mx-2">{props.question?.answer}</div>
          </div>
        </div>
        <div>
          <div onClick={toggleOptions} className="cursor-pointer">
            <MoreVertIcon />
          </div>
          <div
            className={`${
              showOptions
                ? "translate-y-0 z-10"
                : "-translate-y-20 opacity-0 -z-10"
            } transition-all absolute bg-white shadow-md border-2 px-3 py-1 rounded-md`}
          >
            <ul>
              <li
                onClick={(e) => {
                  editThisQuestion(e);
                }}
                className="my-2 text-gray-400 italic hover:bg-gray-300 cursor-pointer p-2 rounded-md"
              >
                Edit Question
              </li>
              <li
                onClick={(e) => {
                  deleteThisQuestion(e, props.question?._id);
                }}
                className="my-2 text-gray-400 italic hover:bg-gray-300 cursor-pointer p-2 rounded-md"
              >
                Delete
              </li>
            </ul>
          </div>
        </div>

        {editQuestionModalToggle && (
          <Modal
            Form={
              <EditQuestionForm
                question={props.question}
                toggle={() =>
                  setEditQuestionModalToggle(!editQuestionModalToggle)
                }
              />
            }
            toggle={() => setEditQuestionModalToggle(!editQuestionModalToggle)}
          />
        )}
      </div>
    </>
  );
};

export default Question;
