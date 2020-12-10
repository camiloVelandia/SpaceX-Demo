webpackHotUpdate_N_E("pages/_app",{

/***/ "./globlalStyles.js":
/*!**************************!*\
  !*** ./globlalStyles.js ***!
  \**************************/
/*! exports provided: Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n/* -------------------------------------------------------------------------- */\n/*----------------------------------Variables-------------------------------- */\n/* -------------------------------------------------------------------------- */\n:root{\n  --back-color:", ";\n}\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\nbody {\n  margin: 0;\n  font-family:Arial, Helvetica, sans-serif;\n  background-color:", " ;\n  color:", ";\n  transition: all 0.25s linear;\n}\n\n/* Position and sizing of burger button */\n.bm-burger-button {\n  position: fixed;\n  width: 36px;\n  height: 18px;\n  right: 36px;\n  top: 36px;\n}\n\n/* Color/shape of burger icon bars */\n.bm-burger-bars {\n  background: white;\n  height:10px;\n}\n\n/* Color/shape of burger icon bars on hover*/\n.bm-burger-bars-hover {\n  background: white;\n}\n\n/* Position and sizing of clickable cross button */\n.bm-cross-button {\n  height: 12px;\n  width: 24px;\n}\n\n/* Color/shape of close button cross */\n.bm-cross {\n  background: #bdc3c7;\n}\n\n/*\nSidebar wrapper styles\nNote: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases\n*/\n.bm-menu-wrap {\n  position: fixed;\n  height: 100%;\n  top:0;\n  overflow:hidden;\n  overflow-y:hidden;\n}\n\n/* General sidebar styles */\n.bm-menu {\n  overflow:hidden;\n  overflow-y:hidden;\n  background: black;\n  padding: 2.5em 1.5em 0;\n  font-size: 1.15em;\n}\n\n/* Morph shape necessary with bubble or elastic */\n.bm-morph-shape {\n  fill: #373a47;\n  overflow:hidden;\n  overflow-y:hidden;\n}\n\n\n/* Wrapper for item list */\n.bm-item-list {\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  padding: 0.8em;\n  overflow:hidden;\n  overflow-y:hidden;\n  flex-direction:column;\n  height:50vh;\n  & li{\n    margin-top:-30px;\n    padding-bottom:50px;\n    outline:none;\n  }\n}\n\n/* Individual item */\n.bm-item {\n  display: inline-block;\n}\n\n/* Styling of overlay */\n.bm-overlay {\n  background: rgba(0, 0, 0, 0.3);\n  overflow:hidden;\n  overflow-y:hidden;\n}\n\n.resultContainer{\n  margin:0 auto;\n   width: 80%;\n  margin: 0 auto;\n  margin-top: 50px;\n  display:flex;\n  justify-content:center;\n  flex-wrap:wrap;\n}\n\n.result{\n  padding-top:140px;\n  & .result-title{\n    font-size:28px;\n    text-align:center;\n    & span{\n      font-weight:700;\n      text-transform:capitalize;\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "globlalStyles__Button",
  componentId: "sc-39r256-0"
})(["background-color:", ";color:", ";position:absolute;padding:6px 20px;right:20px;top:150px;z-index:10;"], function (_ref) {
  var theme = _ref.theme;
  return theme.body;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.text;
});
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.Alpha;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.body;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.text;
});
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmxhbFN0eWxlcy5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJ0aGVtZSIsImJvZHkiLCJ0ZXh0IiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkFscGhhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEsNkdBQ0c7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLElBQXJCO0FBQUEsQ0FESCxFQUVSO0FBQUEsTUFBR0QsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRSxJQUFyQjtBQUFBLENBRlEsQ0FBWjtBQVdQLElBQU1DLFdBQVcsR0FBR0MsMkVBQUgsb0JBS0E7QUFBQSxNQUFHSixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNLLEtBQXJCO0FBQUEsQ0FMQSxFQW9CSTtBQUFBLE1BQUdMLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsSUFBckI7QUFBQSxDQXBCSixFQXFCUDtBQUFBLE1BQUdELEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0UsSUFBckI7QUFBQSxDQXJCTyxDQUFqQjtBQXlJZUMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40NTE3OGUxNDZiMDNmYTBlMTY0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvZHl9O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOjZweCAyMHB4O1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxNTBweDtcbiAgei1pbmRleDogMTA7XG5gO1xuXG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVmFyaWFibGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG46cm9vdHtcbiAgLS1iYWNrLWNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuQWxwaGF9O1xufVxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5odG1sIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG59XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9keX0gO1xuICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgbGluZWFyO1xufVxuXG4vKiBQb3NpdGlvbiBhbmQgc2l6aW5nIG9mIGJ1cmdlciBidXR0b24gKi9cbi5ibS1idXJnZXItYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICByaWdodDogMzZweDtcbiAgdG9wOiAzNnB4O1xufVxuXG4vKiBDb2xvci9zaGFwZSBvZiBidXJnZXIgaWNvbiBiYXJzICovXG4uYm0tYnVyZ2VyLWJhcnMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OjEwcHg7XG59XG5cbi8qIENvbG9yL3NoYXBlIG9mIGJ1cmdlciBpY29uIGJhcnMgb24gaG92ZXIqL1xuLmJtLWJ1cmdlci1iYXJzLWhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgY2xpY2thYmxlIGNyb3NzIGJ1dHRvbiAqL1xuLmJtLWNyb3NzLWJ1dHRvbiB7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDI0cHg7XG59XG5cbi8qIENvbG9yL3NoYXBlIG9mIGNsb3NlIGJ1dHRvbiBjcm9zcyAqL1xuLmJtLWNyb3NzIHtcbiAgYmFja2dyb3VuZDogI2JkYzNjNztcbn1cblxuLypcblNpZGViYXIgd3JhcHBlciBzdHlsZXNcbk5vdGU6IEJld2FyZSBvZiBtb2RpZnlpbmcgdGhpcyBlbGVtZW50IGFzIGl0IGNhbiBicmVhayB0aGUgYW5pbWF0aW9ucyAtIHlvdSBzaG91bGQgbm90IG5lZWQgdG8gdG91Y2ggaXQgaW4gbW9zdCBjYXNlc1xuKi9cbi5ibS1tZW51LXdyYXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOjA7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgb3ZlcmZsb3cteTpoaWRkZW47XG59XG5cbi8qIEdlbmVyYWwgc2lkZWJhciBzdHlsZXMgKi9cbi5ibS1tZW51IHtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBvdmVyZmxvdy15OmhpZGRlbjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHBhZGRpbmc6IDIuNWVtIDEuNWVtIDA7XG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xufVxuXG4vKiBNb3JwaCBzaGFwZSBuZWNlc3Nhcnkgd2l0aCBidWJibGUgb3IgZWxhc3RpYyAqL1xuLmJtLW1vcnBoLXNoYXBlIHtcbiAgZmlsbDogIzM3M2E0NztcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBvdmVyZmxvdy15OmhpZGRlbjtcbn1cblxuXG4vKiBXcmFwcGVyIGZvciBpdGVtIGxpc3QgKi9cbi5ibS1pdGVtLWxpc3Qge1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgcGFkZGluZzogMC44ZW07XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgb3ZlcmZsb3cteTpoaWRkZW47XG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgaGVpZ2h0OjUwdmg7XG4gICYgbGl7XG4gICAgbWFyZ2luLXRvcDotMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTo1MHB4O1xuICAgIG91dGxpbmU6bm9uZTtcbiAgfVxufVxuXG4vKiBJbmRpdmlkdWFsIGl0ZW0gKi9cbi5ibS1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKiBTdHlsaW5nIG9mIG92ZXJsYXkgKi9cbi5ibS1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIG92ZXJmbG93LXk6aGlkZGVuO1xufVxuXG4ucmVzdWx0Q29udGFpbmVye1xuICBtYXJnaW46MCBhdXRvO1xuICAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgZmxleC13cmFwOndyYXA7XG59XG5cbi5yZXN1bHR7XG4gIHBhZGRpbmctdG9wOjE0MHB4O1xuICAmIC5yZXN1bHQtdGl0bGV7XG4gICAgZm9udC1zaXplOjI4cHg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgJiBzcGFue1xuICAgICAgZm9udC13ZWlnaHQ6NzAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcbiAgICB9XG4gIH1cbn1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==