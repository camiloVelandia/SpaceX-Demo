webpackHotUpdate_N_E("pages/_app",{

/***/ "./globlalStyles.js":
/*!**************************!*\
  !*** ./globlalStyles.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n/* -------------------------------------------------------------------------- */\n/*----------------------------------Variables-------------------------------- */\n/* -------------------------------------------------------------------------- */\n:root{\n  --brand-color:#114B5F;\n}\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\nbody {\n  margin: 0;\n  font-family:Arial, Helvetica, sans-serif;\n  background-color:black;\n  color:white\n}\n\n/* Position and sizing of burger button */\n.bm-burger-button {\n  position: fixed;\n  width: 36px;\n  height: 18px;\n  right: 36px;\n  top: 36px;\n}\n\n/* Color/shape of burger icon bars */\n.bm-burger-bars {\n  background: white;\n  height:10px;\n}\n\n/* Color/shape of burger icon bars on hover*/\n.bm-burger-bars-hover {\n  background: white;\n}\n\n/* Position and sizing of clickable cross button */\n.bm-cross-button {\n  height: 12px;\n  width: 24px;\n}\n\n/* Color/shape of close button cross */\n.bm-cross {\n  background: #bdc3c7;\n}\n\n/*\nSidebar wrapper styles\nNote: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases\n*/\n.bm-menu-wrap {\n  position: fixed;\n  height: 100%;\n  top:0;\n  overflow:hidden;\n  overflow-y:hidden;\n}\n\n/* General sidebar styles */\n.bm-menu {\n  overflow:hidden;\n  overflow-y:hidden;\n  background: black;\n  padding: 2.5em 1.5em 0;\n  font-size: 1.15em;\n}\n\n/* Morph shape necessary with bubble or elastic */\n.bm-morph-shape {\n  fill: #373a47;\n  overflow:hidden;\n  overflow-y:hidden;\n}\n\n\n/* Wrapper for item list */\n.bm-item-list {\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  padding: 0.8em;\n  overflow:hidden;\n  overflow-y:hidden;\n  flex-direction:column;\n  height:50vh;\n  & li{\n    margin-top:-30px;\n    padding-bottom:50px;\n    outline:none;\n  }\n}\n\n/* Individual item */\n.bm-item {\n  display: inline-block;\n}\n\n/* Styling of overlay */\n.bm-overlay {\n  background: rgba(0, 0, 0, 0.3);\n  overflow:hidden;\n  overflow-y:hidden;\n}\n\n.resultContainer{\n  margin:0 auto;\n   width: 80%;\n  margin: 0 auto;\n  margin-top: 180px;\n  margin-bottom: 120px;\n  display:flex;\n  justify-content:center;\n  flex-wrap:wrap;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmxhbFN0eWxlcy5qcyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLDJFQUFILG1CQUFqQjtBQTZIZUQsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iOTY4ZGI3YjMwOTRiZTAwOWJlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1WYXJpYWJsZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjpyb290e1xuICAtLWJyYW5kLWNvbG9yOiMxMTRCNUY7XG59XG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gIGNvbG9yOndoaXRlXG59XG5cbi8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgYnVyZ2VyIGJ1dHRvbiAqL1xuLmJtLWJ1cmdlci1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHJpZ2h0OiAzNnB4O1xuICB0b3A6IDM2cHg7XG59XG5cbi8qIENvbG9yL3NoYXBlIG9mIGJ1cmdlciBpY29uIGJhcnMgKi9cbi5ibS1idXJnZXItYmFycyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6MTBweDtcbn1cblxuLyogQ29sb3Ivc2hhcGUgb2YgYnVyZ2VyIGljb24gYmFycyBvbiBob3ZlciovXG4uYm0tYnVyZ2VyLWJhcnMtaG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLyogUG9zaXRpb24gYW5kIHNpemluZyBvZiBjbGlja2FibGUgY3Jvc3MgYnV0dG9uICovXG4uYm0tY3Jvc3MtYnV0dG9uIHtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMjRweDtcbn1cblxuLyogQ29sb3Ivc2hhcGUgb2YgY2xvc2UgYnV0dG9uIGNyb3NzICovXG4uYm0tY3Jvc3Mge1xuICBiYWNrZ3JvdW5kOiAjYmRjM2M3O1xufVxuXG4vKlxuU2lkZWJhciB3cmFwcGVyIHN0eWxlc1xuTm90ZTogQmV3YXJlIG9mIG1vZGlmeWluZyB0aGlzIGVsZW1lbnQgYXMgaXQgY2FuIGJyZWFrIHRoZSBhbmltYXRpb25zIC0geW91IHNob3VsZCBub3QgbmVlZCB0byB0b3VjaCBpdCBpbiBtb3N0IGNhc2VzXG4qL1xuLmJtLW1lbnUtd3JhcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6MDtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBvdmVyZmxvdy15OmhpZGRlbjtcbn1cblxuLyogR2VuZXJhbCBzaWRlYmFyIHN0eWxlcyAqL1xuLmJtLW1lbnUge1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIG92ZXJmbG93LXk6aGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgcGFkZGluZzogMi41ZW0gMS41ZW0gMDtcbiAgZm9udC1zaXplOiAxLjE1ZW07XG59XG5cbi8qIE1vcnBoIHNoYXBlIG5lY2Vzc2FyeSB3aXRoIGJ1YmJsZSBvciBlbGFzdGljICovXG4uYm0tbW9ycGgtc2hhcGUge1xuICBmaWxsOiAjMzczYTQ3O1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIG92ZXJmbG93LXk6aGlkZGVuO1xufVxuXG5cbi8qIFdyYXBwZXIgZm9yIGl0ZW0gbGlzdCAqL1xuLmJtLWl0ZW0tbGlzdCB7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBvdmVyZmxvdy15OmhpZGRlbjtcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICBoZWlnaHQ6NTB2aDtcbiAgJiBsaXtcbiAgICBtYXJnaW4tdG9wOi0zMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOjUwcHg7XG4gICAgb3V0bGluZTpub25lO1xuICB9XG59XG5cbi8qIEluZGl2aWR1YWwgaXRlbSAqL1xuLmJtLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIFN0eWxpbmcgb2Ygb3ZlcmxheSAqL1xuLmJtLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgb3ZlcmZsb3cteTpoaWRkZW47XG59XG5cbi5yZXN1bHRDb250YWluZXJ7XG4gIG1hcmdpbjowIGF1dG87XG4gICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEyMHB4O1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGZsZXgtd3JhcDp3cmFwO1xufVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGU7XG4iXSwic291cmNlUm9vdCI6IiJ9