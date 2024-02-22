import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  isReady: boolean;
}

const initialState: CounterState = {
  value: 0,
  isReady: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState: (state, action: PayloadAction<number>) => {
      if (state.isReady) return;

      state.value = action.payload;
      state.isReady = true;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value === 0) {
        return;
      }
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { decrement, increment, incrementByAmount, initCounterState } = counterSlice.actions;

export default counterSlice.reducer;
