import { Pokemon_V2_Pokemon } from '@/graphql/generated';
import React from 'react';
import PokemonCard from './PokemonCard';

export interface PokemonGridProps {
  pokemons: Pokemon_V2_Pokemon[];
}

const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonGrid;
