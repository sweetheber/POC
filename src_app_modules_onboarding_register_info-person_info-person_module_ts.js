"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_onboarding_register_info-person_info-person_module_ts"],{

/***/ 3993:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/info-person/info-person-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPersonPageRoutingModule": () => (/* binding */ InfoPersonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _info_person_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-person.page */ 2728);




const routes = [
    {
        path: '',
        component: _info_person_page__WEBPACK_IMPORTED_MODULE_0__.InfoPersonPage
    }
];
let InfoPersonPageRoutingModule = class InfoPersonPageRoutingModule {
};
InfoPersonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InfoPersonPageRoutingModule);



/***/ }),

/***/ 7963:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/info-person/info-person.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPersonPageModule": () => (/* binding */ InfoPersonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _info_person_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-person-routing.module */ 3993);
/* harmony import */ var _info_person_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-person.page */ 2728);







let InfoPersonPageModule = class InfoPersonPageModule {
};
InfoPersonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _info_person_routing_module__WEBPACK_IMPORTED_MODULE_0__.InfoPersonPageRoutingModule
        ],
        declarations: [_info_person_page__WEBPACK_IMPORTED_MODULE_1__.InfoPersonPage]
    })
], InfoPersonPageModule);



/***/ }),

/***/ 2728:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/info-person/info-person.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPersonPage": () => (/* binding */ InfoPersonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _info_person_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-person.page.html?ngResource */ 7301);
/* harmony import */ var _info_person_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-person.page.scss?ngResource */ 456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let InfoPersonPage = class InfoPersonPage {
    constructor() {
        this.t = true;
    }
    ngOnInit() {
    }
    ok() {
    }
    back() {
    }
    onClick() {
        this.t = false;
    }
};
InfoPersonPage.ctorParameters = () => [];
InfoPersonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-info-person',
        template: _info_person_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_info_person_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InfoPersonPage);



/***/ }),

/***/ 456:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/info-person/info-person.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".contact {\n  height: 25px;\n  margin-top: -20px;\n  background-color: #ffffff;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0%;\n  right: 0;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container {\n  font-size: 16px;\n  line-height: 22px;\n  color: #c7c7c7;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.padding {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.green {\n  font-size: 24px;\n  line-height: 12px;\n  text-align: center;\n  color: #aadb1e;\n}\n\n.log {\n  font-size: 15px;\n  color: #472b74;\n  margin-top: -7px;\n}\n\nion-header::after {\n  background-image: none;\n}\n\n.mess {\n  border: 2px solid rgba(71, 43, 116, 0.631372549);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tcGVyc29uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRko7O0FBS0U7RUFDRSxxQkFBQTtBQUZKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRko7O0FBSUE7RUFDSSxzQkFBQTtBQURKOztBQUtBO0VBQ0ksZ0RBQUE7QUFGSiIsImZpbGUiOiJpbmZvLXBlcnNvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdHtcclxuICAgIGhlaWdodDogMjVweDsgXHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyICB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgICBjb2xvcjogI2M3YzdjNztcclxuICBcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbi5wYWRkaW5ne1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZ3JlZW57XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjYWFkYjFlO1xyXG59XHJcblxyXG4ubG9ne1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM0NzJiNzQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG59XHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgICBcclxuLm1lc3Mge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzQ3MmI3NGExO30iXX0= */";

/***/ }),

