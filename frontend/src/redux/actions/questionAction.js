import axios from "axios";

const host = ``
// const host = `http://localhost:5000`
// const host = `https://online-exam-portal-by-gramo.herokuapp.com`

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
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
    const link = `${host}/api/v1/getAllQuestions`;
    const { data } = await axios.post(link,{
      authToken: token
    });

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
      const link = `${host}/api/v1/createQuestion`;
      const token = getCookie("authToken")
      const { data } = await axios.post(
        link,
        {
          question,
          options,
          answer,
          authToken: token
        },
        {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        }
      );

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
      const link = `${host}/api/v1/updateQuestion/${id}`;
      const token = getCookie("authToken")
      const { data } = await axios.post(
        link,
        {
          question,
          options,
          answer,
          authToken: token
        },
        {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        }
      );

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
    const link = `${host}/api/v1/deleteQuestion/${id}`;
    const token = getCookie("authToken")
    const { data } = await axios.post(link, {
      authToken: token
    },{
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    });

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
    const token = getCookie("authToken")
    const { data } = await axios.post(
      `${host}/api/v1/deleteOption/${id}`,
      { 
        index: index,
        authToken: token
      }
    );
    console.log(data);

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
