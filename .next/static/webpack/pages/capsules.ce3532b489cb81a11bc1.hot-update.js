webpackHotUpdate_N_E("pages/capsules",{

/***/ "./components/CapsuleLayout/index.js":
/*!*******************************************!*\
  !*** ./components/CapsuleLayout/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CapsulCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CapsulCard */ "./components/CapsulCard/index.js");
/* harmony import */ var _services_getDragonsInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getDragonsInfo */ "./services/getDragonsInfo.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/CapsuleLayout/styles.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/CapsuleLayout/index.js",
    _this = undefined,
    _s = $RefreshSig$();






var CapsulesLayout = function CapsulesLayout() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dragon = _useState[0],
      setDragon = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getDragonsInfo__WEBPACK_IMPORTED_MODULE_3__["default"])().then(function (data) {
      return setDragon(data);
    });
  }, []);
  console.log(dragon);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    children: dragon.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CapsulCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: item.name,
        info: item.description,
        image: item.flickr_images[0],
        status: item.active ? 'active' : 'disabled'
      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXBzdWxlTGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcHN1bGVzTGF5b3V0IiwidXNlU3RhdGUiLCJkcmFnb24iLCJzZXREcmFnb24iLCJ1c2VFZmZlY3QiLCJnZXREcmFnb25zSW5mbyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJmbGlja3JfaW1hZ2VzIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFFQ0Msc0RBQVEsQ0FBQyxFQUFELENBRlQ7QUFBQSxNQUVwQkMsTUFGb0I7QUFBQSxNQUVaQyxTQUZZOztBQUkxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLDRFQUFjLEdBQUdDLElBQWpCLENBQXNCLFVBQUNDLElBQUQ7QUFBQSxhQUFVSixTQUFTLENBQUNJLElBQUQsQ0FBbkI7QUFBQSxLQUF0QjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlQLE1BQVo7QUFHRCxzQkFDRSxxRUFBQyxpREFBRDtBQUFBLGNBRUlBLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLFVBQUFDLElBQUk7QUFBQSwwQkFDYixxRUFBQyxtREFBRDtBQUNBLFlBQUksRUFBR0EsSUFBSSxDQUFDQyxJQURaO0FBRUEsWUFBSSxFQUFFRCxJQUFJLENBQUNFLFdBRlg7QUFHQSxhQUFLLEVBQUVGLElBQUksQ0FBQ0csYUFBTCxDQUFtQixDQUFuQixDQUhQO0FBSUEsY0FBTSxFQUFFSCxJQUFJLENBQUNJLE1BQUwsR0FBYSxRQUFiLEdBQXVCO0FBSi9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWY7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQXpCRDs7R0FBTWYsYzs7S0FBQUEsYztBQTJCU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2Fwc3VsZXMuY2UzNTMyYjQ4OWNiODFhMTFiYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXBzdWxDYXJkIGZyb20gJy4uL0NhcHN1bENhcmQnXG5pbXBvcnQgZ2V0RHJhZ29uc0luZm8gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldERyYWdvbnNJbmZvXCI7XG5cblxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4vc3R5bGVzJ1xuXG5jb25zdCBDYXBzdWxlc0xheW91dCA9ICgpID0+IHtcblxuICBjb25zdCBbZHJhZ29uLCBzZXREcmFnb25dID0gdXNlU3RhdGUoW10pXG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIGdldERyYWdvbnNJbmZvKCkudGhlbigoZGF0YSkgPT4gc2V0RHJhZ29uKGRhdGEpKTtcbiAgIH0sIFtdKTtcblxuICAgY29uc29sZS5sb2coZHJhZ29uKVxuXG4gIFxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7XG4gICAgICAgIGRyYWdvbi5tYXAoaXRlbT0+KFxuICAgICAgICAgIDxDYXBzdWxDYXJkIFxuICAgICAgICAgIG5hbWU9eyBpdGVtLm5hbWV9IFxuICAgICAgICAgIGluZm89e2l0ZW0uZGVzY3JpcHRpb259IFxuICAgICAgICAgIGltYWdlPXtpdGVtLmZsaWNrcl9pbWFnZXNbMF19IFxuICAgICAgICAgIHN0YXR1cz17aXRlbS5hY3RpdmU/ICdhY3RpdmUnOiAnZGlzYWJsZWQnfVxuICAgICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fwc3VsZXNMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==