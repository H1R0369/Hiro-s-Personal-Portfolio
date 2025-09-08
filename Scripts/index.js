const logoName = document.querySelector('.logo-name-heading');


logoName.style.animationPlayState = 'paused';


setTimeout(() => {

    logoName.style.animationPlayState = 'running'

}, 1200);