const initialState = {
  posts: null,
};

export const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_POSTS":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    case "UPDATE":
    case "LIKE_POST":
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "DELETE":
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

export default PostsReducer;
