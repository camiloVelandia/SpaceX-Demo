webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZWQiLCJoZWFkZXIiLCJ0aGVtZSIsImJvZHkiLCJMb2dvIiwiYSIsIkxpc3QiLCJ1bCIsIk1lbnVDb250YWluZXIiLCJJdGVtIiwibGkiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSx5SkFTSztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsSUFBckI7QUFBQSxDQVRMLENBQVY7QUFZQSxJQUFNQyxJQUFJLEdBQUdKLHlEQUFNLENBQUNLLENBQVY7QUFBQTtBQUFBO0FBQUEsc0lBQVY7QUFjQSxJQUFNQyxJQUFJLEdBQUdOLHlEQUFNLENBQUNPLEVBQVY7QUFBQTtBQUFBO0FBQUEsK0ZBQVY7QUFVQSxJQUFNQyxhQUFhLEdBQUdSLHlEQUFNLENBQUNPLEVBQVY7QUFBQTtBQUFBO0FBQUEsNkRBQW5CO0FBT0EsSUFBTUUsSUFBSSxHQUFHVCx5REFBTSxDQUFDVSxFQUFWO0FBQUE7QUFBQTtBQUFBLDhvQkFFSjtBQUFBLE1BQUdSLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1MsSUFBckI7QUFBQSxDQUZJLEVBa0JnQjtBQUFBLE1BQUdULEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1MsSUFBckI7QUFBQSxDQWxCaEIsRUFvQ087QUFBQSxNQUFHVCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNTLElBQXJCO0FBQUEsQ0FwQ1AsRUFzQ0o7QUFBQSxNQUFHVCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNTLElBQXJCO0FBQUEsQ0F0Q0ksRUFpREY7QUFBQSxNQUFHVCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNTLElBQXJCO0FBQUEsQ0FqREUsQ0FBViIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MmM5MmE2MzU3ZTM3MWNjNTgzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IEhlYWQgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib2R5fTtcbiAgei1pbmRleDogMTA7XG5gO1xuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuYWBcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMjIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJiBpbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICB3aWR0aDogMjcwcHg7XG4gICAgXG4gIH1cbmA7XG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgICBcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBNZW51Q29udGFpbmVyID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBibG9jaztcbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcbiAgJiBhIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgJi5tZW51LWl0ZW17XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfSBcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogODkwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgICB3aWR0aDogMDtcbiAgICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZS1vdXQ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2UtaW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICBtYXgtd2lkdGg6IDcwcHg7XG4gICAgcGFkZGluZzogMnB4IDhweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA4OTBweCkge1xuICAgICAgbWF4LXdpZHRoOiA5MHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICB9XG4gIH1cbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==