import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/reducers';

const store = (window.store = configureStore({
    reducer: rootReducer,
}));

export default store;
