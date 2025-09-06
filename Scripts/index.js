const aliases = [

    'CODE WIZARD',
    'FULLSTACK DEVELOPER',
    'PYTHON ENTHUSIAST',
    'GAME DEVELOPER',
    'A SINGER',
    'AN ARTIST'

]
const aliasParagraphEl = document.querySelector('.alias-paragraph');
const logoName = document.querySelector('.logo-name');


logoName.style.animationPlayState = 'paused';


setTimeout(() => {

    logoName.style.animationPlayState = 'running'

}, 1200);

setTimeout(() => {
    
    logoName.style.overflow = 'visible';

}, 2000);

let aliasIdx = 0;

setInterval(() => {
    
    aliasParagraphEl.textContent = aliases[aliasIdx];
    aliasParagraphEl.style.setProperty('--steps', aliases[aliasIdx].length);

    aliasIdx++;

    if (aliasIdx > aliases.length - 1) aliasIdx = 0;

}, 4000);