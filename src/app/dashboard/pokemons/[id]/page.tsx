import { GetPokemonDocument, GetPokemonQueryResult } from '@/graphql/generated';
import { getClient } from '@/libs/client';
import { Metadata } from 'next';

export async function generateMetadata({ params }: PokemonPageProps): Promise<Metadata> {
  const pokemon = await getPokemon(params.id);

  return {
    title: `#${pokemon?.id} - ${pokemon?.name}`,
    description: `Pokemon Page - ${pokemon?.name}`,
  };
}

const getPokemon = async (id: string) => {
  const pokemon = (await getClient().query({
    query: GetPokemonDocument,
    variables: {
      id: parseInt(id),
    },
  })) as GetPokemonQueryResult;

  return pokemon?.data?.pokemon_v2_pokemon_by_pk;
};

export interface PokemonPageProps {
  params: {
    id: string;
  };
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const pokemon = await getPokemon(params.id);

  return <div>{pokemon?.name}</div>;
}
