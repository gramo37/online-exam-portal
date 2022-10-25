import React, { useState, useEffect } from "react";
import Option from "./Option";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestions,
  editQuestion,
  deleteOption,
  clearOption,
} from "../../../redux/actions/questionAction";
import CloseIcon from "@mui/icons-material/Close";
import Loader from "../../Loading/Loader";

const EditQuestionForm = (props) => {
  const [optionsArray, setoptionsArray] = useState([]);

  const optionStatus = useSelector((state) => state.options);

  const dispatch = useDispatch();

  const [options, setoptions] = useState(props.question?.options);
  const [question, setquestion] = useState(props.question?.question);
  const [answer, setanswer] = useState(props.question?.answer);

  const [currentOptionIndex, setCurrentOptionIndex] = useState(-1);

  useEffect(() => {
    let newArr = [];
    for (let i = 1; i <= props.question?.options.length; i++) {
      newArr.push(i);
    }
    setoptionsArray(newArr);
  }, []);

  useEffect(() => {
    console.log(optionStatus);
    if (optionStatus.error !== "" && optionStatus.error !== undefined) {
      let newArr = [...optionsArray];
      newArr.splice(currentOptionIndex, 1);
      setoptionsArray(newArr);
      dispatch(clearOption());

      newArr = [...options];
      newArr.splice(currentOptionIndex, 1);
      setoptions(newArr);
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

  const editThisQuestion = async () => {
    console.log(options);
    console.log(question, answer);

    await dispatch(
      editQuestion(props.question?._id, question, options, answer)
    );
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

  const deleteThisOption = async (index) => {
    console.log(index);
    setCurrentOptionIndex(index);
    await dispatch(deleteOption(index, props.question._id));
    // setdeleteOptionPressed(true);
  };

  return (
    <>
      <div className="flex px-4 py-4 m-auto ">
        <div className="flex flex-col w-full">
          <h2 className="text-center text-lg font-semibold">
            Edit a New Question
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
                  key={index}
                  index={index}
                  currentIndex={currentOptionIndex}
                  showComponent={optionStatus.loading}
                  onClick={deleteThisOption}
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
            onClick={editThisQuestion}
            className="p-2 my-2 bg-blue-300 hover:bg-blue-500 rounded-md w-1/2 m-auto"
          >
            Edit Question
          </button>
        </div>
      </div>
    </>
  );
};

export default EditQuestionForm;
