import { store } from "../redux/store";
import { disableButton, enableButton, disableInput, enableInput } from "../redux/features/disabledSlice";


const { buttonDisabled, inputDisabled } = store.getState().disabled;

export const disableButtonFocusInput = async (inputElement: HTMLInputElement) => {
    store.dispatch(enableInput());
    store.dispatch(disableButton());
    await Promise.resolve();
    inputElement.focus();
}

export const disableInputFocusButton = async (buttonElement: HTMLButtonElement) => {
    store.dispatch(disableInput());
    store.dispatch(enableButton());
    await Promise.resolve();
    buttonElement.focus();
}