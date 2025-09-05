export function animateTypewriter(textString, textEl, {delay = 50, initialCursorDelay=0, initialTextDelay=0}={}) {

    // Setting the Text to an Empty String
    textEl.textContent = '';

    let letterIndex = 0;

    setTimeout(() => {

        const interval = setInterval(() => {
            
            textEl.textContent += textString[letterIndex];
            
            if (letterIndex < textString.length-1){

                letterIndex += 1;

            } else clearInterval(interval);

        }, delay);

    }, initialTextDelay);

    textEl.style.borderRight = '4px solid white';

    setTimeout(() => {
        textEl.style.borderRight = '4px solid black';
    }, initialCursorDelay);

};


export function animateTypewriterInverse(textString, textEl, {delay = 50, initialCursorDelay=0, initialTextDelay=0}={}) {

    let letterIndex = 0;

    setTimeout(() => {

        const interval = setInterval(() => {
            
            textEl.textContent = textEl.textContent.slice(0, -1);
            
            if (letterIndex < textString.length-1){

                letterIndex += 1;

            } else clearInterval(interval);

        }, delay);

    }, initialTextDelay);

    textEl.style.borderRight = '4px solid white';

    setTimeout(() => {
        textEl.style.borderRight = '4px solid black';
    }, initialCursorDelay);

};


export function animateTypewriterBoth(textString, textEl, {delay = 50, initialCursorDelay=0, initialTextDelay=0}={}) {

    // Setting the Text to an Empty String
    textEl.textContent = '';

    let letterIndex = 0;

    setTimeout(() => {

        const interval = setInterval(() => {
            
            textEl.textContent += textString[letterIndex];
            
            if (letterIndex < textString.length-1){

                letterIndex += 1;

            } else {

                clearInterval(interval);
                
            };

        }, delay);

    }, initialTextDelay);

    textEl.style.borderRight = '4px solid white';

    setTimeout(() => {
        textEl.style.borderRight = '4px solid black';
    }, initialCursorDelay);

};


export const typewriterElements = document.querySelectorAll('.typewriter');

typewriterElements.forEach(el => {

    const rawDelay = el.dataset.delay;
    const rawInitialCursorDelay = el.dataset.initialCursorDelay;
    const rawInitialTextDelay = el.dataset.initialTextDelay;

    let options = {}

    if (rawDelay !== undefined && rawDelay !== '') {options.delay = Number(rawDelay)};
    if (rawInitialCursorDelay !== undefined && rawInitialCursorDelay !== '') {options.initialCursorDelay = Number(rawInitialCursorDelay)};
    if (rawInitialTextDelay !== undefined && rawInitialTextDelay !== '') {options.initialTextDelay = Number(rawInitialTextDelay)};

    const textDirection = el.dataset.direction;

    if (textDirection === 'inverse') {
        animateTypewriterInverse(el.textContent, el, options);
    } else {
        animateTypewriter(el.textContent, el, options)
    }
});