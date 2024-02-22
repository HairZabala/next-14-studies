import { GetPokemonDocument, GetPokemonQueryResult, Pokemon_V2_Pokemon } from '@/graphql/generated';
import { getClient } from '@/libs/client';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: PokemonPageProps): Promise<Metadata> {
  try {
    const pokemon = await getPokemon(params.id);

    return {
      title: `#${pokemon.id} - ${pokemon.name}`,
      description: `Pokemon Page - ${pokemon.name}`,
    };
  } catch (error) {
    return {
      title: 'Pokemon not found',
      description: 'Dolore laboris laborum sit amet commodo voluptate.',
    };
  }
}

const getPokemon = async (id: string) => {
  const { data } = (await getClient().query({
    query: GetPokemonDocument,
    variables: {
      id: parseInt(id),
    },
  })) as GetPokemonQueryResult;

  if (!data?.pokemon_v2_pokemon_by_pk) return notFound();

  return data.pokemon_v2_pokemon_by_pk as Pokemon_V2_Pokemon;
};

export interface PokemonPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const pokemonIds = Array.from({ length: 151 }).map((_, index) => `${index + 1}`);
  return pokemonIds.map((id) => ({
    id,
  }));
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const pokemon = await getPokemon(params.id);

  return (
    <div className='flex mt-5 flex-col items-center text-slate-800'>
      <div className='relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3'>
        <div className='mt-2 mb-8 w-full'>
          <h1 className='px-2 text-xl font-bold text-slate-700 capitalize'>
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className='flex flex-col justify-center items-center'>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className='mb-5'
            />

            <div className='flex flex-wrap'>
              {pokemon.pokemon_v2_pokemonmoves.map((pokemon_move) => (
                <p key={pokemon_move.pokemon_v2_move?.name} className='mr-2 capitalize'>
                  {pokemon_move.pokemon_v2_move?.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 px-2 w-full'>
          <div className='flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg '>
            <p className='text-sm text-gray-600'>Types</p>
            <div className='text-base font-medium text-navy-700 flex'>
              {pokemon.pokemon_v2_pokemontypes.map((pokemon_type) => (
                <p key={pokemon_type.slot} className='mr-2 capitalize'>
                  {pokemon_type.pokemon_v2_type?.name}
                </p>
              ))}
            </div>
          </div>

          <div className='flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg '>
            <p className='text-sm text-gray-600'>Peso</p>
            <span className='text-base font-medium text-navy-700 flex'>{pokemon.weight}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
