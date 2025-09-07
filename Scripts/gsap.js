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

