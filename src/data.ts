export const applauseSound = new Audio('./sounds/applause.wav');
export const sadTromboneSound = new Audio('./sounds/sadTrombone.mp3');
export const smoothBeepSound = new Audio('./sounds/smoothBeep.mp3');

export interface Theme {
    background: string,
    primary: string
}
export const blueTheme = {
    background: 'rgb(192, 228, 236)',
    primary: ' #06a8cd',
}

export const violetTheme = {
    background: 'rgb(254, 201, 250)',
    primary: ' #ba68c8'
}

