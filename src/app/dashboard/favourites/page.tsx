import PokemonGrid from '@/features/pokemon/components/PokemonGrid';

export default async function PokemonsPage() {
  return (
    <div className='flex flex-col p-4'>
      <span className='text-5xl my-2'>Favourite Pokemons - Redux</span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
