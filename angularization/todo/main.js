(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\prest\Desktop\Forzen\Computer Science\pjnalls\AngularizationDesignSystem\src\main.ts */"zUnb");


/***/ }),

/***/ "A7NC":
/*!***************************************************************!*\
  !*** ./src/app/components/form-input/form-input.component.ts ***!
  \***************************************************************/
/*! exports provided: FormInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInputComponent", function() { return FormInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FormInputComponent {
    constructor() {
        this.onChangedInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.text = '';
    }
    onChange(event) {
        this.onChangedInput.emit(event.target.value);
    }
}
FormInputComponent.ɵfac = function FormInputComponent_Factory(t) { return new (t || FormInputComponent)(); };
FormInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormInputComponent, selectors: [["app-form-input"]], outputs: { onChangedInput: "onChangedInput" }, decls: 1, vars: 0, consts: [["type", "text", "name", "text", "id", "text", "placeholder", "Add a to-do.", "autocomplete", "off", "required", "", "minlength", "1", "maxlength", "280", "pattern", "^[a-zA-Z0-9.,;: ]*$", 1, "form-input", 3, "change"]], template: function FormInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormInputComponent_Template_input_change_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.form-input[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background-color: transparent;\n  border: 0;\n  border-bottom: solid 2px #fff;\n  color: #abebff;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  margin: 0.3rem 0.5rem;\n  width: calc(100vw - 11.5rem);\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #7bbbe0;\n}\ninput[_ngcontent-%COMP%]:valid {\n  border-bottom: solid 2px #88ffcc;\n  color: #abebff;\n  transition: all 0.5s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXF9jb25maWcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxmb3JtLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFBO0FBWUE7RUFDRSxnQkFBQTtBQ1ZGO0FBREE7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0RGcUI7RUNHckIsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUlGO0FBREE7RUFDRSxjRFRvQjtBQ2F0QjtBQURBO0VBQ0UsZ0NBQUE7RUFDQSxjRGZxQjtFQUlyQixnQ0FBQTtBQ2dCRiIsImZpbGUiOiJmb3JtLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEFwcCBDb25maWd1cmF0aW9uIFZhcmlhYmxlcyAqL1xyXG4kcHJpbWFyeS1jb2xvcjogIzMwNjVmZjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzIwNGVmZjtcclxuJHRlcnRpYXJ5LWNvbG9yOiAjMTIxZmExO1xyXG4kdGV4dC1jb2xvci1wcmltYXJ5OiAjZmZmO1xyXG4kdGV4dC1jb2xvci1zZWNvbmRhcnk6ICNhYmViZmY7XHJcbiR0ZXh0LWNvbG9yLWRpc2FibGVkOiAjN2JiYmUwO1xyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbioge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn0iLCIvKiogQXBwIENvbmZpZ3VyYXRpb24gVmFyaWFibGVzICovXG4qIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZvcm0taW5wdXQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZmZmO1xuICBjb2xvcjogI2FiZWJmZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgbWFyZ2luOiAwLjNyZW0gMC41cmVtO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDExLjVyZW0pO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM3YmJiZTA7XG59XG5cbmlucHV0OnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICM4OGZmY2M7XG4gIGNvbG9yOiAjYWJlYmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn0iXX0= */"] });


/***/ }),

