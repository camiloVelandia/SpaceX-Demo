webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header/styles.js":
/*!*************************************!*\
  !*** ./components/Header/styles.js ***!
  \*************************************/
/*! exports provided: Head, Logo, List, MenuContainer, Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Head = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.withConfig({
  displayName: "styles__Head",
  componentId: "sc-2csmix-0"
})(["display:flex;justify-content:space-between;align-items:center;padding:20px;position:fixed;top:0;left:0;right:0;background-color:", ";z-index:10;"], function (_ref) {
  var theme = _ref.theme;
  return theme.body;
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-2csmix-1"
})(["height:50px;width:220px;cursor:pointer;& img{height:100%;width:100%;object-fit:contain;}@media (min-width:768px){width:270px;}"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "styles__List",
  componentId: "sc-2csmix-2"
})(["display:none;padding:0;margin:0;list-style:none;@media (min-width:768px){display:flex;}"]);
var MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "styles__MenuContainer",
  componentId: "sc-2csmix-3"
})(["display:block;@media (min-width:768px){display:none;}"]);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "styles__Item",
  componentId: "sc-2csmix-4"
})(["& a{color:", ";text-decoration:none;margin-right:12px;position:relative;padding-bottom:6px;padding-right:5px;font-size:12px;&.menu-item{color:white;}@media (min-width:890px){font-size:16px;margin-right:30px;}&:after{content:\"\";border-bottom:2px solid ", ";width:0;transition:0.6s ease-out;position:absolute;bottom:0;left:0;}&:hover{&:after{content:\"\";transition:0.6s ease-in;width:100%;}}}& input{background-color:transparent;border:1px solid ", ";border-radius:22px;color:", ";max-width:70px;padding:2px 8px;font-size:12px;margin-right:0;@media (min-width:890px){max-width:90px;font-size:14px;margin-right:30px;}&::placeholder{color:", ";}}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.text;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.text;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.text;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.text;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.text;
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZWQiLCJoZWFkZXIiLCJ0aGVtZSIsImJvZHkiLCJMb2dvIiwiYSIsIkxpc3QiLCJ1bCIsIk1lbnVDb250YWluZXIiLCJJdGVtIiwibGkiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSx5SkFTSztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsSUFBckI7QUFBQSxDQVRMLENBQVY7QUFZQSxJQUFNQyxJQUFJLEdBQUdKLHlEQUFNLENBQUNLLENBQVY7QUFBQTtBQUFBO0FBQUEsc0lBQVY7QUFjQSxJQUFNQyxJQUFJLEdBQUdOLHlEQUFNLENBQUNPLEVBQVY7QUFBQTtBQUFBO0FBQUEsK0ZBQVY7QUFVQSxJQUFNQyxhQUFhLEdBQUdSLHlEQUFNLENBQUNPLEVBQVY7QUFBQTtBQUFBO0FBQUEsNkRBQW5CO0FBT0EsSUFBTUUsSUFBSSxHQUFHVCx5REFBTSxDQUFDVSxFQUFWO0FBQUE7QUFBQTtBQUFBLDhvQkFFSjtBQUFBLE1BQUdSLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1MsSUFBckI7QUFBQSxDQUZJLEVBa0JnQjtBQUFBLE1BQUdULEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1MsSUFBckI7QUFBQSxDQWxCaEIsRUFvQ087QUFBQSxNQUFHVCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNTLElBQXJCO0FBQUEsQ0FwQ1AsRUFzQ0o7QUFBQSxNQUFHVCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNTLElBQXJCO0FBQUEsQ0F0Q0ksRUFpREY7QUFBQSxNQUFHVCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNTLElBQXJCO0FBQUEsQ0FqREUsQ0FBViIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjUyYzkyYTYzNTdlMzcxY2M1ODMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgSGVhZCA9IHN0eWxlZC5oZWFkZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvZHl9O1xuICB6LWluZGV4OiAxMDtcbmA7XG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5hYFxuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAyMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIHdpZHRoOiAyNzBweDtcbiAgICBcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICAgIFxuICB9XG5gO1xuZXhwb3J0IGNvbnN0IE1lbnVDb250YWluZXIgPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICAmIGEge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAmLm1lbnUtaXRlbXtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9IFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA4OTBweCkge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgdHJhbnNpdGlvbjogMC42cyBlYXNlLW91dDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZS1pbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJiBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDg5MHB4KSB7XG4gICAgICBtYXgtd2lkdGg6IDkwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgfVxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgIH1cbiAgfVxuYDsiXSwic291cmNlUm9vdCI6IiJ9