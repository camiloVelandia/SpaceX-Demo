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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "hola"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXBzdWxlTGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcHN1bGVzTGF5b3V0IiwidXNlU3RhdGUiLCJkcmFnb24iLCJzZXREcmFnb24iLCJ1c2VFZmZlY3QiLCJnZXREcmFnb25zSW5mbyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUVDQyxzREFBUSxDQUFDLEVBQUQsQ0FGVDtBQUFBLE1BRXBCQyxNQUZvQjtBQUFBLE1BRVpDLFNBRlk7O0FBSTFCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsNEVBQWMsR0FBR0MsSUFBakIsQ0FBc0IsVUFBQ0MsSUFBRDtBQUFBLGFBQVVKLFNBQVMsQ0FBQ0ksSUFBRCxDQUFuQjtBQUFBLEtBQXRCO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsTUFBWjtBQUdELHNCQUNFLHFFQUFDLGlEQUFEO0FBQUEsY0FFSUEsTUFBTSxDQUFDUSxHQUFQLENBQVcsVUFBQUMsSUFBSTtBQUFBLDBCQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGE7QUFBQSxLQUFmO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FwQkQ7O0dBQU1YLGM7O0tBQUFBLGM7QUFzQlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcHN1bGVzLjJkZmU1M2FlZDgzOGY3NjZjNDdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fwc3VsQ2FyZCBmcm9tICcuLi9DYXBzdWxDYXJkJ1xuaW1wb3J0IGdldERyYWdvbnNJbmZvIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXREcmFnb25zSW5mb1wiO1xuXG5cbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICcuL3N0eWxlcydcblxuY29uc3QgQ2Fwc3VsZXNMYXlvdXQgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2RyYWdvbiwgc2V0RHJhZ29uXSA9IHVzZVN0YXRlKFtdKVxuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBnZXREcmFnb25zSW5mbygpLnRoZW4oKGRhdGEpID0+IHNldERyYWdvbihkYXRhKSk7XG4gICB9LCBbXSk7XG5cbiAgIGNvbnNvbGUubG9nKGRyYWdvbilcblxuICBcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAge1xuICAgICAgICBkcmFnb24ubWFwKGl0ZW09PihcbiAgICAgICAgICA8cD5ob2xhPC9wPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fwc3VsZXNMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==