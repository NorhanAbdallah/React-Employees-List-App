import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Employee} from '../../models/employee';

export type State = {
  employees: Array<Employee>;
  error: string | null;
  isLoading: boolean;
};
type Reducers = {
  setEmployees: (state: State, action: PayloadAction<Array<Employee>>) => void;
  setError: (state: State, action: PayloadAction<string | null>) => void;
  setIsLoading: (state: State, action: PayloadAction<boolean>) => void;
  // updateStatus: (state: State, action: PayloadAction<string>) => void;
};

export const employeesSlice = createSlice<State, Reducers, string>({
  name: 'employees',
  initialState: {
    employees: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {setEmployees, setError, setIsLoading} = employeesSlice.actions;
export const employeesList = (state: State) => state.employees;
export default employeesSlice.reducer;
