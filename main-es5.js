function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: 'blog',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | blog-blog-module */
        "blog-blog-module").then(__webpack_require__.bind(null,
        /*! ./blog/blog.module */
        "./src/app/blog/blog.module.ts")).then(function (m) {
          return m.BlogModule;
        });
      }
    }, {
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-shared/app-shared.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/app-shared/app-shared.module.ts ***!
    \*************************************************/

  /*! exports provided: AppSharedModule */

  /***/
  function srcAppAppSharedAppSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSharedModule", function () {
      return AppSharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _author_author_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../author/author.component */
    "./src/app/author/author.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../side-bar/side-bar.component */
    "./src/app/side-bar/side-bar.component.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");

    var AppSharedModule = function AppSharedModule() {
      _classCallCheck(this, AppSharedModule);
    };

    AppSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppSharedModule
    });
    AppSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppSharedModule_Factory(t) {
        return new (t || AppSharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppSharedModule, {
        declarations: [_author_author_component__WEBPACK_IMPORTED_MODULE_2__["AuthorComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["SideBarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"]],
        exports: [_author_author_component__WEBPACK_IMPORTED_MODULE_2__["AuthorComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["SideBarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppSharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_author_author_component__WEBPACK_IMPORTED_MODULE_2__["AuthorComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["SideBarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"]],
          exports: [_author_author_component__WEBPACK_IMPORTED_MODULE_2__["AuthorComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["SideBarComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main-nav/main-nav.component */
    "./src/app/main-nav/main-nav.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'leif-wells-blog';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        }
      },
      directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__["MainNavComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main-nav/main-nav.component */
    "./src/app/main-nav/main-nav.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _app_shared_app_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./app-shared/app-shared.module */
    "./src/app/app-shared/app-shared.module.ts");
    /* harmony import */


    var _services_theme_change_theme_change_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services/theme-change/theme-change.service */
    "./src/app/services/theme-change/theme-change.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_theme_change_theme_change_service__WEBPACK_IMPORTED_MODULE_18__["ThemeChangeService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _app_shared_app_shared_module__WEBPACK_IMPORTED_MODULE_17__["AppSharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__["ScullyLibModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _app_shared_app_shared_module__WEBPACK_IMPORTED_MODULE_17__["AppSharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__["ScullyLibModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _app_shared_app_shared_module__WEBPACK_IMPORTED_MODULE_17__["AppSharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__["ScullyLibModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"]],
          providers: [_services_theme_change_theme_change_service__WEBPACK_IMPORTED_MODULE_18__["ThemeChangeService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/author/author.component.ts":
  /*!********************************************!*\
    !*** ./src/app/author/author.component.ts ***!
    \********************************************/

  /*! exports provided: AuthorComponent */

  /***/
  function srcAppAuthorAuthorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorComponent", function () {
      return AuthorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var AuthorComponent = /*#__PURE__*/function () {
      function AuthorComponent(router) {
        _classCallCheck(this, AuthorComponent);

        this.router = router;
      }

      _createClass(AuthorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigateToUrl",
        value: function navigateToUrl(url) {
          window.location.href = url;
        }
      }]);

      return AuthorComponent;
    }();

    AuthorComponent.ɵfac = function AuthorComponent_Factory(t) {
      return new (t || AuthorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AuthorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthorComponent,
      selectors: [["app-author"]],
      decls: 16,
      vars: 0,
      consts: [[1, "author-card"], [1, "card-header"], [1, "title"], [1, "author"], [1, "author-image"], ["mat-button", "", 1, "social-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["aria-hidden", "true", 1, "fa", "fa-github"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"]],
      template: function AuthorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Leif Wells");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Leif Wells is a presenter, author, Web & mobile developer based in Atlanta. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorComponent_Template_button_click_10_listener() {
            return ctx.navigateToUrl("https://twitter.com/leifwells");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorComponent_Template_button_click_12_listener() {
            return ctx.navigateToUrl("https://github.com/leifwells");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorComponent_Template_button_click_14_listener() {
            return ctx.navigateToUrl("https://www.linkedin.com/in/leifwells/");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      styles: [".author-card[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  min-height: 270px;\n  padding: 4px;\n}\n.author-card[_ngcontent-%COMP%]     .mat-card-header-text {\n  text-align: center !important;\n  width: 100% !important;\n}\n.author-card[_ngcontent-%COMP%]     .mat-card-content {\n  text-align: center !important;\n  width: 100% !important;\n}\n.author-card[_ngcontent-%COMP%]     mat-card-actions {\n  text-align: center !important;\n  width: 100% !important;\n}\n.author-card[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-bottom: 10px;\n}\n.author-card[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n.author-card[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .author-image[_ngcontent-%COMP%] {\n  background-color: black;\n  background-image: url(\"http://localhost:4200/assets/images/2015-08-12_profile_image.png\");\n  background-position: center;\n  background-size: cover;\n  border-radius: 50%;\n  height: 6rem;\n  margin: 0 25%;\n  width: 6rem;\n}\n.author-card[_ngcontent-%COMP%]   .social-button[_ngcontent-%COMP%] {\n  background-color: grey;\n  min-width: 50px;\n  margin: 0 5px;\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWlmd2VsbHMvQ29kZS9kdXN0YmluL2xlaWYtd2VsbHMtYmxvZy1uZy1zY3VsbHkvc3JjL2FwcC9hdXRob3IvYXV0aG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRob3IvYXV0aG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjtBRENJO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtBQ0NOO0FERUk7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FDQU47QURHSTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7QUNETjtBREtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNISjtBRElJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDRk47QURJSTtFQUNFLHVCQUFBO0VBQ0EseUZBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNGTjtBREtFO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvci9hdXRob3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aG9yLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtaW4taGVpZ2h0OiAyNzBweDtcbiAgcGFkZGluZzogNHB4O1xuICA6Om5nLWRlZXAge1xuICAgIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIG1hdC1jYXJkLWFjdGlvbnMge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5hdXRob3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBwIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuYXV0aG9yLWltYWdlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cDovL2xvY2FsaG9zdDo0MjAwL2Fzc2V0cy9pbWFnZXMvMjAxNS0wOC0xMl9wcm9maWxlX2ltYWdlLnBuZ1wiKTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBoZWlnaHQ6IDZyZW07XG4gICAgICBtYXJnaW46IDAgMjUlO1xuICAgICAgd2lkdGg6IDZyZW07XG4gICAgfVxuICB9XG4gIC5zb2NpYWwtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDAgNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG59XG4iLCIuYXV0aG9yLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtaW4taGVpZ2h0OiAyNzBweDtcbiAgcGFkZGluZzogNHB4O1xufVxuLmF1dGhvci1jYXJkIDo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5hdXRob3ItY2FyZCA6Om5nLWRlZXAgLm1hdC1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5hdXRob3ItY2FyZCA6Om5nLWRlZXAgbWF0LWNhcmQtYWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmF1dGhvci1jYXJkIC5hdXRob3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5hdXRob3ItY2FyZCAuYXV0aG9yIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmF1dGhvci1jYXJkIC5hdXRob3IgLmF1dGhvci1pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwOi8vbG9jYWxob3N0OjQyMDAvYXNzZXRzL2ltYWdlcy8yMDE1LTA4LTEyX3Byb2ZpbGVfaW1hZ2UucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW46IDAgMjUlO1xuICB3aWR0aDogNnJlbTtcbn1cbi5hdXRob3ItY2FyZCAuc29jaWFsLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgbWFyZ2luOiAwIDVweDtcbiAgd2lkdGg6IDUwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-author',
          templateUrl: './author.component.html',
          styleUrls: ['./author.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_blog_post_blog_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/blog-post/blog-post.service */
    "./src/app/services/blog-post/blog-post.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../side-bar/side-bar.component */
    "./src/app/side-bar/side-bar.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function HomeComponent_mat_card_5_p_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var route_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", route_r1.description, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        desktop: a0
      };
    };

    function HomeComponent_mat_card_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_mat_card_5_Template_mat_card_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var route_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.navigateToRoute(route_r1.route, route_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_mat_card_5_p_12_Template, 2, 1, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var route_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 8, ctx_r0.isHandset$)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, ctx_r0.isHandset$)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(http://localhost:4200/assets/" + route_r1.thumbnail + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, ctx_r0.isHandset$)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](route_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 14, route_r1.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 16, ctx_r0.isHandset$));
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(breakpointObserver, router, postService) {
        _classCallCheck(this, HomeComponent);

        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.postService = postService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (result) {
          return console.log(result);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.homePosts$ = this.postService.homePosts$;
        }
      }, {
        key: "navigateToRoute",
        value: function navigateToRoute(routePath, route) {
          this.router.navigate([routePath], {
            state: {
              route: route
            }
          });
        }
      }, {
        key: "navigateToUrl",
        value: function navigateToUrl(url) {
          window.location.href = url;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_blog_post_blog_post_service__WEBPACK_IMPORTED_MODULE_4__["BlogPostService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 8,
      vars: 16,
      consts: [[1, "home"], [1, "posts-container", 3, "ngClass"], [1, "posts-column", 3, "ngClass"], ["class", "blog-card", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "right-column", 3, "categories", "isHandset$", "tags"], [1, "blog-card", 3, "ngClass", "click"], [1, "blog-card-content", 3, "ngClass"], ["width", "{!(isHandset$ | async) ? '240px' : '100px'}", "height", "{!(isHandset$ | async) ? '8rem' : '100px'}", 1, "post-image-container", 3, "ngClass"], [1, "content-text"], ["class", "description-container", 4, "ngIf"], [1, "description-container"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_mat_card_5_Template, 14, 24, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-side-bar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx.isHandset$)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.isHandset$)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, ctx.postService.homePosts$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.postService.categories)("isHandset$", ctx.isHandset$)("tags", ctx.postService.tags);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["SideBarComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".home[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.home[_ngcontent-%COMP%]   .posts-container.desktop[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n  width: 75vw;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 0 15px;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column.desktop[_ngcontent-%COMP%] {\n  max-width: 560px;\n  padding: 0;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 10px;\n  max-height: 100px;\n  min-height: 100px;\n  padding: 0;\n  min-width: 100px;\n  width: 100%;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column[_ngcontent-%COMP%]   .blog-card.desktop[_ngcontent-%COMP%] {\n  margin: 10px;\n  max-height: 336px;\n  min-height: 336px;\n  padding: 0;\n  min-width: 240px;\n  width: 40%;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]   .blog-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]   .blog-card-content.desktop[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]   .blog-card-content[_ngcontent-%COMP%]   .content-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]   .blog-card-content[_ngcontent-%COMP%]   .content-text.desktop[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]   .post-image-container[_ngcontent-%COMP%] {\n  background-color: red;\n  background-repeat: no-repeat;\n  background-size: auto 100px;\n  height: 100px;\n  min-width: 100px;\n  width: 100px;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]   .post-image-container.desktop[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  height: 8rem;\n  width: auto;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]     mat-card-title {\n  font-size: 1.2rem;\n  margin: 5px 10px;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]     mat-card-subtitle {\n  font-size: 1rem;\n  margin: 5px 10px;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]    .desktop mat-card-title {\n  font-size: 18px;\n  margin: 5px 10px;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]    .desktop mat-card-subtitle {\n  margin: 5px 10px;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .posts-column[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%] {\n  margin: 5px 16px 0 16px;\n}\n.home[_ngcontent-%COMP%]   .posts-container[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  max-width: 215px;\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWlmd2VsbHMvQ29kZS9kdXN0YmluL2xlaWYtd2VsbHMtYmxvZy1uZy1zY3VsbHkvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0k7RUFFRSxpQkFBQTtFQUNBLFdBQUE7QUNBTjtBREdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNETjtBREdNO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDRFI7QURLTTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNIUjtBREtRO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDSFY7QURNUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0pWO0FETVU7RUFDRSxzQkFBQTtBQ0paO0FET1U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FDTFo7QURPWTtFQUNFLG1CQUFBO0FDTGQ7QURVUTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNSVjtBRFVVO0VBQ0UsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDUlo7QURhVTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNYWjtBRGFVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDWFo7QURlWTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ2JkO0FEZVk7RUFDRSxnQkFBQTtBQ2JkO0FEa0JRO0VBQ0UsdUJBQUE7QUNoQlY7QURxQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ25CTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIC5wb3N0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAmLmRlc2t0b3Age1xuICAgICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgd2lkdGg6IDc1dnc7XG4gICAgfVxuXG4gICAgLnBvc3RzLWNvbHVtbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcblxuICAgICAgJi5kZXNrdG9wIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1NjBweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgLy8gd2lkdGg6IDcwJTtcbiAgICAgIH1cblxuICAgICAgLmJsb2ctY2FyZCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYuZGVza3RvcCB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDMzNnB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDMzNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWluLXdpZHRoOiAyNDBweDtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsb2ctY2FyZC1jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAmLmRlc2t0b3Age1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGVudC10ZXh0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgJi5kZXNrdG9wIHtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuXG4gICAgICAgICAgJi5kZXNrdG9wIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDhyZW07XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgIG1hdC1jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWF0LWNhcmQtc3VidGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmRlc2t0b3Age1xuICAgICAgICAgICAgbWF0LWNhcmQtdGl0bGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMTZweCAwIDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmlnaHQtY29sdW1uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBtYXgtd2lkdGg6IDIxNXB4O1xuICAgICAgd2lkdGg6IDI1JTtcblxuICAgICAgLy8gICAucmlnaHQtY29sdW1uLXRpdGxlIHtcbiAgICAgIC8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC8vICAgICBoMyB7XG4gICAgICAvLyAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfVxuXG4gICAgICAvLyAgIC5zZWN0aW9uLWNvbnRhaW5lciB7XG4gICAgICAvLyAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIC8vICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vICAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XG4gIC8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvLyAgIH1cbn1cbiIsIi5ob21lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmhvbWUgLnBvc3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5ob21lIC5wb3N0cy1jb250YWluZXIuZGVza3RvcCB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB3aWR0aDogNzV2dztcbn1cbi5ob21lIC5wb3N0cy1jb250YWluZXIgLnBvc3RzLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLmhvbWUgLnBvc3RzLWNvbnRhaW5lciAucG9zdHMtY29sdW1uLmRlc2t0b3Age1xuICBtYXgtd2lkdGg6IDU2MHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmhvbWUgLnBvc3RzLWNvbnRhaW5lciAucG9zdHMtY29sdW1uIC5ibG9nLWNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob21lIC5wb3N0cy1jb250YWluZXIgLnBvc3RzLWNvbHVtbiAuYmxvZy1jYXJkLmRlc2t0b3Age1xuICBtYXJnaW46IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDMzNnB4O1xuICBtaW4taGVpZ2h0OiAzMzZweDtcbiAgcGFkZGluZzogMDtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAgd2lkdGg6IDQwJTtcbn1cbi5ob21lIC5wb3N0cy1jb250YWluZXIgLnBvc3RzLWNvbHVtbiAuYmxvZy1jYXJkIC5ibG9nLWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uaG9tZSAucG9zdHMtY29udGFpbmVyIC5wb3N0cy1jb2x1bW4gLmJsb2ctY2FyZCAuYmxvZy1jYXJkLWNvbnRlbnQuZGVza3RvcCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaG9tZSAucG9zdHMtY29udGFpbmVyIC5wb3N0cy1jb2x1bW4gLmJsb2ctY2FyZCAuYmxvZy1jYXJkLWNvbnRlbnQgLmNvbnRlbnQtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDA7XG59XG4uaG9tZSAucG9zdHMtY29udGFpbmVyIC5wb3N0cy1jb2x1bW4gLmJsb2ctY2FyZCAuYmxvZy1jYXJkLWNvbnRlbnQgLmNvbnRlbnQtdGV4dC5kZXNrdG9wIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5ob21lIC5wb3N0cy1jb250YWluZXIgLnBvc3RzLWNvbHVtbiAuYmxvZy1jYXJkIC5wb3N0LWltYWdlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG4uaG9tZSAucG9zdHMtY29udGFpbmVyIC5wb3N0cy1jb2x1bW4gLmJsb2ctY2FyZCAucG9zdC1pbWFnZS1jb250YWluZXIuZGVza3RvcCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA4cmVtO1xuICB3aWR0aDogYXV0bztcbn1cbi5ob21lIC5wb3N0cy1jb250YWluZXIgLnBvc3RzLWNvbHVtbiAuYmxvZy1jYXJkIDo6bmctZGVlcCBtYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtYXJnaW46IDVweCAxMHB4O1xufVxuLmhvbWUgLnBvc3RzLWNvbnRhaW5lciAucG9zdHMtY29sdW1uIC5ibG9nLWNhcmQgOjpuZy1kZWVwIG1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW46IDVweCAxMHB4O1xufVxuLmhvbWUgLnBvc3RzLWNvbnRhaW5lciAucG9zdHMtY29sdW1uIC5ibG9nLWNhcmQgOjpuZy1kZWVwLmRlc2t0b3AgbWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG59XG4uaG9tZSAucG9zdHMtY29udGFpbmVyIC5wb3N0cy1jb2x1bW4gLmJsb2ctY2FyZCA6Om5nLWRlZXAuZGVza3RvcCBtYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG59XG4uaG9tZSAucG9zdHMtY29udGFpbmVyIC5wb3N0cy1jb2x1bW4gLmJsb2ctY2FyZCAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luOiA1cHggMTZweCAwIDE2cHg7XG59XG4uaG9tZSAucG9zdHMtY29udGFpbmVyIC5yaWdodC1jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgbWF4LXdpZHRoOiAyMTVweDtcbiAgd2lkdGg6IDI1JTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_blog_post_blog_post_service__WEBPACK_IMPORTED_MODULE_4__["BlogPostService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-nav/main-nav.component.ts":
  /*!************************************************!*\
    !*** ./src/app/main-nav/main-nav.component.ts ***!
    \************************************************/

  /*! exports provided: MainNavComponent */

  /***/
  function srcAppMainNavMainNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainNavComponent", function () {
      return MainNavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _services_theme_change_theme_change_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/theme-change/theme-change.service */
    "./src/app/services/theme-change/theme-change.service.ts");
    /* harmony import */


    var _services_blog_post_blog_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/blog-post/blog-post.service */
    "./src/app/services/blog-post/blog-post.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function MainNavComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_button_14_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          return _r14.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainNavComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This is the place where Leif writes stuff down for other developers to read. Also, it is how he remembers stuff. And things. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MainNavComponent = function MainNavComponent(breakpointObserver, routerService, themeChangeService, blogPostService) {
      _classCallCheck(this, MainNavComponent);

      this.breakpointObserver = breakpointObserver;
      this.routerService = routerService;
      this.themeChangeService = themeChangeService;
      this.blogPostService = blogPostService;
      this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
        return result.matches;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
      this.useDarkTheme$ = this.themeChangeService.useDarkTheme$;
      this.homePosts$ = this.blogPostService.homePosts$;
    };

    MainNavComponent.ɵfac = function MainNavComponent_Factory(t) {
      return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_change_theme_change_service__WEBPACK_IMPORTED_MODULE_4__["ThemeChangeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_post_blog_post_service__WEBPACK_IMPORTED_MODULE_5__["BlogPostService"]));
    };

    MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainNavComponent,
      selectors: [["app-main-nav"]],
      decls: 24,
      vars: 22,
      consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["color", "primary"], ["mat-list-item", "", 1, "side-nav-item", 3, "routerLink"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "title-container"], [1, "title"], ["class", "sub-title", 4, "ngIf"], [1, "main-container"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], [1, "sub-title"]],
      template: function MainNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Blog-o-rama");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About Leif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MainNavComponent_button_14_Template, 3, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Blog-o-rama");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MainNavComponent_div_19_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dark-theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 10, ctx.useDarkTheme$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 14, ctx.isHandset$) ? "over" : "none")("opened", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, ctx.isHandset$) ? "dialog" : "navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/blog/about-me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 16, ctx.isHandset$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 18, ctx.isHandset$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dark-theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 20, ctx.useDarkTheme$));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
      styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.sidenav-container[_ngcontent-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.sidenav-container[_ngcontent-%COMP%]     .mat-list-item-content {\n  margin-bottom: 16px;\n  padding: 8px !important;\n}\n.sidenav-container[_ngcontent-%COMP%]    .desktop .mat-list-item-content {\n  margin-bottom: 16px;\n  padding: 0 16px 32px 16px !important;\n}\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.title-container[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80vw;\n}\n.title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  text-transform: uppercase;\n}\n.title-container[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.title-container.desktop[_ngcontent-%COMP%] {\n  padding-left: 80px;\n  text-align: center;\n  width: 90vw;\n}\n.title-container.desktop[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.main-container.dark-theme[_ngcontent-%COMP%] {\n  background-color: #757575;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWlmd2VsbHMvQ29kZS9kdXN0YmluL2xlaWYtd2VsbHMtYmxvZy1uZy1zY3VsbHkvc3JjL2FwcC9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7QUNDSjtBREdJO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQ0ROO0FES007RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0FDSFI7QURTQTtFQUNFLFlBQUE7QUNORjtBRFNBO0VBQ0UsbUJBQUE7QUNORjtBRFNBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDTkY7QURTQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ05GO0FEUUU7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDTko7QURRRTtFQUNFLGlCQUFBO0FDTko7QURTRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDUEo7QURRSTtFQUNFLGVBQUE7QUNOTjtBRFdBO0VBQ0UsdUJBQUE7QUNSRjtBRFVFO0VBQ0UseUJBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC50b29sYmFyLXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuICA6Om5nLWRlZXAge1xuICAgIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYuZGVza3RvcCB7XG4gICAgICAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4IDMycHggMTZweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODB2dztcblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLnN1Yi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cblxuICAmLmRlc2t0b3Age1xuICAgIHBhZGRpbmctbGVmdDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIH1cbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgJi5kYXJrLXRoZW1lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xuICB9XG59XG4iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2lkZW5hdi1jb250YWluZXIgLnRvb2xiYXItc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uc2lkZW5hdi1jb250YWluZXIgOjpuZy1kZWVwIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcbn1cbi5zaWRlbmF2LWNvbnRhaW5lciA6Om5nLWRlZXAuZGVza3RvcCAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogMCAxNnB4IDMycHggMTZweCAhaW1wb3J0YW50O1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODB2dztcbn1cbi50aXRsZS1jb250YWluZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4udGl0bGUtY29udGFpbmVyIC5zdWItdGl0bGUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi50aXRsZS1jb250YWluZXIuZGVza3RvcCB7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTB2dztcbn1cbi50aXRsZS1jb250YWluZXIuZGVza3RvcCAudGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm1haW4tY29udGFpbmVyLmRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-nav',
          templateUrl: './main-nav.component.html',
          styleUrls: ['./main-nav.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }, {
          type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"]
        }, {
          type: _services_theme_change_theme_change_service__WEBPACK_IMPORTED_MODULE_4__["ThemeChangeService"]
        }, {
          type: _services_blog_post_blog_post_service__WEBPACK_IMPORTED_MODULE_5__["BlogPostService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/blog-post/blog-post.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/blog-post/blog-post.service.ts ***!
    \*********************************************************/

  /*! exports provided: BlogPostService */

  /***/
  function srcAppServicesBlogPostBlogPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPostService", function () {
      return BlogPostService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");

    var BlogPostService = /*#__PURE__*/function () {
      function BlogPostService(scullyRoutesService) {
        var _this = this;

        _classCallCheck(this, BlogPostService);

        this.scullyRoutesService = scullyRoutesService;
        this.tags = [];
        this.available$ = this.scullyRoutesService.available$;
        this.homePosts$ = this.available$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (posts) {
          var filtered = posts.filter(function (post) {
            return post.title !== undefined;
          });
          filtered = filtered.filter(function (post) {
            return post.draft !== true;
          });
          return filtered;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (posts) {
          var cats = [];
          var tags = [];
          posts.forEach(function (post) {
            if (post.tags) {
              tags = tags.concat(post.tags);
              tags = tags.reduce(function (x, y) {
                return x.includes(y) ? x : [].concat(_toConsumableArray(x), [y]);
              }, []);
              _this.tags = _this.sortArray(tags);
            }

            if (post.categories) {
              cats = cats.concat(post.categories);
              cats = cats.reduce(function (x, y) {
                return x.includes(y) ? x : [].concat(_toConsumableArray(x), [y]);
              }, []);
              _this.categories = _this.sortArray(cats);
            }
          });
          return posts;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (posts) {
          posts.sort(function (a, b) {
            return a.date < b.date ? 1 : -1;
          });
          return posts;
        }));
      }

      _createClass(BlogPostService, [{
        key: "sortArray",
        value: function sortArray(arr) {
          arr.sort(function (a, b) {
            return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
          });
          return arr;
        }
      }]);

      return BlogPostService;
    }();

    BlogPostService.ɵfac = function BlogPostService_Factory(t) {
      return new (t || BlogPostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyRoutesService"]));
    };

    BlogPostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BlogPostService,
      factory: BlogPostService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogPostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyRoutesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/local-storage/local-storage.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/services/local-storage/local-storage.service.ts ***!
    \*****************************************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function srcAppServicesLocalStorageLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LocalStorageService = /*#__PURE__*/function () {
      function LocalStorageService() {
        _classCallCheck(this, LocalStorageService);
      }

      _createClass(LocalStorageService, [{
        key: "setItem",
        value: function setItem(key, value) {
          localStorage.setItem(key, value);
        }
      }, {
        key: "getItem",
        value: function getItem(key) {
          return localStorage.getItem(key);
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
      return new (t || LocalStorageService)();
    };

    LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocalStorageService,
      factory: LocalStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/theme-change/theme-change.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/theme-change/theme-change.service.ts ***!
    \***************************************************************/

  /*! exports provided: ThemeChangeService */

  /***/
  function srcAppServicesThemeChangeThemeChangeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeChangeService", function () {
      return ThemeChangeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../local-storage/local-storage.service */
    "./src/app/services/local-storage/local-storage.service.ts");

    var ThemeChangeService = /*#__PURE__*/function () {
      function ThemeChangeService(localStorageService) {
        _classCallCheck(this, ThemeChangeService);

        this.localStorageService = localStorageService;
        this.useDarkTheme = false;
        this.useDarkTheme$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.useDarkTheme);
        var bool = JSON.parse(localStorageService.getItem('dark-theme'));
        this.useDarkTheme = !bool ? false : bool;
        this.useDarkTheme$.next(this.useDarkTheme);
        this.localStorageService.setItem('dark-theme', this.useDarkTheme);
      }

      _createClass(ThemeChangeService, [{
        key: "changeTheme",
        value: function changeTheme() {
          this.useDarkTheme = !this.useDarkTheme;
          this.useDarkTheme$.next(this.useDarkTheme);
          this.localStorageService.setItem('dark-theme', this.useDarkTheme);
        }
      }]);

      return ThemeChangeService;
    }();

    ThemeChangeService.ɵfac = function ThemeChangeService_Factory(t) {
      return new (t || ThemeChangeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]));
    };

    ThemeChangeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ThemeChangeService,
      factory: ThemeChangeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeChangeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/side-bar/side-bar.component.ts":
  /*!************************************************!*\
    !*** ./src/app/side-bar/side-bar.component.ts ***!
    \************************************************/

  /*! exports provided: SideBarComponent */

  /***/
  function srcAppSideBarSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideBarComponent", function () {
      return SideBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_theme_change_theme_change_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/theme-change/theme-change.service */
    "./src/app/services/theme-change/theme-change.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _author_author_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../author/author.component */
    "./src/app/author/author.component.ts");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");

    function SideBarComponent_div_0_mat_chip_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r10, "");
      }
    }

    function SideBarComponent_div_0_mat_chip_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r11, " ");
      }
    }

    function SideBarComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Author");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-author");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-slide-toggle", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleChange", function SideBarComponent_div_0_Template_mat_slide_toggle_toggleChange_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.changeTheme();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dark Theme");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Categories");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-chip-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SideBarComponent_div_0_mat_chip_13_Template, 2, 1, "mat-chip", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tags");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-chip-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SideBarComponent_div_0_mat_chip_19_Template, 2, 1, "mat-chip", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tweets");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dark-theme", ctx_r7.useDarkTheme);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dark-theme", ctx_r7.useDarkTheme);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r7.useDarkTheme);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dark-theme", ctx_r7.useDarkTheme);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.categories);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dark-theme", ctx_r7.useDarkTheme);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.tags);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dark-theme", ctx_r7.useDarkTheme);
      }
    }

    var SideBarComponent = /*#__PURE__*/function () {
      function SideBarComponent(themeChangeService) {
        _classCallCheck(this, SideBarComponent);

        this.themeChangeService = themeChangeService;
      }

      _createClass(SideBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.themeChangeService.useDarkTheme$.subscribe(function (bool) {
            _this2.useDarkTheme = bool;
          });
        }
      }, {
        key: "changeTheme",
        value: function changeTheme() {
          this.useDarkTheme = !this.useDarkTheme;
          this.themeChangeService.changeTheme();
        }
      }]);

      return SideBarComponent;
    }();

    SideBarComponent.ɵfac = function SideBarComponent_Factory(t) {
      return new (t || SideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_change_theme_change_service__WEBPACK_IMPORTED_MODULE_1__["ThemeChangeService"]));
    };

    SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideBarComponent,
      selectors: [["app-side-bar"]],
      inputs: {
        categories: "categories",
        isHandset$: "isHandset$",
        tags: "tags"
      },
      decls: 2,
      vars: 3,
      consts: [["class", "side-bar", 4, "ngIf"], [1, "side-bar"], [1, "side-bar-title"], [1, "dark-toggle-container"], [3, "checked", "toggleChange"], [1, "section-container"], ["color", "primary", 4, "ngFor", "ngForOf"], ["color", "accent", 4, "ngFor", "ngForOf"], ["color", "primary"], ["color", "accent"]],
      template: function SideBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SideBarComponent_div_0_Template, 23, 13, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.isHandset$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _author_author_component__WEBPACK_IMPORTED_MODULE_3__["AuthorComponent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChip"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: [".side-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  max-width: 215px;\n}\n.side-bar[_ngcontent-%COMP%]   .dark-toggle-container[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  text-align: center;\n  width: 100%;\n}\n.side-bar[_ngcontent-%COMP%]   .dark-toggle-container.dark-theme[_ngcontent-%COMP%] {\n  color: white;\n}\n.side-bar[_ngcontent-%COMP%]   .side-bar-title[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n.side-bar[_ngcontent-%COMP%]   .side-bar-title.dark-theme[_ngcontent-%COMP%] {\n  color: white;\n}\n.side-bar[_ngcontent-%COMP%]   .side-bar-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.side-bar[_ngcontent-%COMP%]   .section-container[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWlmd2VsbHMvQ29kZS9kdXN0YmluL2xlaWYtd2VsbHMtYmxvZy1uZy1zY3VsbHkvc3JjL2FwcC9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURFRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBSjtBREVJO0VBQ0UsWUFBQTtBQ0FOO0FESUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNGSjtBRElJO0VBQ0UsWUFBQTtBQ0ZOO0FES0k7RUFDRSx5QkFBQTtBQ0hOO0FET0U7RUFDRSxtQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgbWF4LXdpZHRoOiAyMTVweDtcbiAgLy8gICB3aWR0aDogMjUlO1xuXG4gIC5kYXJrLXRvZ2dsZS1jb250YWluZXIge1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICYuZGFyay10aGVtZSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgLnNpZGUtYmFyLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmLmRhcmstdGhlbWUge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICB9XG5cbiAgLnNlY3Rpb24tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG4iLCIuc2lkZS1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgbWF4LXdpZHRoOiAyMTVweDtcbn1cbi5zaWRlLWJhciAuZGFyay10b2dnbGUtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2lkZS1iYXIgLmRhcmstdG9nZ2xlLWNvbnRhaW5lci5kYXJrLXRoZW1lIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNpZGUtYmFyIC5zaWRlLWJhci10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2lkZS1iYXIgLnNpZGUtYmFyLXRpdGxlLmRhcmstdGhlbWUge1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2lkZS1iYXIgLnNpZGUtYmFyLXRpdGxlIGgzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zaWRlLWJhciAuc2VjdGlvbi1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-side-bar',
          templateUrl: './side-bar.component.html',
          styleUrls: ['./side-bar.component.scss']
        }]
      }], function () {
        return [{
          type: _services_theme_change_theme_change_service__WEBPACK_IMPORTED_MODULE_1__["ThemeChangeService"]
        }];
      }, {
        categories: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isHandset$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tags: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/leifwells/Code/dustbin/leif-wells-blog-ng-scully/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map