"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_onboarding_start_module_ts"],{

/***/ 3975:
/*!************************************************************************!*\
  !*** ./src/app/modules/onboarding/modals/contact/contact.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component.html?ngResource */ 6546);
/* harmony import */ var _contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component.scss?ngResource */ 4436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let ContactComponent = class ContactComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }

  ngOnInit() {}

  back() {
    var _this = this;

    return (0,C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.modalController.dismiss();
    })();
  }

  send() {}

};

ContactComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
}];

ContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-contact',
  template: _contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ContactComponent);


/***/ }),

/***/ 4417:
/*!****************************************************************!*\
  !*** ./src/app/modules/onboarding/modals/gps/gps.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GpsComponent": () => (/* binding */ GpsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _gps_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gps.component.html?ngResource */ 5822);
/* harmony import */ var _gps_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gps.component.scss?ngResource */ 1999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);







let GpsComponent = class GpsComponent {
  constructor(modalController, geolocation) {
    this.modalController = modalController;
    this.geolocation = geolocation;
  }

  ngOnInit() {}

  apecept() {
    var _this = this;

    this.geolocation.getCurrentPosition().then( /*#__PURE__*/function () {
      var _ref = (0,C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
        // resp.coords.latitude
        // resp.coords.longitude
        let long = resp.coords.longitude.toString();
        localStorage.setItem('longitude', long);
        console.log(resp.coords.longitude);
        setTimeout( /*#__PURE__*/(0,C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this.modalController.dismiss();
        }), 1000);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).catch(error => {
      console.log('Error getting location', error);
    });
  }

  cancel() {
    var _this2 = this;

    return (0,C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.modalController.dismiss();
    })();
  }

};

GpsComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}, {
  type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation
}];

GpsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-gps',
  template: _gps_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_gps_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], GpsComponent);


/***/ }),

/***/ 1255:
/*!**************************************************************************!*\
  !*** ./src/app/modules/onboarding/modals/password/password.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordComponent": () => (/* binding */ PasswordComponent)
/* harmony export */ });
/* harmony import */ var C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.component.html?ngResource */ 342);
/* harmony import */ var _password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password.component.scss?ngResource */ 6065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let PasswordComponent = class PasswordComponent {
  constructor(modalController) {
    this.modalController = modalController;
    this.step = false;
  }

  ngOnInit() {}

  cancel() {
    var _this = this;

    return (0,C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.modalController.dismiss();
    })();
  }

  send() {
    this.step = false;
  }

};

PasswordComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
}];

PasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-password',
  template: _password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PasswordComponent);


/***/ }),

/***/ 5252:
/*!**************************************************************************!*\
  !*** ./src/app/modules/onboarding/modals/register/register.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.html?ngResource */ 4204);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.scss?ngResource */ 8715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let RegisterComponent = class RegisterComponent {
  constructor(router, modalController) {
    this.router = router;
    this.modalController = modalController;
  }

  ngOnInit() {}

  apecept() {
    var _this = this;

    return (0,C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.modalController.dismiss();

      _this.router.navigateByUrl('/start/elements/phone');
    })();
  }

};

RegisterComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-register',
  template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegisterComponent);


/***/ }),

/***/ 8427:
/*!************************************************************!*\
  !*** ./src/app/modules/onboarding/start-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageRoutingModule": () => (/* binding */ StartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.page */ 6302);




const routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_0__.StartPage
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_onboarding_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 5549)).then(m => m.LoginPageModule)
    },
    {
        path: 'elements',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_onboarding_register_elements_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./register/elements.module */ 5751)).then(m => m.ElementsPageModule)
    }
];
let StartPageRoutingModule = class StartPageRoutingModule {
};
StartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StartPageRoutingModule);



/***/ }),

/***/ 846:
/*!****************************************************!*\
  !*** ./src/app/modules/onboarding/start.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageModule": () => (/* binding */ StartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-routing.module */ 8427);
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.page */ 6302);
/* harmony import */ var _modals_password_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/password/password.component */ 1255);
/* harmony import */ var _modals_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/contact/contact.component */ 3975);
/* harmony import */ var _modals_gps_gps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/gps/gps.component */ 4417);
/* harmony import */ var _modals_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/register/register.component */ 5252);











