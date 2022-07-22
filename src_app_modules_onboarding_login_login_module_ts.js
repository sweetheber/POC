"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_onboarding_login_login_module_ts"],{

/***/ 9366:
/*!******************************************************************!*\
  !*** ./src/app/modules/onboarding/login/login-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 5494);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 5549:
/*!**********************************************************!*\
  !*** ./src/app/modules/onboarding/login/login.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 9366);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 5494);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 5494:
/*!********************************************************!*\
  !*** ./src/app/modules/onboarding/login/login.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 7423);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modals_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/contact/contact.component */ 3975);
/* harmony import */ var _modals_password_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/password/password.component */ 1255);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);
/* harmony import */ var _service_password_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/password.service */ 5423);











let LoginPage = class LoginPage {
  constructor(modalController, _formBuilder, geolocation, passwordService, loadingController) {
    this.modalController = modalController;
    this._formBuilder = _formBuilder;
    this.geolocation = geolocation;
    this.passwordService = passwordService;
    this.loadingController = loadingController;
    this.showPassword = false;
    this.showPass = false;
    this.passwordToggleIcon = 'eye';
    this.passToggleIcon = 'eye';
    this.lat = '';
    this.long = '';
    this.signInForm = this._formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(25)]]
    });
    this.geolocation.getCurrentPosition().then(resp => {
      this.long = resp.coords.longitude.toString();
      this.lat = resp.coords.latitude.toString();
    }).catch(error => {
      console.log('Error getting location', error);
    });
  }

  ngOnInit() {}

  signIn() {
    let arrar = {
      "nickName": this.signInForm.value.email,
      "oldPassword": this.signInForm.value.password,
      "newPassword": this.signInForm.value.newPassword,
      "geolocation": {
        "latitude": this.lat,
        "longitude": this.long
      }
    };
    this.presentLoading();
    this.passwordService.getAuth(arrar).subscribe(data => {
      this.loading.dismiss();
      this.passWord();
      this.signInForm = this._formBuilder.group({
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
      });
      this.signInForm.valid == false;
    }, error => {
      this.loading.dismiss();
    });
  }

  presentLoading() {
    var _this = this;

    return (0,C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = yield _this.loadingController.create({
        cssClass: "my-custom-class",
        message: "Cargando..."
      });
      yield _this.loading.present();
    })();
  }

  passWord() {
    var _this2 = this;

    return (0,C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _modals_password_password_component__WEBPACK_IMPORTED_MODULE_4__.PasswordComponent,
        animated: true,
        mode: "ios",
        backdropDismiss: false,
        cssClass: "login-modal"
      });
      modal.present();
    })();
  }

  contact() {
    var _this3 = this;

    return (0,C_Users_yanor_Desktop_2option_newPass_newpwd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _modals_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent,
        animated: true,
        mode: "ios",
        backdropDismiss: true,
        cssClass: "contact-modal"
      });
      modal.present();
    })();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  togglePass() {
    this.showPass = !this.showPass;

    if (this.passToggleIcon == 'eye') {
      this.passToggleIcon = 'eye-off';
    } else {
      this.passToggleIcon = 'eye';
    }
  }

};

LoginPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder
}, {
  type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation
}, {
  type: _service_password_service__WEBPACK_IMPORTED_MODULE_6__.PasswordService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 5423:
/*!****************************************************************!*\
  !*** ./src/app/modules/onboarding/service/password.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordService": () => (/* binding */ PasswordService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let PasswordService = class PasswordService {
    constructor(http) {
        this.http = http;
        this.urlBase = 'https://devtechreo.azurewebsites.net/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json'
            }),
        };
    }
    getAuth(params) {
        const uri = this.urlBase + 'changes/password';
        console.log(params);
        let response = this.http.post(uri, params, this.httpOptions);
        return response;
    }
};
PasswordService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
PasswordService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PasswordService);



/***/ }),

/***/ 872:
/*!*********************************************************************!*\
  !*** ./src/app/modules/onboarding/login/login.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.change-password {\n  margin: auto;\n  text-align: center;\n  font-size: 30px;\n  color: #9ec728;\n  font-weight: 400;\n  margin-bottom: 30px;\n  margin-top: 40px;\n}\n\n.padding {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.border {\n  border: solid 1px rgba(223, 223, 223, 0.231372549);\n}\n\n@media (max-width: 991px) {\n  .container-color {\n    display: none;\n  }\n}\n\n.finalButtons {\n  width: 40%;\n  margin: auto;\n  margin-top: 30px;\n  font-size: 15px;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n\n.olvido-contrasena {\n  color: #9ec728;\n  text-align: center;\n}\n\n.olvido-contrasena:hover {\n  color: #32144e;\n}\n\n.container-color {\n  width: 50%;\n  height: 100%;\n  background-color: #32144e;\n  background-image: url('bg-posible.jpg');\n  position: absolute;\n  right: 0px;\n  z-index: -1;\n}\n\n.logo {\n  text-align: center;\n  margin-top: 20px;\n}\n\n/**.container-color::before {\n    content: \"\";\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    background-color: rgba(0, 0, 0, 0.30);\n}*/\n\n.contenedor {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  margin-left: 105px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFDSSxrREFBQTtBQUFKOztBQUdBO0VBQ0k7SUFDSSxhQUFBO0VBQU47QUFDRjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBS0E7Ozs7Ozs7O0VBQUE7O0FBVUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5jaGFuZ2UtcGFzc3dvcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICM5ZWM3Mjg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbiRtYWluLWNvbG9yLXBhbC1uZWdvY2lvOiAjZGZkZmRmM2I7XHJcbi5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJG1haW4tY29sb3ItcGFsLW5lZ29jaW87XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KSB7XHJcbiAgICAuY29udGFpbmVyLWNvbG9yIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmluYWxCdXR0b25zIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4ub2x2aWRvLWNvbnRyYXNlbmEge1xyXG4gICAgY29sb3I6ICM5ZWM3Mjg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vbHZpZG8tY29udHJhc2VuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzMyMTQ0ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1jb2xvciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMTQ0ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy1wb3NpYmxlLmpwZycpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLyoqLmNvbnRhaW5lci1jb2xvcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMCk7XHJcbn0qL1xyXG5cclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDVweDtcclxufSJdfQ== */";

/***/ }),