/***/ "Ahic":
/*!***************************************************!*\
  !*** ./src/app/components/todo/todo.component.ts ***!
  \***************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1, a2, a3) { return { "delete__transition-up__stack": a0, "delete__transition-up__top": a1, "added__transition-up__start": a2, "added__transition-up__finished": a3 }; };
class TodoComponent {
    constructor() {
        this.todo = {
            id: 0,
            text: '',
            day: '',
        };
        this.todos = [];
        this.onDeleteTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onToggleReminder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteBtnClicked = false;
        this.animationIsDelayed = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.animationIsDelayed = true;
        }, 100);
    }
    onDelete(todo) {
        this.deleteBtnClicked = true;
        this.onDeleteTodo.emit(todo);
    }
}
TodoComponent.ɵfac = function TodoComponent_Factory(t) { return new (t || TodoComponent)(); };
TodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoComponent, selectors: [["app-todo"]], inputs: { todo: "todo", todos: "todos" }, outputs: { onDeleteTodo: "onDeleteTodo", onToggleReminder: "onToggleReminder" }, decls: 8, vars: 8, consts: [[1, "todo", 3, "ngClass"], [1, "todo__text"], [1, "delete", 3, "click"]], template: function TodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_Template_span_click_6_listener() { return ctx.onDelete(ctx.todo); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c0, ctx.deleteBtnClicked && !ctx.todo.top, ctx.deleteBtnClicked && ctx.todo.top, ctx.todo.added, ctx.animationIsDelayed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.day);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.todo[_ngcontent-%COMP%] {\n  background: #3065ff;\n  margin: 2rem 2rem;\n  padding: 0 0.25rem;\n  cursor: pointer;\n  border-radius: 0.225rem;\n  box-shadow: 1px 6px 10px 4px rgba(0, 0, 0, 0.3);\n}\n.todo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 400;\n  padding: 0.5rem 1rem;\n}\n.todo__text[_ngcontent-%COMP%] {\n  width: 67vw;\n  padding: 0.5rem;\n}\n.todo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 0.5rem;\n  text-align: center;\n}\n.todo[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  color: #abebff;\n  font-weight: 800;\n  padding: 0.5rem;\n}\n.delete__transition-up__top[_ngcontent-%COMP%] {\n  margin: -4rem -100% 0 100% !important;\n  padding: 0;\n  font-size: 0;\n  opacity: 0 !important;\n  transition: all 0.5s ease-in-out;\n}\n.delete__transition-up__stack[_ngcontent-%COMP%] {\n  margin: -6rem -100% 0 100% !important;\n  font-size: 0;\n  opacity: 0 !important;\n  transition: all 0.5s ease-in-out;\n}\n.added__transition-up__start[_ngcontent-%COMP%] {\n  margin: 50%;\n  opacity: 0;\n}\n.added__transition-up__finished[_ngcontent-%COMP%] {\n  margin: 2rem 2rem;\n  opacity: 1;\n  transition: all 0.5s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXF9jb25maWcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx0b2RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFBO0FBWUE7RUFDRSxnQkFBQTtBQ1ZGO0FBREE7RUFDRSxtQkRGYztFQ0dkLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFHQSwrQ0FBQTtBQUlGO0FBRkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFJSjtBQURFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFHSjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQ0U7RUFDRSxjRDNCbUI7RUM0Qm5CLGdCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBR0E7RUFDRSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RURqQ0EsZ0NBQUE7QUNrQ0Y7QUFHQTtFQUNFLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VEeENBLGdDQUFBO0FDeUNGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQUFGO0FBR0E7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RURuREEsZ0NBQUE7QUNvREYiLCJmaWxlIjoidG9kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBBcHAgQ29uZmlndXJhdGlvbiBWYXJpYWJsZXMgKi9cclxuJHByaW1hcnktY29sb3I6ICMzMDY1ZmY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICMyMDRlZmY7XHJcbiR0ZXJ0aWFyeS1jb2xvcjogIzEyMWZhMTtcclxuJHRleHQtY29sb3ItcHJpbWFyeTogI2ZmZjtcclxuJHRleHQtY29sb3Itc2Vjb25kYXJ5OiAjYWJlYmZmO1xyXG4kdGV4dC1jb2xvci1kaXNhYmxlZDogIzdiYmJlMDtcclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4qIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59IiwiLyoqIEFwcCBDb25maWd1cmF0aW9uIFZhcmlhYmxlcyAqL1xuKiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50b2RvIHtcbiAgYmFja2dyb3VuZDogIzMwNjVmZjtcbiAgbWFyZ2luOiAycmVtIDJyZW07XG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjIyNXJlbTtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggNnB4IDEwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggNnB4IDEwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogMXB4IDZweCAxMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4udG9kbyBoMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG4udG9kb19fdGV4dCB7XG4gIHdpZHRoOiA2N3Z3O1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4udG9kbyBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b2RvIC5kZWxldGUge1xuICBjb2xvcjogI2FiZWJmZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uZGVsZXRlX190cmFuc2l0aW9uLXVwX190b3Age1xuICBtYXJnaW46IC00cmVtIC0xMDAlIDAgMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDA7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5kZWxldGVfX3RyYW5zaXRpb24tdXBfX3N0YWNrIHtcbiAgbWFyZ2luOiAtNnJlbSAtMTAwJSAwIDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwO1xuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYWRkZWRfX3RyYW5zaXRpb24tdXBfX3N0YXJ0IHtcbiAgbWFyZ2luOiA1MCU7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5hZGRlZF9fdHJhbnNpdGlvbi11cF9fZmluaXNoZWQge1xuICBtYXJnaW46IDJyZW0gMnJlbTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59Il19 */"] });


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

