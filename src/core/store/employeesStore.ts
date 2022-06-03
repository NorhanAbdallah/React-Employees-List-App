import {configureStore} from '@reduxjs/toolkit';
import employeesReducer from '../store/employeesSlice';

export default configureStore({
  reducer: {
    employeesData: employeesReducer,
  },
});
