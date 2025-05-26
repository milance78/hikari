

export const timedResultImage = (img: string, setFn: React.Dispatch<React.SetStateAction<string>>) => {
    setFn(img);
    const timeOut = setTimeout(() => {
        setFn('');
        clearTimeout(timeOut);
    }, 4000
    );
}

export const changeHandler = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setFn: React.Dispatch<React.SetStateAction<string>>) => {
    setFn(ev.target.value)
}

export const countResult = (arr: number[]) =>
    arr.reduce((sum, num) => sum + num);


const getPossibleAdditions = (sum: number) => 
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
    ?[-6, -5, -1, 1, 2, 3]
    : sum === 7
    ? [-7, -6, -5,  -2, -1, 1, 2]
    : sum === 8
    ? [-8, -7, -6, -5, -3, -2, -1, 1 ]
    : sum === 9
    ? [-9, -8, -7, -6, -5, -4, -3, -2, -1 ]
    : []
       
    
    const getRandomAddition = (possibleAdditions: number[]) => 
        possibleAdditions[
            Math.floor(Math.random()*possibleAdditions.length)
        ]

    export const getHikariArray = (arrayLength: number) => {
        let hikariArray: number[] = [0];
        for (let index = 0; index < arrayLength; index++) {
            hikariArray = [
                ...hikariArray,
                getRandomAddition(getPossibleAdditions(
                    hikariArray.reduce(
                        (sum, num) => sum + num
                    )
                ))
            ]      
        }
        return [...hikariArray.filter(el => el !==0), 0];
    }
        
    





// const testArr = [ 2, 5, 9, 7, 1, 8, 77, 24, 29, 18]

// const test1 = () => {
//     let num = 0;
//     const interval = setInterval(() => {
//         console.log(testArr[num]);
//         num < testArr.length - 1
//             ? num += 1
//             : clearInterval(interval);
        
//     }, 1000)
// }



