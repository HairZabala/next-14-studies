import Image from 'next/image';
import React from 'react';
import { IoBrowsersOutline, IoCalculator, IoHeartOutline, IoLogoReact } from 'react-icons/io5';
import { MenuItem } from './MenuItem';
import { USER_NAME } from '@/utils/constants';
import { IoIosFootball } from 'react-icons/io';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={30} />,
    title: 'Dashboard',
    subtitle: 'Data Overview',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={30} />,
    title: 'Counter',
    subtitle: 'Counter server side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoIosFootball size={30} />,
    title: 'Pokemons',
    subtitle: 'Static data fetching',
  },
  {
    path: '/dashboard/favourites',
    icon: <IoHeartOutline size={30} />,
    title: 'Favourites',
    subtitle: 'Global state',
  },
];

export const Sidebar = () => {
  return (
    <div id='menu' className='bg-gray-900 h-screen fixed z-10 text-slate-300 w-60 overflow-y-scroll'>
      <div id='logo' className='my-4 px-6'>
        <h1 className='flex items-center text-lg md:text-2xl font-bold text-white'>
          <IoLogoReact className='mr-2' />
          <span>Dash</span>
          <span className='text-blue-500'>8</span>.
        </h1>
        <p className='text-slate-500 text-sm'>Manage your actions and activities</p>
      </div>
      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500'>Welcome back,</p>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <Image
              className='rounded-full w-8 h-8'
              src='https://avatars.githubusercontent.com/u/34761166'
              width={50}
              height={50}
              alt=''
            />
          </span>
          <span className='text-sm md:text-base font-bold'>{USER_NAME}</span>
        </a>
      </div>
      <div id='nav' className='w-full px-6'>
        {menuItems.map((item) => (
          <MenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
