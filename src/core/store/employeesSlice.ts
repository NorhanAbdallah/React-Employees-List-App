import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Employee} from '../../models/employee';

export type State = {
  employees: Array<Employee>;
  error: string | null;
  isLoading: boolean;
  isStateUpdated: boolean;
};
type Reducers = {
  setEmployees: (state: State, action: PayloadAction<Array<Employee>>) => void;
  setError: (state: State, action: PayloadAction<string | null>) => void;
  setIsLoading: (state: State, action: PayloadAction<boolean>) => void;
  updateStates: (state: State, action: PayloadAction<Employee>) => void;
  setIsStateUpdated: (state: State, action: PayloadAction<boolean>) => void;
};

export const employeesSlice = createSlice<State, Reducers, string>({
  name: 'employees',
  initialState: {
    employees: [],
    error: null,
    isLoading: false,
    isStateUpdated: false,
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
    updateStates: (state, action: PayloadAction<Employee>) => {
      const empIndex = state.employees.findIndex(
        emp => emp.employeeId === action.payload.employeeId,
      );
      if (empIndex > -1) {
        state.employees[empIndex] = action.payload;
      }
    },
    setIsStateUpdated: (state, action) => {
      state.isStateUpdated = action.payload;
    },
  },
});

export const {setEmployees, setError, setIsLoading, updateStates, setIsStateUpdated} =
  employeesSlice.actions;
export const employeesList = (state: State) => state.employees;
export default employeesSlice.reducer;
