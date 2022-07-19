import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addRecord: (state, action) => {
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    },
    deleteRecord: (state, action) => {
      return {
        ...state,
        data: [
          ...state.data.slice(0, action.payload),
          ...state.data.slice(action.payload + 1)
        ],
      }
    },
  }
});

export const { addRecord, deleteRecord } = scoreSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getScore = (state) => state.score.data;

export default scoreSlice.reducer;
