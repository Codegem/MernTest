export const PostsReducer = (state = [], action) => {
  switch (action.type) {
    case "ALL_POSTS":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default PostsReducer;
