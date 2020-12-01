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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    links: {
      patch: {}
    }
  }]),
      launches = _useState[0],
      setlaunches = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getAllLaunches__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (data) {
      return setlaunches(data);
    });
  }, []);
  console.log(launches[1]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: launches.map(function (item, index) {
      if (index > launches.length - 3) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PastCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: launches.name,
          img: launches.links.patch.large
        }, launches.id, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this);
      }
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(PastLayout, "bxs3++pswlbMbf/pRwM0NXOlces=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNlbnRMYXlvdXQvaW5kZXguanMiXSwibmFtZXMiOlsiUGFzdExheW91dCIsInVzZVN0YXRlIiwibGlua3MiLCJwYXRjaCIsImxhdW5jaGVzIiwic2V0bGF1bmNoZXMiLCJ1c2VFZmZlY3QiLCJnZXRBbGxMYXVuY2hlcyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxlbmd0aCIsIm5hbWUiLCJsYXJnZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBRU9DLHNEQUFRLENBQUMsQ0FBQztBQUFFQyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQ7QUFBVCxHQUFELENBQUQsQ0FGZjtBQUFBLE1BRWxCQyxRQUZrQjtBQUFBLE1BRVJDLFdBRlE7O0FBSXpCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsNEVBQWMsR0FBR0MsSUFBakIsQ0FBc0IsVUFBQ0MsSUFBRDtBQUFBLGFBQVVKLFdBQVcsQ0FBQ0ksSUFBRCxDQUFyQjtBQUFBLEtBQXRCO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsUUFBUSxDQUFDLENBQUQsQ0FBcEI7QUFDRSxzQkFDRSxxRUFBQywrQ0FBRDtBQUFBLGNBQ0dBLFFBQVEsQ0FBQ1EsR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFlO0FBQzNCLFVBQUlBLEtBQUssR0FBR1YsUUFBUSxDQUFDVyxNQUFULEdBQWdCLENBQTVCLEVBQThCO0FBRTlCLDRCQUNFLHFFQUFDLGlEQUFEO0FBQTRCLGVBQUssRUFBRVgsUUFBUSxDQUFDWSxJQUE1QztBQUFrRCxhQUFHLEVBQUVaLFFBQVEsQ0FBQ0YsS0FBVCxDQUFlQyxLQUFmLENBQXFCYztBQUE1RSxXQUFlYixRQUFRLENBQUNjLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFHQztBQUVGLEtBUkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQXJCRDs7R0FBTWxCLFU7O0tBQUFBLFU7QUF1QlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaGVzLjk5ODUwNDY5NzQ2NjNjNjVjNzBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYXN0Q2FyZCBmcm9tIFwiLi4vUGFzdENhcmRcIjtcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBnZXRBbGxMYXVuY2hlcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0QWxsTGF1bmNoZXNcIjtcblxuY29uc3QgUGFzdExheW91dCA9ICgpID0+IHtcblxuY29uc3QgW2xhdW5jaGVzLCBzZXRsYXVuY2hlc10gPSB1c2VTdGF0ZShbeyBsaW5rczogeyBwYXRjaDoge30gfSB9XSk7XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGdldEFsbExhdW5jaGVzKCkudGhlbigoZGF0YSkgPT4gc2V0bGF1bmNoZXMoZGF0YSkpO1xufSwgW10pO1xuY29uc29sZS5sb2cobGF1bmNoZXNbMV0pXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICB7bGF1bmNoZXMubWFwKChpdGVtLCBpbmRleCk9PntcbiAgICAgICAgaWYgKGluZGV4ID4gbGF1bmNoZXMubGVuZ3RoLTMpe1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFBhc3RDYXJkIGtleT17bGF1bmNoZXMuaWR9IHRpdGxlPXtsYXVuY2hlcy5uYW1lfSBpbWc9e2xhdW5jaGVzLmxpbmtzLnBhdGNoLmxhcmdlfS8+XG4gICAgICAgICk7XG4gICAgICAgIH0gXG4gXG4gICAgICB9KX1cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXN0TGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==