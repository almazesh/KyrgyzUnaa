const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const preloader = document.querySelector('.preloader')
const oneImg = document.querySelector('.oneImg');
const twoImg = document.querySelector('.twoImg');
const threeImg = document.querySelector('.threeImg');

window.addEventListener('load', () =>{

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
        
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 0, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        
    });
})



// Parallax
// oneImg.addEventListener('mousemove', e =>{
//     console.log(e.screenX);
//     console.log(e.screenY);
//     oneImg.firstElementChild.style.transition = '0s';
//     oneImg.firstElementChild.style.transform = `translate(${e.screenY * 0.02}px, ${e.screenX * 0.02}px)`
// })

// twoImg.addEventListener('mousemove', e =>{
//     console.log(e.screenX);
//     console.log(e.screenY);
//     twoImg.firstElementChild.style.transition = '0s';
//     twoImg.firstElementChild.style.transform = `translate(${e.screenY * 0.02}px, ${e.screenX * 0.02}px)`
// })

// threeImg.addEventListener('mousemove', e =>{
//     console.log(e.screenX);
//     console.log(e.screenY);
//     threeImg.firstElementChild.style.transition = '0s';
//     threeImg.firstElementChild.style.transform = `translate(${e.screenY * 0.02}px, ${e.screenX * 0.02}px)`
// })


