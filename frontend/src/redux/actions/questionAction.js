import * as api from "../../api/question.js";

// const host = ``
// const host = `http://localhost:5000`
// const host = `https://online-exam-portal-by-gramo.herokuapp.com`
// const host = `https://online-exam-portal.onrender.com`

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export const getQuestions = () => async (dispatch) => {
  try {
    dispatch({
      type: "RequireGetQuestions",
    });

    const token = getCookie("authToken")
    const { data } = await api.getQuestions({ authToken: token });

    dispatch({
      type: "GetQuestionsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GetQuestionsFailure",
      payload: error.response.data,
    });
  }
};

export const createQuestion =
  (question, options, answer) => async (dispatch) => {
    try {
      dispatch({
        type: "RequireCreateQuestion",
      });

      const token = getCookie("authToken")
      const questionDetails = {
        question,
        options,
        answer,
        authToken: token
      }

      const { data } = await api.createQuestion(questionDetails);

      dispatch({
        type: "CreateQuestionSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "CreateQuestionFailure",
        payload: error.response.data,
      });
    }
  };

export const editQuestion =
  (id, question, options, answer) => async (dispatch) => {
    try {
      dispatch({
        type: "RequireEditQuestion",
      });

      const token = getCookie("authToken")
      const questionDetails = {
        question,
        options,
        answer,
        authToken: token
      }

      const { data } = await api.createQuestion(questionDetails, id);


      dispatch({
        type: "EditQuestionSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "EditQuestionFailure",
        payload: error.response.data,
      });
    }
  };

export const deleteQuestion = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "RequireDeleteQuestion",
    });

    const token = getCookie("authToken");

    const { data } = await api.deleteQuestion({ authToken: token }, id);

    dispatch({
      type: "DeleteQuestionSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DeleteQuestionFailure",
      payload: error.response.data,
    });
  }
};

export const deleteOption = (index, id) => async (dispatch) => {
  try {
    dispatch({
      type: "RequireDeleteOption",
    });

    const token = getCookie("authToken");
    const optionDetails = {
      index: index,
      authToken: token
    }
    const { data } = await api.deleteOption(optionDetails, id);

    dispatch({
      type: "DeleteOptionSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DeleteOptionFailure",
      payload: error.response.data,
    });
  }
};

export const clearOption = () => async (dispatch) => {
  dispatch({
    type: "ClearDeleteOption",
  });
}
