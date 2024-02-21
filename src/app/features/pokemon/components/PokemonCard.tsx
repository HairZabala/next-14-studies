import { Pokemon_V2_Pokemon } from '@/graphql/generated';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';

export interface PokemonCardProps {
  pokemon: Pokemon_V2_Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className='mx-auto right-0 mt-2 w-60'>
      <div className='flex flex-col bg-white rounded overflow-hidden shadow-lg'>
        <div className='flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b'>
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
            width={100}
            height={100}
            alt={pokemon.name}
            priority={false}
          />
          <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>{pokemon.name}</p>
          <div className='mt-5'>
            <Link
              href={`/pokemon/${pokemon.id}`}
              className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
            >
              More info
            </Link>
          </div>
        </div>
        <div className='border-b'>
          <Link className='px-4 py-2 hover:bg-gray-100 flex items-center' href={`/dashboard/pokemons/${pokemon.id}`}>
            <div className='text-red-600'>
              <IoHeartOutline />
            </div>
            <div className='pl-3'>
              <p className='text-sm font-medium text-gray-800 leading-none'>Mark as favorite</p>
              <p className='text-xs text-gray-500'>View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