/***/ "Im+i":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-button/form-button.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormButtonComponent", function() { return FormButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FormButtonComponent {
    constructor() {
        this.onAddTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onAdd() {
        this.onAddTodo.emit();
    }
}
FormButtonComponent.ɵfac = function FormButtonComponent_Factory(t) { return new (t || FormButtonComponent)(); };
FormButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormButtonComponent, selectors: [["app-form-button"]], outputs: { onAddTodo: "onAddTodo" }, decls: 2, vars: 0, consts: [["type", "submit", 1, "form-button", 3, "click"]], template: function FormButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormButtonComponent_Template_button_click_0_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ADD TODO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.form-button[_ngcontent-%COMP%] {\n  border: 0;\n  color: #121fa1;\n  background: #fff;\n  font-size: 1rem;\n  margin: 0 0.75rem;\n  font-weight: 700;\n  width: 7.5rem;\n  padding: 0.5rem 0;\n  border: solid 2px #121fa1;\n  border-radius: 0.225rem;\n}\n.form-button[_ngcontent-%COMP%]:hover {\n  background: #abebff;\n  border-color: #000;\n  color: #000;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXF9jb25maWcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxmb3JtLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBQTtBQVlBO0VBQ0UsZ0JBQUE7QUNWRjtBQURBO0VBQ0UsU0FBQTtFQUNBLGNERGU7RUNFZixnQkREbUI7RUNFbkIsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBSUY7QUFEQTtFQUNFLG1CRFhxQjtFQ1lyQixrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VEVkEsZ0NBQUE7QUNlRiIsImZpbGUiOiJmb3JtLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBBcHAgQ29uZmlndXJhdGlvbiBWYXJpYWJsZXMgKi9cclxuJHByaW1hcnktY29sb3I6ICMzMDY1ZmY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICMyMDRlZmY7XHJcbiR0ZXJ0aWFyeS1jb2xvcjogIzEyMWZhMTtcclxuJHRleHQtY29sb3ItcHJpbWFyeTogI2ZmZjtcclxuJHRleHQtY29sb3Itc2Vjb25kYXJ5OiAjYWJlYmZmO1xyXG4kdGV4dC1jb2xvci1kaXNhYmxlZDogIzdiYmJlMDtcclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4qIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59IiwiLyoqIEFwcCBDb25maWd1cmF0aW9uIFZhcmlhYmxlcyAqL1xuKiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb3JtLWJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICMxMjFmYTE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luOiAwIDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiA3LjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICBib3JkZXI6IHNvbGlkIDJweCAjMTIxZmExO1xuICBib3JkZXItcmFkaXVzOiAwLjIyNXJlbTtcbn1cblxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2FiZWJmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogIzAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn0iXX0= */"] });


/***/ }),

/***/ "RPnm":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo/todo.component */ "Ahic");



