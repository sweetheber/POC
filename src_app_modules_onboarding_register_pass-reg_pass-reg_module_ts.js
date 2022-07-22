"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_onboarding_register_pass-reg_pass-reg_module_ts"],{

/***/ 8632:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/pass-reg/pass-reg-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassRegPageRoutingModule": () => (/* binding */ PassRegPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pass_reg_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pass-reg.page */ 2717);




const routes = [
    {
        path: '',
        component: _pass_reg_page__WEBPACK_IMPORTED_MODULE_0__.PassRegPage
    }
];
let PassRegPageRoutingModule = class PassRegPageRoutingModule {
};
PassRegPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PassRegPageRoutingModule);



/***/ }),

/***/ 8778:
/*!*************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/pass-reg/pass-reg.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassRegPageModule": () => (/* binding */ PassRegPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pass_reg_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pass-reg-routing.module */ 8632);
/* harmony import */ var _pass_reg_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pass-reg.page */ 2717);







let PassRegPageModule = class PassRegPageModule {
};
PassRegPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pass_reg_routing_module__WEBPACK_IMPORTED_MODULE_0__.PassRegPageRoutingModule
        ],
        declarations: [_pass_reg_page__WEBPACK_IMPORTED_MODULE_1__.PassRegPage]
    })
], PassRegPageModule);



/***/ }),

/***/ 2717:
/*!***********************************************************************!*\
  !*** ./src/app/modules/onboarding/register/pass-reg/pass-reg.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassRegPage": () => (/* binding */ PassRegPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pass_reg_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pass-reg.page.html?ngResource */ 9747);
/* harmony import */ var _pass_reg_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pass-reg.page.scss?ngResource */ 7543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let PassRegPage = class PassRegPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    ok() {
        this.router.navigateByUrl('/start/elements/prevention');
    }
    contact() {
        this.router.navigateByUrl('/start/login');
    }
};
PassRegPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PassRegPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-pass-reg',
        template: _pass_reg_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pass_reg_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PassRegPage);



/***/ }),

/***/ 7543:
/*!************************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/pass-reg/pass-reg.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0%;\n  right: 0;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #c7c7c7;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.padding {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.border {\n  border: solid 1px rgba(223, 223, 223, 0.231372549);\n}\n\n.mess {\n  border: 2px solid #8b8b8b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3MtcmVnLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZKOztBQUtFO0VBQ0UscUJBQUE7QUFGSjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFNQTtFQUNFLGtEQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGIiwiZmlsZSI6InBhc3MtcmVnLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgICBjb2xvcjogI2M3YzdjNztcclxuICBcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbi5wYWRkaW5ne1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcbiRtYWluLWNvbG9yLXBhbC1uZWdvY2lvOiAjZGZkZmRmM2I7XHJcblxyXG4uYm9yZGVye1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICRtYWluLWNvbG9yLXBhbC1uZWdvY2lvO1xyXG59XHJcblxyXG4ubWVzcyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzhiOGI4YjtcclxufSJdfQ== */";

/***/ }),

/***/ 9747:
/*!************************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/pass-reg/pass-reg.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content color=\"primary\">\n  <div  id=\"container\">\n    <img class=\"rotar\" id=\"center\" src=\"assets/images/Techreo-logo-blanco.png\">\n    <p><strong>Hola</strong></p>\n    <p>Registrate y disfruta  </p>\n    <p>de muchos beneficios</p>\n\n    <div class=\"ion-padding\">\n      <ion-list>\n        <ion-item  lines=\"none\"  color=\"primary mess\">\n          <ion-label color=\"light\" position=\"floating\">Email</ion-label>\n          <ion-input  type=\"text\" color=\"light\" inputmode=\"text\" placeholder=\"Correo electrónico\"></ion-input>\n          <ion-icon name=\"mail\" color=\"light\" slot=\"end\" style=\"padding-top: 10px;\"></ion-icon>\n        </ion-item>\n        <br>\n        <ion-item  lines=\"none\"  color=\"primary mess\">\n          <ion-label color=\"light\" position=\"floating\">Contraseña</ion-label>\n          <ion-input  type=\"password\" color=\"light\" inputmode=\"text\" placeholder=\"Password\"></ion-input>\n          <ion-icon name=\"eye\" color=\"light\" slot=\"end\" style=\"padding-top: 10px;\"></ion-icon>\n        </ion-item>\n        <br>\n        <ion-item  lines=\"none\"  color=\"primary mess\">\n          <ion-label color=\"light\" position=\"floating\">Repetir Contraseña</ion-label>\n          <ion-input  type=\"password\" color=\"light\" inputmode=\"text\" placeholder=\"Password\"></ion-input>\n          <ion-icon name=\"eye\" color=\"light\" slot=\"end\" style=\"padding-top: 10px;\"></ion-icon>\n        </ion-item>\n      </ion-list>\n      <br>\n      <hr style=\" background-color: #9ec728;\">\n      <br>\n      <ion-item  lines=\"none\"  color=\"primary mess\">\n        <ion-label color=\"light\" position=\"floating\">Coloca su teléfono</ion-label>\n        <ion-input  type=\"number\" color=\"light\" inputmode=\"text\" placeholder=\"(55) 1234 5678\"></ion-input>\n        <ion-icon name=\"call\" color=\"light\" slot=\"end\" style=\"padding-top: 10px;\"></ion-icon>\n      </ion-item>\n      <br>\n      <ion-row>\n        <ion-col class=\"finalButtons\">\n          <ion-button  (click)=\"ok()\" type=\"submit\" expand=\"block\" color=\"warning\"  shape=\"round\">\n            Entrar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <br>\n      <p>Ya tengo Cuenta  | <small   class=\"olvido-contrasena\" (click)=\"contact()\"  style=\"color: #9ec728; font-size: 15px;\">Login</small> </p>\n      <br>\n    </div>\n    \n  </div>\n</ion-content>\n\n<ion-footer>\n   <div style=\"height: 7px; background-color: #9ec728;\"></div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_onboarding_register_pass-reg_pass-reg_module_ts.js.map