import next from 'eslint-config-next';

const config = [
  ...next,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];

export default config;
