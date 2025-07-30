
import { resetProgression, setGameCourse, setNumbersRunning } from "../redux/features/runningSlice";
import { resetScore, resetScoreList } from "../redux/features/scoreSlice";
import { store } from "../redux/store";
import { stopHandler } from "./displayFunctions";

export const restart = () => {
    stopHandler();
    store.dispatch(setNumbersRunning(false));
    store.dispatch(setGameCourse('setup'));
    store.dispatch(resetScoreList());
    store.dispatch(resetScore());
    store.dispatch(resetProgression());
}