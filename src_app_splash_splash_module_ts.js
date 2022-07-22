"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_splash_splash_module_ts"],{

/***/ 3523:
/*!*************************************************!*\
  !*** ./src/app/splash/splash-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageRoutingModule": () => (/* binding */ SplashPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.page */ 4399);




const routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_0__.SplashPage
    }
];
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SplashPageRoutingModule);



/***/ }),

/***/ 9623:
/*!*****************************************!*\
  !*** ./src/app/splash/splash.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageModule": () => (/* binding */ SplashPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash-routing.module */ 3523);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page */ 4399);







let SplashPageModule = class SplashPageModule {
};
SplashPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashPageRoutingModule
        ],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_1__.SplashPage]
    })
], SplashPageModule);



/***/ }),

/***/ 4399:
/*!***************************************!*\
  !*** ./src/app/splash/splash.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPage": () => (/* binding */ SplashPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _splash_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.page.html?ngResource */ 3610);
/* harmony import */ var _splash_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page.scss?ngResource */ 9898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let SplashPage = class SplashPage {
    constructor(router) {
        this.router = router;
        setTimeout(() => {
            this.router.navigateByUrl('start/login');
        }, 1500);
    }
    ngOnInit() {
    }
};
SplashPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SplashPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-splash',
        template: _splash_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_splash_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SplashPage);



/***/ }),

/***/ 9898:
/*!****************************************************!*\
  !*** ./src/app/splash/splash.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 35%;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container #center {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n@keyframes slide-in-fwd-center {\n  0% {\n    transform: translateZ(-1400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateZ(0);\n    opacity: 1;\n  }\n}\n\n.rotar {\n  animation: slide-in-fwd-center 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGSjs7QUFLRTtFQUNFLHFCQUFBO0FBRko7O0FBSWtNO0VBQStCO0lBQXlDLDhCQUFBO0lBQThCLFVBQUE7RUFldFM7RUFmZ1Q7SUFBcUMsd0JBQUE7SUFBd0IsVUFBQTtFQW9CN1c7QUFDRjs7QUFwQkU7RUFDOEUsMkVBQUE7QUF1QmhGIiwiZmlsZSI6InNwbGFzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDM1JTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyICNjZW50ZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi1md2QtY2VudGVyezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooLTE0MDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooLTE0MDBweCk7b3BhY2l0eTowfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc2xpZGUtaW4tZndkLWNlbnRlcnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKC0xNDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKC0xNDAwcHgpO29wYWNpdHk6MH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7b3BhY2l0eToxfX1cclxuICAucm90YXJ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpzbGlkZS1pbi1md2QtY2VudGVyIDNzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIGJvdGg7YW5pbWF0aW9uOnNsaWRlLWluLWZ3ZC1jZW50ZXIgM3MgY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCkgYm90aFxyXG59Il19 */";

/***/ }),

/***/ 3610:
/*!****************************************************!*\
  !*** ./src/app/splash/splash.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content color=\"primary\">\n    <div id=\"container\">\n        <ion-img class=\"rotar\" id=\"center\" src=\"https://play-lh.googleusercontent.com/Jya5Y0OAJx2OK12AEuAp6dB_NvDB-tRmzb0hKl-pSAuhuG0pKNyWOQzL_yCjRdy51eI\" style=\"width: 50%\"></ion-img>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_splash_splash_module_ts.js.map