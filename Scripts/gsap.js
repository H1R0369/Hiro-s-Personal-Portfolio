gsap.set('.logo-name-heading', {

    opacity: 0

})

gsap.to('.logo-name-heading', {

    width: 300,
    duration: 3,
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