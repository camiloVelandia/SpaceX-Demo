webpackHotUpdate_N_E("pages/capsules",{

/***/ "./components/CapsulCard/styles.js":
/*!*****************************************!*\
  !*** ./components/CapsulCard/styles.js ***!
  \*****************************************/
/*! exports provided: Container, Info, Name, Lists, Text, Figure, Ul, Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lists", function() { return Lists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Figure", function() { return Figure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ul", function() { return Ul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "styles__Container",
  componentId: "pem3wt-0"
})(["width:100%;margin-bottom:40px;border:1px solid ", ";border-radius:25px;padding:30px 20px;@media (min-width:992px){width:42%;padding:40px 30px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.text;
});
var Info = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Info",
  componentId: "pem3wt-1"
})(["border:1px solid ", ";padding:40px 15px;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.text;
});
var Name = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Name",
  componentId: "pem3wt-2"
})(["text-transform:uppercase;font-weight:600;font-size:28px;"]);
var Lists = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Lists",
  componentId: "pem3wt-3"
})(["padding:40px 15px;display:flex;flex-wrap:wrap;justify-content:space-around;"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__Text",
  componentId: "pem3wt-4"
})(["font-size:14px;"]);
var Figure = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].figure.withConfig({
  displayName: "styles__Figure",
  componentId: "pem3wt-5"
})(["font-size:14px;max-width:224px;max-height:224px;height:100%;margin:0 auto;margin-top:60px;& img{height:100%;width:100%;object-fit:contain;}"]);
var Ul = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "styles__Ul",
  componentId: "pem3wt-6"
})(["text-align:center;margin:0;list-style-position:inside;padding:0;margin-top:30px;width:100%;& h2{text-transform:capitalize;font-size:24px;margin:0;padding-bottom:10px;}& li{text-transform:capitalize;font-size:14px;}@media (min-width:400px){width:48%;text-align:left;}"]);
var Status = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Status",
  componentId: "pem3wt-7"
})(["margin-top:60px;& p{margin:0 auto;display:flex;border:2px solid ", ";color:#98e832;text-transform:uppercase;font-size:16px;padding:10px 40px;width:fit-content;}@media (min-width:768px){& p{font-size:24px;}}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.succes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXBzdWxDYXJkL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwidGhlbWUiLCJ0ZXh0IiwiSW5mbyIsImRpdiIsIk5hbWUiLCJMaXN0cyIsIlRleHQiLCJwIiwiRmlndXJlIiwiZmlndXJlIiwiVWwiLCJ1bCIsIlN0YXR1cyIsInN1Y2NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsd0pBR0E7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLElBQXJCO0FBQUEsQ0FIQSxDQUFmO0FBWUEsSUFBTUMsSUFBSSxHQUFHSix5REFBTSxDQUFDSyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlEQUNLO0FBQUEsTUFBR0gsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxJQUFyQjtBQUFBLENBREwsQ0FBVjtBQUlBLElBQU1HLElBQUksR0FBR04seURBQU0sQ0FBQ0ssR0FBVjtBQUFBO0FBQUE7QUFBQSxnRUFBVjtBQUtBLElBQU1FLEtBQUssR0FBR1AseURBQU0sQ0FBQ0ssR0FBVjtBQUFBO0FBQUE7QUFBQSxtRkFBWDtBQVFBLElBQU1HLElBQUksR0FBR1IseURBQU0sQ0FBQ1MsQ0FBVjtBQUFBO0FBQUE7QUFBQSx1QkFBVjtBQUdBLElBQU1DLE1BQU0sR0FBR1YseURBQU0sQ0FBQ1csTUFBVjtBQUFBO0FBQUE7QUFBQSxtSkFBWjtBQWNBLElBQU1DLEVBQUUsR0FBR1oseURBQU0sQ0FBQ2EsRUFBVjtBQUFBO0FBQUE7QUFBQSxrUkFBUjtBQXVCQSxJQUFNQyxNQUFNLEdBQUdkLHlEQUFNLENBQUNLLEdBQVY7QUFBQTtBQUFBO0FBQUEsdU5BS0s7QUFBQSxNQUFHSCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNhLE1BQXJCO0FBQUEsQ0FMTCxDQUFaIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcHN1bGVzLjA1MWJkM2RhMjExMzVmMTY0N2YwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIHdpZHRoOiA0MiU7XG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5mbyA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIHBhZGRpbmc6IDQwcHggMTVweDtcbmA7XG5leHBvcnQgY29uc3QgTmFtZSA9IHN0eWxlZC5kaXZgXG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6NjAwO1xuICBmb250LXNpemU6MjhweDtcbmA7XG5leHBvcnQgY29uc3QgTGlzdHMgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA0MHB4IDE1cHg7XG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC13cmFwOndyYXA7XG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTRweDtcbmA7XG5leHBvcnQgY29uc3QgRmlndXJlID0gc3R5bGVkLmZpZ3VyZWBcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXgtd2lkdGg6MjI0cHg7XG4gIG1heC1oZWlnaHQ6MjI0cHg7XG4gIGhlaWdodDoxMDAlO1xuICBtYXJnaW46MCBhdXRvO1xuICBtYXJnaW4tdG9wOjYwcHg7XG4gICYgaW1ne1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgb2JqZWN0LWZpdDpjb250YWluO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVWwgPSBzdHlsZWQudWxgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAmIGgyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gICYgbGkge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgICB3aWR0aDogNDglO1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0YXR1cyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gICYgcCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnN1Y2Nlc307XG4gICAgY29sb3I6ICM5OGU4MzI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAmIHAge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=