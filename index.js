const ajax = require('./mockAjax');

// Asynchronicity via callbacks:
// ajax.callbackFunctions.fetch('http://example.com', (response) => {
//   console.log(response);
//   ajax.callbackFunctions.fetch('http://example.com', (response) => {
//     console.log(response);
//     ajax.callbackFunctions.fetch('http://example.com', (response) => {
//       console.log(response);
//       ajax.callbackFunctions.fetch('http://example.com', (response) => {
//         console.log(response);
//       });
//     });
//   });
// });

// Asynchronicity via promises:
//
// ajax.promisifiedFunctions.fetch('http://example.com').then((response) => {
//   console.log(response);
// }).then(() => {
//   ajax.promisifiedFunctions.fetch('http://example.com').then((response) => {
//     console.log(response);
//     // complicated logic
//   })
// });


async function makeCalls() {
  // console.log(await ajax.promisifiedFunctions.fetch('sldkfjsldkf'));
  // console.log(await ajax.promisifiedFunctions.fetch('sldkfjsldkf'));
  // console.log(await ajax.promisifiedFunctions.fetch('sldkfjsldkf'));
  // console.log(await ajax.promisifiedFunctions.fetch('sldkfjsldkf'));
  // console.log(await ajax.promisifiedFunctions.fetch('sldkfjsldkf'));

  // const responses = await Promise.all([
  //   ajax.promisifiedFunctions.fetch('sdlkfj'),
  //   ajax.promisifiedFunctions.fetch('sdlkfj'),
  //   ajax.promisifiedFunctions.fetch('sdlkfj'),
  //   ajax.promisifiedFunctions.fetch('sdlkfj')
  // ]);

  // responses.forEach(response => console.log(response));
  return Promise.reject('Rejected!');

}
(async () => {
// const foo = makeCalls();
// const bar = await makeCalls();

// makeCalls().then(() => {
//   console.log('sdlkfjsldkfj');
// });

try {
  makeCalls();
} catch (error) {
  console.log(error);
}

// console.log(foo);
// console.log(bar);



})();

const makeCalls2 = async () => {};
