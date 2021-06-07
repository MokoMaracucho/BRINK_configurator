(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/moko/Desktop/Moko-Industry/mon-app/src/main.ts */"zUnb");


/***/ }),

/***/ "2qrX":
/*!*********************************************!*\
  !*** ./src/app/page-001/page-001.module.ts ***!
  \*********************************************/
/*! exports provided: Page001Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page001Module", function() { return Page001Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class Page001Module {
}
Page001Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Page001Module });
Page001Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Page001Module_Factory(t) { return new (t || Page001Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Page001Module, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page001Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "9GCE":
/*!*******************************************************!*\
  !*** ./src/app/page-001/services/page-001.service.ts ***!
  \*******************************************************/
/*! exports provided: Page001Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page001Service", function() { return Page001Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs */ "Yzuk");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babylonjs_loaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babylonjs-loaders */ "sjRU");
/* harmony import */ var babylonjs_loaders__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babylonjs_loaders__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pepjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pepjs */ "xxLm");
/* harmony import */ var pepjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pepjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_window_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/window-ref.service */ "OsX8");
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interaction.service */ "MQgC");







class Page001Service {
    constructor(ngZone, windowRef, interaction) {
        this.ngZone = ngZone;
        this.windowRef = windowRef;
        this.interaction = interaction;
    }
    createScene(canvas) {
        this.canvas = canvas.nativeElement;
        this.engine = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Engine"](this.canvas, true);
        this.scene = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Scene"](this.engine);
        this.camera = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["UniversalCamera"]("camera", new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0), this.scene);
        this.camera.position = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](10, 10, 10);
        this.camera.target = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0);
        this.camera.attachControl(canvas, true);
        this.light = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["HemisphericLight"]('light', new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 1, 0), this.scene);
        this.light.intensity = 1;
        babylonjs__WEBPACK_IMPORTED_MODULE_1__["SceneLoader"].ImportMeshAsync("test", "../../assets/glb/page-001/", "test.glb", this.scene).then((result) => {
        });
        // AXIS
        this.axis_X = babylonjs__WEBPACK_IMPORTED_MODULE_1__["MeshBuilder"].CreateBox("axis_X", { height: 0.2, width: 0.2, depth: 0.2 });
        this.axis_X.position = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](5, 0, 0);
        this.axis_X_MATERIAL = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"]("axis_X_MATERIAL", this.scene);
        this.axis_X_MATERIAL.diffuseColor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color3"](1, 0, 0);
        this.axis_X_MATERIAL.specularColor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color3"](1, 0, 0);
        this.axis_X.material = this.axis_X_MATERIAL;
        this.axis_Y = babylonjs__WEBPACK_IMPORTED_MODULE_1__["MeshBuilder"].CreateBox("axis_Y", { height: 0.2, width: 0.2, depth: 0.2 });
        this.axis_Y.position = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 5);
        this.axis_Y_MATERIAL = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"]("axis_Y_MATERIAL", this.scene);
        this.axis_Y_MATERIAL.diffuseColor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color3"](0, 1, 0);
        this.axis_Y_MATERIAL.specularColor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color3"](0, 1, 0);
        this.axis_Y.material = this.axis_Y_MATERIAL;
        this.axis_Z = babylonjs__WEBPACK_IMPORTED_MODULE_1__["MeshBuilder"].CreateBox("axis_Z", { height: 0.2, width: 0.2, depth: 0.2 });
        this.axis_Z.position = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 5, 0);
        this.axis_Z_MATERIAL = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"]("axis_Z_MATERIAL", this.scene);
        this.axis_Z_MATERIAL.diffuseColor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color3"](0, 0, 1);
        this.axis_Z_MATERIAL.specularColor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color3"](0, 0, 1);
        this.axis_Z.material = this.axis_Z_MATERIAL;
    }
    // ANIMATE
    animate() {
        this.ngZone.runOutsideAngular(() => {
            const rendererLoopCallback = () => {
                this.scene.render();
            };
            if (this.windowRef.document.readyState !== 'loading') {
                this.engine.runRenderLoop(rendererLoopCallback);
            }
            else {
                this.windowRef.window.addEventListener('DOMContentLoaded', () => {
                    this.engine.runRenderLoop(rendererLoopCallback);
                });
            }
            this.windowRef.window.addEventListener('resize', () => {
                this.engine.resize();
            });
        });
    }
    // CLEAN UP
    cleanUp() {
        this.engine.stopRenderLoop();
        this.scene.dispose();
        this.engine.dispose();
    }
}
Page001Service.ɵfac = function Page001Service_Factory(t) { return new (t || Page001Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_window_ref_service__WEBPACK_IMPORTED_MODULE_4__["WindowRefService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"])); };
Page001Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Page001Service, factory: Page001Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page001Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _shared_services_window_ref_service__WEBPACK_IMPORTED_MODULE_4__["WindowRefService"] }, { type: _interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LA/U":
/*!************************************************!*\
  !*** ./src/app/page-002/page-002.component.ts ***!
  \************************************************/
/*! exports provided: Page002Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page002Component", function() { return Page002Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var pepjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pepjs */ "xxLm");
/* harmony import */ var pepjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pepjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _services_page_002_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/page-002.service */ "TKJG");
/* harmony import */ var _services_interaction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/interaction.service */ "P2gE");








