webpackHotUpdate_N_E("pages/search/[key]",{

/***/ "./pages/search/[key].js":
/*!*******************************!*\
  !*** ./pages/search/[key].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_getFilterLaunches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getFilterLaunches */ "./services/getFilterLaunches.js");
/* harmony import */ var _components_PastCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PastCard */ "./components/PastCard/index.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/pages/search/[key].js",
    _this = undefined,
    _s = $RefreshSig$();






var Result = function Result() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      launches = _useState[0],
      setlaunches = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      result = _useState2[0],
      setresult = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getFilterLaunches__WEBPACK_IMPORTED_MODULE_3__["default"])().then(function (data) {
      return setlaunches(data);
    });
  }, []);
  console.log(result);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // const search = launches.filter(
    //   (item) => item.name.toLowerCase() === router.query.key.toLowerCase()
    // );
    setresult(launches.docs);
  }, [launches]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "result",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "result-title",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: " results for:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), " ", router.query.key]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "resultContainer",
      children: result.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PastCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: item.name,
          detail: item.details,
          image: item.links.patch.small,
          number: item.flight_number,
          date: item.date_local,
          succes: item.succes ? "succes" : "fail"
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(Result, "Kzv2YR5+2qD8tZk/j/lLyeBAL8Y=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Result;
/* harmony default export */ __webpack_exports__["default"] = (Result);

var _c;

$RefreshReg$(_c, "Result");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1trZXldLmpzIl0sIm5hbWVzIjpbIlJlc3VsdCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibGF1bmNoZXMiLCJzZXRsYXVuY2hlcyIsInJlc3VsdCIsInNldHJlc3VsdCIsInVzZUVmZmVjdCIsImdldEZpbHRlckxhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsInF1ZXJ5Iiwia2V5IiwibWFwIiwiaXRlbSIsImluZGV4IiwibmFtZSIsImRldGFpbHMiLCJsaW5rcyIsInBhdGNoIiwic21hbGwiLCJmbGlnaHRfbnVtYmVyIiwiZGF0ZV9sb2NhbCIsInN1Y2NlcyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURtQixrQkFFYUMsc0RBQVEsQ0FBQyxFQUFELENBRnJCO0FBQUEsTUFFWkMsUUFGWTtBQUFBLE1BRUZDLFdBRkU7O0FBQUEsbUJBR1NGLHNEQUFRLENBQUMsRUFBRCxDQUhqQjtBQUFBLE1BR1pHLE1BSFk7QUFBQSxNQUdKQyxTQUhJOztBQUtyQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLCtFQUFpQixHQUFHQyxJQUFwQixDQUF5QixVQUFDQyxJQUFEO0FBQUEsYUFBVU4sV0FBVyxDQUFDTSxJQUFELENBQXJCO0FBQUEsS0FBekI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFaO0FBR0FFLHlEQUFTLENBQUMsWUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBRCxhQUFTLENBQUNILFFBQVEsQ0FBQ1UsSUFBVixDQUFUO0FBQ0QsR0FMUSxFQUtQLENBQUNWLFFBQUQsQ0FMTyxDQUFUO0FBU0Usc0JBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBLDRCQUNFO0FBQUcsZUFBUyxFQUFDLGNBQWI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLE9BQzhCSCxNQUFNLENBQUNjLEtBQVAsQ0FBYUMsR0FEM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLGdCQUNHVixNQUFNLENBQUNXLEdBQVAsQ0FBVyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDM0IsNEJBQ0UscUVBQUMsNERBQUQ7QUFFRSxlQUFLLEVBQUVELElBQUksQ0FBQ0UsSUFGZDtBQUdFLGdCQUFNLEVBQUVGLElBQUksQ0FBQ0csT0FIZjtBQUlFLGVBQUssRUFBRUgsSUFBSSxDQUFDSSxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEtBSjFCO0FBS0UsZ0JBQU0sRUFBRU4sSUFBSSxDQUFDTyxhQUxmO0FBTUUsY0FBSSxFQUFFUCxJQUFJLENBQUNRLFVBTmI7QUFPRSxnQkFBTSxFQUFFUixJQUFJLENBQUNTLE1BQUwsR0FBYyxRQUFkLEdBQXlCO0FBUG5DLFdBQ09ULElBQUksQ0FBQ1UsRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBV0QsT0FaQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQTNDRDs7R0FBTTVCLE07VUFDV0UscUQ7OztLQURYRixNO0FBNkNTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2gvW2tleV0uZTM0ODM4M2VlZmY0ZWQ5YWMzNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBnZXRGaWx0ZXJMYXVuY2hlcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0RmlsdGVyTGF1bmNoZXNcIjtcbmltcG9ydCBQYXN0Q2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYXN0Q2FyZFwiO1xuXG5jb25zdCBSZXN1bHQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbGF1bmNoZXMsIHNldGxhdW5jaGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0cmVzdWx0XSA9IHVzZVN0YXRlKFtdKTtcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgZ2V0RmlsdGVyTGF1bmNoZXMoKS50aGVuKChkYXRhKSA9PiBzZXRsYXVuY2hlcyhkYXRhKSk7XG59LCBbXSk7XG5cbmNvbnNvbGUubG9nKHJlc3VsdClcblxuXG51c2VFZmZlY3QoKCk9PntcbiAgLy8gY29uc3Qgc2VhcmNoID0gbGF1bmNoZXMuZmlsdGVyKFxuICAvLyAgIChpdGVtKSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gcm91dGVyLnF1ZXJ5LmtleS50b0xvd2VyQ2FzZSgpXG4gIC8vICk7XG4gIHNldHJlc3VsdChsYXVuY2hlcy5kb2NzKVxufSxbbGF1bmNoZXNdKVxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJyZXN1bHQtdGl0bGVcIj5cbiAgICAgICAgPHNwYW4+IHJlc3VsdHMgZm9yOjwvc3Bhbj4ge3JvdXRlci5xdWVyeS5rZXl9XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdENvbnRhaW5lclwiPlxuICAgICAgICB7cmVzdWx0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhc3RDYXJkXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgZGV0YWlsPXtpdGVtLmRldGFpbHN9XG4gICAgICAgICAgICAgIGltYWdlPXtpdGVtLmxpbmtzLnBhdGNoLnNtYWxsfVxuICAgICAgICAgICAgICBudW1iZXI9e2l0ZW0uZmxpZ2h0X251bWJlcn1cbiAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlX2xvY2FsfVxuICAgICAgICAgICAgICBzdWNjZXM9e2l0ZW0uc3VjY2VzID8gXCJzdWNjZXNcIiA6IFwiZmFpbFwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=