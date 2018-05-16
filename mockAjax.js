let callCount = 0;

module.exports = {
  callbackFunctions: {
    fetch: (url, cb) => {
      setTimeout(() => { cb(`fetched ${callCount}`); }, 1000);
      callCount += 1;
    }
  },
  promisifiedFunctions: {
    fetch: () => {
      let resolve;
      const promise = new Promise((res) => {
        resolve = res;
      });
      setTimeout(() => {
        resolve(`fetched ${callCount}`);
        callCount += 1;
      }, 1000);
      return promise;
    },
    delayedFailure: () => false
  }
}
