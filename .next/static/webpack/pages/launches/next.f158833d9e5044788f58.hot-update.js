webpackHotUpdate_N_E("pages/launches/next",{

/***/ "./components/NextLayout/index.js":
/*!****************************************!*\
  !*** ./components/NextLayout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NextCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NextCard */ "./components/NextCard/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/NextLayout/styles.js");
/* harmony import */ var _services_getUpcomingLaunches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/getUpcomingLaunches */ "./services/getUpcomingLaunches.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/NextLayout/index.js",
    _this = undefined,
    _s = $RefreshSig$();






var NextLayout = function NextLayout() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      upcominglaunches = _useState[0],
      setupcominglaunches = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getUpcomingLaunches__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (data) {
      return setupcominglaunches(data);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: upcominglaunches.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NextCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: item.name,
        details: item.details,
        image: item.links.patch.large,
        date: item.date_local,
        number: item.flight_number
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_s(NextLayout, "Si4bmqIcFb+fjUHqG+qvj56FdR4=");

_c = NextLayout;
/* harmony default export */ __webpack_exports__["default"] = (NextLayout);

var _c;

$RefreshReg$(_c, "NextLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXh0TGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIk5leHRMYXlvdXQiLCJ1c2VTdGF0ZSIsInVwY29taW5nbGF1bmNoZXMiLCJzZXR1cGNvbWluZ2xhdW5jaGVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJnZXRVcGNvbWluZ0xhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJtYXAiLCJpdGVtIiwibmFtZSIsImRldGFpbHMiLCJsaW5rcyIsInBhdGNoIiwibGFyZ2UiLCJkYXRlX2xvY2FsIiwiZmxpZ2h0X251bWJlciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBRXlCQyxzREFBUSxDQUFDLEVBQUQsQ0FGakM7QUFBQSxNQUVoQkMsZ0JBRmdCO0FBQUEsTUFFRUMsbUJBRkY7O0FBQUEsbUJBR09GLHNEQUFRLENBQUMsS0FBRCxDQUhmO0FBQUEsTUFHaEJHLE9BSGdCO0FBQUEsTUFHUEMsVUFITzs7QUFLdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxpRkFBbUIsR0FBR0MsSUFBdEIsQ0FBMkIsVUFBQ0MsSUFBRDtBQUFBLGFBQVVOLG1CQUFtQixDQUFDTSxJQUFELENBQTdCO0FBQUEsS0FBM0I7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0UscUVBQUMsK0NBQUQ7QUFBQSxjQUVFUCxnQkFBZ0IsQ0FBQ1EsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFRO0FBQzNCLDBCQUNFLHFFQUFDLGlEQUFEO0FBRUUsWUFBSSxFQUFFQSxJQUFJLENBQUNDLElBRmI7QUFHRSxlQUFPLEVBQUVELElBQUksQ0FBQ0UsT0FIaEI7QUFJRSxhQUFLLEVBQUVGLElBQUksQ0FBQ0csS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxLQUoxQjtBQUtFLFlBQUksRUFBRUwsSUFBSSxDQUFDTSxVQUxiO0FBTUUsY0FBTSxFQUFFTixJQUFJLENBQUNPO0FBTmYsU0FDT1AsSUFBSSxDQUFDUSxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlELEtBYkQ7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0E3QkQ7O0dBQU1uQixVOztLQUFBQSxVO0FBK0JTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYXVuY2hlcy9uZXh0LmYxNTg4MzNkOWU1MDQ0Nzg4ZjU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5leHRDYXJkIGZyb20gXCIuLi9OZXh0Q2FyZFwiO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IGdldFVwY29taW5nTGF1bmNoZXMgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldFVwY29taW5nTGF1bmNoZXNcIjtcblxuXG5jb25zdCBOZXh0TGF5b3V0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFt1cGNvbWluZ2xhdW5jaGVzLCBzZXR1cGNvbWluZ2xhdW5jaGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VXBjb21pbmdMYXVuY2hlcygpLnRoZW4oKGRhdGEpID0+IHNldHVwY29taW5nbGF1bmNoZXMoZGF0YSkpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbj5cbiAgICB7XG4gICAgICB1cGNvbWluZ2xhdW5jaGVzLm1hcCgoaXRlbSk9PntcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TmV4dENhcmRcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIGRldGFpbHM9e2l0ZW0uZGV0YWlsc31cbiAgICAgICAgICAgIGltYWdlPXtpdGVtLmxpbmtzLnBhdGNoLmxhcmdlfVxuICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlX2xvY2FsfVxuICAgICAgICAgICAgbnVtYmVyPXtpdGVtLmZsaWdodF9udW1iZXJ9XG5cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgXG4gICAgICB9KVxuICAgIH1cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0TGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==