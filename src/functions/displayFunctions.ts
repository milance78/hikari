import { smoothBeepSound } from "../data";
import { handleBlankDisplay, setCurrentArray, setDisplayedNumber } from "../redux/features/runningSlice";
import { store } from "../redux/store";
import { getHikariArray } from "./calculatingFunctions";
import { disableButtonFocusInput } from "./focusingDisablingFunctions";

export let int: NodeJS.Timer | null = null;

export const runNumbers = (inputElement: HTMLInputElement) => {
  const { interval, range } = store.getState().parameters

  let indexCounter = 0;
  let newArray = getHikariArray(range);
  repetitiveActions(indexCounter, newArray);
  store.dispatch(setCurrentArray(newArray));

  int = setInterval(() => {
    indexCounter += 1;
    if (indexCounter === range - 1) {
      stopHandler();
      disableButtonFocusInput(inputElement);
    }
    repetitiveActions(indexCounter, newArray);
  }, interval);
}

export const stopHandler = () => {
  int && clearInterval(int);
}

const blinkHandler = () => {
  const { interval } = store.getState().parameters

  store.dispatch(handleBlankDisplay(false));
  const timeOut = setTimeout(
    () => {
      store.dispatch(handleBlankDisplay(true));
      clearTimeout(timeOut);;
    }, interval - 100)
}

const repetitiveActions = (i: number, arr: number[]) => {
  store.dispatch(setDisplayedNumber(arr[i]));
  blinkHandler();
  smoothBeepSound.play();
}