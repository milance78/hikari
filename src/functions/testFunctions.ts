export const testArr = [ 2, 5, 9, 7, 1, 8, 77, 24, 29, 18]

const test1 = () => {
    let num = 0;
    const interval = setInterval(() => {
        console.log(testArr[num]);
        num < testArr.length - 1
            ? num += 1
            : clearInterval(interval);

    }, 1000)
}


async function processItems() {
  const items = [1, 2, 3];
  for (const item of items) {
    await asyncOperation(item);
  }
  afterLoop();
}

async function asyncOperation(item: any) {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      console.log("Async task for item:", item);
      resolve();
    }, 100);
  });
}
processItems();

function afterLoop() {
  console.log("All async operations completed");
}