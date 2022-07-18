const menuBurgerOpen = document.querySelector('.hat__burger')
const menuMobile = document.querySelector('.menu-mobile')
const menuBurgerClose = document.querySelector('.menu-mobile-hat__burger')
const introDotsFirst = document.querySelectorAll('.card-dot-first')
const introDotsSecond = document.querySelectorAll('.card-dot-second')
const introDotsThird = document.querySelectorAll('.card-dot-third')
const introCards = document.querySelectorAll('.intro-slider__card')
const introVideo = document.querySelector('.intro-aside__header')
const introVideoPlay = document.querySelector('.intro-aside__play')
const screenWidth = window.screen.width


// Menu burger action
menuBurgerOpen.addEventListener(('click'), () => {
    menuMobile.classList.add('active')
    document.body.classList.add('noscroll')
})

menuBurgerClose.addEventListener(('click'), () => {
    menuMobile.classList.remove('active')
    document.body.classList.remove('noscroll')
})


// Intro Slider

introDotsFirst.forEach((introDotFirst) => {
    introDotFirst.addEventListener('click', () => {
        introCards[0].classList.add('active')
        introCards[1].classList.remove('active')
        introCards[2].classList.remove('active')
    })
})

introDotsSecond.forEach((introDotsSecond) => {
    introDotsSecond.addEventListener('click', () => {
        introCards[0].classList.remove('active')
        introCards[1].classList.add('active')
        introCards[2].classList.remove('active')
    })
})

introDotsThird.forEach((introDotThird) => {
    introDotThird.addEventListener('click', () => {
        introCards[0].classList.remove('active')
        introCards[1].classList.remove('active')
        introCards[2].classList.add('active')
    })
})


// Play video button (intro)
introVideo.addEventListener('click', () => {
    introVideoPlay.classList.toggle('intro-aside__play-hidden')
})


// Accordion (footer)
const accordionItems = document.querySelectorAll(".footer-menu__title")

if (screenWidth <= "768") {
    accordionItems.forEach((accordionItem) => {
        accordionItem.addEventListener("click", event => {
            accordionItem.classList.toggle("_active");
            const accordionItemBody = accordionItem.nextElementSibling;
            if (accordionItem.classList.contains("_active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            }
            else {
                accordionItemBody.style.maxHeight = 0;
            }
        })
    })
}
