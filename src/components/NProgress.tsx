'use client';
import React from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const NProgressComponent = () => {
  return (
    <ProgressBar
      color='#3867ff'
      options={{
        minimum: 0.3,
        easing: 'ease',
        speed: 500,
        showSpinner: false,
      }}
      shallowRouting
    />
  );
};
