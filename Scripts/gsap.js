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
        delay: 0.5,
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

    const names = [

        'CODE WIZARD',
        'FULLSTACK DEVELOPER',
        'PYTHON ENTHUSIAST',
        'GAME DEVELOPER',
        'A SINGER',
        'AN ARTIST'

    ];

    let idx = 0;
    const tl = gsap.timeline({repeat: -1, repeatDelay: 0.5, delay: 1, onRepeat() {idx++}})

        .to('.alias-heading', {

            text: () => {

                return names[idx]

            },
            duration: 1.5,
            repeat: 1,
            repeatDelay: 0.5,
            repeatRefresh: true,
            yoyo: true,

        })

}

window.addEventListener('load', () => init());