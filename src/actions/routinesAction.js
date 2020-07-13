import axios from "axios";
import { message } from "antd";

const information = localStorage.getItem("information");

const url = "http://3.128.90.196:5000/";

export const getRoutines = (username) => (dispatch) => {
  const information = localStorage.getItem("information");
  const token = JSON.parse(information);
  axios({
    method: "get",
    url: `${url}${username}/habits/`,
    headers: {
      Authorization: `TOKEN ${token.token}`,
    },
  })
    .then(function ({ data: { results } }) {
      const routinesIsPrivate = results.filter((e) => e.is_private === true);
      const routinesIsPublic = results.filter((e) => e.is_private === false);
      dispatch({
        type: "get_routines_private",
        payload: routinesIsPrivate,
      });
      dispatch({
        type: "get_routines_public",
        payload: routinesIsPublic,
      });
    })
    .catch(function (error) {
      console.log(error);
      return;
    });
};

export const createRoutine = (username, values) => (dispatch) => {
  const information = localStorage.getItem("information");
  const token = JSON.parse(information);
  axios({
    method: "post",
    url: `${url}${username}/habits/`,
    data: values,
    headers: {
      Authorization: `TOKEN ${token.token}`,
    },
  })
    .then(function ({ data }) {
      dispatch({
        type: "add_routine_private",
        payload: data,
      });
      message.success("Routine created");
    })
    .catch(function (error) {
      console.log(error);
      return;
    });
};

export const actionRoutine = (username, values, id, actionType) => (
  dispatch,
  getState
) => {
  const { routinesPrivate } = getState().routinesReducer;
  const token = JSON.parse(information);
  axios({
    method: "patch",
    url: `${url}${username}/habits/${id}/`,
    data: values,
    headers: {
      Authorization: `TOKEN ${token.token}`,
    },
  })
    .then(function ({ data }) {
      const newRoutines = routinesPrivate.filter(
        (routine) => routine.id !== data.id
      );
      if (actionType === "delete") {
        dispatch({
          type: "delete_routine_private",
          payload: newRoutines,
        });
      } else {
        dispatch({
          type: "pause_routine_private",
          payload: data,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
      return;
    });
};
