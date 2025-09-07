const aliases = [

    'CODE WIZARD',
    'FULLSTACK DEVELOPER',
    'PYTHON ENTHUSIAST',
    'GAME DEVELOPER',
    'A SINGER',
    'AN ARTIST'

]
const aliasParagraphEl = document.querySelector('.alias-heading');
const logoName = document.querySelector('.logo-name-heading');


logoName.style.animationPlayState = 'paused';


setTimeout(() => {

    logoName.style.animationPlayState = 'running'

}, 1200);

let aliasIdx = 0;

setInterval(() => {
    
    aliasParagraphEl.textContent = aliases[aliasIdx];
    aliasParagraphEl.style.setProperty('--steps', aliases[aliasIdx].length);

    aliasIdx++;

    if (aliasIdx > aliases.length - 1) aliasIdx = 0;

}, 4000);