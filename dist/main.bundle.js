webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n<!-- <app-home></app-home>\n<app-contact> </app-contact>\n-->\n\n<app-menu></app-menu>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'five points';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__ = __webpack_require__("./src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__uppercase_uppercase_component__ = __webpack_require__("./src/app/uppercase/uppercase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mailprotector_mailprotector_component__ = __webpack_require__("./src/app/mailprotector/mailprotector.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'uppercase', component: __WEBPACK_IMPORTED_MODULE_7__uppercase_uppercase_component__["a" /* UppercaseComponent */] },
    { path: 'mailprotector', component: __WEBPACK_IMPORTED_MODULE_9__mailprotector_mailprotector_component__["a" /* MailprotectorComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_7__uppercase_uppercase_component__["a" /* UppercaseComponent */],
                __WEBPACK_IMPORTED_MODULE_9__mailprotector_mailprotector_component__["a" /* MailprotectorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Page Content -->\n <div class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-3\">\n        <h1 class=\"my-4\">Shop Name</h1>\n        <div class=\"list-group\">\n          <a href=\"#\" class=\"list-group-item active\">Category 1</a>\n          <a href=\"#\" class=\"list-group-item\">Category 2</a>\n          <a href=\"#\" class=\"list-group-item\">Category 3</a>\n        </div>\n      </div>\n      <!-- /.col-lg-3 -->\n\n      <div class=\"col-lg-9\">\n\n        <div class=\"card mt-4\">\n          <img class=\"card-img-top img-fluid\" src=\"assets/poisson-chat-900x400.jpg\" alt=\"\">\n          <div class=\"card-body\">\n            <h3 class=\"card-title\">Product Name</h3>\n            <h4>$24.99</h4>\n            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>\n            <span class=\"text-warning\">&#9733; &#9733; &#9733; &#9733; &#9734;</span>\n            4.0 stars\n          </div>\n        </div>\n        <!-- /.card -->\n\n        <div class=\"card card-outline-secondary my-4\">\n          <div class=\"card-header\">\n            Product Reviews\n          </div>\n          <div class=\"card-body\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>\n            <small class=\"text-muted\">Posted by Anonymous on 3/1/17</small>\n            <hr>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>\n            <small class=\"text-muted\">Posted by Anonymous on 3/1/17</small>\n            <hr>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>\n            <small class=\"text-muted\">Posted by Anonymous on 3/1/17</small>\n            <hr>\n            <a href=\"#\" class=\"btn btn-success\">Leave a Review</a>\n          </div>\n        </div>\n        <!-- /.card -->\n\n      </div>\n      <!-- /.col-lg-9 -->\n\n    </div>\n\n  </div>\n  <!-- /.container -->\n\n  <!-- Footer -->\n  <footer class=\"py-5 bg-dark\">\n    <div class=\"container\">\n      <p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2017</p>\n    </div>\n    <!-- /.container -->\n  </footer>\n\n\n\n\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to appng!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mailprotector/mailprotector.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mailprotector/mailprotector.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<textarea> Entrez votre mail</textarea>\n<input [(ngModel)]=\"mail\">\n<!-- <label>{{mail}} </label> -->\n<button (click)='protectmail(mail)'>Protect</button>\n<!-- <textarea> {{isValide(mail)}}</textarea> -->\n<textarea> Mail protégé</textarea>\n<textarea> {{mailprotected}}</textarea>\n"

/***/ }),

/***/ "./src/app/mailprotector/mailprotector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailprotectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailprotectorComponent = /** @class */ (function () {
    function MailprotectorComponent() {
    }
    MailprotectorComponent.prototype.protectmail = function (mail) {
        var name = '';
        var domain = '';
        var domain2 = '';
        var nameprotected = '';
        var domainprotected = '';
        if (this.isValide(mail) === false) {
            return (this.mailprotected = 'mail invalide');
        }
        else {
            name = mail.substring(0, mail.lastIndexOf('@'));
            domain = mail.substring(mail.lastIndexOf('@') + 1, mail.lastIndexOf('.'));
            domain2 = mail.substring(mail.lastIndexOf('.') + 1);
            console.log(name); // john.doe
            console.log(domain); // email
            console.log(domain2); // com
            nameprotected = name.substr(0, 1);
            domainprotected = domain.substr(0, 1);
            for (var i = 1; i < name.length; i++) {
                nameprotected += '*';
            }
            for (var i = 1; i < domain.length; i++) {
                domainprotected += '*';
            }
            this.mailprotected = nameprotected + '@' + domainprotected + '.' + domain2;
        }
        return (this.mailprotected);
    };
    MailprotectorComponent.prototype.isValide = function (mail) {
        // tslint:disable-next-line:max-line-length
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (reg.test(mail));
    };
    MailprotectorComponent.prototype.ngOnInit = function () {
    };
    MailprotectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mailprotector',
            template: __webpack_require__("./src/app/mailprotector/mailprotector.component.html"),
            styles: [__webpack_require__("./src/app/mailprotector/mailprotector.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MailprotectorComponent);
    return MailprotectorComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Navigation -->\n <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">Start Bootstrap</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" routerLink=\"/\" >Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"mailprotector\">Mail Protector</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"uppercase\">Uppercase</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"contact\">Contact</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/uppercase/uppercase.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/uppercase/uppercase.component.html":
/***/ (function(module, exports) {

module.exports = "<input [(ngModel)]=\"name\">\n<label>{{name}} </label>\n<button (click)='uppercase()'>uppercase</button>\n"

/***/ }),

/***/ "./src/app/uppercase/uppercase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UppercaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UppercaseComponent = /** @class */ (function () {
    function UppercaseComponent() {
    }
    UppercaseComponent.prototype.uppercase = function () {
        // tslint:disable-next-line:prefer-const
        var newname = '';
        // tslint:disable-next-line:whitespace
        // tslint:disable-next-line:max-line-length
        // const tab1 = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        // tslint:disable-next-line:max-line-length
        // const tab2 = ['A', 'B' , 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y' , 'Z'];
        for (var i = 0; i < this.name.length; i++) {
            var caracode = this.name.charCodeAt(i);
            // tslint:disable-next-line:whitespace
            if (caracode > 96 && caracode < 123) {
                newname += String.fromCharCode(caracode - 32);
            }
            else {
                newname += String.fromCharCode(caracode);
            }
        }
        this.name = newname;
    };
    UppercaseComponent.prototype.ngOnInit = function () {
    };
    UppercaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-uppercase',
            template: __webpack_require__("./src/app/uppercase/uppercase.component.html"),
            styles: [__webpack_require__("./src/app/uppercase/uppercase.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UppercaseComponent);
    return UppercaseComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map