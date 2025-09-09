gsap.registerPlugin(TextPlugin)

// Logo Name Heading Animations

function init() {

    gsap.fromTo('.main-container', {

        autoAlpha: 0

    },
    {

        autoAlpha: 1,
        display: 'flex',
        delay: 0.5,
        duration: 2

    });

    gsap.set('.logo-name-heading', {

        opacity: 0,
        overflow: 'hidden'

    });

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
    });

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

    const split = new SplitText('.alias-heading', {type: 'chars'});

    gsap.set(split.chars, {visibility: 'hidden'})

    gsap.from(split.chars, {

        keyframes: {

            '0.01%': {autoAlpha: 1}

        },

        stagger: 0.1,
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
        ease: 'power4.in',
        duration: 1

    })


    // let idx = 0;
    // const tl = gsap.timeline({
    //     repeat: -1, 
    //     repeatDelay: 0.5, 
    //     delay: 1, 
    //     onRepeat() {
    //         idx++;
    //         if (idx > names.length - 1) idx = 0;
    //     }})

    //     .to('.alias-heading', {

    //         text: () => {

    //             return names[idx]

    //         },
    //         duration: 1.5,
    //         ease: 'power1.in',
    //         repeat: 1,
    //         repeatDelay: 0.5,
    //         repeatRefresh: true,
    //         yoyo: true,

    //     })

}

window.addEventListener('load', () => init());