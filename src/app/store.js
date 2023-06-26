import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/Users/usersSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
})
