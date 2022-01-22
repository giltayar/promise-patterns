function makeMutex() {
  let latestLock;
  
  return async function lock() {
    let nakedResolve;
    const currLatestLock = latestLock;
    
    latestLock = new Promise((resolve) => (nakedResolve = resolve));
    
    await currLatestLock;
    
    return function unlock() {
      nakedResolve();
    }
  };
}
