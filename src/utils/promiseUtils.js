export function delayPromise(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
