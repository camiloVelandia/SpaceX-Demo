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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: launches.map(function (item, index) {
      if (index > launches.length - 3) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PastCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: item.name,
          detail: item.details,
          image: item.links.patch.small,
          number: item.flight_number,
          date: item.date_local,
          succes: item.succes ? 'succes' : 'fail'
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this);
      }
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNlbnRMYXlvdXQvaW5kZXguanMiXSwibmFtZXMiOlsiUGFzdExheW91dCIsInVzZVN0YXRlIiwibGF1bmNoZXMiLCJzZXRsYXVuY2hlcyIsInVzZUVmZmVjdCIsImdldEFsbExhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsZW5ndGgiLCJuYW1lIiwiZGV0YWlscyIsImxpbmtzIiwicGF0Y2giLCJzbWFsbCIsImZsaWdodF9udW1iZXIiLCJkYXRlX2xvY2FsIiwic3VjY2VzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFFT0Msc0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVsQkMsUUFGa0I7QUFBQSxNQUVSQyxXQUZROztBQU16QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLDRFQUFjLEdBQUdDLElBQWpCLENBQXNCLFVBQUNDLElBQUQ7QUFBQSxhQUFVSixXQUFXLENBQUNJLElBQUQsQ0FBckI7QUFBQSxLQUF0QjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFLRSxzQkFDRSxxRUFBQywrQ0FBRDtBQUFBLGNBQ0dMLFFBQVEsQ0FBQ00sR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFlO0FBQzNCLFVBQUlBLEtBQUssR0FBR1IsUUFBUSxDQUFDUyxNQUFULEdBQWdCLENBQTVCLEVBQThCO0FBQzlCLDRCQUNFLHFFQUFDLGlEQUFEO0FBRUUsZUFBSyxFQUFFRixJQUFJLENBQUNHLElBRmQ7QUFHRSxnQkFBTSxFQUFFSCxJQUFJLENBQUNJLE9BSGY7QUFJRSxlQUFLLEVBQUVKLElBQUksQ0FBQ0ssS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxLQUoxQjtBQUtFLGdCQUFNLEVBQUVQLElBQUksQ0FBQ1EsYUFMZjtBQU1FLGNBQUksRUFBRVIsSUFBSSxDQUFDUyxVQU5iO0FBT0UsZ0JBQU0sRUFBRVQsSUFBSSxDQUFDVSxNQUFMLEdBQWEsUUFBYixHQUFzQjtBQVBoQyxXQUNPVixJQUFJLENBQUNXLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVdDO0FBRUYsS0FmQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQS9CRDs7R0FBTXBCLFU7O0tBQUFBLFU7QUFpQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaGVzLjJmNDVlYTkxMGI2MjY1Y2I0NzBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYXN0Q2FyZCBmcm9tIFwiLi4vUGFzdENhcmRcIjtcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBnZXRBbGxMYXVuY2hlcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0QWxsTGF1bmNoZXNcIjtcblxuY29uc3QgUGFzdExheW91dCA9ICgpID0+IHtcblxuY29uc3QgW2xhdW5jaGVzLCBzZXRsYXVuY2hlc10gPSB1c2VTdGF0ZShbXSlcblxuXG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGdldEFsbExhdW5jaGVzKCkudGhlbigoZGF0YSkgPT4gc2V0bGF1bmNoZXMoZGF0YSkpO1xufSwgW10pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbj5cbiAgICAgIHtsYXVuY2hlcy5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuICAgICAgICBpZiAoaW5kZXggPiBsYXVuY2hlcy5sZW5ndGgtMyl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFBhc3RDYXJkXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgZGV0YWlsPXtpdGVtLmRldGFpbHN9XG4gICAgICAgICAgICBpbWFnZT17aXRlbS5saW5rcy5wYXRjaC5zbWFsbH1cbiAgICAgICAgICAgIG51bWJlcj17aXRlbS5mbGlnaHRfbnVtYmVyfVxuICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlX2xvY2FsfVxuICAgICAgICAgICAgc3VjY2VzPXtpdGVtLnN1Y2Nlcz8gJ3N1Y2Nlcyc6J2ZhaWwnfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICAgIH0gXG4gXG4gICAgICB9KX1cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXN0TGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==