import SimpleWidget from '@/components/SimpleWidget';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Dashboard page',
};

const MainPage = () => {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl '>Dashboard</h1>
      <span className='text-xl'>General information</span>
      <div className='flex flex-wrap p-2'>
        <SimpleWidget />
      </div>
    </div>
  );
};

export default MainPage;
