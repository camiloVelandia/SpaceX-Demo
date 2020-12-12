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
  var data = Object(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n/* -------------------------------------------------------------------------- */\n/*----------------------------------Variables-------------------------------- */\n/* -------------------------------------------------------------------------- */\n:root{\n  --back-color:", ";\n}\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\nbody {\n  margin: 0;\n  font-family:Arial, Helvetica, sans-serif;\n  background-color:", " ;\n  color:", ";\n  transition: all 0.25s linear;\n}\n\n/* Position and sizing of burger button */\n.bm-burger-button {\n  position: fixed;\n  width: 36px;\n  height: 18px;\n  right: 36px;\n  top: 36px;\n}\n\n/* Color/shape of burger icon bars */\n.bm-burger-bars {\n  background:", ";\n  height:10px;\n}\n\n/* Color/shape of burger icon bars on hover*/\n.bm-burger-bars-hover {\n  background: white;\n}\n\n/* Position and sizing of clickable cross button */\n.bm-cross-button {\n  height: 12px;\n  width: 24px;\n}\n\n/* Color/shape of close button cross */\n.bm-cross {\n  background: #bdc3c7;\n}\n\n/*\nSidebar wrapper styles\nNote: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases\n*/\n.bm-menu-wrap {\n  position: fixed;\n  height: 100%;\n  top:0;\n  overflow:hidden;\n  overflow-y:hidden;\n}\n\n/* General sidebar styles */\n.bm-menu {\n  overflow:hidden;\n  overflow-y:hidden;\n  background: black;\n  padding: 2.5em 1.5em 0;\n  font-size: 1.15em;\n}\n\n/* Morph shape necessary with bubble or elastic */\n.bm-morph-shape {\n  fill: #373a47;\n  overflow:hidden;\n  overflow-y:hidden;\n}\n\n\n/* Wrapper for item list */\n.bm-item-list {\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  padding: 0.8em;\n  overflow:hidden;\n  overflow-y:hidden;\n  flex-direction:column;\n  height:50vh;\n  & li{\n    margin-top:-30px;\n    padding-bottom:50px;\n    outline:none;\n  }\n}\n\n/* Individual item */\n.bm-item {\n  display: inline-block;\n}\n\n/* Styling of overlay */\n.bm-overlay {\n  background: rgba(0, 0, 0, 0.3);\n  overflow:hidden;\n  overflow-y:hidden;\n}\n\n.resultContainer{\n  margin:0 auto;\n   width: 80%;\n  margin: 0 auto;\n  margin-top: 50px;\n  display:flex;\n  justify-content:center;\n  flex-wrap:wrap;\n}\n\n.result{\n  padding-top:140px;\n  & .result-title{\n    font-size:28px;\n    text-align:center;\n    & span{\n      font-weight:700;\n      text-transform:capitalize;\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "globlalStyles__Button",
  componentId: "sc-39r256-0"
})(["background-color:", ";color:", ";position:fixed;border:none;cursor:pointer;width:40px;height:40px;border-radius:50%;display:flex;justify-content:center;align-items:center;right:20px;top:150px;z-index:10;outline:none;box-shadow:0px 0px 7px 1px ", ";@media (max-width:768px){right:15px;top:100px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.body;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.text;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.text;
});
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.Alpha;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.body;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.text;
}, function (_ref7) {
  var theme = _ref7.theme;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmxhbFN0eWxlcy5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJ0aGVtZSIsImJvZHkiLCJ0ZXh0IiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkFscGhhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEsZ1RBQ0c7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLElBQXJCO0FBQUEsQ0FESCxFQUVSO0FBQUEsTUFBR0QsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRSxJQUFyQjtBQUFBLENBRlEsRUFnQmE7QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNFLElBQXJCO0FBQUEsQ0FoQmIsQ0FBWjtBQXdCUCxJQUFNQyxXQUFXLEdBQUdDLDJFQUFILG9CQUtBO0FBQUEsTUFBR0osS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSyxLQUFyQjtBQUFBLENBTEEsRUFvQkk7QUFBQSxNQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLElBQXJCO0FBQUEsQ0FwQkosRUFxQlA7QUFBQSxNQUFHRCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNFLElBQXJCO0FBQUEsQ0FyQk8sRUFvQ0Y7QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNFLElBQXJCO0FBQUEsQ0FwQ0UsQ0FBakI7QUF5SWVDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzFmODcwYjMxNjc2NmQyYTk5NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib2R5fTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDE1MHB4O1xuICB6LWluZGV4OiAxMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMXB4ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHRvcDogMTAwcHg7XG4gIH1cbmA7XG5cblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1WYXJpYWJsZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjpyb290e1xuICAtLWJhY2stY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5BbHBoYX07XG59XG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib2R5fSA7XG4gIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBsaW5lYXI7XG59XG5cbi8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgYnVyZ2VyIGJ1dHRvbiAqL1xuLmJtLWJ1cmdlci1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHJpZ2h0OiAzNnB4O1xuICB0b3A6IDM2cHg7XG59XG5cbi8qIENvbG9yL3NoYXBlIG9mIGJ1cmdlciBpY29uIGJhcnMgKi9cbi5ibS1idXJnZXItYmFycyB7XG4gIGJhY2tncm91bmQ6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgaGVpZ2h0OjEwcHg7XG59XG5cbi8qIENvbG9yL3NoYXBlIG9mIGJ1cmdlciBpY29uIGJhcnMgb24gaG92ZXIqL1xuLmJtLWJ1cmdlci1iYXJzLWhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgY2xpY2thYmxlIGNyb3NzIGJ1dHRvbiAqL1xuLmJtLWNyb3NzLWJ1dHRvbiB7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDI0cHg7XG59XG5cbi8qIENvbG9yL3NoYXBlIG9mIGNsb3NlIGJ1dHRvbiBjcm9zcyAqL1xuLmJtLWNyb3NzIHtcbiAgYmFja2dyb3VuZDogI2JkYzNjNztcbn1cblxuLypcblNpZGViYXIgd3JhcHBlciBzdHlsZXNcbk5vdGU6IEJld2FyZSBvZiBtb2RpZnlpbmcgdGhpcyBlbGVtZW50IGFzIGl0IGNhbiBicmVhayB0aGUgYW5pbWF0aW9ucyAtIHlvdSBzaG91bGQgbm90IG5lZWQgdG8gdG91Y2ggaXQgaW4gbW9zdCBjYXNlc1xuKi9cbi5ibS1tZW51LXdyYXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOjA7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgb3ZlcmZsb3cteTpoaWRkZW47XG59XG5cbi8qIEdlbmVyYWwgc2lkZWJhciBzdHlsZXMgKi9cbi5ibS1tZW51IHtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBvdmVyZmxvdy15OmhpZGRlbjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHBhZGRpbmc6IDIuNWVtIDEuNWVtIDA7XG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xufVxuXG4vKiBNb3JwaCBzaGFwZSBuZWNlc3Nhcnkgd2l0aCBidWJibGUgb3IgZWxhc3RpYyAqL1xuLmJtLW1vcnBoLXNoYXBlIHtcbiAgZmlsbDogIzM3M2E0NztcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBvdmVyZmxvdy15OmhpZGRlbjtcbn1cblxuXG4vKiBXcmFwcGVyIGZvciBpdGVtIGxpc3QgKi9cbi5ibS1pdGVtLWxpc3Qge1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgcGFkZGluZzogMC44ZW07XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgb3ZlcmZsb3cteTpoaWRkZW47XG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgaGVpZ2h0OjUwdmg7XG4gICYgbGl7XG4gICAgbWFyZ2luLXRvcDotMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTo1MHB4O1xuICAgIG91dGxpbmU6bm9uZTtcbiAgfVxufVxuXG4vKiBJbmRpdmlkdWFsIGl0ZW0gKi9cbi5ibS1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKiBTdHlsaW5nIG9mIG92ZXJsYXkgKi9cbi5ibS1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIG92ZXJmbG93LXk6aGlkZGVuO1xufVxuXG4ucmVzdWx0Q29udGFpbmVye1xuICBtYXJnaW46MCBhdXRvO1xuICAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgZmxleC13cmFwOndyYXA7XG59XG5cbi5yZXN1bHR7XG4gIHBhZGRpbmctdG9wOjE0MHB4O1xuICAmIC5yZXN1bHQtdGl0bGV7XG4gICAgZm9udC1zaXplOjI4cHg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgJiBzcGFue1xuICAgICAgZm9udC13ZWlnaHQ6NzAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcbiAgICB9XG4gIH1cbn1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==