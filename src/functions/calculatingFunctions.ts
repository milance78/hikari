
// array of next possible additions depends on sum of previous aditions (because of limitations of hikari array)
const getArrayOfPossibleAdditions = (sum: number) =>
  sum === 0
    ? [1, 2, 3, 4, 5, 6, 7, 8, 9]
    : sum === 1
      ? [-1, 1, 2, 3, 5, 6, 7, 8]
      : sum === 2
        ? [-2, -1, 1, 2, 5, 6, 7]
        : sum === 3
          ? [-3, -2, -1, 1, 5, 6]
          : sum === 4
            ? [-4, -3, -2, -1, 5]
            : sum === 5
              ? [-5, 1, 2, 3, 4]
              : sum === 6
                ? [-6, -5, -1, 1, 2, 3]
                : sum === 7
                  ? [-7, -6, -5, -2, -1, 1, 2]
                  : sum === 8
                    ? [-8, -7, -6, -5, -3, -2, -1, 1]
                    : sum === 9
                      ? [-9, -8, -7, -6, -5, -4, -3, -2, -1]
                      : []

const getRandomAddition = (arrayOfPossibleAdditions: number[]) =>
  arrayOfPossibleAdditions[
  Math.floor(Math.random() * arrayOfPossibleAdditions.length)
  ]

export const getHikariArray = (arrayLength: number) => {
  let hikariArray: number[] = [];
  for (let index = 0; index < arrayLength; index++) {
    const currentSum = hikariArray.reduce((sum, num) => sum + num, 0);
    const possibleAdditions = getArrayOfPossibleAdditions(currentSum);
    const nextAddition = getRandomAddition(possibleAdditions)
    hikariArray.push(nextAddition);
  }
  return [...hikariArray];
}