/***/ 7423:
/*!*********************************************************************!*\
  !*** ./src/app/modules/onboarding/login/login.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n    <!--<img style=\"position: absolute; margin-top: -160px; margin-left: -150px; width: 360px; transform: rotate(-45deg); opacity: 50%;\" src=\"assets/images/pink.png\" alt=\"\">-->\n    <div class=\"container-color\">\n        <div class=\"contenedor\">\n            <div>\n                <img src=\"assets/images/telefono-cta.png\">\n            </div>\n        </div>\n    </div>\n    <div id=\"container\">\n        <ion-row>\n            <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"6\">\n                <form  [formGroup]=\"signInForm\" >\n                    <ion-row color=\"primary\">\n\n                        <ion-col size-xs=\"2\" size-sm=\"2\"> </ion-col>\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"8\">\n                            <div class=\"logo\"><img src=\"assets/images/logo-techreo.png\"></div>\n\n                            <p class=\"change-password\">Cambiar Contraseña</p>\n                            <div class=\"ion-padding \" style=\"margin:auto; width: 80%; \">\n                                <ion-list>\n                                    <ion-item lines=\"full\">\n                                        <ion-label \n                                            color=\"medium\" \n                                            position=\"floating\">Email / Teléfono </ion-label>\n                                        <ion-input \n                                            color=\"medium\" \n                                            inputmode=\"text\" \n                                            placeholder=\"example@example.com \" \n                                            [formControlName]=\"'email'\"\n                                            ></ion-input>\n                                        <ion-icon name=\"person\" color=\"medium\" slot=\"end\" style=\"padding-top: 10px; font-size: 20px; \"></ion-icon>\n                                    </ion-item>\n                                    <br>\n                                    <ion-item lines=\"full\">\n                                        <ion-label \n                                            color=\"medium\" position=\"floating \">Contraseña Actual</ion-label>\n                                        <ion-input \n                                            name=\"password\" \n                                            [type]=\"showPassword ? 'text': 'password'\" \n                                            color=\"medium\" inputmode=\"text\" \n                                            placeholder=\"Contraseña\"\n                                            [formControlName]=\"'password'\"\n                                            ></ion-input>\n                                        <ion-icon [name]=\"passwordToggleIcon\" (click)=\"togglePassword()\" color=\"medium\" slot=\"end\" style=\"padding-top: 10px; font-size: 20px;\"></ion-icon>\n                                    </ion-item>\n                                    <br>\n                                    <ion-item lines=\"full\">\n                                        <ion-label color=\"medium\" position=\"floating\">Contraseña Nueva</ion-label>\n                                        <ion-input \n                                            name=\"newPassword\" \n                                            [type]=\"showPass ? 'text': 'password'\" \n                                            color=\"medium\" \n                                            inputmode=\"text\" \n                                            [formControlName]=\"'newPassword'\"\n                                            placeholder=\"Contraseña Nueva\"></ion-input>\n                                        <ion-icon \n                                            [name]=\"passToggleIcon\" \n                                            (click)=\"togglePass()\" \n                                            color=\"medium\" \n                                            slot=\"end\" \n                                            style=\"padding-top: 10px; font-size: 20px;\"></ion-icon>\n\n                                    </ion-item>\n                                    <br><br>\n                                    <small style=\"color: #4e4e4e;\">La contraseña debe tener 6 caracteres mínimo, una mayúscula, una minúscula, un numero y un carácter especial*.</small>\n                                </ion-list>\n                                <ion-row>\n                                    <ion-col>\n                                        <ion-button \n                                            class=\"finalButtons\" \n                                            type=\"submit\" \n                                            color=\"primary\" \n                                            expand=\"block\" \n                                            (click)=\"signIn()\"\n                                            [disabled]=\"!signInForm.valid\">\n                                            \n                                            <p style=\"color:#ffffff \">GUARDAR</p>\n                                        </ion-button>\n                                    </ion-col>\n                                </ion-row>\n                                <br>\n                                <p class=\"olvido-contrasena\" (click)=\"contact()\" style=\"font-size: 13px; font-weight: 500; cursor: pointer;\">Contacto</p>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </form>\n            </ion-col>\n        </ion-row>\n\n    </div>\n</ion-content>\n\n<ion-footer>\n    <div style=\"height: 7px; background-color: #9ec728;\"></div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_onboarding_login_login_module_ts.js.map