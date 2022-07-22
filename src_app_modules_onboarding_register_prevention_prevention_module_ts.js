"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_onboarding_register_prevention_prevention_module_ts"],{

/***/ 7433:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/prevention/prevention-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreventionPageRoutingModule": () => (/* binding */ PreventionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _prevention_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prevention.page */ 6700);




const routes = [
    {
        path: '',
        component: _prevention_page__WEBPACK_IMPORTED_MODULE_0__.PreventionPage
    }
];
let PreventionPageRoutingModule = class PreventionPageRoutingModule {
};
PreventionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PreventionPageRoutingModule);



/***/ }),

/***/ 6742:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/prevention/prevention.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreventionPageModule": () => (/* binding */ PreventionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _prevention_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prevention-routing.module */ 7433);
/* harmony import */ var _prevention_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prevention.page */ 6700);







let PreventionPageModule = class PreventionPageModule {
};
PreventionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _prevention_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreventionPageRoutingModule
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA
        ],
        declarations: [_prevention_page__WEBPACK_IMPORTED_MODULE_1__.PreventionPage],
    })
], PreventionPageModule);



/***/ }),

/***/ 6700:
/*!***************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/prevention/prevention.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreventionPage": () => (/* binding */ PreventionPage)
/* harmony export */ });
/* harmony import */ var C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _prevention_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prevention.page.html?ngResource */ 4077);
/* harmony import */ var _prevention_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prevention.page.scss?ngResource */ 2186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modals_ups_ups_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/ups/ups.component */ 201);








let PreventionPage = class PreventionPage {
  constructor(router, modalController) {
    this.router = router;
    this.modalController = modalController;
    this.guidSolicitud = 'dklj12jlk2j3123kljasd';
    this.guidCliente = '';
  }

  ngOnInit() {}

  ok() {
    var _this = this;

    return (0,C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _modals_ups_ups_component__WEBPACK_IMPORTED_MODULE_3__.UpsComponent,
        animated: true,
        mode: "ios",
        backdropDismiss: true,
        cssClass: "gps-modal"
      });
      modal.present();
    })();
  }

  back() {
    this.router.navigateByUrl('/start/elements/pass-reg');
  }

};

PreventionPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];

PreventionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-prevention',
  template: _prevention_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_prevention_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PreventionPage);


/***/ }),

/***/ 2186:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/prevention/prevention.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ".contact {\n  height: 25px;\n  margin-top: -20px;\n  background-color: #ffffff;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0%;\n  right: 0;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container {\n  font-size: 16px;\n  line-height: 22px;\n  color: #c7c7c7;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.padding {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.green {\n  font-size: 24px;\n  line-height: 12px;\n  text-align: center;\n  color: #aadb1e;\n}\n\n.log {\n  font-size: 15px;\n  color: #472b74;\n  margin-top: -7px;\n}\n\nion-header::after {\n  background-image: none;\n}\n\n.mess {\n  border: 2px solid rgba(71, 43, 116, 0.631372549);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZlbnRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGSjs7QUFLRTtFQUNFLHFCQUFBO0FBRko7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFJQTtFQUNJLHNCQUFBO0FBREo7O0FBS0E7RUFDSSxnREFBQTtBQUZKIiwiZmlsZSI6InByZXZlbnRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3R7XHJcbiAgICBoZWlnaHQ6IDI1cHg7IFxyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gICAgY29sb3I6ICNjN2M3Yzc7XHJcbiAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4ucGFkZGluZ3tcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmdyZWVue1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2FhZGIxZTtcclxufVxyXG5cclxuLmxvZ3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjNDcyYjc0O1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxufVxyXG5pb24taGVhZGVyOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICAgXHJcbi5tZXNzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0NzJiNzRhMTt9Il19 */";

/***/ }),

