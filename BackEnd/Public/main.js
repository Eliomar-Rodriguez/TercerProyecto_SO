(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Chat Program';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-view/main-view.component */ "./src/app/main-view/main-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./backend.service */ "./src/app/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'main', component: _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_9__["MainViewComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_9__["MainViewComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes),
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"]
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]],
            providers: [_backend_service__WEBPACK_IMPORTED_MODULE_17__["BackendService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/backend.service.ts":
/*!************************************!*\
  !*** ./src/app/backend.service.ts ***!
  \************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Se importa las liibrerias del router para el enrutamiento a la pagina principal

var BackendService = /** @class */ (function () {
    function BackendService(_http, router, platformLocation) {
        this._http = _http;
        this.router = router;
        // Registro de usuarios
        this.users = {};
        // Registro de conversaciones
        this.chats = {};
        // Se especifica la dirección del servidor
        this.server = platformLocation.location.origin + '/';
    }
    // Intenta autenticarse y enruta a la pantalla principal si es exitoso
    BackendService.prototype.login = function (id, password) {
        var _this = this;
        this._http
            .post(this.server + "login", { userName: id, contrasenia: password })
            .subscribe(function (result) {
            if (result["success"]) {
                // Si la autenticación es exitosa, se procede a ir a la pagina principal y se guarda la información de autenticacion
                localStorage.setItem("userInfo", JSON.stringify({ name: id, id: result["data"][0]["success"] }));
                _this.router.navigate(["/main"]);
            }
        });
    };
    // Se obtiene la lista de usuarios existentes en el servidor
    BackendService.prototype.getUsers = function () {
        var _this = this;
        this._http.get(this.server + "allUsers").subscribe(function (data) {
            if (data["success"]) {
                var newKeys_1 = {};
                // Castea la información recibida según los datos necesarios
                data["data"].forEach(function (element) {
                    _this.users[element.ID] = { name: element.username };
                    newKeys_1[element.ID] = element.username;
                });
                Object.keys(_this.users).forEach(function (element) {
                    if (newKeys_1[element] == undefined) {
                        _this.users[element] = undefined;
                    }
                });
            }
            else {
                _this.getUsers();
            }
        });
    };
    // Obtiene la conversación con un usuario especifico
    BackendService.prototype.getChat = function (localID, remoteID) {
        var _this = this;
        this._http
            .post(this.server + "getMessagesChat", {
            ID_Emiter: localID,
            ID_Receiver: remoteID
        })
            .subscribe(function (data) {
            _this.chats[remoteID] = [];
            if (data["data"])
                data["data"].forEach(function (element) {
                    _this.chats[remoteID].push({
                        id: element.ID_Emiter,
                        text: element.TextMessage
                    });
                });
        });
    };
    // Envía un mensaje a un usuario
    BackendService.prototype.sendMsg = function (from, to, msg) {
        var _this = this;
        this._http
            .post(this.server + "sendMessage", {
            textMessage: msg,
            ID_Emiter: from,
            ID_Receiver: to
        })
            .subscribe(function (data) {
            if (data["success"]) {
                _this.getChat(from, to);
            }
        });
    };
    BackendService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]])
    ], BackendService);
    return BackendService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-max-width {\r\n  width: 80%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\nmat-card {\r\n  width: 300px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Iniciar Sesión</mat-card-title>\n  <mat-card-content>\n    <form class=\"example-form\">\n      <mat-form-field class=\"input-max-width\">\n        <input\n          [(ngModel)]=\"user.id\"\n          matInput\n          placeholder=\"Usuario\"\n          name=\"userField\"\n        />\n      </mat-form-field>\n\n      <mat-form-field class=\"input-max-width\">\n        <input\n          [(ngModel)]=\"user.pass\"\n          type=\"password\"\n          matInput\n          placeholder=\"Contraseña\"\n          name=\"passField\"\n        />\n      </mat-form-field>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button (click)=\"login()\">Entrar</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backend.service */ "./src/app/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Se importa el servicio de backend para uso del login
var LoginComponent = /** @class */ (function () {
    // El constructor define instancias del BackendService y el Router
    function LoginComponent(_Backend) {
        this._Backend = _Backend;
        // user contiene los datos de los campos de texto
        this.user = {
            id: '',
            pass: ''
        };
    }
    // La unica funcion contenida se encarga de realizar el proceso de autenticacion en conjunto con el servicio de backend
    LoginComponent.prototype.login = function () {
        this._Backend.login(this.user.id, this.user.pass);
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-view/main-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-view/main-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-sidenav {\r\n    width: 250px;\r\n}\r\n.msg {\r\n    margin: 5px;\r\n    max-width: 40%;\r\n}\r\n#usersContainer {\r\n    overflow-y: auto;\r\n    max-height: 80%;\r\n}\r\n#chatInput {\r\n    width: 80%;\r\n    height: 10%;\r\n    margin-left: 10px;\r\n}\r\n/* width */\r\n::-webkit-scrollbar {\r\n    width: 15px;\r\n}\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 5px grey; \r\n    border-radius: 3px;\r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    background: grey; \r\n    border-radius: 3px;\r\n}\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: grey; \r\n}"

/***/ }),

/***/ "./src/app/main-view/main-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-view/main-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container> <!--Contenedor principal de la pagina-->\n  <mat-sidenav mode=\"side\" opened> <!--Barra lateral-->\n    <mat-toolbar>{{ userInfo.name }} (@{{ userInfo.id }})</mat-toolbar> <!--Información del usuario actual sobre la barra-->\n      <mat-nav-list> <!--Contenedor de la lista de usuarios obtenidos desde la base de datos-->\n        <span *ngFor=\"let user of Object.keys(_Backend.users)\"> <!--Este elemento se replica por cada usuario obtenido-->\n          <a\n            mat-list-item\n            *ngIf=\"user != userInfo.id\"\n            (click)=\"selectUser(user)\"\n          > <!--Este elemento solo es visible si su ID es distinta a la actual, esto para evitar enviar mensajes a si mismo-->\n            {{ _Backend.users[user].name }} (@{{ user }})\n          </a>\n        </span>\n      </mat-nav-list>\n    <mat-nav-list style=\"bottom:0;position:absolute;width: 100%\"> <!--Contenedor de los elementos ubicados en la parte baja de la barra lateral-->\n      <mat-toolbar\n        mat-list-item\n        *ngIf=\"activeUser != ''\"\n        style=\"background-color:darkgray;\"\n      > <!--Este componente solo es visible cuando hay un usuario seleccionado-->\n        <mat-form-field style=\"height:80%;width: 100%\">\n          <input\n            matInput\n            [(ngModel)]=\"Contador\"\n            placeholder=\"Mensajes por lotes\"\n            type=\"number\"\n          /> <!--Contador para el envío por lotes de mensajes-->\n        </mat-form-field>\n      </mat-toolbar>\n      <mat-toolbar\n        mat-list-item\n        *ngIf=\"activeUser != '' && Contador > 0 && Contador < maxCounter\"\n        style=\"background-color:darkgray;\"\n      > <!--Este componente contiene el botón para enviar un lote de mensajes a un destinatario, solo es visible cuando se ha seleccionado un usuario activo y el numero de mensajes a enviar no excede el limite-->\n        <button\n          style=\"width:100%;height:100%\"\n          mat-button\n          (click)=\"sendLot(Contador)\"\n        >\n          Enviar {{ Contador }} mensajes a {{ activeUser }}!\n        </button>\n      </mat-toolbar> <!--Este contenedor tiene la función de permitir al usuario salir a la pantalla de inicio de sesión-->\n      <a mat-list-item [routerLink]=\"['']\" style=\"background-color:darkgray;\">\n        Logout\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content> <!--Posee la vista de chats y de envío de mensajes-->\n    <span *ngIf=\"activeUser != '' && activeUser != userInfo.id\"> <!--Este componente no es visible si no se tiene seleccionado a un usuario distinto al usuario local-->\n      <mat-toolbar style=\"background-color:darkgrey\">{{\n        _Backend.users[activeUser].name\n      }}</mat-toolbar> <!--Muestra el destinatario sobre la conversación actual-->\n      <div\n        ng-container\n        *ngIf=\"_Backend.chats[activeUser] != undefined\"\n        style=\"max-height:70%; overflow-y: auto\"\n        id=\"chatLog\"\n      > <!--Contiene la vista de chat-->\n        <mat-card\n          *ngFor=\"let message of _Backend.chats[activeUser]\"\n          class=\"msg\"\n          [ngStyle]=\"{\n            'margin-left': message.id == userInfo.id ? 'auto' : '5px',\n            'background-color': message.id == userInfo.id ? '#a5c7ff' : '#FFF'\n          }\"\n        > <!--Una tarjeta que se replica por cada mensaje en la conversación y muestra el contenido del mensaje, además de alinearse a la derecha o a la izquierda, según el emisor del mensaje-->\n          {{ message.text }}\n        </mat-card>\n      </div>\n\n      <mat-form-field id=\"chatInput\"> <!--Formulario para enviar un mensaje de texto-->\n        <textarea\n          style=\"height:100%\"\n          matInput\n          placeholder=\"{{500-_Backend.users[activeUser].text.length}}\"\n          [(ngModel)]=\"_Backend.users[activeUser].text\"\n        ></textarea> <!--El contenido de esta caja de texto cambia y edita el chat del usuario seleccionado-->\n      </mat-form-field>\n      <button\n        mat-button\n        style=\"margin-left: 5%; width: 10%; background-color: darkgray ; color: white\"\n        (click)=\"send()\"\n      > <!--Boton para enviar el mensaje-->\n        Enviar\n      </button>\n    </span>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/main-view/main-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-view/main-view.component.ts ***!
  \**************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backend.service */ "./src/app/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Se importa las liibrerias del router para el enrutamiento a la pagina principal
 // Se importa el servicio de backend para uso del login
var MainViewComponent = /** @class */ (function () {
    // El constructor define instancias del BackendService y el Router
    function MainViewComponent(_Backend, _Router) {
        this._Backend = _Backend;
        this._Router = _Router;
        // Para utilizar desde el codigo html
        this.Object = Object;
        // Contador para tareas por lote
        this.Contador = 0;
        // Numero maximo de mensajes que se pueden enviar por tarea
        this.maxCounter = 10000;
        // Identifica al usuario actual con que se está conversando
        this.activeUser = "";
        // Se obtiene la información del usuario y se retorna al login si esta no es encontrada
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (this.userInfo === null) {
            this._Router.navigate([""]);
        }
        // Se obtienen los usuarios de la base de datos
        this._Backend.getUsers();
    }
    MainViewComponent.prototype.selectUser = function (user) {
        // Selecciona a un usuario desde la interfaz, para mostrar el chat y especificar el actual destinatario de un mensaje
        if (this._Backend.users[user].text === undefined) {
            this._Backend.users[user].text = "";
        }
        this.activeUser = user;
        // Se actualiza el chat con el destinatario seleccionado
        this._Backend.getChat(this.userInfo.id, this.activeUser);
    };
    MainViewComponent.prototype.send = function () {
        // Envia un mensaje desde el servicio de backend
        this._Backend.sendMsg(this.userInfo.id, this.activeUser, this._Backend.users[this.activeUser].text);
        // Limpia el cuadro de texto ya que el mensaje fue enviado
        this._Backend.users[this.activeUser].text = "";
    };
    // Envia un conjunto de mensajes generado automaticamente
    MainViewComponent.prototype.sendLot = function (C) {
        for (var index = 0; index < C; index++) {
            this._Backend.sendMsg(this.userInfo.id, this.activeUser, "Message #" + (index + 1) + ", " + new Date().toLocaleString());
        }
    };
    MainViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Intervalo que chequea regularmente si se ha recibido un mensaje nuevo
        setInterval(function () {
            if (_this.activeUser !== "") {
                _this._Backend.getChat(_this.userInfo.id, _this.activeUser);
            }
        }, 2000);
    };
    MainViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-main-view",
            template: __webpack_require__(/*! ./main-view.component.html */ "./src/app/main-view/main-view.component.html"),
            styles: [__webpack_require__(/*! ./main-view.component.css */ "./src/app/main-view/main-view.component.css")]
        }),
        __metadata("design:paramtypes", [_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MainViewComponent);
    return MainViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alberth\TercerProyecto_SO\webPage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map