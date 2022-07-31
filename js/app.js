/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst screenWidth = window.screen.width\n\n\n// Menu burger action\nconst menuBurgerOpen = document.querySelector('.hat__burger')\n\nif (menuBurgerOpen) {\n    const menuMobile = document.querySelector('.menu-mobile')\n    const menuBurgerClose = document.querySelector('.menu-mobile-hat__burger')\n\n    menuBurgerOpen.addEventListener('click', () => {\n        menuMobile.classList.add('active')\n        document.body.classList.add('noscroll')\n    })\n\n    menuBurgerClose.addEventListener('click', () => {\n        menuMobile.classList.remove('active')\n        document.body.classList.remove('noscroll')\n    })\n}\n\n\n// Accordion (footer)\nconst accordionItems = document.querySelectorAll('.footer-menu__title')\n\nif (accordionItems) {\n    accordionItems.forEach((accordionItem) => {\n        accordionItem.addEventListener('click', () => {\n            accordionItem.classList.toggle('active')\n            const accordionItemBody = accordionItem.nextElementSibling\n            if (accordionItem.classList.contains('active')) {\n                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px'\n            }\n            else {\n                accordionItemBody.style.maxHeight = 0\n            }\n        })\n    })\n}\n\n\n// Accordion (header)\nconst menuItems = document.querySelectorAll('.menu-link-more')\n\nif (menuItems) {\n    menuItems.forEach((menuItem) => {\n        menuItem.addEventListener('click', () => {\n            menuItem.classList.toggle('active')\n            const menuItemBody = menuItem.nextElementSibling\n            if (menuItem.classList.contains('active')) {\n                menuItemBody.style.maxHeight = menuItemBody.scrollHeight + 'px'\n            }\n            else {\n                menuItemBody.style.maxHeight = 0\n            }\n        })\n    })\n}\n\n\n// Header search\nconst searchBlock = document.querySelector('.search')\n\nif (searchBlock) {\n    const searchBtns = document.querySelectorAll('.btn-search')\n    const searchOverlay = document.querySelector('.hat__search')\n    const searchOverlayTap = document.querySelector('.search-overlay')\n    const searchClose = document.querySelector('.search__close')\n    const searchBack = document.querySelector('.search__back')\n\n    searchBtns.forEach((searchBtn) => {\n        searchBtn.addEventListener('click', () => {\n            searchBlock.classList.add('active')\n            searchOverlay.classList.add('active')\n            searchOverlayTap.classList.add('active')\n        })\n    })\n    \n    searchClose.addEventListener('click', () => {\n        searchBlock.classList.remove('active')\n        searchOverlay.classList.remove('active')\n        searchOverlayTap.classList.remove('active')\n    })\n    \n    searchBack.addEventListener('click', () => {\n        searchBlock.classList.remove('active')\n        searchOverlay.classList.remove('active')\n        searchOverlayTap.classList.remove('active')\n    })\n    \n    searchOverlayTap.addEventListener('click', () => {\n        searchBlock.classList.remove('active')\n        searchOverlay.classList.remove('active')\n        searchOverlayTap.classList.remove('active')\n    })\n}\n\n\n// Play video button (intro)\nconst videoBlock = document.querySelector('.play-block')\n\nif (videoBlock) {\n    const videoPlay = document.querySelector('.play-btn')\n    const videoPoster = document.querySelector('.play-poster')\n    const video = document.querySelector('.play-video')\n\n    videoBlock.addEventListener('click', () => {\n        videoBlock.classList.add('play-block--playing')\n        video.play()\n        video.controls = true\n    })\n\n    video.onpause = function() {\n        videoBlock.classList.remove('play-block--playing')\n        video.controls = false\n    }\n}\n\n\n// Intro Slider\nconst introCards = document.querySelectorAll('.intro-slider__card')\n\nif (introCards) {\n    const introDotsFirst = document.querySelectorAll('.card-dot-first')\n    const introDotsSecond = document.querySelectorAll('.card-dot-second')\n    const introDotsThird = document.querySelectorAll('.card-dot-third')\n\n    let slideIndex = 1\n\n    introDotsFirst.forEach((introDotsFirst) => {\n        introDotsFirst.addEventListener('click', () => {\n            introCards[0].classList.add('active')\n            introCards[1].classList.remove('active')\n            introCards[2].classList.remove('active')\n            slideIndex = 1\n            makeTimer()\n        })\n    })\n    \n    introDotsSecond.forEach((introDotsSecond) => {\n        introDotsSecond.addEventListener('click', () => {\n            introCards[0].classList.remove('active')\n            introCards[1].classList.add('active')\n            introCards[2].classList.remove('active')\n            slideIndex = 2\n            makeTimer()\n        })\n    })\n    \n    introDotsThird.forEach((introDotsThird) => {\n        introDotsThird.addEventListener('click', () => {\n            introCards[0].classList.remove('active')\n            introCards[1].classList.remove('active')\n            introCards[2].classList.add('active')\n            slideIndex = 3\n            makeTimer()\n        })\n    })\n\n    showSlides(slideIndex);\n    \n    function showSlides(n) {\n      if (n > introCards.length) {\n        slideIndex = 1\n      }\n      if (n < 1) {\n        slideIndex = introCards.length\n      }\n      for (let introCard of introCards) {\n        introCard.classList.remove('active')\n      }\n      introCards[slideIndex - 1].classList.add('active')\n    }\n    \n    var timer = 0;\n    makeTimer()\n    \n    function makeTimer() {\n        clearInterval(timer)\n        timer = setInterval(() => {\n            slideIndex++\n            showSlides(slideIndex)\n        }, 5000)\n    }\n}\n\n//# sourceURL=webpack://volodar-project/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;