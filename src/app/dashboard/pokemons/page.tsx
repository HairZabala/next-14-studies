import PokemonGrid from '@/features/pokemon/components/PokemonGrid';
import { GetPokemonsDocument, GetPokemonsQueryResult, Pokemon_V2_Pokemon } from '@/graphql/generated';
import { getClient } from '@/libs/client';

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
    <div className='flex flex-col p-4'>
      <span className='text-5xl my-2'>Pokemon list - static</span>
      <PokemonGrid pokemons={pokemons as Pokemon_V2_Pokemon[]} />
    </div>
  );
}
