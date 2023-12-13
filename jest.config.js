// module.exports =  () => {
//     return {
//         moduleNameMapper: {
//                   '^@/(.*)$': '<rootDir>/src/$1'
//                 },
//         verbose: true,
//         transform: {
//           '^.+\\.vue$': 'babel-jest',
//           '^.+\\.js$': 'babel-jest',
          
//               // "\\.vue$": "<rootDir>/node_modules/babel-jest"
//               //'^.+\\.vue$': '@vue/vue3-jest',
              
//             },
//         moduleFileExtensions: [
//             'js',
//             'json',
//             'vue'
//         ],
       
//          transformIgnorePatterns: [
//              "/node_modules/.+\\.vue$",
//          ],
//     };
//   };
// const config = {
//     verbose: true,
//     moduleFileExtensions: [
//         'js',
//         'json',
//         'vue'
//       ],
//       transform: {
//         '^.+\\.js$': 'babel-jest',
//         '^.+\\.vue$': 'vue-jest'
//       },
//       moduleNameMapper: {
//         '^@/(.*)$': '<rootDir>/src/$1'
//       }
//   };
  
  //module.exports = config;
  module.exports = {
    moduleFileExtensions: [
      'js',
      'json',
      'vue'
    ],
    transform: {
      //'^.+\\.js$': 'babel-jest', //babel-jest
      //"^.*\\.vue$": "babel-jest",
      //'^.+\\.vue$': 'babel-jest'//@vue/vue3-jest
    },
    moduleNameMapper: {
      //'^@/(.*)$': '<rootDir>/src/$1',
      "src": "<rootDir>/src",
      "components": "<rootDir>/src/views/",
    },
    //transformIgnorePatterns: ['/node_modules/'],
    //testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        // html: '<html lang="es"></html>',
        url: 'http://localhost:8080/',
        customExportConditions: ["node", "node-addons"],
        //userAgent: 'Agent/007',
    },

  };
  