import { configureStore } from '@reduxjs/toolkit';
import applicationReducer from './components/features/applicationSlice';

//Redux store
const store = configureStore({
  reducer: {
    applications: applicationReducer,
  },
});

export default store;