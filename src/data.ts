export const applauseSound = new Audio('./sounds/applause.wav');
export const sadTromboneSound = new Audio('./sounds/sadTrombone.mp3');
export const smoothBeepSound = new Audio('./sounds/smoothBeep.mp3');

export interface Theme {
    name: string;
    background: string;
    primary: string;
    otherBg: string;
}
export const blueTheme = {
    name: 'Blue',
    background: 'rgb(192, 228, 236)',
    primary: ' #06a8cd',
    otherBg: 'none'
}

export const violetTheme = {
    name: 'Violet',
    background: 'rgb(254, 201, 250)',
    primary: ' #ba68c8',
    otherBg: 'none'
}
 
export const minecraftTheme = {
    name: 'Minecraft',
    background: 'none',
    primary: 'rgb(4, 164, 23)',
    otherBg: 'white'
}