const _c0 = ["rendererCanvas_page002"];
class Page002Component {
    constructor(activatedRoute, deviceService, appComponent, page002Service, interaction) {
        this.activatedRoute = activatedRoute;
        this.deviceService = deviceService;
        this.appComponent = appComponent;
        this.page002Service = page002Service;
        this.interaction = interaction;
    }
    ngOnInit() {
        this.page002Service.createScene(this.rendererCanvas_page002);
        this.page002Service.animate();
    }
    ngOnDestroy() {
    }
    // CLEAN UP
    cleanUp_laboratory() {
        this.page002Service.cleanUp();
    }
}
Page002Component.ɵfac = function Page002Component_Factory(t) { return new (t || Page002Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_page_002_service__WEBPACK_IMPORTED_MODULE_5__["Page002Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_6__["InteractionService"])); };
Page002Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page002Component, selectors: [["app-page-002"]], viewQuery: function Page002Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rendererCanvas_page002 = _t.first);
    } }, decls: 2, vars: 0, consts: [["id", "rendererCanvas_page002", "touch-action", "none"], ["rendererCanvas_page002", ""]], template: function Page002Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0, 1);
    } }, styles: ["#rendererCanvas_page002[_ngcontent-%COMP%] {\n  z-index: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  touch-action: none;\n  outline: none;\n  background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtMDAyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVzs7QUFFWDtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEIiLCJmaWxlIjoicGFnZS0wMDIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENBTlZBUyAqL1xuXG4jcmVuZGVyZXJDYW52YXNfcGFnZTAwMiB7XG4gIHotaW5kZXg6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4iXX0= */"], data: { animation: [] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page002Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-002',
                templateUrl: './page-002.component.html',
                styleUrls: ['./page-002.component.css'],
                animations: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__["DeviceDetectorService"] }, { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }, { type: _services_page_002_service__WEBPACK_IMPORTED_MODULE_5__["Page002Service"] }, { type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_6__["InteractionService"] }]; }, { rendererCanvas_page002: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['rendererCanvas_page002', { static: true }]
        }] }); })();


/***/ }),

/***/ "MQgC":
/*!**********************************************************!*\
  !*** ./src/app/page-001/services/interaction.service.ts ***!
  \**********************************************************/
/*! exports provided: InteractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionService", function() { return InteractionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InteractionService {
}
InteractionService.ɵfac = function InteractionService_Factory(t) { return new (t || InteractionService)(); };
InteractionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InteractionService, factory: InteractionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InteractionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "OsX8":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/window-ref.service.ts ***!
  \*******************************************************/
/*! exports provided: WindowRefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRefService", function() { return WindowRefService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mock_window_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock/window.mock */ "c7iM");



