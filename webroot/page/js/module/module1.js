// // module1.js
// export const a = 1, b = '2';
// export let obj = { a, b };

// // module1.js
// var c = 'cfoot';
// var d = 'dorat?';

// export { c, d };

// // module1.js
// export class Newbie {
//   levelUp() {
//     console.log('I feel stronger.');
//   }
// }

// export const { str1, str2: bar } = { str1: 'abc', str2: 'def'};

import fn2 from './module2.js';
export { fn2 as fn1 };
// export { fn } from './module2.js';