function TodoListComponent_app_todo_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-todo", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDeleteTodo", function TodoListComponent_app_todo_1_Template_app_todo_onDeleteTodo_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const todo_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteTodo(todo_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", todo_r1)("todos", ctx_r0.todos);
} }
class TodoListComponent {
    constructor() {
        this.todos = [];
    }
    deleteTodo(todo) {
        /**
         * Give CSS some time to play delete animation.
         */
        setTimeout(() => {
            this.todos.forEach((x, i) => {
                if (x.id === todo.id) {
                    this.todos.splice(i, 1);
                    if (i === 0)
                        this.todos[0].top = true;
                }
            });
        }, 1000);
    }
    ngOnInit() { }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["app-todo-list"]], inputs: { todos: "todos" }, decls: 2, vars: 1, consts: [[1, "todo-list"], [3, "todo", "todos", "onDeleteTodo", 4, "ngFor", "ngForOf"], [3, "todo", "todos", "onDeleteTodo"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoListComponent_app_todo_1_Template, 1, 2, "app-todo", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _todo_todo_component__WEBPACK_IMPORTED_MODULE_2__["TodoComponent"]], styles: [".todo-list[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n  padding-top: 6rem;\n  overflow-y: scroll;\n  height: calc(100vh - 4rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUNGIiwiZmlsZSI6InRvZG8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvLWxpc3Qge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgcGFkZGluZy10b3A6IDZyZW07XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xyXG59Il19 */"] });


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
/* harmony import */ var _mock_todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-todos */ "lGmQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/title/title.component */ "bwXy");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "RPnm");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/form/form.component */ "x83m");





class AppComponent {
    constructor() {
        this.brand = 'Aº';
        this.appType = 'TODOs';
        this.todos = _mock_todos__WEBPACK_IMPORTED_MODULE_0__["TODOS"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 4, consts: [[1, "container"], [3, "brand", "appType"], [3, "todos"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-todo-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("brand", ctx.brand)("appType", ctx.appType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("todos", ctx.todos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("todos", ctx.todos);
    } }, directives: [_components_title_title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"], _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"], _components_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form/form.component */ "x83m");
/* harmony import */ var _components_form_button_form_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/form-button/form-button.component */ "Im+i");
/* harmony import */ var _components_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form-input/form-input.component */ "A7NC");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/title/title.component */ "bwXy");
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/todo/todo.component */ "Ahic");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "RPnm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"],
        _components_form_button_form_button_component__WEBPACK_IMPORTED_MODULE_4__["FormButtonComponent"],
        _components_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_5__["FormInputComponent"],
        _components_title_title_component__WEBPACK_IMPORTED_MODULE_6__["TitleComponent"],
        _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
        _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__["TodoListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]] }); })();


/***/ }),

/***/ "bwXy":
/*!*****************************************************!*\
  !*** ./src/app/components/title/title.component.ts ***!
  \*****************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TitleComponent {
    constructor() {
        this.brand = '';
        this.appType = '';
    }
    ngOnInit() {
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], inputs: { brand: "brand", appType: "appType" }, decls: 6, vars: 2, consts: [[1, "title"], [1, "title__name"], [1, "title__brand"], [1, "title__app-type"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.appType, "");
    } }, styles: ["*[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.title[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  background: linear-gradient(to bottom, #3065ff, #204eff);\n}\n.title__name[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  padding: 1rem 1rem;\n  margin-bottom: 0;\n  font-weight: 300;\n}\n.title__brand[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.title__app-type[_ngcontent-%COMP%] {\n  color: #abebff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXF9jb25maWcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx0aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBQTtBQVlBO0VBQ0UsZ0JBQUE7QUNWRjtBQURBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSx3REFBQTtBQUlGO0FBRUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0FBREo7QUFJRTtFQUNFLGNEcEJtQjtBQ2tCdkIiLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQXBwIENvbmZpZ3VyYXRpb24gVmFyaWFibGVzICovXHJcbiRwcmltYXJ5LWNvbG9yOiAjMzA2NWZmO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjA0ZWZmO1xyXG4kdGVydGlhcnktY29sb3I6ICMxMjFmYTE7XHJcbiR0ZXh0LWNvbG9yLXByaW1hcnk6ICNmZmY7XHJcbiR0ZXh0LWNvbG9yLXNlY29uZGFyeTogI2FiZWJmZjtcclxuJHRleHQtY29sb3ItZGlzYWJsZWQ6ICM3YmJiZTA7XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuKiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSIsIi8qKiBBcHAgQ29uZmlndXJhdGlvbiBWYXJpYWJsZXMgKi9cbioge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0bGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzA2NWZmLCAjMjA0ZWZmKTtcbn1cbi50aXRsZV9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnRpdGxlX19icmFuZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4udGl0bGVfX2FwcC10eXBlIHtcbiAgY29sb3I6ICNhYmViZmY7XG59Il19 */"] });