const getWindow = () => window != null ? window : new _mock_window_mock__WEBPACK_IMPORTED_MODULE_1__["WindowMock"]();
class WindowRefService {
    constructor() {
        this.windowObject = getWindow();
    }
    get window() {
        return this.windowObject;
    }
    get document() {
        return this.window.document;
    }
    get localStore() {
        return this.window.localStorage;
    }
    get sessionStorage() {
        return this.window.sessionStorage;
    }
}
WindowRefService.ɵfac = function WindowRefService_Factory(t) { return new (t || WindowRefService)(); };
WindowRefService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowRefService, factory: WindowRefService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowRefService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "P2gE":
/*!**********************************************************!*\
  !*** ./src/app/page-002/services/interaction.service.ts ***!
  \**********************************************************/
/*! exports provided: InteractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionService", function() { return InteractionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class InteractionService {
    constructor() {
        this.isLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.change_language_english = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.change_language_french = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.change_language_spanish = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_postgresql = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_maven = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_springFramework = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_java = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_ubuntu = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_apache = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_python = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_css = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_html = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_bootstrap = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_angular = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_typescript = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_postman = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_docker = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_git = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_blender = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_babylon = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_photoshop = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_illustrator = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.open_contactMe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.toogle_cache = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.toogle_anaglyph_activated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.switch_cameraAnaglyph = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
InteractionService.ɵfac = function InteractionService_Factory(t) { return new (t || InteractionService)(); };
InteractionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InteractionService, factory: InteractionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InteractionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                animations: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TKJG":
/*!*******************************************************!*\
  !*** ./src/app/page-002/services/page-002.service.ts ***!
  \*******************************************************/
/*! exports provided: Page002Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page002Service", function() { return Page002Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs */ "Yzuk");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babylonjs_loaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babylonjs-loaders */ "sjRU");
/* harmony import */ var babylonjs_loaders__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babylonjs_loaders__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pepjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pepjs */ "xxLm");
/* harmony import */ var pepjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pepjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_window_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/window-ref.service */ "OsX8");
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interaction.service */ "P2gE");







class Page002Service {
    constructor(ngZone, windowRef, interaction) {
        this.ngZone = ngZone;
        this.windowRef = windowRef;
        this.interaction = interaction;
    }
    createScene(canvas) {
        // CANVAS / ENGINE / SCENE
        this.canvas = canvas.nativeElement;
        this.engine = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Engine"](this.canvas, true, { stencil: true });
        this.scene = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Scene"](this.engine);
        this.scene.clearColor = babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color4"].FromHexString('#000000');
        // CANERAS
        this.universal_camera = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["UniversalCamera"]("universal_camera", new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0), this.scene);
        this.universal_camera.position = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0);
        this.universal_camera.target = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0);
        this.universal_camera.touchAngularSensibility = 10000;
        this.universal_camera.speed = 0.7;
        this.universal_camera.inputs.addMouseWheel();
        this.universal_camera.attachControl(canvas);
        this.anaglyph_universal_camera = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["AnaglyphUniversalCamera"]("anaglyph_universal_camera", new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0), 0.05, this.scene);
        this.anaglyph_universal_camera.touchAngularSensibility = 10000;
        this.anaglyph_universal_camera.speed = 0.7;
        this.anaglyph_universal_camera.inputs.addMouseWheel();
        // LIGHTS
        this.hemispheric_light = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["HemisphericLight"]('hemispheric_light', new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0), this.scene);
        this.hemispheric_light.intensity = 1;
        this.directional_light = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"]("directional_light", new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0), this.scene);
        this.directional_light.intensity = 1;
        this.directional_light.diffuse = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color3"](0.4, 0, 0.2);
        this.directional_light.specular = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color3"](0, 0, 0);
    }
    // ANIMATE
    animate() {
        this.ngZone.runOutsideAngular(() => {
            const rendererLoopCallback = () => {
                this.scene.render();
            };
            if (this.windowRef.document.readyState !== 'loading') {
                this.engine.runRenderLoop(rendererLoopCallback);
            }
            else {
                this.windowRef.window.addEventListener('DOMContentLoaded', () => {
                    this.engine.runRenderLoop(rendererLoopCallback);
                });
            }
            this.windowRef.window.addEventListener('resize', () => {
                this.engine.resize();
            });
        });
    }
    // CLEAN UP
    cleanUp() {
        this.engine.stopRenderLoop();
        this.scene.dispose();
        this.engine.dispose();
    }
}
Page002Service.ɵfac = function Page002Service_Factory(t) { return new (t || Page002Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_window_ref_service__WEBPACK_IMPORTED_MODULE_4__["WindowRefService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"])); };
Page002Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Page002Service, factory: Page002Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page002Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _shared_services_window_ref_service__WEBPACK_IMPORTED_MODULE_4__["WindowRefService"] }, { type: _interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"] }]; }, null); })();


/***/ }),

