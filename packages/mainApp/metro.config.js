/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const {getMetroTools} = require('react-native-monorepo-tools');

const monorepoMetroTools = getMetroTools();

const nodeModulesPaths = [path.resolve(path.join(__dirname, './node_modules'))];

console.log(
  'metro watch folders',
  monorepoMetroTools.extraNodeModules,
  monorepoMetroTools.watchFolders,
);
module.exports = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders: monorepoMetroTools.watchFolders,
  resolver: {
    // Ensure we resolve nohoist libraries from this directory.
    blockList: exclusionList(monorepoMetroTools.blockList),
    extraNodeModules: monorepoMetroTools.extraNodeModules,
    nodeModulesPaths,
  },
  // resolver: {
  //   extraNodeModules: new Proxy(
  //     {},
  //     {
  //       get: (target, name) => {
  //         return path.join(__dirname, `node_modules/${name}`);
  //       },
  //     },
  //   ),
  // },
};

// function getConfig(appDir, options = {}) {
//   return {
//     watchFolders: [...path.resolve(appDir, '../../node_modules')],
//   };
// }

// module.export = getConfig(__dirname);
