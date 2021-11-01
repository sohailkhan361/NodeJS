// To capture the arguments passed
function dynamicArgsFunction () {
    console.log(arguments);
}

dynamicArgsFunction(2 , 3 , 4 , 5) // arguments as an object

// Even without passing anything, it console.log a hidden function
// function (exports, require, module, __filename, __dirname)
console.log(arguments);
//Output:---
// [Arguments] {
//     '0': {},
//     '1': [Function: require] {
//       resolve: [Function: resolve] { paths: [Function: paths] },
//       main: Module {
//         id: '.',
//         path: 'C:\\Users\\sohail khan\\Documents\\nodejs',
//         exports: {},
//         parent: null,
//         filename: 'C:\\Users\\sohail khan\\Documents\\nodejs\\arguments.js',
//         loaded: false,
//         children: [],
//         paths: [Array]
//       },
//       extensions: [Object: null prototype] {
//         '.js': [Function (anonymous)],
//         '.json': [Function (anonymous)],
//         '.node': [Function (anonymous)]
//       },
//       cache: [Object: null prototype] {
//         'C:\\Users\\sohail khan\\Documents\\nodejs\\arguments.js': [Module]
//       }
//     },
//     '2': Module {
//       id: '.',
//       path: 'C:\\Users\\sohail khan\\Documents\\nodejs',
//       exports: {},
//       parent: null,
//       filename: 'C:\\Users\\sohail khan\\Documents\\nodejs\\arguments.js',
//       loaded: false,
//       children: [],
//       paths: [
//         'C:\\Users\\sohail khan\\Documents\\nodejs\\node_modules',
//         'C:\\Users\\sohail khan\\Documents\\node_modules',
//         'C:\\Users\\sohail khan\\node_modules',
//         'C:\\Users\\node_modules',
//         'C:\\node_modules'
//       ]
//     },
//     '3': 'C:\\Users\\sohail khan\\Documents\\nodejs\\arguments.js',
//     '4': 'C:\\Users\\sohail khan\\Documents\\nodejs'
//   }