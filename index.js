const ajax = require('./mockAjax');

// // Traditional callbacks:
// ajax.callbackFunctions.fetch('http://example.com', (response) => { console.log(response); });

// // Promises:
// ajax.promisifiedFunctions.fetch('http://example.com').then((response) => {
// });
//
// Async/Await:
// const response = await ajax.promisifiedFunctions.fetch('http://example.com');

// console.log('getRequestsInOrder, with callbacks:');
// (function getRequestsInOrder() {
//   ajax.callbackFunctions.fetch('http://example.com', (response) => {
//     console.log(response);
//     ajax.callbackFunctions.fetch('http://example2.com', (response) => {
//       console.log(response);
//       ajax.callbackFunctions.fetch('http://example3.com', (response) => {
//         console.log(response);
//       });
//     });
//   });
// })();

// console.log('getRequestsInOrder, with promises:');
// (function getRequestsInOrder() {
//   ajax.promisifiedFunctions.fetch('http://example.com').then((response) => {
//     console.log(response);
//     ajax.promisifiedFunctions.fetch('http://example2.com').then((response) => {
//       console.log(response);
//       ajax.promisifiedFunctions.fetch('http://example3.com').then((response) => {
//         console.log(response);
//       });
//     })
//   });
// })();

console.log('getRequestsInOrder, with async/await:');
(async function getRequestsInOrder() {
  console.log(await ajax.promisifiedFunctions.fetch('http://example.com'));
  console.log(await ajax.promisifiedFunctions.fetch('http://example2.com'));
  console.log(await ajax.promisifiedFunctions.fetch('http://example3.com'));

  const response4 = await ajax.promisifiedFunctions.fetch('foo.bar');
  console.log(response4);

  const simultaneousRequests = await Promise.all([
    ajax.promisifiedFunctions.fetch('foo1'),
    ajax.promisifiedFunctions.fetch('foo2'),
    ajax.promisifiedFunctions.fetch('foo3'),
    ajax.promisifiedFunctions.fetch('foo4')
  ]);
  simultaneousRequests.forEach((response) => console.log(response));
})();
