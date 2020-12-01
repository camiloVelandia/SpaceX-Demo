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
    fairings: {
      links: {
        patch: {}
      }
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

_s(PastLayout, "ol/mXCX8o5730pOp+tTcUtJL1l8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNlbnRMYXlvdXQvaW5kZXguanMiXSwibmFtZXMiOlsiUGFzdExheW91dCIsInVzZVN0YXRlIiwiZmFpcmluZ3MiLCJsaW5rcyIsInBhdGNoIiwibGF1bmNoZXMiLCJzZXRsYXVuY2hlcyIsInVzZUVmZmVjdCIsImdldEFsbExhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGVuZ3RoIiwibmFtZSIsImxhcmdlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFFT0Msc0RBQVEsQ0FBQyxDQUFDO0FBQUNDLFlBQVEsRUFBQztBQUFFQyxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFO0FBQVQ7QUFBVDtBQUFWLEdBQUQsQ0FBRCxDQUZmO0FBQUEsTUFFbEJDLFFBRmtCO0FBQUEsTUFFUkMsV0FGUTs7QUFJekJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyw0RUFBYyxHQUFHQyxJQUFqQixDQUFzQixVQUFDQyxJQUFEO0FBQUEsYUFBVUosV0FBVyxDQUFDSSxJQUFELENBQXJCO0FBQUEsS0FBdEI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxRQUFRLENBQUMsQ0FBRCxDQUFwQjtBQUNFLHNCQUNFLHFFQUFDLCtDQUFEO0FBQUEsY0FDR0EsUUFBUSxDQUFDUSxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWU7QUFDM0IsVUFBSUEsS0FBSyxHQUFHVixRQUFRLENBQUNXLE1BQVQsR0FBZ0IsQ0FBNUIsRUFBOEI7QUFFOUIsNEJBQ0UscUVBQUMsaURBQUQ7QUFBNEIsZUFBSyxFQUFFWCxRQUFRLENBQUNZLElBQTVDO0FBQWtELGFBQUcsRUFBRVosUUFBUSxDQUFDRixLQUFULENBQWVDLEtBQWYsQ0FBcUJjO0FBQTVFLFdBQWViLFFBQVEsQ0FBQ2MsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUdDO0FBRUYsS0FSQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBckJEOztHQUFNbkIsVTs7S0FBQUEsVTtBQXVCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGF1bmNoZXMuOTNkZjBiNTNkYWY3NDAwOTA0NDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhc3RDYXJkIGZyb20gXCIuLi9QYXN0Q2FyZFwiO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IGdldEFsbExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRBbGxMYXVuY2hlc1wiO1xuXG5jb25zdCBQYXN0TGF5b3V0ID0gKCkgPT4ge1xuXG5jb25zdCBbbGF1bmNoZXMsIHNldGxhdW5jaGVzXSA9IHVzZVN0YXRlKFt7ZmFpcmluZ3M6eyBsaW5rczogeyBwYXRjaDoge30gfSB9fV0pO1xuXG51c2VFZmZlY3QoKCkgPT4ge1xuICBnZXRBbGxMYXVuY2hlcygpLnRoZW4oKGRhdGEpID0+IHNldGxhdW5jaGVzKGRhdGEpKTtcbn0sIFtdKTtcbmNvbnNvbGUubG9nKGxhdW5jaGVzWzFdKVxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uPlxuICAgICAge2xhdW5jaGVzLm1hcCgoaXRlbSwgaW5kZXgpPT57XG4gICAgICAgIGlmIChpbmRleCA+IGxhdW5jaGVzLmxlbmd0aC0zKXtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQYXN0Q2FyZCBrZXk9e2xhdW5jaGVzLmlkfSB0aXRsZT17bGF1bmNoZXMubmFtZX0gaW1nPXtsYXVuY2hlcy5saW5rcy5wYXRjaC5sYXJnZX0vPlxuICAgICAgICApO1xuICAgICAgICB9IFxuIFxuICAgICAgfSl9XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzdExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=