import React, { useState, useEffect } from "react";
import Option from "./Option";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';

import {
  createQuestion,
  getQuestions,
  clearOption,
} from "../../../redux/actions/questionAction";
const AddQuestionForm = (props) => {
  const dispatch = useDispatch();

  const [optionsArray, setoptionsArray] = useState([]);

  const optionStatus = useSelector((state) => state.options);

  // UseStates
  const [options, setoptions] = useState([]);
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState(0);

  useEffect(() => {
    console.log(optionStatus);
    if (optionStatus.error !== "" && optionStatus.error !== undefined) {
      let newArr = [...optionsArray];
      newArr.splice(-1, 1);
      setoptionsArray(newArr);
      dispatch(clearOption());
    } else if (
      optionStatus.options !== "" &&
      optionStatus.options !== undefined
    ) {
      setoptions(optionStatus.options.options);
      console.log(optionStatus.options.options);
      let newArr = [];
      for (let i = 0; i < optionStatus.options.options.length; i++) {
        newArr[i] = i;
      }
      setoptionsArray(newArr);
      dispatch(clearOption());
    }
  }, [optionStatus]);

  // Functions
  const addQuestion = async () => {
    console.log(options);
    console.log(question, answer);
    await dispatch(createQuestion(question, options, answer));
    props.toggle();
    await dispatch(getQuestions());
  };

  const addOption = () => {
    let newArr = [...optionsArray];
    let temp = newArr.length;
    if (temp <= 6) {
      newArr.push(temp + 1);
    }
    setoptionsArray(newArr);
  };

  const updateFieldChanged = (index, e) => {
    let newArr = [...options];
    newArr[index] = e.target.value;
    setoptions(newArr);
  };

  const deleteThisOption = (index) => {
    console.log(index);
    let newArr = [...optionsArray];
    newArr.splice(index, 1);
    setoptionsArray(newArr);
    newArr = [...options]
    newArr.splice(index, 1);
    setoptions(newArr)
  };

  return (
    <>
      <div className="flex px-4 py-4 m-auto ">
        <div className="flex flex-col w-full">
          <h2 className="text-center text-lg font-semibold">
            Add a New Question
          </h2>
          <div className="flex items-center justify-center">
            <label htmlFor="name" className="mx-1 w-1/6">
              Question:
            </label>
            <input
              className="bg-gray-100 my-2 py-2 pl-2 w-5/6 mx-1 rounded-md"
              type="text"
              placeholder="Add a question"
              value={question}
              onChange={(e) => {
                setquestion(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="italic font-semibold text-lg">Add Options</h2>
            {optionsArray.map((item, index) => {
              return (
                <Option
                  onClick={deleteThisOption}
                  index={index}
                  key={index}
                  Component={<CloseIcon />}
                  name={`option${index + 1}`}
                  optionValue={options[index]}
                  onOptionValueChange={(e) => {
                    updateFieldChanged(index, e);
                  }}
                />
              );
            })}

            <button
              onClick={addOption}
              className="p-2 my-2 bg-blue-300 hover:bg-blue-500 rounded-md w-1/2 m-auto"
            >
              Add option
            </button>
          </div>

          <h2 className="italic font-semibold text-lg text-center">
            Add the correct answer in number
          </h2>
          <div className="flex items-center justify-center">
            <label htmlFor="name" className="mx-1 w-1/6">
              Answer:
            </label>
            <input
              className="bg-gray-100 my-2 py-2 pl-2 w-5/6 mx-1 rounded-md"
              type="number"
              placeholder="Put the answer number here."
              value={answer}
              onChange={(e) => {
                setanswer(e.target.value);
              }}
            />
          </div>
          <button
            onClick={addQuestion}
            className="p-2 my-2 bg-blue-300 hover:bg-blue-500 rounded-md w-1/2 m-auto"
          >
            Add Question
          </button>
        </div>
      </div>
    </>
  );
};

export default AddQuestionForm;