let StartPageModule = class StartPageModule {
};
StartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _start_routing_module__WEBPACK_IMPORTED_MODULE_0__.StartPageRoutingModule
        ],
        declarations: [
            _start_page__WEBPACK_IMPORTED_MODULE_1__.StartPage,
            _modals_password_password_component__WEBPACK_IMPORTED_MODULE_2__.PasswordComponent,
            _modals_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent,
            _modals_gps_gps_component__WEBPACK_IMPORTED_MODULE_4__.GpsComponent,
            _modals_register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent
        ],
        providers: [
            _modals_password_password_component__WEBPACK_IMPORTED_MODULE_2__.PasswordComponent,
            _modals_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent,
            _modals_gps_gps_component__WEBPACK_IMPORTED_MODULE_4__.GpsComponent,
            _modals_register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent
        ]
    })
], StartPageModule);



/***/ }),

/***/ 6302:
/*!**************************************************!*\
  !*** ./src/app/modules/onboarding/start.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPage": () => (/* binding */ StartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _start_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.page.html?ngResource */ 5004);
/* harmony import */ var _start_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.page.scss?ngResource */ 6250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let StartPage = class StartPage {
    constructor() { }
    ngOnInit() {
    }
};
StartPage.ctorParameters = () => [];
StartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-start',
        template: _start_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_start_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StartPage);



/***/ }),

/***/ 4436:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/onboarding/modals/contact/contact.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".contact {\n  height: 25px;\n  margin-top: -20px;\n  background-color: #ffffff;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0%;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container {\n  font-size: 16px;\n  line-height: 22px;\n  color: #c7c7c7;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.padding {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.green {\n  font-size: 24px;\n  line-height: 22px;\n  color: #aadb1e;\n}\n\n.log {\n  font-size: 15px;\n  color: #472b74;\n  margin-top: -7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZKOztBQUtFO0VBQ0UscUJBQUE7QUFGSjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFISiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3R7XHJcbiAgICBoZWlnaHQ6IDI1cHg7IFxyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyICB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgICBjb2xvcjogI2M3YzdjNztcclxuICBcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbi5wYWRkaW5ne1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZ3JlZW57XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgICBjb2xvcjogI2FhZGIxZTtcclxufVxyXG5cclxuLmxvZ3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjNDcyYjc0O1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxufSJdfQ== */";

/***/ }),

/***/ 1999:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/onboarding/modals/gps/gps.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0%;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 17px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #424242;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZKOztBQUtFO0VBQ0UscUJBQUE7QUFGSiIsImZpbGUiOiJncHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgICBjb2xvcjogIzQyNDI0MjtcclxuICBcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9Il19 */";

/***/ }),

/***/ 6065:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/onboarding/modals/password/password.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0%;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n.green {\n  font-size: 23px;\n  line-height: 22px;\n  color: #aadb1e;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.padding {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\np {\n  font-size: 13px;\n  line-height: 22px;\n  color: #472b74;\n}\n\n.mess {\n  border: 2px solid #472b74;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRko7O0FBS0U7RUFDRSxxQkFBQTtBQUZKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQUZKOztBQUlBO0VBQ0kseUJBQUE7QUFESiIsImZpbGUiOiJwYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbi5ncmVlbiB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgICBjb2xvcjogI2FhZGIxZTtcclxuICBcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbi5wYWRkaW5ne1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgICBjb2xvcjogIzQ3MmI3NDtcclxufVxyXG4ubWVzcyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDcyYjc0O1xyXG4gIH1cclxuICBcclxuICBcclxuICAiXX0= */";

/***/ }),

