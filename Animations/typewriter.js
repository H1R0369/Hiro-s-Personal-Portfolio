function animateTypewriter(textString, textElement, textContainerElement, delay = 140) {

    let originalTextContainerWidth = window.getComputedStyle(textContainerElement).width;
    textContainerElement.style.width = originalTextContainerWidth;

    // Setting the Text to an Empty String
    textElement.textContent = '';

    let letterIndex = 0;
    const interval = setInterval(() => {
        
        textElement.textContent += textString[letterIndex];
        
        if (letterIndex < textString.length-1){

            letterIndex += 1;

        } else clearInt();

    }, delay);


    function clearInt() {

        clearInterval(interval);

    }

    textElement.style.borderRight = 'none';
    setTimeout(() => {
        textElement.style.borderRight = '4px solid black';
    }, 1000);

};


const typewriterElements = []

const typewriterContainers = document.querySelectorAll('.typewriter-container').forEach(container => {

    const textEl = container.querySelector('.typewriter');

    const typewriterEl = {

        text: textEl.textContent,
        textEl,
        textContainerEl: container

    };

    typewriterElements.push(typewriterEl);

})


typewriterElements.forEach(element => {

    if (element.textEl) {

        if (element['delay']) 
            {animateTypewriter(element.text, element.textEl, element.textContainerEl, element.delay)}
        else 
            {animateTypewriter(element.text, element.textEl, element.textContainerEl)}

    } else {

        console.log('element does not exist');

    }

});