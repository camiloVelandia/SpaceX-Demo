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
})(["background-color:", ";color:", ";position:absolute;border:none;cursor:pointer;width:30px;height:30px;border-radius:50%;display:flex;justify-content:center;align-items:center;right:20px;top:150px;z-index:10;"], function (_ref) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmxhbFN0eWxlcy5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJ0aGVtZSIsImJvZHkiLCJ0ZXh0IiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkFscGhhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEsdU5BQ0c7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLElBQXJCO0FBQUEsQ0FESCxFQUVSO0FBQUEsTUFBR0QsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRSxJQUFyQjtBQUFBLENBRlEsQ0FBWjtBQWtCUCxJQUFNQyxXQUFXLEdBQUdDLDJFQUFILG9CQUtBO0FBQUEsTUFBR0osS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSyxLQUFyQjtBQUFBLENBTEEsRUFvQkk7QUFBQSxNQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLElBQXJCO0FBQUEsQ0FwQkosRUFxQlA7QUFBQSxNQUFHRCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNFLElBQXJCO0FBQUEsQ0FyQk8sQ0FBakI7QUF5SWVDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuM2YzNGNjMzMzNWFjNWY1ZTMyMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib2R5fTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOm5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6MzBweDtcbiAgaGVpZ2h0OjMwcHg7XG4gIGJvcmRlci1yYWRpdXM6NTAlO1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTUwcHg7XG4gIHotaW5kZXg6IDEwO1xuYDtcblxuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVZhcmlhYmxlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuOnJvb3R7XG4gIC0tYmFjay1jb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLkFscGhhfTtcbn1cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbiAqL1xuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xufVxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvZHl9IDtcbiAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGxpbmVhcjtcbn1cblxuLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBidXJnZXIgYnV0dG9uICovXG4uYm0tYnVyZ2VyLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMThweDtcbiAgcmlnaHQ6IDM2cHg7XG4gIHRvcDogMzZweDtcbn1cblxuLyogQ29sb3Ivc2hhcGUgb2YgYnVyZ2VyIGljb24gYmFycyAqL1xuLmJtLWJ1cmdlci1iYXJzIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDoxMHB4O1xufVxuXG4vKiBDb2xvci9zaGFwZSBvZiBidXJnZXIgaWNvbiBiYXJzIG9uIGhvdmVyKi9cbi5ibS1idXJnZXItYmFycy1ob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4vKiBQb3NpdGlvbiBhbmQgc2l6aW5nIG9mIGNsaWNrYWJsZSBjcm9zcyBidXR0b24gKi9cbi5ibS1jcm9zcy1idXR0b24ge1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAyNHB4O1xufVxuXG4vKiBDb2xvci9zaGFwZSBvZiBjbG9zZSBidXR0b24gY3Jvc3MgKi9cbi5ibS1jcm9zcyB7XG4gIGJhY2tncm91bmQ6ICNiZGMzYzc7XG59XG5cbi8qXG5TaWRlYmFyIHdyYXBwZXIgc3R5bGVzXG5Ob3RlOiBCZXdhcmUgb2YgbW9kaWZ5aW5nIHRoaXMgZWxlbWVudCBhcyBpdCBjYW4gYnJlYWsgdGhlIGFuaW1hdGlvbnMgLSB5b3Ugc2hvdWxkIG5vdCBuZWVkIHRvIHRvdWNoIGl0IGluIG1vc3QgY2FzZXNcbiovXG4uYm0tbWVudS13cmFwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDowO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIG92ZXJmbG93LXk6aGlkZGVuO1xufVxuXG4vKiBHZW5lcmFsIHNpZGViYXIgc3R5bGVzICovXG4uYm0tbWVudSB7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgb3ZlcmZsb3cteTpoaWRkZW47XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBwYWRkaW5nOiAyLjVlbSAxLjVlbSAwO1xuICBmb250LXNpemU6IDEuMTVlbTtcbn1cblxuLyogTW9ycGggc2hhcGUgbmVjZXNzYXJ5IHdpdGggYnViYmxlIG9yIGVsYXN0aWMgKi9cbi5ibS1tb3JwaC1zaGFwZSB7XG4gIGZpbGw6ICMzNzNhNDc7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgb3ZlcmZsb3cteTpoaWRkZW47XG59XG5cblxuLyogV3JhcHBlciBmb3IgaXRlbSBsaXN0ICovXG4uYm0taXRlbS1saXN0IHtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIHBhZGRpbmc6IDAuOGVtO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIG92ZXJmbG93LXk6aGlkZGVuO1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIGhlaWdodDo1MHZoO1xuICAmIGxpe1xuICAgIG1hcmdpbi10b3A6LTMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206NTBweDtcbiAgICBvdXRsaW5lOm5vbmU7XG4gIH1cbn1cblxuLyogSW5kaXZpZHVhbCBpdGVtICovXG4uYm0taXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogU3R5bGluZyBvZiBvdmVybGF5ICovXG4uYm0tb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBvdmVyZmxvdy15OmhpZGRlbjtcbn1cblxuLnJlc3VsdENvbnRhaW5lcntcbiAgbWFyZ2luOjAgYXV0bztcbiAgIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGZsZXgtd3JhcDp3cmFwO1xufVxuXG4ucmVzdWx0e1xuICBwYWRkaW5nLXRvcDoxNDBweDtcbiAgJiAucmVzdWx0LXRpdGxle1xuICAgIGZvbnQtc2l6ZToyOHB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICYgc3BhbntcbiAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XG4gICAgfVxuICB9XG59XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=