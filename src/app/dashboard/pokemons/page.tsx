import {
  GetPokemonsDocument,
  GetPokemonsQueryResult,
  PokemonBaseFragment,
  Pokemon_V2_Pokemon,
} from '@/graphql/generated';
import { getClient } from '@/libs/client';
import Image from 'next/image';

const getPokemons = async (limit = 20, offset = 0) => {
  const pokemons = (await getClient().query({
    query: GetPokemonsDocument,
    variables: {
      limit,
      offset,
    },
  })) as GetPokemonsQueryResult;

  return pokemons?.data?.pokemon_v2_pokemon ?? [];
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();

  return (
    <div className='flex flex-col'>
      <div className='flex flex-wrap gap-10 items-center justify-center'>
        {pokemons.map((pokemon: PokemonBaseFragment) => (
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
            width={100}
            height={100}
            alt={pokemon.name}
          />
        ))}
      </div>
    </div>
  );
}