/***/ 4077:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/prevention/prevention.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <div style=\"height: 40px; background-color: #9ec728;\"></div>\n  <div class=\"contact\"></div>\n</ion-header>\n\n<ion-content>\n  <div  style=\"float: left; padding: 0px; font-size: 30px; \">\n    <ion-icon (click)=\"back()\" style=\"cursor: pointer;\" name=\"arrow-back\"></ion-icon>\n  </div>\n  <div   class=\"ion-padding\">\n    <p class=\"green\">Prevención</p>\n    <p class=\"green\"> y lavado de dinero</p>\n    <p></p>\n    <ion-list>\n      <ion-item >\n        <p \n          style=\"font-size: 10px;\">\n            Actuó por cuenta propia y el dinero que reciba en esta cuenta es mío y no de alguna otra persona.</p>\n        <ion-checkbox slot=\"end\" color=\"warning\" checked=\"true\"></ion-checkbox>\n      </ion-item>\n      <ion-item >\n        <p \n        style=\"font-size: 10px;\">\n          Declaro que el dinero que yo disponga y que genere esta cuenta proviene y será usado en fuentes legales.</p>\n        <ion-checkbox slot=\"end\" color=\"warning\" checked=\"true\"></ion-checkbox>\n      </ion-item>\n      \n      <ion-item >\n        <p \n        style=\"font-size: 10px;\">\n        Solamente yo podré disponer del dinero y beneficios que genere este contrato.</p>\n        <ion-checkbox slot=\"end\" color=\"warning\" checked=\"true\"></ion-checkbox>\n      </ion-item>\n      \n      <ion-item >\n        <p \n        style=\"font-size: 10px;\">\n        No he ocupado un cargo público actualmente, ni en los últimos 12 meses.</p>\n        <ion-checkbox slot=\"end\" color=\"warning\" checked=\"true\"></ion-checkbox>\n      </ion-item>\n      <ion-item >\n        <p \n        style=\"font-size: 10px;\">\n        No soy familiar de alguien que ocupe o haya ocupado, en los últimos 12 meses algún cargo público.</p>\n        <ion-checkbox slot=\"end\" color=\"warning\" checked=\"true\"></ion-checkbox>\n      </ion-item>\n      <ion-item >\n        <p \n        style=\"font-size: 10px;\">\n        No tengo residencia en el extranjero, no soy accionista de alguna empresa extranjera y no pago impuestos en ningún otro país.</p>\n        <ion-checkbox slot=\"end\" color=\"warning\" checked=\"true\"></ion-checkbox>\n      </ion-item>\n      <ion-item >\n        <p \n        style=\"font-size: 10px;\">\n        'Confirmo que todos mis datos registrados son correctos y actuales, autorizo su verificación.</p>\n        <ion-checkbox slot=\"end\" color=\"warning\" checked=\"true\"></ion-checkbox>\n      </ion-item>\n    \n      <br>\n      <hr style=\" background-color: #472b74;\">\n      <br>\n      <ion-item  lines=\"none\"  color=\" mess\">\n        <ion-label>¿Cuál es su ocupación?</ion-label>\n        <ion-select>\n          <ion-select-option value=\"brown\">Plomero</ion-select-option>\n          <ion-select-option value=\"blonde\">Ingeniero</ion-select-option>\n          <ion-select-option value=\"black\">Licenciado</ion-select-option>\n          <ion-select-option value=\"red\">Programador</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <br>\n      <ion-item  lines=\"none\"  color=\" mess\">\n        <ion-label color=\"dark\" position=\"floating\"> ¿Cuál es el monto de efectivo estimado que operará en esta cuenta?</ion-label>\n        <ion-input  type=\"number\" color=\"dark\" inputmode=\"text\" placeholder=\"Numeros\"></ion-input>\n      </ion-item>\n    </ion-list>\n    \n    <ion-list>\n      <br>\n      <ion-row>\n        <ion-col size=\"12\"class=\"finalButtons\">\n          <ion-button (click)=\"ok()\" type=\"submit\" expand=\"block\" color=\"warning\"  shape=\"round\">\n            Continuar\n          </ion-button>\n          <br>\n          <div style=\"text-align: center;\">\n          <mati-button id=\"matiButton\" clientid=\"5e710db1ceabce001b0b4fb1\" flowId=\"5e9576daac2c70001ca9f7ba\"\n            metadata='{\"guidSolicitud\": \"{{ guidSolicitud }}\", \"guidCliente\": \"{{ guidCliente }}\"}'>\n          </mati-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div style=\"height: 7px; background-color: #9ec728;\"></div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_onboarding_register_prevention_prevention_module_ts.js.map