/***/ 7301:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/info-person/info-person.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <div style=\"height: 40px; background-color: #9ec728;\"></div>\n  <div class=\"contact\"></div>\n</ion-header>\n\n<ion-content>\n  <div  style=\"float: left; padding: 0px; font-size: 30px; \">\n    <ion-icon (click)=\"back()\" style=\"cursor: pointer;\" name=\"arrow-back\"></ion-icon>\n  </div>\n  <div   class=\"ion-padding\">\n  <br>\n    <ion-list>\n      <ion-item  lines=\"none\"  color=\" mess\">\n        <ion-label color=\"dark\" position=\"floating\">Nombres</ion-label>\n        <ion-input   color=\"dark\" inputmode=\"text\" placeholder=\"Coloca tus nombres \"></ion-input>\n        <ion-icon name=\"person\" color=\"dark\" slot=\"end\" style=\"padding-top: 10px;\"></ion-icon>\n      </ion-item>\n      <br>\n      <ion-item  lines=\"none\"  color=\" mess\">\n        <ion-label color=\"dark\" position=\"floating\">Apellido Paterno</ion-label>\n        <ion-input   color=\"dark\" inputmode=\"text\" placeholder=\"Coloca tu Apellido Paterno \"></ion-input>\n        <ion-icon name=\"person\" color=\"dark\" slot=\"end\" style=\"padding-top: 10px;\"></ion-icon>\n      </ion-item>\n      <br>\n      <ion-item  lines=\"none\"  color=\" mess\">\n        <ion-label color=\"dark\" position=\"floating\">Apellido Materno</ion-label>\n        <ion-input   color=\"dark\" inputmode=\"text\" placeholder=\"Coloca tu Apellido Materno \"></ion-input>\n        <ion-icon name=\"person\" color=\"dark\" slot=\"end\" style=\"padding-top: 10px;\"></ion-icon>\n      </ion-item>\n      <br>\n      <ion-item  lines=\"none\"  color=\" mess\">\n        <ion-label color=\"dark\" position=\"floating\">C.U.R.P.</ion-label>\n        <ion-input   color=\"dark\" inputmode=\"text\" placeholder=\"Coloca tu CURP \"></ion-input>\n        <ion-icon name=\"person\" color=\"dark\" slot=\"end\" style=\"padding-top: 10px;\"></ion-icon>\n      </ion-item>\n      <br>\n      <ion-item  lines=\"none\"  color=\" mess\">\n        <ion-label color=\"dark\" position=\"floating\">R.F.C.</ion-label>\n        <ion-input   color=\"dark\" inputmode=\"text\" placeholder=\"Coloca tu RFC \"></ion-input>\n        <ion-icon name=\"person\" color=\"dark\" slot=\"end\" style=\"padding-top: 10px;\"></ion-icon>\n      </ion-item>\n      <br>\n      <ion-item  lines=\"none\"  color=\" mess\">\n        <ion-label color=\"dark\" position=\"floating\">Folio de Identificación</ion-label>\n        <ion-input   color=\"dark\" inputmode=\"text\" placeholder=\"Coloca tu Folio de Identificación \"></ion-input>\n        <ion-icon name=\"person\" color=\"dark\" slot=\"end\" style=\"padding-top: 10px;\"></ion-icon>\n      </ion-item>\n      <br>\n\n      <ion-item  *ngIf=\"t\"  lines=\"none\"  color=\" mess\">\n        <ion-label color=\"dark\" position=\"floating\">Fecha de nacimiento</ion-label>\n        <ion-input (click)=\"onClick()\"  color=\"dark\" inputmode=\"text\" placeholder=\"Fecha de nacimiento\"></ion-input>\n        <ion-icon name=\"person\" color=\"dark\" slot=\"end\" style=\"padding-top: 10px;\"></ion-icon>\n      </ion-item>\n\n      <ion-item *ngIf=\"!t\" class=\"mess\">\n        <ion-label>Date</ion-label>\n        <ion-datetime displayFormat=\"DD/MM/YYYY  h:mm a\" ></ion-datetime>\n      </ion-item>\n\n      <br>\n      <ion-item  lines=\"none\"  color=\" mess\">\n        <ion-label>País de Nacimiento</ion-label>\n        <ion-select>\n          <ion-select-option value=\"brown\">Mexico</ion-select-option>\n          <ion-select-option value=\"blonde\">Panama</ion-select-option>\n          <ion-select-option value=\"black\">Alemania</ion-select-option>\n          <ion-select-option value=\"red\">Polonia</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <br>\n      <ion-item  lines=\"none\"  color=\" mess\">\n        <ion-label>Estado Civil</ion-label>\n        <ion-select>\n          <ion-select-option value=\"brown\">Casado(a)</ion-select-option>\n          <ion-select-option value=\"blonde\">Soltero(a)</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item >\n            <p \n              style=\"font-size: 10px;\">\n                Masculin</p>\n            <ion-checkbox slot=\"end\" color=\"warning\" checked=\"true\"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item >\n            <ion-checkbox slot=\"start\" color=\"warning\" checked=\"true\"></ion-checkbox>\n            <p \n              style=\"font-size: 10px;\">\n                Femenino.</p>\n            \n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n    </ion-list>\n    \n    <ion-list>\n      <br>\n      <ion-row>\n        <ion-col size=\"12\"class=\"finalButtons\">\n          <ion-button (click)=\"ok()\" type=\"submit\" expand=\"block\" color=\"warning\"  shape=\"round\">\n            Continuar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div style=\"height: 7px; background-color: #9ec728;\"></div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_onboarding_register_info-person_info-person_module_ts.js.map