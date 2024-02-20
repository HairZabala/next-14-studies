import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://beta.pokeapi.co/graphql/v1beta',
  documents: [
    'src/app/features/*/graphql/*.graphql',
    'src/app/features/*/*/graphql/*.graphql',
    'src/graphql/**/*.graphql',
    'src/graphql/*.graphql',
  ],
  ignoreNoDocuments: true,
  generates: {
    'src/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};

export default config;
