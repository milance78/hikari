import { store } from "../redux/store";
import { smoothBeepSound } from "../data";
import { runningSlice, setCurrentArray } from "../redux/features/runningSlice";
import { getHikariArray } from "./calculatingFunctions";

const { setDisplayedNumber } = runningSlice.actions;

const displayNumbers = (
    _currentArray: number[],
    _interval: number,
    _soundOn: boolean,
) => {
    // intentionally iterating one undefined after the array 
    const n = _currentArray.length + 1
    for (let i = 0; i < n; i++) {
        const el = _currentArray[i]
        setTimeout(() => {
            store.dispatch(setDisplayedNumber(el));
            el && _soundOn
                && smoothBeepSound.play();
        }, i * _interval);
    }
}

// not sure how this works
const applyBlinking = (
    _currentArray: number[],
    _interval: number
) => {
    _currentArray.forEach((_, i) =>
        setTimeout(() => {
            store.dispatch(setDisplayedNumber(null))
        }
            , i * _interval - 100)
    );
}

export const runNumbers = () => {
    const { range, interval, soundOn } = store.getState().parameters;
    const newArray = getHikariArray(range);
    store.dispatch(setCurrentArray(newArray));

    applyBlinking(newArray, interval);
    displayNumbers(newArray, interval, soundOn);
}