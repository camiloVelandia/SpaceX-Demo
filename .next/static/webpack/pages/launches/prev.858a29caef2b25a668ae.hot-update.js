webpackHotUpdate_N_E("pages/launches/prev",{

/***/ "./components/PastLayout/index.js":
/*!****************************************!*\
  !*** ./components/PastLayout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PastCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PastCard */ "./components/PastCard/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/PastLayout/styles.js");
/* harmony import */ var _services_getPastLaunches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/getPastLaunches */ "./services/getPastLaunches.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Spinner */ "./components/Spinner/index.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/PastLayout/index.js",
    _this = undefined,
    _s = $RefreshSig$();







var PastLayout = function PastLayout() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      pastlaunches = _useState[0],
      setpastlaunches = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
    Object(_services_getPastLaunches__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (data) {
      setpastlaunches(data);
      setLoading(false);
    });
  }, []);
  console.log(pastlaunches);

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_s(PastLayout, "ar8G47i52GjX1VcXSPscFFE3eGY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXN0TGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhc3RMYXlvdXQiLCJ1c2VTdGF0ZSIsInBhc3RsYXVuY2hlcyIsInNldHBhc3RsYXVuY2hlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZ2V0UGFzdExhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBRWlCQyxzREFBUSxDQUFDLEVBQUQsQ0FGekI7QUFBQSxNQUVoQkMsWUFGZ0I7QUFBQSxNQUVGQyxlQUZFOztBQUFBLG1CQUdPRixzREFBUSxDQUFDLEtBQUQsQ0FIZjtBQUFBLE1BR2hCRyxPQUhnQjtBQUFBLE1BR1BDLFVBSE87O0FBTXZCQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRSw2RUFBZSxHQUFHQyxJQUFsQixDQUF1QixVQUFDQyxJQUFELEVBQVU7QUFDL0JOLHFCQUFlLENBQUNNLElBQUQsQ0FBZjtBQUNBSixnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBSEQ7QUFJRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUVLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxZQUFaOztBQUNGLE1BQUlFLE9BQUosRUFBYTtBQUNYLHdCQUFPLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUNELHNCQUNFLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQW5DRDs7R0FBTUosVTs7S0FBQUEsVTtBQXFDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGF1bmNoZXMvcHJldi44NThhMjljYWVmMmIyNWE2NjhhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFzdENhcmQgZnJvbSAnLi4vUGFzdENhcmQnXG5pbXBvcnQge1NlY3Rpb259IGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IGdldFBhc3RMYXVuY2hlcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0UGFzdExhdW5jaGVzXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vU3Bpbm5lclwiO1xuXG5jb25zdCBQYXN0TGF5b3V0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtwYXN0bGF1bmNoZXMsIHNldHBhc3RsYXVuY2hlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBnZXRQYXN0TGF1bmNoZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRwYXN0bGF1bmNoZXMoZGF0YSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gICAgY29uc29sZS5sb2cocGFzdGxhdW5jaGVzKTtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbj5cbiAgICAgICB7Lyoge3Bhc3RsYXVuY2hlcy5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQYXN0Q2FyZFxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIGRldGFpbD17aXRlbS5kZXRhaWxzfVxuICAgICAgICAgICAgaW1hZ2U9e2l0ZW0ubGlua3MucGF0Y2guc21hbGx9XG4gICAgICAgICAgICBudW1iZXI9e2l0ZW0uZmxpZ2h0X251bWJlcn1cbiAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZV9sb2NhbH1cbiAgICAgICAgICAgIHN1Y2Nlcz17aXRlbS5zdWNjZXNzID8gXCJzdWNjZXNcIiA6IFwiZmFpbFwifVxuICAgICAgICAgIC8+XG4gICAgICAgICk7fSlcbiAgICAgICAgfSAgKi99XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzdExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9