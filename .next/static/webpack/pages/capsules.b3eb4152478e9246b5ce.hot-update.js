webpackHotUpdate_N_E("pages/capsules",{

/***/ "./components/CapsuleLayout/index.js":
/*!*******************************************!*\
  !*** ./components/CapsuleLayout/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CapsulCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CapsulCard */ "./components/CapsulCard/index.js");
/* harmony import */ var _services_getDragonsInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/getDragonsInfo */ "./services/getDragonsInfo.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/CapsuleLayout/styles.js");



var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/CapsuleLayout/index.js",
    _this = undefined,
    _s = $RefreshSig$();






var CapsulesLayout = function CapsulesLayout() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      dragon = _useState[0],
      setDragon = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_services_getDragonsInfo__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (data) {
      return setDragon(data);
    });
  }, []);
  console.log(dragon);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    children: dragon.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_CapsulCard__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        name: item.name,
        info: item.description,
        image: item.flickr_images[0],
        status: item.active ? 'active' : 'disabled',
        capacity: item.crew_capacity,
        first_flight: item.first_flight,
        type: item.type,
        diameter: item.diameter.meters
      }, "diameter", item.diameter.feet), item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(CapsulesLayout, "64lEdjlI2FsFURmoSWq5FG8fPNc=");

_c = CapsulesLayout;
/* harmony default export */ __webpack_exports__["default"] = (CapsulesLayout);

var _c;

$RefreshReg$(_c, "CapsulesLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXBzdWxlTGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcHN1bGVzTGF5b3V0IiwidXNlU3RhdGUiLCJkcmFnb24iLCJzZXREcmFnb24iLCJ1c2VFZmZlY3QiLCJnZXREcmFnb25zSW5mbyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJmbGlja3JfaW1hZ2VzIiwiYWN0aXZlIiwiY3Jld19jYXBhY2l0eSIsImZpcnN0X2ZsaWdodCIsInR5cGUiLCJkaWFtZXRlciIsIm1ldGVycyIsImZlZXQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFFQ0Msc0RBQVEsQ0FBQyxFQUFELENBRlQ7QUFBQSxNQUVwQkMsTUFGb0I7QUFBQSxNQUVaQyxTQUZZOztBQUkxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLDRFQUFjLEdBQUdDLElBQWpCLENBQXNCLFVBQUNDLElBQUQ7QUFBQSxhQUFVSixTQUFTLENBQUNJLElBQUQsQ0FBbkI7QUFBQSxLQUF0QjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlQLE1BQVo7QUFHRCxzQkFDRSxxRUFBQyxpREFBRDtBQUFBLGNBRUlBLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLFVBQUFDLElBQUk7QUFBQSwwQkFDYixxRUFBQyxtREFBRDtBQUVBLFlBQUksRUFBR0EsSUFBSSxDQUFDQyxJQUZaO0FBR0EsWUFBSSxFQUFFRCxJQUFJLENBQUNFLFdBSFg7QUFJQSxhQUFLLEVBQUVGLElBQUksQ0FBQ0csYUFBTCxDQUFtQixDQUFuQixDQUpQO0FBS0EsY0FBTSxFQUFFSCxJQUFJLENBQUNJLE1BQUwsR0FBYSxRQUFiLEdBQXVCLFVBTC9CO0FBTUEsZ0JBQVEsRUFBRUosSUFBSSxDQUFDSyxhQU5mO0FBT0Esb0JBQVksRUFBRUwsSUFBSSxDQUFDTSxZQVBuQjtBQVFBLFlBQUksRUFBRU4sSUFBSSxDQUFDTyxJQVJYO0FBU0EsZ0JBQVEsRUFBRVAsSUFBSSxDQUFDUSxRQUFMLENBQWNDO0FBVHhCLHFCQVVVVCxJQUFJLENBQUNRLFFBQUwsQ0FBY0UsSUFWeEIsR0FDS1YsSUFBSSxDQUFDVyxFQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWY7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0EvQkQ7O0dBQU10QixjOztLQUFBQSxjO0FBaUNTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXBzdWxlcy5iM2ViNDE1MjQ3OGU5MjQ2YjVjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcHN1bENhcmQgZnJvbSAnLi4vQ2Fwc3VsQ2FyZCdcbmltcG9ydCBnZXREcmFnb25zSW5mbyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0RHJhZ29uc0luZm9cIjtcblxuXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IENhcHN1bGVzTGF5b3V0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtkcmFnb24sIHNldERyYWdvbl0gPSB1c2VTdGF0ZShbXSlcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgZ2V0RHJhZ29uc0luZm8oKS50aGVuKChkYXRhKSA9PiBzZXREcmFnb24oZGF0YSkpO1xuICAgfSwgW10pO1xuXG4gICBjb25zb2xlLmxvZyhkcmFnb24pXG5cbiAgXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHtcbiAgICAgICAgZHJhZ29uLm1hcChpdGVtPT4oXG4gICAgICAgICAgPENhcHN1bENhcmQgXG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgIG5hbWU9eyBpdGVtLm5hbWV9IFxuICAgICAgICAgIGluZm89e2l0ZW0uZGVzY3JpcHRpb259IFxuICAgICAgICAgIGltYWdlPXtpdGVtLmZsaWNrcl9pbWFnZXNbMF19IFxuICAgICAgICAgIHN0YXR1cz17aXRlbS5hY3RpdmU/ICdhY3RpdmUnOiAnZGlzYWJsZWQnfVxuICAgICAgICAgIGNhcGFjaXR5PXtpdGVtLmNyZXdfY2FwYWNpdHl9XG4gICAgICAgICAgZmlyc3RfZmxpZ2h0PXtpdGVtLmZpcnN0X2ZsaWdodH1cbiAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XG4gICAgICAgICAgZGlhbWV0ZXI9e2l0ZW0uZGlhbWV0ZXIubWV0ZXJzfVxuICAgICAgICAgIGRpYW1ldGVyPXtpdGVtLmRpYW1ldGVyLmZlZXR9XG4gICAgICAgICAgIC8+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXBzdWxlc0xheW91dDsiXSwic291cmNlUm9vdCI6IiJ9