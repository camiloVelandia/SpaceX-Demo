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
  console.log(launches[114]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: launches.map(function (item, index) {
      if (index > launches.length - 3) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PastCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: item.name,
          detail: item.details
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNlbnRMYXlvdXQvaW5kZXguanMiXSwibmFtZXMiOlsiUGFzdExheW91dCIsInVzZVN0YXRlIiwibGF1bmNoZXMiLCJzZXRsYXVuY2hlcyIsInVzZUVmZmVjdCIsImdldEFsbExhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGVuZ3RoIiwibmFtZSIsImRldGFpbHMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUVPQyxzREFBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRWxCQyxRQUZrQjtBQUFBLE1BRVJDLFdBRlE7O0FBSXpCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsNEVBQWMsR0FBR0MsSUFBakIsQ0FBc0IsVUFBQ0MsSUFBRDtBQUFBLGFBQVVKLFdBQVcsQ0FBQ0ksSUFBRCxDQUFyQjtBQUFBLEtBQXRCO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsUUFBUSxDQUFDLEdBQUQsQ0FBcEI7QUFDRSxzQkFDRSxxRUFBQywrQ0FBRDtBQUFBLGNBQ0dBLFFBQVEsQ0FBQ1EsR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFlO0FBQzNCLFVBQUlBLEtBQUssR0FBR1YsUUFBUSxDQUFDVyxNQUFULEdBQWdCLENBQTVCLEVBQThCO0FBQzlCLDRCQUNFLHFFQUFDLGlEQUFEO0FBQXdCLGVBQUssRUFBRUYsSUFBSSxDQUFDRyxJQUFwQztBQUEwQyxnQkFBTSxFQUFFSCxJQUFJLENBQUNJO0FBQXZELFdBQWVKLElBQUksQ0FBQ0ssRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUdDO0FBRUYsS0FQQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBcEJEOztHQUFNaEIsVTs7S0FBQUEsVTtBQXNCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGF1bmNoZXMuYmJkZTkwNGNlYjFmMGIxYjFiMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhc3RDYXJkIGZyb20gXCIuLi9QYXN0Q2FyZFwiO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IGdldEFsbExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRBbGxMYXVuY2hlc1wiO1xuXG5jb25zdCBQYXN0TGF5b3V0ID0gKCkgPT4ge1xuXG5jb25zdCBbbGF1bmNoZXMsIHNldGxhdW5jaGVzXSA9IHVzZVN0YXRlKFtdKVxuXG51c2VFZmZlY3QoKCkgPT4ge1xuICBnZXRBbGxMYXVuY2hlcygpLnRoZW4oKGRhdGEpID0+IHNldGxhdW5jaGVzKGRhdGEpKTtcbn0sIFtdKTtcbmNvbnNvbGUubG9nKGxhdW5jaGVzWzExNF0pXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICB7bGF1bmNoZXMubWFwKChpdGVtLCBpbmRleCk9PntcbiAgICAgICAgaWYgKGluZGV4ID4gbGF1bmNoZXMubGVuZ3RoLTMpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQYXN0Q2FyZCBrZXk9e2l0ZW0uaWR9IHRpdGxlPXtpdGVtLm5hbWV9IGRldGFpbD17aXRlbS5kZXRhaWxzfSAvPlxuICAgICAgICApO1xuICAgICAgICB9IFxuIFxuICAgICAgfSl9XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzdExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=