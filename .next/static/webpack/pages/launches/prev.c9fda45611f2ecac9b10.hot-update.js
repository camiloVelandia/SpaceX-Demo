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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: pastlaunches.docs.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PastCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: item.name,
        detail: item.details,
        image: item.links.patch.small,
        number: item.flight_number,
        date: item.date_local,
        succes: item.success ? "succes" : "fail"
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXN0TGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhc3RMYXlvdXQiLCJ1c2VTdGF0ZSIsInBhc3RsYXVuY2hlcyIsInNldHBhc3RsYXVuY2hlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZ2V0UGFzdExhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm5hbWUiLCJkZXRhaWxzIiwibGlua3MiLCJwYXRjaCIsInNtYWxsIiwiZmxpZ2h0X251bWJlciIsImRhdGVfbG9jYWwiLCJzdWNjZXNzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFFaUJDLHNEQUFRLENBQUMsRUFBRCxDQUZ6QjtBQUFBLE1BRWhCQyxZQUZnQjtBQUFBLE1BRUZDLGVBRkU7O0FBQUEsbUJBR09GLHNEQUFRLENBQUMsS0FBRCxDQUhmO0FBQUEsTUFHaEJHLE9BSGdCO0FBQUEsTUFHUEMsVUFITzs7QUFNdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLDZFQUFlLEdBQUdDLElBQWxCLENBQXVCLFVBQUNDLElBQUQsRUFBVTtBQUMvQk4scUJBQWUsQ0FBQ00sSUFBRCxDQUFmO0FBQ0FKLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FIRDtBQUlELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRRUssU0FBTyxDQUFDQyxHQUFSLENBQVlULFlBQVo7O0FBQ0YsTUFBSUUsT0FBSixFQUFhO0FBQ1gsd0JBQU8scUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBQ0Qsc0JBQ0UscUVBQUMsK0NBQUQ7QUFBQSxjQUNJRixZQUFZLENBQUNVLElBQWIsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFlO0FBQ3JDLDBCQUNFLHFFQUFDLGlEQUFEO0FBRUUsYUFBSyxFQUFFRCxJQUFJLENBQUNFLElBRmQ7QUFHRSxjQUFNLEVBQUVGLElBQUksQ0FBQ0csT0FIZjtBQUlFLGFBQUssRUFBRUgsSUFBSSxDQUFDSSxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEtBSjFCO0FBS0UsY0FBTSxFQUFFTixJQUFJLENBQUNPLGFBTGY7QUFNRSxZQUFJLEVBQUVQLElBQUksQ0FBQ1EsVUFOYjtBQU9FLGNBQU0sRUFBRVIsSUFBSSxDQUFDUyxPQUFMLEdBQWUsUUFBZixHQUEwQjtBQVBwQyxTQUNPVCxJQUFJLENBQUNVLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUcsS0FYSDtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQW5DRDs7R0FBTXhCLFU7O0tBQUFBLFU7QUFxQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaGVzL3ByZXYuYzlmZGE0NTYxMWYyZWNhYzliMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhc3RDYXJkIGZyb20gJy4uL1Bhc3RDYXJkJ1xuaW1wb3J0IHtTZWN0aW9ufSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCBnZXRQYXN0TGF1bmNoZXMgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldFBhc3RMYXVuY2hlc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL1NwaW5uZXJcIjtcblxuY29uc3QgUGFzdExheW91dCA9ICgpID0+IHtcblxuICBjb25zdCBbcGFzdGxhdW5jaGVzLCBzZXRwYXN0bGF1bmNoZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgZ2V0UGFzdExhdW5jaGVzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0cGFzdGxhdW5jaGVzKGRhdGEpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICAgIGNvbnNvbGUubG9nKHBhc3RsYXVuY2hlcyk7XG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICAge3Bhc3RsYXVuY2hlcy5kb2NzLm1hcCgoaXRlbSwgaW5kZXgpPT57XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFBhc3RDYXJkXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgZGV0YWlsPXtpdGVtLmRldGFpbHN9XG4gICAgICAgICAgICBpbWFnZT17aXRlbS5saW5rcy5wYXRjaC5zbWFsbH1cbiAgICAgICAgICAgIG51bWJlcj17aXRlbS5mbGlnaHRfbnVtYmVyfVxuICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlX2xvY2FsfVxuICAgICAgICAgICAgc3VjY2VzPXtpdGVtLnN1Y2Nlc3MgPyBcInN1Y2Nlc1wiIDogXCJmYWlsXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTt9KVxuICAgICAgICB9IFxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3RMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==