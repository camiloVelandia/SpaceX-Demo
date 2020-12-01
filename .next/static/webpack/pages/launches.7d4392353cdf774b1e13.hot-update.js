webpackHotUpdate_N_E("pages/launches",{

/***/ "./components/RecentLayout/index.js":
/*!******************************************!*\
  !*** ./components/RecentLayout/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PastCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PastCard */ "./components/PastCard/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/RecentLayout/styles.js");
/* harmony import */ var _services_getAllLaunches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/getAllLaunches */ "./services/getAllLaunches.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/RecentLayout/index.js",
    _this = undefined,
    _s = $RefreshSig$();






var PastLayout = function PastLayout() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      launches = _useState[0],
      setlaunches = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getAllLaunches__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (data) {
      return setlaunches(data);
    });
  }, []);
  console.log(launches[1]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: launches.filter(function (item, index) {
      item[index] > index - 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PastCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 30
      }, _this) : '';
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(PastLayout, "TXGwhl5FxPRJrtL4h5+5sSnMXV0=");

_c = PastLayout;
/* harmony default export */ __webpack_exports__["default"] = (PastLayout);

var _c;

$RefreshReg$(_c, "PastLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNlbnRMYXlvdXQvaW5kZXguanMiXSwibmFtZXMiOlsiUGFzdExheW91dCIsInVzZVN0YXRlIiwibGF1bmNoZXMiLCJzZXRsYXVuY2hlcyIsInVzZUVmZmVjdCIsImdldEFsbExhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBRU9DLHNEQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFbEJDLFFBRmtCO0FBQUEsTUFFUkMsV0FGUTs7QUFJekJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyw0RUFBYyxHQUFHQyxJQUFqQixDQUFzQixVQUFDQyxJQUFEO0FBQUEsYUFBVUosV0FBVyxDQUFDSSxJQUFELENBQXJCO0FBQUEsS0FBdEI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxRQUFRLENBQUMsQ0FBRCxDQUFwQjtBQUNFLHNCQUNFLHFFQUFDLCtDQUFEO0FBQUEsY0FDR0EsUUFBUSxDQUFDUSxNQUFULENBQWdCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFlO0FBQzlCRCxVQUFJLENBQUNDLEtBQUQsQ0FBSixHQUFZQSxLQUFLLEdBQUMsQ0FBbEIsZ0JBQXFCLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBckIsR0FBa0MsRUFBbEM7QUFFRCxLQUhBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FoQkQ7O0dBQU1aLFU7O0tBQUFBLFU7QUFrQlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaGVzLjdkNDM5MjM1M2NkZjc3NGIxZTEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYXN0Q2FyZCBmcm9tIFwiLi4vUGFzdENhcmRcIjtcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBnZXRBbGxMYXVuY2hlcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0QWxsTGF1bmNoZXNcIjtcblxuY29uc3QgUGFzdExheW91dCA9ICgpID0+IHtcblxuY29uc3QgW2xhdW5jaGVzLCBzZXRsYXVuY2hlc10gPSB1c2VTdGF0ZShbXSlcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgZ2V0QWxsTGF1bmNoZXMoKS50aGVuKChkYXRhKSA9PiBzZXRsYXVuY2hlcyhkYXRhKSk7XG59LCBbXSk7XG5jb25zb2xlLmxvZyhsYXVuY2hlc1sxXSlcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbj5cbiAgICAgIHtsYXVuY2hlcy5maWx0ZXIoKGl0ZW0sIGluZGV4KT0+e1xuICAgICAgICBpdGVtW2luZGV4XT5pbmRleC0yPyA8UGFzdENhcmQvPiA6JydcbiAgICAgICAgXG4gICAgICB9KX1cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXN0TGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==