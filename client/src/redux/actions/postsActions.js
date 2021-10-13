import * as api from "../../api/";
import * as type from "../action-types/index";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: type.ALL_POSTS,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({
      type: type.CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
