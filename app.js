const menuBurgerOpen = document.querySelector('.hat__burger')
const menuMobile = document.querySelector('.menu-mobile')
const menuBurgerClose = document.querySelector('.menu-mobile-hat__burger')
const introDotsFirst = document.querySelectorAll('.card-dot-first')
const introDotsSecond = document.querySelectorAll('.card-dot-second')
const introDotsThird = document.querySelectorAll('.card-dot-third')
const introCards = document.querySelectorAll('.intro-slider__card')
const introVideo = document.querySelector('.intro-aside__video')
const introVideoPlay = document.querySelector('.intro-aside__play')
const screenWidth = window.screen.width


// Menu burger action
menuBurgerOpen.addEventListener('click', () => {
    menuMobile.classList.add('active')
    document.body.classList.add('noscroll')
})

menuBurgerClose.addEventListener('click', () => {
    menuMobile.classList.remove('active')
    document.body.classList.remove('noscroll')
})


// Intro Slider
let slideIndex = 1

introDotsFirst.forEach((introDotsFirst) => {
    introDotsFirst.addEventListener('click', () => {
        introCards[0].classList.add('active')
        introCards[1].classList.remove('active')
        introCards[2].classList.remove('active')
        slideIndex = 1
        makeTimer()
    })
})

introDotsSecond.forEach((introDotsSecond) => {
    introDotsSecond.addEventListener('click', () => {
        introCards[0].classList.remove('active')
        introCards[1].classList.add('active')
        introCards[2].classList.remove('active')
        slideIndex = 2
        makeTimer()
    })
})

introDotsThird.forEach((introDotsThird) => {
    introDotsThird.addEventListener('click', () => {
        introCards[0].classList.remove('active')
        introCards[1].classList.remove('active')
        introCards[2].classList.add('active')
        slideIndex = 3
        makeTimer()
    })
})

showSlides(slideIndex);

function showSlides(n) {
  if (n > introCards.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = introCards.length
  }
  for (let introCard of introCards) {
    introCard.classList.remove('active')
  }
  introCards[slideIndex - 1].classList.add('active')
}

var timer = 0;
makeTimer()

function makeTimer() {
    clearInterval(timer)
    timer = setInterval(() => {
        slideIndex++
        showSlides(slideIndex)
    }, 5000)
}


// Play video button (intro)

introVideo.addEventListener('click', () => {
    if (introVideo.paused) {
        introVideo.play()
        introVideoPlay.classList.add('intro-aside__play-hidden')
      } else {
        introVideo.pause()
        introVideoPlay.classList.remove('intro-aside__play-hidden')
      }
})


// Accordion (footer)
const accordionItems = document.querySelectorAll('.footer-menu__title')

if (screenWidth <= '768') {
    accordionItems.forEach((accordionItem) => {
        accordionItem.addEventListener('click', () => {
            accordionItem.classList.toggle('active')
            const accordionItemBody = accordionItem.nextElementSibling
            if (accordionItem.classList.contains('active')) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px'
            }
            else {
                accordionItemBody.style.maxHeight = 0
            }
        })
    })
}

