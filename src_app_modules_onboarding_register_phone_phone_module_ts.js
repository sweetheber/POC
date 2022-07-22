"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_onboarding_register_phone_phone_module_ts"],{

/***/ 5953:
/*!***************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/phone/phone-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhonePageRoutingModule": () => (/* binding */ PhonePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _phone_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.page */ 2470);




const routes = [
    {
        path: '',
        component: _phone_page__WEBPACK_IMPORTED_MODULE_0__.PhonePage
    }
];
let PhonePageRoutingModule = class PhonePageRoutingModule {
};
PhonePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PhonePageRoutingModule);



/***/ }),

/***/ 7029:
/*!*******************************************************************!*\
  !*** ./src/app/modules/onboarding/register/phone/phone.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhonePageModule": () => (/* binding */ PhonePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _phone_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-routing.module */ 5953);
/* harmony import */ var _phone_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone.page */ 2470);







let PhonePageModule = class PhonePageModule {
};
PhonePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _phone_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhonePageRoutingModule
        ],
        declarations: [_phone_page__WEBPACK_IMPORTED_MODULE_1__.PhonePage]
    })
], PhonePageModule);



/***/ }),

/***/ 2470:
/*!*****************************************************************!*\
  !*** ./src/app/modules/onboarding/register/phone/phone.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhonePage": () => (/* binding */ PhonePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _phone_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.page.html?ngResource */ 2454);
/* harmony import */ var _phone_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone.page.scss?ngResource */ 2471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let PhonePage = class PhonePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    contact() {
        this.router.navigateByUrl('/start/login');
    }
    ok() {
        this.router.navigateByUrl('/start/elements/pass-reg');
    }
};
PhonePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PhonePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-phone',
        template: _phone_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_phone_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PhonePage);



/***/ }),

/***/ 2471:
/*!******************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/phone/phone.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0%;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #c7c7c7;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.padding {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.border {\n  border: solid 1px rgba(223, 223, 223, 0.231372549);\n}\n\n.mess {\n  border: 2px solid #8b8b8b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZKOztBQUtFO0VBQ0UscUJBQUE7QUFGSjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFNQTtFQUNFLGtEQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGIiwiZmlsZSI6InBob25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICAgIGNvbG9yOiAjYzdjN2M3O1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuLnBhZGRpbmd7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuJG1haW4tY29sb3ItcGFsLW5lZ29jaW86ICNkZmRmZGYzYjtcclxuXHJcbi5ib3JkZXJ7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggJG1haW4tY29sb3ItcGFsLW5lZ29jaW87XHJcbn1cclxuXHJcbi5tZXNzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjOGI4YjhiO1xyXG59Il19 */";

/***/ }),

/***/ 2454:
/*!******************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/phone/phone.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content color=\"primary\">\n  <div  id=\"container\">\n    <img class=\"rotar\" id=\"center\" src=\"assets/images/Techreo-logo-blanco.png\">\n    <p><strong>Hola</strong></p>\n    <p>Registrate y disfruta  </p>\n    <p>de muchos beneficios</p>\n\n    <div class=\"ion-padding\">\n      <ion-list>\n        <ion-item  lines=\"none\"  color=\"primary mess\">\n          <ion-label color=\"light\" position=\"floating\">Teléfono</ion-label>\n          <ion-input  type=\"number\" color=\"light\" inputmode=\"text\" placeholder=\"(55) 1234 5678\"></ion-input>\n          <ion-icon name=\"call\" color=\"light\" slot=\"end\" style=\"padding-top: 10px;\"></ion-icon>\n        </ion-item>\n        <br>\n        <ion-item  lines=\"none\"  color=\"primary mess\">\n          <ion-label color=\"light\" position=\"floating\">Repetir Teléfono</ion-label>\n          <ion-input  type=\"number\" color=\"light\" inputmode=\"text\" placeholder=\"(55) 1234 5678\"></ion-input>\n          <ion-icon name=\"call\" color=\"light\" slot=\"end\" style=\"padding-top: 10px;\"></ion-icon>\n        </ion-item>\n      </ion-list>\n\n      <ion-row>\n        <ion-col class=\"finalButtons\">\n          <ion-button (click)=\"ok()\" type=\"submit\" expand=\"block\" color=\"warning\"  shape=\"round\">\n            Entrar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <br>\n      <p>Ya tengo Cuenta  | <small   class=\"olvido-contrasena\" (click)=\"contact()\"  style=\"color: #9ec728; font-size: 15px;\">Login</small> </p>\n      <br>\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n   <div style=\"height: 7px; background-color: #9ec728;\"></div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_onboarding_register_phone_phone_module_ts.js.map