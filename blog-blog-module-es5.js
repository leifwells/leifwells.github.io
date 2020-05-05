function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"], {
  /***/
  "./src/app/blog/blog-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/blog/blog-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: BlogRoutingModule */

  /***/
  function srcAppBlogBlogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function () {
      return BlogRoutingModule;
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


    var _blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./blog.component */
    "./src/app/blog/blog.component.ts");

    var routes = [{
      path: ':slug',
      component: _blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"]
    }, {
      path: '**',
      component: _blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"]
    }];

    var BlogRoutingModule = function BlogRoutingModule() {
      _classCallCheck(this, BlogRoutingModule);
    };

    BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BlogRoutingModule
    });
    BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BlogRoutingModule_Factory(t) {
        return new (t || BlogRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blog/blog.component.ts ***!
    \****************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
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


    var _services_blog_post_blog_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/blog-post/blog-post.service */
    "./src/app/services/blog-post/blog-post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../side-bar/side-bar.component */
    "./src/app/side-bar/side-bar.component.ts");

    function BlogComponent_app_side_bar_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-side-bar", 5);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx_r6.postService.categories)("isHandset$", ctx_r6.isHandset$)("tags", ctx_r6.postService.tags);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        desktop: a0
      };
    };

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent(breakpointObserver, postService, router, route) {
        _classCallCheck(this, BlogComponent);

        this.breakpointObserver = breakpointObserver;
        this.postService = postService;
        this.router = router;
        this.route = route;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (result) {
          return console.log(result);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.post = history.state.route;
          console.log(this.post);
        }
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_post_blog_post_service__WEBPACK_IMPORTED_MODULE_3__["BlogPostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 27,
      vars: 26,
      consts: [[1, "post-page", 3, "ngClass"], [1, "post", 3, "ngClass"], ["width", "{!(isHandset$ | async) ? '630px' : '100vw'}", "height", "{!(isHandset$ | async) ? '120px' : 'auto'}", 1, "post-image-container", 3, "ngClass"], [1, "article-body", 3, "ngClass"], ["class", "right-column", 3, "categories", "isHandset$", "tags", 4, "ngIf"], [1, "right-column", 3, "categories", "isHandset$", "tags"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "scully-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BlogComponent_app_side_bar_22_Template, 1, 3, "app-side-bar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 8, ctx.isHandset$)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, ctx.isHandset$)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(./assets/" + (ctx.post == null ? null : ctx.post.thumbnail) + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, ctx.isHandset$)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post == null ? null : ctx.post.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 14, ctx.isHandset$)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 16, ctx.isHandset$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__["ScullyContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_7__["SideBarComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".post-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n}\n.post-page.desktop[_ngcontent-%COMP%] {\n  margin: 0 15vw;\n}\n.post-page.desktop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 0 25px;\n  width: 45vw;\n}\n.post-page[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.post-page[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 0 25px;\n}\n.post-page[_ngcontent-%COMP%]   .post.desktop[_ngcontent-%COMP%] {\n  width: 50vw;\n}\n.post-page[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n.post-page[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .article-body.desktop[_ngcontent-%COMP%] {\n  padding: 0 25px;\n}\n.post-page[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-image-container[_ngcontent-%COMP%] {\n  background-color: red;\n  background-position: 50% 25%;\n  background-size: cover;\n  height: 120px;\n}\n.post-page[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-image-container.desktop[_ngcontent-%COMP%] {\n  height: 14rem;\n}\n.post-page[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  width: 90vw;\n}\n.post-page[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: gray;\n  overflow: scroll;\n  padding: 15px;\n}\n.post-page[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding-left: 10px;\n  text-align: center;\n  width: 20vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWlmd2VsbHMvQ29kZS9kdXN0YmluL2xlaWYtd2VsbHMtYmxvZy1uZy1zY3VsbHkvc3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtBQ0NKO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NOO0FERUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0FKO0FERUk7RUFDRSxlQUFBO0FDQU47QURHSTtFQUNFLFdBQUE7QUNETjtBRElJO0VBQ0UsY0FBQTtBQ0ZOO0FESU07RUFDRSxlQUFBO0FDRlI7QURNSTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNKTjtBRE1NO0VBQ0UsYUFBQTtBQ0pSO0FEUUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ05OO0FEY0k7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ1pOO0FEd0JFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3RCSiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgJi5kZXNrdG9wIHtcbiAgICBtYXJnaW46IDAgMTV2dztcblxuICAgIGltZyB7XG4gICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICB3aWR0aDogNDV2dztcbiAgICB9XG4gIH1cbiAgLnBvc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGgxIHtcbiAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICB9XG5cbiAgICAmLmRlc2t0b3Age1xuICAgICAgd2lkdGg6IDUwdnc7XG4gICAgfVxuXG4gICAgLmFydGljbGUtYm9keSB7XG4gICAgICBtYXJnaW46IDAgMTVweDtcblxuICAgICAgJi5kZXNrdG9wIHtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wb3N0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMjUlO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGhlaWdodDogMTIwcHg7XG5cbiAgICAgICYuZGVza3RvcCB7XG4gICAgICAgIGhlaWdodDogMTRyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHdpZHRoOiA5MHZ3O1xuXG4gICAgICAvLyAmLmRlc2t0b3Age1xuICAgICAgLy8gICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICAvLyAgIHdpZHRoOiA0NXZ3O1xuICAgICAgLy8gfVxuICAgIH1cblxuICAgIHByZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICAgIC8vIGNvZGUge1xuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuXG4gICAgLy8gICAubGFuZ3VhZ2Utc2gge1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC50d2l0dGVyLWZvbGxvdy1idXR0b24ge1xuICAgIH1cbiAgfVxuICAucmlnaHQtY29sdW1uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMHZ3O1xuXG4gICAgLy8gaDMge1xuICAgIC8vICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAvLyB9XG5cbiAgICAvLyAuc2VjdGlvbi1jb250YWluZXIge1xuICAgIC8vICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAvLyB9XG4gIH1cbn1cbiIsIi5wb3N0LXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucG9zdC1wYWdlLmRlc2t0b3Age1xuICBtYXJnaW46IDAgMTV2dztcbn1cbi5wb3N0LXBhZ2UuZGVza3RvcCBpbWcge1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIHdpZHRoOiA0NXZ3O1xufVxuLnBvc3QtcGFnZSAucG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucG9zdC1wYWdlIC5wb3N0IGgxIHtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuLnBvc3QtcGFnZSAucG9zdC5kZXNrdG9wIHtcbiAgd2lkdGg6IDUwdnc7XG59XG4ucG9zdC1wYWdlIC5wb3N0IC5hcnRpY2xlLWJvZHkge1xuICBtYXJnaW46IDAgMTVweDtcbn1cbi5wb3N0LXBhZ2UgLnBvc3QgLmFydGljbGUtYm9keS5kZXNrdG9wIHtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuLnBvc3QtcGFnZSAucG9zdCAucG9zdC1pbWFnZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAyNSU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTIwcHg7XG59XG4ucG9zdC1wYWdlIC5wb3N0IC5wb3N0LWltYWdlLWNvbnRhaW5lci5kZXNrdG9wIHtcbiAgaGVpZ2h0OiAxNHJlbTtcbn1cbi5wb3N0LXBhZ2UgLnBvc3QgaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogOTB2dztcbn1cbi5wb3N0LXBhZ2UgLnBvc3QgcHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5wb3N0LXBhZ2UgLnJpZ2h0LWNvbHVtbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIwdnc7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.scss'],
          preserveWhitespaces: true,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }, {
          type: _services_blog_post_blog_post_service__WEBPACK_IMPORTED_MODULE_3__["BlogPostService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog.module.ts":
  /*!*************************************!*\
    !*** ./src/app/blog/blog.module.ts ***!
    \*************************************/

  /*! exports provided: BlogModule */

  /***/
  function srcAppBlogBlogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogModule", function () {
      return BlogModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog-routing.module */
    "./src/app/blog/blog-routing.module.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _app_shared_app_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../app-shared/app-shared.module */
    "./src/app/app-shared/app-shared.module.ts");

    var BlogModule = function BlogModule() {
      _classCallCheck(this, BlogModule);
    };

    BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: BlogModule
    });
    BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function BlogModule_Factory(t) {
        return new (t || BlogModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_shared_app_shared_module__WEBPACK_IMPORTED_MODULE_8__["AppSharedModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogModule, {
        declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_shared_app_shared_module__WEBPACK_IMPORTED_MODULE_8__["AppSharedModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_shared_app_shared_module__WEBPACK_IMPORTED_MODULE_8__["AppSharedModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=blog-blog-module-es5.js.map