/***/ 8715:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/onboarding/modals/register/register.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0%;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 17px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 13px;\n  line-height: 22px;\n  color: #424242;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRko7O0FBS0U7RUFDRSxxQkFBQTtBQUZKIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gICAgY29sb3I6ICM0MjQyNDI7XHJcbiAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 6250:
/*!***************************************************************!*\
  !*** ./src/app/modules/onboarding/start.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6546:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/onboarding/modals/contact/contact.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <div style=\"height: 40px; background-color: #9ec728;\"></div>\n    <div class=\"contact\"></div>\n</ion-header>\n\n<ion-content>\n    <div style=\"float: left; padding: 5px; font-size: 30px; \">\n        <ion-icon (click)=\"back()\" style=\"cursor: pointer;\" name=\"close-outline\"></ion-icon>\n    </div>\n    <br><br>\n    <div id=\"container\" class=\"ion-padding\">\n        <br>\n        <p class=\"green\">Olvidé la contraseña</p>\n        <img style=\"width: 50px;margin-bottom: 5px;\" src=\"http://assets.stickpng.com/thumbs/5a4525b2546ddca7e1fcbc82.png\" alt=\"\">\n        <p class=\"log\">Teléfono</p>\n        <p class=\"log\">800 323 4736</p>\n        <img style=\"width: 50px; margin-bottom: 10px; margin-top: 10px\" src=\"https://www.pngmart.com/files/1/Phone-PNG-File.png\" alt=\"\">\n        <p class=\"log\">55 1886 0635</p>\n        <img style=\"width: 80px; margin-top: -13px; margin-bottom: -13px;\" src=\"https://pixsector.com/cache/dc0ee776/avd5c445f01ca4712be88.png\" alt=\"\">\n        <p class=\"log\">Correo electrónico</p>\n        <p class=\"log\">info@techreo.mx</p>\n        <ion-list>\n            <br>\n            <ion-row>\n                <ion-col size=\"12\" class=\"finalButtons\">\n                    <ion-button (click)=\"back()\" type=\"submit\" expand=\"block\" color=\"warning\" (click)=\"send()\" shape=\"round\">\n                        Aceptar\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <div style=\"height: 7px; background-color: #9ec728;\"></div>\n</ion-footer>";

/***/ }),

/***/ 5822:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/onboarding/modals/gps/gps.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div id=\"container\"  class=\"ion-padding\">\n  <p><strong>Antes de comenzar</strong></p>\n  <p>¿Permites que \n    CONSEJO DE ASISTENCIA \n    AL MICROEMPRENDEDOR S.A. \n    DE C.V., S.F.P. a través de \n    la App techreo tenga \n    acceso a la ubicación de \n    tu dispositivo cada vez \n    que inicies sesión en \n    tu cuenta/sesión electrónica?</p>\n    <br>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button (click)=\"apecept()\" type=\"submit\" expand=\"block\" color=\"primary\"  shape=\"round\">\n          Aceptar\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button (click)=\"cancel()\" type=\"submit\" expand=\"block\" color=\"dark\"  shape=\"round\">\n          Cancelar\n        </ion-button>\n        \n      </ion-col>\n    </ion-row>\n  </div>\n   \n    \n</ion-content>\n";

/***/ }),

/***/ 342:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/onboarding/modals/password/password.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content *ngIf=\"!step\">\n    <div style=\"float: right; padding: 10px; font-size: 30px; \">\n        <ion-icon (click)=\"cancel()\" style=\"cursor: pointer;\" name=\"close-outline\"></ion-icon>\n    </div>\n    <br><br>\n    <div id=\"container\" class=\"ion-padding\">\n        <p class=\"green\">Actualizada</p>\n        <p>Contraseña se cambió con éxito. </p>\n        <img style=\"width:50px\" src=\"assets/svg/likeHand.svg\">\n        <ion-list>\n            <br>\n            <ion-row>\n                <ion-col size=\"12\" class=\"finalButtons\">\n                    <ion-button (click)=\"cancel()\" type=\"submit\" expand=\"block\" color=\"warning\" (click)=\"send()\" shape=\"round\">\n                        Continuar\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n    </div>\n</ion-content>";

/***/ }),

/***/ 4204:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/onboarding/modals/register/register.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n  <p style=\"text-align: center;\"><strong>¡Hola!</strong></p>\n  <p  style=\"text-align: center;\">Para iniciar tu registro necesitas a la mano</p>\n  <ul>\n\n    <li> Credencial del Elector\\n(INE Original)</li>\n    <li> Comprobante de domicilio </li>\n    <li> Dirección de correo electrónico </li>\n    <li> Número de teléfono </li>\n    \n    </ul>\n  <br>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button (click)=\"apecept()\" type=\"submit\" expand=\"block\" color=\"primary\"  shape=\"round\">\n        Aceptar\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>";

/***/ }),

/***/ 5004:
/*!***************************************************************!*\
  !*** ./src/app/modules/onboarding/start.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>start</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_onboarding_start_module_ts.js.map