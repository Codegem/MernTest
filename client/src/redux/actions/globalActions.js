export const setCurrentId = (id) => async (dispatch) => {
  const data = await id;
  dispatch({
    type: "CURRENT_ID",
    payload: data._id,
  });
};