/***/ }),

/***/ "lGmQ":
/*!*******************************!*\
  !*** ./src/app/mock-todos.ts ***!
  \*******************************/
/*! exports provided: TODOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODOS", function() { return TODOS; });
const TODOS = [
    {
        id: 1,
        text: 'Take out the trash.',
        day: '11/17 @ 7:00 AM',
        top: true,
    },
    {
        id: 2,
        text: 'Eat lunch.',
        day: '11/18 @ 12:00 PM',
    },
    {
        id: 3,
        text: 'Doctor\'s appointment.',
        day: '11/19 @ 3:45 PM',
    },
];


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "x83m":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-input/form-input.component */ "A7NC");
/* harmony import */ var _form_button_form_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-button/form-button.component */ "Im+i");




class FormComponent {
    constructor() {
        this.todos = [];
        this.text = '';
    }
    ngOnInit() { }
    onSubmit() {
        if (!this.text) {
            alert('Please add a task.');
            return;
        }
        const dateTime = new Date();
        const newTodo = {
            id: this.todos.length + 1,
            text: this.text,
            day: `${dateTime.getMonth() + 1}/${dateTime.getDate()} @ ${this.formatAMPM(dateTime)}`,
            added: true,
        };
        this.addTodo(newTodo);
    }
    addTodo(todo) {
        /**
         * Give CSS some time to play delete animation.
         */
        this.todos.push(todo);
    }
    updateInputText(text) {
        this.text = text;
    }
    formatAMPM(date) {
        let hours = date.getHours(), minutes = date.getMinutes(), ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${hours}:${minutes} ${ampm}`;
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], inputs: { todos: "todos" }, decls: 4, vars: 0, consts: [[1, "form", 3, "ngSubmit"], [1, "form-control"], [3, "onChangedInput"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-form-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangedInput", function FormComponent_Template_app_form_input_onChangedInput_2_listener($event) { return ctx.updateInputText($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-form-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_2__["FormInputComponent"], _form_button_form_button_component__WEBPACK_IMPORTED_MODULE_3__["FormButtonComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.form[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: fixed;\n  width: 100vw;\n  bottom: 0;\n  background: linear-gradient(to bottom, #204eff, #3065ff);\n  font-size: 2rem;\n  padding: 1rem 1rem;\n  margin-bottom: 0;\n  font-weight: 300;\n}\n.form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100vw;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXF9jb25maWcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFBO0FBWUE7RUFDRSxnQkFBQTtBQ1ZGO0FBREE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHdEQUFBO0VBWUEsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVBGO0FBRkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSUoiLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBBcHAgQ29uZmlndXJhdGlvbiBWYXJpYWJsZXMgKi9cclxuJHByaW1hcnktY29sb3I6ICMzMDY1ZmY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICMyMDRlZmY7XHJcbiR0ZXJ0aWFyeS1jb2xvcjogIzEyMWZhMTtcclxuJHRleHQtY29sb3ItcHJpbWFyeTogI2ZmZjtcclxuJHRleHQtY29sb3Itc2Vjb25kYXJ5OiAjYWJlYmZmO1xyXG4kdGV4dC1jb2xvci1kaXNhYmxlZDogIzdiYmJlMDtcclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4qIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59IiwiLyoqIEFwcCBDb25maWd1cmF0aW9uIFZhcmlhYmxlcyAqL1xuKiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb3JtIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzIwNGVmZiwgIzMwNjVmZik7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmZvcm0gLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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