/***/ "UWsZ":
/*!*********************************************!*\
  !*** ./src/app/page-002/page-002.module.ts ***!
  \*********************************************/
/*! exports provided: Page002Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page002Module", function() { return Page002Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class Page002Module {
}
Page002Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Page002Module });
Page002Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Page002Module_Factory(t) { return new (t || Page002Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Page002Module, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page002Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var pepjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pepjs */ "xxLm");
/* harmony import */ var pepjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pepjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _page_001_page_001_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-001/page-001.component */ "ejQ2");
/* harmony import */ var _page_001_page_001_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-001/page-001.module */ "2qrX");
/* harmony import */ var _page_002_page_002_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-002/page-002.component */ "LA/U");
/* harmony import */ var _page_002_page_002_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-002/page-002.module */ "UWsZ");
/* harmony import */ var _shared_services_window_ref_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/window-ref.service */ "OsX8");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _shared_services_window_ref_service__WEBPACK_IMPORTED_MODULE_13__["WindowRefService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _page_001_page_001_module__WEBPACK_IMPORTED_MODULE_10__["Page001Module"],
            _page_002_page_002_module__WEBPACK_IMPORTED_MODULE_12__["Page002Module"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _page_001_page_001_component__WEBPACK_IMPORTED_MODULE_9__["Page001Component"],
        _page_002_page_002_component__WEBPACK_IMPORTED_MODULE_11__["Page002Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _page_001_page_001_module__WEBPACK_IMPORTED_MODULE_10__["Page001Module"],
        _page_002_page_002_module__WEBPACK_IMPORTED_MODULE_12__["Page002Module"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _page_001_page_001_component__WEBPACK_IMPORTED_MODULE_9__["Page001Component"],
                    _page_002_page_002_component__WEBPACK_IMPORTED_MODULE_11__["Page002Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _page_001_page_001_module__WEBPACK_IMPORTED_MODULE_10__["Page001Module"],
                    _page_002_page_002_module__WEBPACK_IMPORTED_MODULE_12__["Page002Module"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
                ],
                providers: [
                    _shared_services_window_ref_service__WEBPACK_IMPORTED_MODULE_13__["WindowRefService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "c7iM":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/mock/window.mock.ts ***!
  \*****************************************************/
/*! exports provided: WindowMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowMock", function() { return WindowMock; });
/* harmony import */ var _document_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document.mock */ "uOFx");
/* harmony import */ var _storage_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.mock */ "xK5D");


class WindowMock extends Window {
    constructor() {
        super(...arguments);
        this.document = new _document_mock__WEBPACK_IMPORTED_MODULE_0__["DocumentMock"]();
        this.localStorage = new _storage_mock__WEBPACK_IMPORTED_MODULE_1__["StorageMock"]();
        this.sessionStorage = new _storage_mock__WEBPACK_IMPORTED_MODULE_1__["StorageMock"]();
    }
}


/***/ }),

/***/ "ejQ2":
/*!************************************************!*\
  !*** ./src/app/page-001/page-001.component.ts ***!
  \************************************************/
/*! exports provided: Page001Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page001Component", function() { return Page001Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var pepjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pepjs */ "xxLm");
/* harmony import */ var pepjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pepjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _services_page_001_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/page-001.service */ "9GCE");
/* harmony import */ var _services_interaction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/interaction.service */ "MQgC");








