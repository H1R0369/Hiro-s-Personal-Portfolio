// Logo Name Heading Animations

gsap.set('.logo-name-heading', {

    opacity: 0

})

gsap.to('.logo-name-heading', {

    width: 300,
    duration: 1.5,
    ease: 'linear',
    delay: 1,
    startAt: {
        width: 0,
        opacity: 1
    }

})

gsap.to('.logo-name-heading', {

    overflow: 'visible',
    delay: 2

})

// Alias Heading Animations

