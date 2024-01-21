'use client';

import { useCallback, useState } from 'react';

export interface CartCounterProps {
  value?: number;
}

export const CartCounter = ({ value = 10 }: CartCounterProps) => {
  const [counter, setCounter] = useState(value);

  const increment = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCounter((prev) => Math.max(prev - 1, 0));
  }, []);
  return (
    <>
      <span className='text-9xl'>{counter}</span>
      <div className='flex'>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
          onClick={increment}
        >
          +1
        </button>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
          onClick={decrement}
        >
          -1
        </button>
      </div>
    </>
  );
};
