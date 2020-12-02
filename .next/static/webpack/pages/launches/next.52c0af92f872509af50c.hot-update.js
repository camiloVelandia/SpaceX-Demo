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
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Spinner */ "./components/Spinner/index.js");


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
    setLoading(true);
    Object(_services_getUpcomingLaunches__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (data) {
      setupcominglaunches(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, _this);
  }

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
        lineNumber: 31,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXh0TGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIk5leHRMYXlvdXQiLCJ1c2VTdGF0ZSIsInVwY29taW5nbGF1bmNoZXMiLCJzZXR1cGNvbWluZ2xhdW5jaGVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJnZXRVcGNvbWluZ0xhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJtYXAiLCJpdGVtIiwibmFtZSIsImRldGFpbHMiLCJsaW5rcyIsInBhdGNoIiwibGFyZ2UiLCJkYXRlX2xvY2FsIiwiZmxpZ2h0X251bWJlciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBRXlCQyxzREFBUSxDQUFDLEVBQUQsQ0FGakM7QUFBQSxNQUVoQkMsZ0JBRmdCO0FBQUEsTUFFRUMsbUJBRkY7O0FBQUEsbUJBR09GLHNEQUFRLENBQUMsS0FBRCxDQUhmO0FBQUEsTUFHaEJHLE9BSGdCO0FBQUEsTUFHUEMsVUFITzs7QUFLdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLGlGQUFtQixHQUNsQkMsSUFERCxDQUNNLFVBQUNDLElBQUQsRUFBVTtBQUNkTix5QkFBbUIsQ0FBQ00sSUFBRCxDQUFuQjtBQUNBSixnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBSkQ7QUFLRCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLE1BQUlELE9BQUosRUFBYTtBQUNYLHdCQUFPLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELHNCQUNFLHFFQUFDLCtDQUFEO0FBQUEsY0FFRUYsZ0JBQWdCLENBQUNRLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBUTtBQUMzQiwwQkFDRSxxRUFBQyxpREFBRDtBQUVFLFlBQUksRUFBRUEsSUFBSSxDQUFDQyxJQUZiO0FBR0UsZUFBTyxFQUFFRCxJQUFJLENBQUNFLE9BSGhCO0FBSUUsYUFBSyxFQUFFRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsS0FKMUI7QUFLRSxZQUFJLEVBQUVMLElBQUksQ0FBQ00sVUFMYjtBQU1FLGNBQU0sRUFBRU4sSUFBSSxDQUFDTztBQU5mLFNBQ09QLElBQUksQ0FBQ1EsRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFZRCxLQWJEO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBdENEOztHQUFNbkIsVTs7S0FBQUEsVTtBQXdDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGF1bmNoZXMvbmV4dC41MmMwYWY5MmY4NzI1MDlhZjUwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOZXh0Q2FyZCBmcm9tIFwiLi4vTmV4dENhcmRcIjtcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBnZXRVcGNvbWluZ0xhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRVcGNvbWluZ0xhdW5jaGVzXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vU3Bpbm5lclwiO1xuXG5cbmNvbnN0IE5leHRMYXlvdXQgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3VwY29taW5nbGF1bmNoZXMsIHNldHVwY29taW5nbGF1bmNoZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgZ2V0VXBjb21pbmdMYXVuY2hlcygpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldHVwY29taW5nbGF1bmNoZXMoZGF0YSkgXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKSBcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbj5cbiAgICB7XG4gICAgICB1cGNvbWluZ2xhdW5jaGVzLm1hcCgoaXRlbSk9PntcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TmV4dENhcmRcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIGRldGFpbHM9e2l0ZW0uZGV0YWlsc31cbiAgICAgICAgICAgIGltYWdlPXtpdGVtLmxpbmtzLnBhdGNoLmxhcmdlfVxuICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlX2xvY2FsfVxuICAgICAgICAgICAgbnVtYmVyPXtpdGVtLmZsaWdodF9udW1iZXJ9XG5cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgXG4gICAgICB9KVxuICAgIH1cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0TGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==