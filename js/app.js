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

eval("__webpack_require__.r(__webpack_exports__);\nconst screenWidth = window.screen.width\n\n\n// Menu burger action\nconst menuBurgerOpen = document.querySelector('.hat__burger')\n\nif (menuBurgerOpen) {\n    const menuMobile = document.querySelector('.menu-mobile')\n    const menuBurgerClose = document.querySelector('.menu-mobile-hat__burger')\n\n    menuBurgerOpen.addEventListener('click', () => {\n        menuMobile.classList.add('active')\n        document.body.classList.add('noscroll')\n    })\n\n    menuBurgerClose.addEventListener('click', () => {\n        menuMobile.classList.remove('active')\n        document.body.classList.remove('noscroll')\n    })\n}\n\n\n// Accordion (footer)\nconst accordionItems = document.querySelectorAll('.footer-menu__title')\n\nif (accordionItems) {\n    accordionItems.forEach((accordionItem) => {\n        accordionItem.addEventListener('click', () => {\n            accordionItem.classList.toggle('active')\n            const accordionItemBody = accordionItem.nextElementSibling\n            if (accordionItem.classList.contains('active')) {\n                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px'\n            }\n            else {\n                accordionItemBody.style.maxHeight = 0\n            }\n        })\n    })\n}\n\n\n// Accordion (header)\nconst menuItems = document.querySelectorAll('.menu-link-more')\n\nif (menuItems) {\n    menuItems.forEach((menuItem) => {\n        menuItem.addEventListener('click', () => {\n            menuItem.classList.toggle('active')\n            const menuItemBody = menuItem.nextElementSibling\n            if (menuItem.classList.contains('active')) {\n                menuItemBody.style.maxHeight = menuItemBody.scrollHeight + 'px'\n            }\n            else {\n                menuItemBody.style.maxHeight = 0\n            }\n        })\n    })\n}\n\n\n// Popup basket\nconst basketBtns = document.querySelectorAll('.basket')\n\nif (basketBtns) {\n    basketBtns.forEach((basketBtn) => {\n        const basketPopup = basketBtn.lastElementChild\n        const basketPopupClose = basketPopup.firstElementChild.firstElementChild\n\n        basketBtn.addEventListener('mouseover', () => {\n            basketPopup.classList.add('active')\n        })\n        basketBtn.addEventListener('mouseleave', () => {\n            basketPopup.classList.remove('active')\n        })\n        basketPopupClose.addEventListener('click', () => {\n            basketPopup.classList.remove('active')\n        })\n    })\n}\n\n\n// Accordion (questions)\nconst questionsItems = document.querySelectorAll('.questions__ask')\n\nif (questionsItems) {\n    questionsItems.forEach((questionsItem) => {\n        questionsItem.addEventListener('click', () => {\n\n            questionsItem.classList.toggle('active')\n            const questionsItemAnswer = questionsItem.nextElementSibling\n            if (questionsItem.classList.contains('active')) {\n                questionsItemAnswer.style.maxHeight = questionsItemAnswer.scrollHeight + 'px'\n            }\n            else {\n                questionsItemAnswer.style.maxHeight = 0\n            }\n        })\n    })\n}\n\n\n// Header search\nconst searchBlock = document.querySelector('.search')\n\nif (searchBlock) {\n    const searchBtns = document.querySelectorAll('.btn-search')\n    const searchOverlay = document.querySelector('.hat__search')\n    const searchOverlayTap = document.querySelector('.search-overlay')\n    const searchClose = document.querySelector('.search__close')\n    const searchBack = document.querySelector('.search__back')\n\n    searchBtns.forEach((searchBtn) => {\n        searchBtn.addEventListener('click', () => {\n            searchBlock.classList.add('active')\n            searchOverlay.classList.add('active')\n            searchOverlayTap.classList.add('active')\n        })\n    })\n\n    searchClose.addEventListener('click', () => {\n        searchBlock.classList.remove('active')\n        searchOverlay.classList.remove('active')\n        searchOverlayTap.classList.remove('active')\n    })\n\n    searchBack.addEventListener('click', () => {\n        searchBlock.classList.remove('active')\n        searchOverlay.classList.remove('active')\n        searchOverlayTap.classList.remove('active')\n    })\n\n    searchOverlayTap.addEventListener('click', () => {\n        searchBlock.classList.remove('active')\n        searchOverlay.classList.remove('active')\n        searchOverlayTap.classList.remove('active')\n    })\n}\n\n\n// Play video button (intro)\nconst videoBlocks = document.querySelectorAll('.play-block')\n\nif (videoBlocks) {\n    const videoPlays = document.querySelectorAll('.play-btn')\n    const videoPosters = document.querySelectorAll('.play-poster')\n    const videos = document.querySelectorAll('.play-video')\n\n    for (let i = 0; i < videoBlocks.length; i++) {\n        videoBlocks[i].addEventListener('click', () => {\n            videoBlocks[i].classList.add('play-block--playing')\n            videos[i].play()\n            videos[i].controls = true\n        })\n\n        videos[i].onpause = function() {\n            videoBlocks[i].classList.remove('play-block--playing')\n            videos[i].controls = false\n        }\n    }\n}\n\n\n// Extra info product card\nconst productItems = document.querySelectorAll('.goods-item')\n\nif (productItems) {\n    productItems.forEach((productItem) => {\n        const productExtra = productItem.lastElementChild\n        if (screenWidth >= 886) {\n            productItem.addEventListener('mouseover', () => {\n                productItem.classList.add('active')\n                productExtra.style.maxHeight = productExtra.scrollHeight + 'px'\n            })\n            productItem.addEventListener('mouseout', () => {\n                productItem.classList.remove('active')\n                productExtra.style.maxHeight = 0\n            })\n        } else {\n            const productForExtra = productExtra.previousElementSibling\n            productForExtra.addEventListener('click', () => {\n                productItem.classList.toggle('active')\n                if (productItem.classList.contains('active')) {\n                    productExtra.style.maxHeight = productExtra.scrollHeight + 'px'\n                    productForExtra.innerHTML = \"свернуть\"\n                }\n                else {\n                    productExtra.style.maxHeight = 0\n                    productForExtra.innerHTML = \"читать ещё\"\n                }\n            })\n        }\n    })\n}\n\n\n// Popup (products to basket)\nconst btnToBaskets = document.querySelectorAll('#tobasket')\n\nif (btnToBaskets) {\n    const popupToBasket = document.querySelector('.tobasket')\n    const popupToBasketAdded = document.querySelector('.tobasket-added')\n    const titleToBasket = document.querySelector('.tobasket__title')\n    const allPopups = document.querySelectorAll('.popup')\n    const allClosePopupBtns = document.querySelectorAll('.popup__close')\n    const allPopupOverlays = document.querySelectorAll('.popup__overlay')\n\n    const toBasketAddBtn = document.querySelector('.tobasket__btn')\n    const popupInputs = document.querySelectorAll('.popup__input')\n\n    const btnIndividToBaskets = document.querySelectorAll('#tobasket-individ')\n\n    btnToBaskets.forEach((btnToBasket) => {\n        const brandFlour = btnToBasket.parentElement.parentElement.parentElement.parentElement.previousElementSibling\n        const brandFlourText = brandFlour.textContent\n\n        const typeFlour = btnToBasket.parentElement.previousElementSibling\n        const typeFlourText = typeFlour.textContent\n\n        btnToBasket.addEventListener('click', () => {\n            popupToBasket.classList.add('active')\n            titleToBasket.innerHTML = brandFlourText + \" \" + typeFlourText\n            toBasketAddBtn.addEventListener('click', () => {\n                popupToBasketAdded.classList.add('active')\n                popupToBasket.classList.remove('active')\n            })\n        })\n\n        allClosePopupBtns.forEach((closePopupBtn) => {\n            closePopupBtn.addEventListener('click', () => {\n                allPopups.forEach((popup) => {\n                    popup.classList.remove('active')\n                })\n                popupInputs.forEach((popupInput) => {\n                    popupInput.value = \"\"\n                })\n            })\n        })\n\n        allPopupOverlays.forEach((popupOverlay) => {\n            popupOverlay.addEventListener('click', () => {\n                allPopups.forEach((popup) => {\n                    popup.classList.remove('active')\n                })\n                popupInputs.forEach((popupInput) => {\n                    popupInput.value = \"\"\n                })\n            })\n        })\n    })\n\n    btnIndividToBaskets.forEach((btnIndividToBasket) => {\n        const typeFlour = btnIndividToBasket.parentElement.previousElementSibling\n        const typeFlourText = typeFlour.textContent\n\n        btnIndividToBasket.addEventListener('click', () => {\n            popupToBasket.classList.add('active')\n            titleToBasket.innerHTML = typeFlourText\n            toBasketAddBtn.addEventListener('click', () => {\n                popupToBasketAdded.classList.add('active')\n                popupToBasket.classList.remove('active')\n            })\n        })\n        allClosePopupBtns.forEach((closePopupBtn) => {\n            closePopupBtn.addEventListener('click', () => {\n                allPopups.forEach((popup) => {\n                    popup.classList.remove('active')\n                })\n                popupInputs.forEach((popupInput) => {\n                    popupInput.value = \"\"\n                })\n            })\n        })\n\n        allPopupOverlays.forEach((popupOverlay) => {\n            popupOverlay.addEventListener('click', () => {\n                allPopups.forEach((popup) => {\n                    popup.classList.remove('active')\n                })\n                popupInputs.forEach((popupInput) => {\n                    popupInput.value = \"\"\n                })\n            })\n        })\n    })\n}\n\n\n// Popup to order\nconst btnToOrders = document.querySelectorAll('#toorder')\n\nif (btnToOrders) {\n    const popupToOrder = document.querySelector('.toorder')\n    const popupToOrderAdded = document.querySelector('.toorder-added')\n    const allPopups = document.querySelectorAll('.popup')\n    const allClosePopupBtns = document.querySelectorAll('.popup__close')\n    const allPopupOverlays = document.querySelectorAll('.popup__overlay')\n\n    const toOrderAddBtn = document.querySelector('.toorder-form__btn')\n    const popupInputs = document.querySelectorAll('.popup__input')\n\n    btnToOrders.forEach((btnToOrder) => {\n\n        btnToOrder.addEventListener('click', () => {\n            popupToOrder.classList.add('active')\n\n            toOrderAddBtn.addEventListener('click', () => {\n                let popupInputIsNotEmpty = 0\n                const toOrderCheckBox = document.querySelector('.toorder-form__checkbox-input')\n                popupInputs.forEach((popupInput) => {\n                    if (popupInput.value != \"\") {\n                        popupInputIsNotEmpty += 1\n                    } else {\n                        popupInputIsNotEmpty = 0\n                    }\n                })\n                if ((toOrderCheckBox.checked) && (popupInputIsNotEmpty == 3)) {\n                    popupInputIsNotEmpty = 5\n                } else {\n                    popupInputIsNotEmpty = 0\n                }\n\n                if (popupInputIsNotEmpty == 5) {\n                    popupToOrderAdded.classList.add('active')\n                    popupToOrder.classList.remove('active')\n                }\n            })\n        })\n\n        allClosePopupBtns.forEach((closePopupBtn) => {\n            closePopupBtn.addEventListener('click', () => {\n                allPopups.forEach((popup) => {\n                    popup.classList.remove('active')\n                })\n                popupInputs.forEach((popupInput) => {\n                    popupInput.value = \"\"\n                })\n            })\n        })\n\n        allPopupOverlays.forEach((popupOverlay) => {\n            popupOverlay.addEventListener('click', () => {\n                allPopups.forEach((popup) => {\n                    popup.classList.remove('active')\n                })\n                popupInputs.forEach((popupInput) => {\n                    popupInput.value = \"\"\n                })\n            })\n        })\n    })\n}\n\n\n// Filter cards\nconst filterBtns = document.querySelectorAll('#filterBtn')\n\nif (filterBtns) {\n    const filterCards = document.querySelectorAll('#filterCard')\n    const filterBtnWrappers = document.querySelectorAll('#filterBtnWrapper')\n\n    function filter (category, items, wrapperBtn) {\n\n        filterBtnWrappers.forEach((filterBtnWrapper) => {\n            filterBtnWrapper.classList.remove('active')\n            filterBtnWrapper.classList.remove('questions-filter__item-active')\n            if (wrapperBtn.firstElementChild.dataset.filter === category) {\n                wrapperBtn.classList.add('active')\n                if (wrapperBtn.classList.contains('questions-filter__item')) {\n                    wrapperBtn.classList.add('questions-filter__item-active')\n                }\n            }\n        })\n\n        items.forEach((item) => {\n            const isItemFiltered = !item.classList.contains(category)\n            const isShowAll = category.toLowerCase() === 'all'\n            if (isItemFiltered && !isShowAll) {\n                item.classList.add('filterAnimated')\n            } else {\n                item.classList.remove('filterHide')\n                item.classList.remove('filterAnimated')\n            }\n        })\n\n        questionsFilterBtns.forEach((questionsFilterBtn) => {\n            questionsFilterBtns.forEach((item) => {\n                item.classList.remove('questions-filter__item-active')\n            })\n            if (questionsFilterBtn.classList.contains('active')) {\n                questionsFilterBtn.classList.add('questions-filter__item-active')\n            }\n        })\n    }\n\n    filterBtns.forEach((filterBtn) => {\n        filterBtn.addEventListener('click', () => {\n            const currentCategory = filterBtn.dataset.filter\n            const filterBtnWrapper = filterBtn.parentElement\n\n            filter(currentCategory, filterCards, filterBtnWrapper)\n        })\n    })\n\n    filterCards.forEach((filterCard) => {\n        filterCard.ontransitionend = function () {\n            if (filterCard.classList.contains('filterAnimated')) {\n                filterCard.classList.add('filterHide')\n            }\n        }\n    })\n}\n\n\n// Tabs\nconst tabBtns = document.querySelectorAll('#tabBtn')\nconst tabItems = document.querySelectorAll('.tabItem')\n\ntabBtns.forEach((tabBtn) => {\n    tabBtn.addEventListener('click', () => {\n        let tabId = tabBtn.getAttribute('data-tab')\n        let currentTab = document.querySelector(tabId)\n\n        if (!tabBtn.classList.contains('active')) {\n            tabBtns.forEach((tabBtn) => {\n                tabBtn.classList.remove('active')\n            })\n\n            tabItems.forEach((tabItem) => {\n                tabItem.classList.remove('active')\n            })\n\n            tabBtn.classList.add('active')\n            currentTab.classList.add('active')\n        }\n    })\n})\n\n\n// Input file (clients)\nconst inputs = document.querySelectorAll('.input__file');\n\nif (inputs) {\n    Array.prototype.forEach.call(inputs, function (input) {\n        let label = input.nextElementSibling,\n            labelVal = label.querySelector('.input__file-button-text').innerText;\n\n        input.addEventListener('change', function (e) {\n            let countFiles = '';\n            if (this.files && this.files.length >= 1)\n                countFiles = this.files.length;\n\n            if (countFiles)\n                label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;\n            else\n                label.querySelector('.input__file-button-text').innerText = labelVal;\n        });\n    });\n}\n\n\n// Intro Slider\nconst introCards = document.querySelectorAll('.intro-slider__card')\n\nif (introCards) {\n    const introDotsFirst = document.querySelectorAll('.card-dot-first')\n    const introDotsSecond = document.querySelectorAll('.card-dot-second')\n    const introDotsThird = document.querySelectorAll('.card-dot-third')\n\n    let slideIndex = 1\n\n    introDotsFirst.forEach((introDotsFirst) => {\n        introDotsFirst.addEventListener('click', () => {\n            introCards[0].classList.add('active')\n            introCards[1].classList.remove('active')\n            introCards[2].classList.remove('active')\n            slideIndex = 1\n            makeTimer()\n        })\n    })\n\n    introDotsSecond.forEach((introDotsSecond) => {\n        introDotsSecond.addEventListener('click', () => {\n            introCards[0].classList.remove('active')\n            introCards[1].classList.add('active')\n            introCards[2].classList.remove('active')\n            slideIndex = 2\n            makeTimer()\n        })\n    })\n\n    introDotsThird.forEach((introDotsThird) => {\n        introDotsThird.addEventListener('click', () => {\n            introCards[0].classList.remove('active')\n            introCards[1].classList.remove('active')\n            introCards[2].classList.add('active')\n            slideIndex = 3\n            makeTimer()\n        })\n    })\n\n    showSlides(slideIndex);\n\n    function showSlides(n) {\n      if (n > introCards.length) {\n        slideIndex = 1\n      }\n      if (n < 1) {\n        slideIndex = introCards.length\n      }\n      for (let introCard of introCards) {\n        introCard.classList.remove('active')\n      }\n      introCards[slideIndex - 1].classList.add('active')\n    }\n\n    var timer = 0;\n    makeTimer()\n\n    function makeTimer() {\n        clearInterval(timer)\n        timer = setInterval(() => {\n            slideIndex++\n            showSlides(slideIndex)\n        }, 5000)\n    }\n}\n\n\n//# sourceURL=webpack://volodar-project/./src/js/app.js?");

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