"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_onboarding_register_elements_module_ts"],{

/***/ 3535:
/*!************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/elements-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementsPageRoutingModule": () => (/* binding */ ElementsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _elements_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.page */ 1719);




const routes = [
    {
        path: '',
        component: _elements_page__WEBPACK_IMPORTED_MODULE_0__.ElementsPage
    },
    {
        path: 'phone',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_onboarding_register_phone_phone_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./phone/phone.module */ 7029)).then(m => m.PhonePageModule)
    },
    {
        path: 'pass-reg',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_onboarding_register_pass-reg_pass-reg_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pass-reg/pass-reg.module */ 8778)).then(m => m.PassRegPageModule)
    },
    {
        path: 'prevention',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_onboarding_register_prevention_prevention_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./prevention/prevention.module */ 6742)).then(m => m.PreventionPageModule)
    },
    {
        path: 'info-person',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_onboarding_register_info-person_info-person_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./info-person/info-person.module */ 7963)).then(m => m.InfoPersonPageModule)
    }
];
let ElementsPageRoutingModule = class ElementsPageRoutingModule {
};
ElementsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ElementsPageRoutingModule);



/***/ }),

/***/ 5751:
/*!****************************************************************!*\
  !*** ./src/app/modules/onboarding/register/elements.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementsPageModule": () => (/* binding */ ElementsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _elements_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements-routing.module */ 3535);
/* harmony import */ var _elements_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.page */ 1719);
/* harmony import */ var _modals_techreo_card_techreo_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/techreo-card/techreo-card.component */ 9634);
/* harmony import */ var _modals_ups_ups_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/ups/ups.component */ 201);









let ElementsPageModule = class ElementsPageModule {
};
ElementsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _elements_routing_module__WEBPACK_IMPORTED_MODULE_0__.ElementsPageRoutingModule
        ],
        declarations: [
            _elements_page__WEBPACK_IMPORTED_MODULE_1__.ElementsPage,
            _modals_techreo_card_techreo_card_component__WEBPACK_IMPORTED_MODULE_2__.TechreoCardComponent,
            _modals_ups_ups_component__WEBPACK_IMPORTED_MODULE_3__.UpsComponent
        ],
        providers: [
            _modals_techreo_card_techreo_card_component__WEBPACK_IMPORTED_MODULE_2__.TechreoCardComponent,
            _modals_ups_ups_component__WEBPACK_IMPORTED_MODULE_3__.UpsComponent
        ]
    })
], ElementsPageModule);



/***/ }),

/***/ 1719:
/*!**************************************************************!*\
  !*** ./src/app/modules/onboarding/register/elements.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementsPage": () => (/* binding */ ElementsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _elements_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.page.html?ngResource */ 1204);
/* harmony import */ var _elements_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.page.scss?ngResource */ 1712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ElementsPage = class ElementsPage {
    constructor() { }
    ngOnInit() {
    }
};
ElementsPage.ctorParameters = () => [];
ElementsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-elements',
        template: _elements_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_elements_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ElementsPage);



/***/ }),

/***/ 9634:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/modals/techreo-card/techreo-card.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechreoCardComponent": () => (/* binding */ TechreoCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _techreo_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./techreo-card.component.html?ngResource */ 2060);
/* harmony import */ var _techreo_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./techreo-card.component.scss?ngResource */ 767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TechreoCardComponent = class TechreoCardComponent {
    constructor() { }
    ngOnInit() { }
};
TechreoCardComponent.ctorParameters = () => [];
TechreoCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-techreo-card',
        template: _techreo_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_techreo_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TechreoCardComponent);



/***/ }),

/***/ 201:
/*!*************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/modals/ups/ups.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpsComponent": () => (/* binding */ UpsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ups_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ups.component.html?ngResource */ 2661);
/* harmony import */ var _ups_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ups.component.scss?ngResource */ 2634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);







let UpsComponent = class UpsComponent {
  constructor(modalController, router) {
    this.modalController = modalController;
    this.router = router;
  }

  ngOnInit() {}

  ok() {
    var _this = this;

    return (0,C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.modalController.dismiss();

      _this.router.navigateByUrl('/start/elements/info-person');
    })();
  }

};

UpsComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

UpsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-ups',
  template: _ups_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_ups_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UpsComponent);


/***/ }),

/***/ 1712:
/*!***************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/elements.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbGVtZW50cy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 767:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/modals/techreo-card/techreo-card.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWNocmVvLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 2634:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/modals/ups/ups.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0%;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n.green {\n  font-size: 23px;\n  line-height: 22px;\n  color: #aadb1e;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.padding {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  font-size: 13px;\n  line-height: 22px;\n  color: #472b74;\n}\n\n.mess {\n  border: 2px solid #472b74;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZKOztBQUtFO0VBQ0UscUJBQUE7QUFGSjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFGSjs7QUFJQTtFQUNJLHlCQUFBO0FBREoiLCJmaWxlIjoidXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuLmdyZWVuIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICAgIGNvbG9yOiAjYWFkYjFlO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuLnBhZGRpbmd7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICAgIGNvbG9yOiAjNDcyYjc0O1xyXG59XHJcbi5tZXNzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0NzJiNzQ7XHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */";

/***/ }),

/***/ 1204:
/*!***************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/elements.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>elements</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ }),

/***/ 2060:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/modals/techreo-card/techreo-card.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<p>\n  techreo-card works!\n</p>\n";

/***/ }),

/***/ 2661:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/onboarding/register/modals/ups/ups.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content  >\n\n  <div  id=\"container\" class=\"ion-padding\">\n    <p class=\"green\">¡Ups!</p>\n    <br>\n    <img style=\"width: 25%;\" src=\"assets/svg/dislikeHand.svg\">\n    <p>Revisa la información seleccionada para poder continuar con tu registro</p>\n    <ion-list>\n      <br>\n      <ion-row>\n        <ion-col size=\"12\"class=\"finalButtons\">\n          <ion-button (click)=\"ok()\" type=\"submit\" expand=\"block\" color=\"primary\"  shape=\"round\">\n            Aceptar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_onboarding_register_elements_module_ts.js.map