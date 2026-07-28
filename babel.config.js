module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@redux': './src/redux',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@models': './src/types',
        },
      },
    ],
  ],
};
