// Logo Name Heading Animations

gsap.set('.logo-name-heading', {

    opacity: 0,
    overflow: 'hidden'

})

gsap.to('.logo-name-heading', {

    keyframes: [

        {
            width: 300,
            duration: 3,
            ease: 'linear',
            delay: 1.2,
            startAt: {
                width: 0,
                opacity: 1
            }
        },

        {
            textShadow: `
                0px 0px 5px var(--color-secondary),
                0px 0px 15px var(--color-secondary),
                0px 0px 20px var(--color-secondary),
                0px 0px 30px var(--color-secondary),
                0px 0px 40px var(--color-secondary),
                0px 0px 60px var(--color-secondary),
                0px 0px 98px var(--color-secondary)
            `,
            duration: 2,
        }

    ]
})

gsap.to('.logo-name-heading', {

    overflow: 'visible',
    delay: 2.5

})

// Alias Heading Animations

const aliasParagraphEl = document.querySelector('.alias-heading');
const names = [

    'CODE WIZARD',
    'FULLSTACK DEVELOPER',
    'PYTHON ENTHUSIAST',
    'GAME DEVELOPER',
    'A SINGER',
    'AN ARTIST'

];

const namesHTML = names.map(name => {

    let nameHTML = '';

    Array.from(name).forEach(letter => {

        if (letter === ' ') {nameHTML += ' '}
        else {nameHTML += `<span>${letter}</span>`};

    });

    return nameHTML;

});

gsap.set(aliasParagraphEl, {innerHTML: namesHTML[0]});

let tl = gsap.timeline({ease: 'linear', repeat: -1});

namesHTML.forEach(nameHTML => {

    tl.set(aliasParagraphEl, {innerHTML: nameHTML});

    tl.call(() => {

        gsap.from('.alias-heading span', {

            opacity: 0,
            duration: 0.1,
            stagger: 0.1,
            ease: 'linear',
            yoyoEase: 'power4',
            yoyo: true,
            repeat: 1,
            repeatDelay: 0.6
                
        });

    })

    tl.to({}, {duration: 6})

})


