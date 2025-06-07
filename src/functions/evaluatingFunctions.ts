import { store } from "../redux/store";
import wrongAnswerImage from '../img/wrongAnswer.png'
import applauseImage from '../img/applause.png'
import { setResultImage } from "../redux/features/runningSlice";
import { incrementFalseScore, incrementTrueScore } from "../redux/features/scoreSlice";
import { applauseSound, sadTromboneSound } from "../data";

const countResult = (arr: number[]) =>
  arr.reduce((sum, num) => sum + num, 0);

const timedResultImage = (img: string) => {
  store.dispatch(setResultImage(img));
  const timeOut = setTimeout(() => {
    store.dispatch(setResultImage(''))
    clearTimeout(timeOut);
  }, 4000
  );
}

export const evaluateResult = (resultEnteredByUser: number) => {
  const { soundOn } = store.getState().parameters;
  const { currentArray } = store.getState().running;
  const currentResult = countResult(currentArray);

  if (resultEnteredByUser === currentResult) {
    timedResultImage(applauseImage);
    store.dispatch(incrementTrueScore());
    soundOn && applauseSound.play();
  } else {
    timedResultImage(wrongAnswerImage);
    store.dispatch(incrementFalseScore());
    soundOn && sadTromboneSound.play();
  }
}