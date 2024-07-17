// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
//     plugins: ['react-native-reanimated/plugin',
//       [
//         'module-resolver',
//         {
//           root: ['.'],
//           extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
//           alias: {
//             '@app': ['./src'],
//             tests: ['./ tests'],
//             '@assets': ['./assets'],
//             '@themes': ['./assets/themes/index.ts'],
//             '@components': ['./src/components'],
//             '@constants': ['./src/constants/index.ts'],
//             "@config/*": [
//               '.config'],
//             '@hook': ['./src/hook/index.ts'],
//             '@navigation': ['./src/navigation'],
//             '@screens': ['./src/screens'],
//             '@store': ['./src/store'],
//             '@utils': ['./src/utils/index.ts'],
//           },
//         },

//       ],

//     ],
//   };
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [

      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@app': ['./src'],
            tests: ['./ tests'],
            '@assets': ['./assets'],
            '@themes': ['./assets/themes/index.ts'],
            '@components': ['./src/components'],
            '@constants': ['./src/constants/index.ts'],
            "@config/*": [
              '.config'],
            '@hook': ['./src/hook/index.ts'],
            '@navigation': ['./src/navigation'],
            '@screens': ['./src/screens'],
            '@store': ['./src/store'],
            '@utils': ['./src/utils/index.ts'],
          },
        },
      ],
    ],
  };
};
