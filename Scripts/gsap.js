// Logo Name Heading Animations

function init() {

    gsap.set('.logo-name-heading', {

        opacity: 0,
        overflow: 'hidden'

    })

    gsap.fromTo('.main-container', {

        autoAlpha: 0

    },
    {

        autoAlpha: 1,
        display: 'flex',
        delay: 1,
        duration: 2

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

    const aliasEl = document.querySelector('.alias-heading');
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

    let tl = gsap.timeline({defaults: {}, ease: 'linear', repeat: -1});
    let idx = 0;

    setInterval(() => {

        aliasEl.innerHTML = namesHTML[idx]
        idx++;
        if (idx > names.length - 1) idx = 0;

        gsap.from('.alias-heading span', {

            visibility: 'hidden',
            duration: 0.01,
            stagger: 0.1,
            ease: 'linear',
            repeat: 1,
            repeatDelay: 0.5,
            yoyo: true

        })
        
    }, 5000)
        // .from(aliasEl, {

        //     innerHTML: namesHTML[1]

        // })
        // .from(aliasEl, {

        //     innerHTML: namesHTML[2]

        // })
        // .from(aliasEl, {

        //     innerHTML: namesHTML[3]

        // })
        // .from(aliasEl, {

        //     innerHTML: namesHTML[4]

        // })
        // .from(aliasEl, {

        //     innerHTML: namesHTML[5]

        // })
}

window.addEventListener('load', () => init());