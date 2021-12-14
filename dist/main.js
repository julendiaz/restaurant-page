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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n\n\n\nconst content = document.querySelector(\"#content\"); \n\ncontent.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.home)());\n\nconsole.log(\"hey this is real shit\");\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n\nconst home = () => {\n\n    const superContainer = document.createElement(\"div\");\n    superContainer.classList.add(\"main-container\");\n\n    //----------------NAVBAR-------------------//\n    const navbar = document.createElement(\"div\");\n\n    navbar.classList.add(\"Navbar\"); \n\n    // Navbar Left elements\n    const navLeft = document.createElement(\"nav\");\n    const navLeft__links = document.createElement(\"ul\");\n    const linkHome_Container = document.createElement(\"li\");\n    const linkHome = document.createElement(\"a\");\n    const linkMenu_Container = document.createElement(\"li\");\n    const linkMenu = document.createElement(\"a\");\n    const linkChef_Container = document.createElement(\"li\");\n    const linkChef= document.createElement(\"a\");\n    // add Classes\n    navLeft.classList.add(\"nav__links\"); \n    navLeft.id = \"nav__left\"; \n    linkHome.innerHTML = \"Home\";\n    linkMenu.innerHTML = \"Menu\";\n    linkChef.innerHTML = \"Chef\";\n\n    // Add links \n    linkHome.href = \"#\";\n    linkMenu.href = \"#\";\n    linkChef.href = \"#\";\n\n    // append elements\n    navLeft.append(navLeft__links);\n    navLeft__links.append(linkHome_Container, linkMenu_Container, linkChef_Container);\n    linkHome_Container.append(linkHome);\n    linkMenu_Container.append(linkMenu);\n    linkChef_Container.append(linkChef);\n\n    // Logo\n    const logo = document.createElement(\"img\");\n    logo.src = \"/src/assets/logo.svg\";\n    logo.alt = \"Kaido Ramen Logo\";\n\n    // Navbar Right Elements\n    const navRight = document.createElement(\"nav\");\n    const navRight__links = document.createElement(\"ul\");\n    const linkReservations_Container = document.createElement(\"li\");\n    const linkReservations = document.createElement(\"a\");\n    const linkLocation_Container = document.createElement(\"li\");\n    const linkLocation = document.createElement(\"a\");\n    \n    // add Classes\n    navRight.classList.add(\"nav__links\"); \n    navRight.id = \"nav__right\"; \n    linkReservations.innerHTML = \"Reservations\";\n    linkLocation.innerHTML = \"Location\";\n\n      // Add links \n      linkReservations.href = \"#\";\n      linkLocation.href = \"#\";\n\n    // append elements\n    navRight.append(navRight__links);\n    navRight__links.append(linkReservations_Container, linkLocation_Container);\n    linkReservations_Container.append(linkReservations);\n    linkLocation_Container.append(linkLocation);\n\n    // Append the big elements to the Navbar\n    navbar.append(navLeft, logo, navRight);\n\n    //-----------MAIN CONTENT-------------------// \n    const mainContent = document.createElement(\"div\");\n    const locationTitle = document.createElement(\"h1\");\n    const ramenImg = document.createElement(\"img\");\n    const scheduleTitle = document.createElement(\"h1\");\n\n    mainContent.id = \"main-content\";\n    locationTitle.innerHTML = \"Eberhardstrasse 47<br> Stuttgart\";\n    ramenImg.src = \"/src/assets/kaido-ramen.jpeg\";\n    ramenImg.alt = \"Ramen Image\";\n    scheduleTitle.innerHTML = \"12:00 to 0:00<br /> Every day\";\n\n    mainContent.append(locationTitle, ramenImg, scheduleTitle);\n\n    //------------------------FOOTER--------------------------//\n    const footer = document.createElement(\"footer\");\n\n    // Footer Navbar\n\n    const footerNav = document.createElement(\"nav\");\n    const footer__links = document.createElement(\"ul\");\n    const footer__links__home = document.createElement(\"li\");\n    const footer__home = document.createElement(\"a\");\n    const footer__links__chef = document.createElement(\"li\");\n    const footer__chef = document.createElement(\"a\");\n    const footer__links__reservations = document.createElement(\"li\");\n    const footer__reservations= document.createElement(\"a\");\n    const footer__links__location = document.createElement(\"li\");\n    const footer__location = document.createElement(\"a\");\n\n    footerNav.id = \"footer__nav\"; \n    footer__home.innerHTML = \"Home\";\n    footer__chef.innerHTML = \"Chef\";\n    footer__reservations.innerHTML = \"Reservations\";\n    footer__location.innerHTML = \"Location\";\n\n      // Add links \n      footer__home.href = \"#\";\n      footer__chef.href = \"#\";\n      footer__reservations.href = \"#\";\n      footer__location.href = \"#\";\n     \n\n    footerNav.append(footer__links);\n    footer__links.append(footer__links__home, footer__links__chef, footer__links__reservations, footer__links__location);\n    footer__links__home.append(footer__home);\n    footer__links__chef.append(footer__chef);\n    footer__links__reservations.append(footer__reservations);\n    footer__links__location.append(footer__location);\n\n    // Final details\n    const number = document.createElement(\"h3\");\n    const poweredBy = document.createElement(\"h5\");\n    const developedBy = document.createElement(\"h5\");\n\n    number.innerHTML = \"+34 659  771 594\";\n    poweredBy.innerHTML = \"Powered by The Odin Project\";\n    developedBy.innerHTML = \"Developed by Julen Diaz\";\n\n    footer.append(footerNav, number, poweredBy, developedBy);\n\n    //--------------------FINAL APPEND------------------//\n    superContainer.append(navbar, mainContent, footer);\n\n    return superContainer;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;