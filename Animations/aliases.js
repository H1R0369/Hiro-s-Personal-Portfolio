import * as tw from './typewriter.js';

const aliasTexts = [

    'CODE WIZARD',
    'FULL STACK DEVELOPER', 
    'PYTHON ENTHUSIAST'

]

const aliasParagraphEl = document.querySelector('.alias-paragraph');
let aliasIndex = 0;

setInterval(() => {

    tw.animateTypewriter(aliasTexts[aliasIndex], aliasParagraphEl);
    aliasIndex++;

    if (aliasIndex > aliasTexts.length-1) aliasIndex = 0;

}, 3000);