const _c0 = ["rendererCanvas_page001"];
class Page001Component {
    constructor(activatedRoute, deviceService, appComponent, page001Service, interaction) {
        this.activatedRoute = activatedRoute;
        this.deviceService = deviceService;
        this.appComponent = appComponent;
        this.page001Service = page001Service;
        this.interaction = interaction;
    }
    ngOnInit() {
        this.page001Service.createScene(this.rendererCanvas_page001);
        this.page001Service.animate();
    }
    ngOnDestroy() {
    }
    // CLEAN UP
    cleanUp_laboratory() {
        this.page001Service.cleanUp();
    }
}
Page001Component.ɵfac = function Page001Component_Factory(t) { return new (t || Page001Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_page_001_service__WEBPACK_IMPORTED_MODULE_5__["Page001Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_6__["InteractionService"])); };
Page001Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page001Component, selectors: [["app-page-001"]], viewQuery: function Page001Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rendererCanvas_page001 = _t.first);
    } }, decls: 2, vars: 0, consts: [["id", "rendererCanvas_page001", "touch-action", "none"], ["rendererCanvas_page001", ""]], template: function Page001Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0, 1);
    } }, styles: ["#rendererCanvas_page001[_ngcontent-%COMP%] {\n  z-index: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  touch-action: none;\n  outline: none;\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtMDAxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVzs7QUFFWDtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkIiLCJmaWxlIjoicGFnZS0wMDEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENBTlZBUyAqL1xuXG4jcmVuZGVyZXJDYW52YXNfcGFnZTAwMSB7XG4gIHotaW5kZXg6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbiJdfQ== */"], data: { animation: [] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page001Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-001',
                templateUrl: './page-001.component.html',
                styleUrls: ['./page-001.component.css'],
                animations: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__["DeviceDetectorService"] }, { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }, { type: _services_page_001_service__WEBPACK_IMPORTED_MODULE_5__["Page001Service"] }, { type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_6__["InteractionService"] }]; }, { rendererCanvas_page001: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['rendererCanvas_page001', { static: true }]
        }] }); })();


/***/ }),

/***/ "uOFx":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/mock/document.mock.ts ***!
  \*******************************************************/
/*! exports provided: DocumentMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentMock", function() { return DocumentMock; });
class DocumentMock extends Document {
    constructor() {
        super(...arguments);
        this.readyState = 'loading';
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_001_page_001_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-001/page-001.component */ "ejQ2");
/* harmony import */ var _page_002_page_002_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-002/page-002.component */ "LA/U");






class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                { path: 'page-001', component: _page_001_page_001_component__WEBPACK_IMPORTED_MODULE_2__["Page001Component"] },
                { path: '', redirectTo: 'page-001', pathMatch: 'full' },
                { path: 'page-002', component: _page_002_page_002_component__WEBPACK_IMPORTED_MODULE_3__["Page002Component"] },
                { path: '**', redirectTo: 'page-001', pathMatch: 'full' }
            ])
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                        { path: 'page-001', component: _page_001_page_001_component__WEBPACK_IMPORTED_MODULE_2__["Page001Component"] },
                        { path: '', redirectTo: 'page-001', pathMatch: 'full' },
                        { path: 'page-002', component: _page_002_page_002_component__WEBPACK_IMPORTED_MODULE_3__["Page002Component"] },
                        { path: '**', redirectTo: 'page-001', pathMatch: 'full' }
                    ])
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xK5D":
/*!******************************************************!*\
  !*** ./src/app/shared/services/mock/storage.mock.ts ***!
  \******************************************************/
/*! exports provided: StorageMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageMock", function() { return StorageMock; });
class StorageMock {
    constructor() {
        this.length = 0;
    }
    clear() { return null; }
    getItem(key) { return null; }
    key(index) { return null; }
    removeItem(key) { return null; }
    setItem(key, value) { return null; }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map