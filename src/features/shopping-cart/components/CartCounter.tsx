'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import { decrement, increment, initCounterState } from '@/store/slices/counterSlice';
import { useCallback, useEffect } from 'react';
export interface CartCounterProps {
  value?: number;
}

export const CartCounter = ({ value = 10 }: CartCounterProps) => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const onIncrementClick = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const onDecrementClick = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]);

  return (
    <>
      <span className='text-9xl'>{counter}</span>
      <div className='flex'>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
          onClick={onIncrementClick}
        >
          +1
        </button>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
          onClick={onDecrementClick}
        >
          -1
        </button>
      </div>
    </>
  );
};
