import { combineReducers } from '@reduxjs/toolkit';
import videoReducer from '~/redux/slices/videoSlice';
import authReducer from '~/redux/slices/authSlice';

const rootReducer = combineReducers({
    video: videoReducer,
    auth: authReducer,
});

export default rootReducer;
