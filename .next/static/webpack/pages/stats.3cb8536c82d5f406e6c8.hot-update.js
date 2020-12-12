webpackHotUpdate_N_E("pages/stats",{

/***/ "./components/GridStats/index.js":
/*!***************************************!*\
  !*** ./components/GridStats/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StatCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StatCard */ "./components/StatCard/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/GridStats/styles.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/GridStats/index.js",
    _this = undefined;





var GridStats = function GridStats() {
  var dataDragon = {
    labels: ["crs", "crew"],
    datasets: [{
      label: "# of Votes",
      data: [4, 23],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1
    }]
  };
  var dataStarlink = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [{
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
      borderWidth: 1
    }]
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "dragon misions",
      items: dataDragon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Starlink- in space",
      items: dataStarlink
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, _this);
};

_c = GridStats;
/* harmony default export */ __webpack_exports__["default"] = (GridStats);

var _c;

$RefreshReg$(_c, "GridStats");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFN0YXRzIiwiZGF0YURyYWdvbiIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImRhdGFTdGFybGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBRXRCLE1BQU1DLFVBQVUsR0FBRztBQUNqQkMsVUFBTSxFQUFFLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FEUztBQUVqQkMsWUFBUSxFQUFFLENBQ1I7QUFDRUMsV0FBSyxFQUFFLFlBRFQ7QUFFRUMsVUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FGUjtBQUdFQyxxQkFBZSxFQUFFLENBQ2YseUJBRGUsRUFFZix5QkFGZSxDQUhuQjtBQVFFQyxpQkFBVyxFQUFFLENBQ1gsdUJBRFcsRUFFWCx1QkFGVyxDQVJmO0FBYUVDLGlCQUFXLEVBQUU7QUFiZixLQURRO0FBRk8sR0FBbkI7QUFvQkEsTUFBTUMsWUFBWSxHQUFHO0FBQ25CUCxVQUFNLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixRQUFoQixFQUEwQixPQUExQixDQURXO0FBRW5CQyxZQUFRLEVBQUUsQ0FDUjtBQUNFQyxXQUFLLEVBQUUsWUFEVDtBQUVFQyxVQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUZSO0FBR0VDLHFCQUFlLEVBQUUsQ0FDZix5QkFEZSxFQUVmLHlCQUZlLEVBR2YseUJBSGUsRUFJZix5QkFKZSxDQUhuQjtBQVNFQyxpQkFBVyxFQUFFLENBQ1gsdUJBRFcsRUFFWCx1QkFGVyxFQUdYLHVCQUhXLEVBSVgsdUJBSlcsQ0FUZjtBQWVFQyxpQkFBVyxFQUFFO0FBZmYsS0FEUTtBQUZTLEdBQXJCO0FBdUJBLHNCQUNFLHFFQUFDLDRDQUFEO0FBQUEsNEJBQ0UscUVBQUMsaURBQUQ7QUFBVSxXQUFLLEVBQUMsZ0JBQWhCO0FBQWlDLFdBQUssRUFBRVA7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsaURBQUQ7QUFBVSxXQUFLLEVBQUMsb0JBQWhCO0FBQXFDLFdBQUssRUFBRVE7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FuREQ7O0tBQU1ULFM7QUFxRFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YXRzLjNjYjg1MzZjODJkNWY0MDZlNmM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBTdGF0Q2FyZCBmcm9tIFwiLi4vU3RhdENhcmRcIjtcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBHcmlkU3RhdHMgPSAoKSA9PiB7XG5cbiAgY29uc3QgZGF0YURyYWdvbiA9IHtcbiAgICBsYWJlbHM6IFtcImNyc1wiLCBcImNyZXdcIl0sXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiIyBvZiBWb3Rlc1wiLFxuICAgICAgICBkYXRhOiBbNCwgMjMsIF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCIsXG4gICAgICAgICAgXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiLFxuICAgICAgICAgIFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgY29uc3QgZGF0YVN0YXJsaW5rID0ge1xuICAgIGxhYmVsczogW1wiUmVkXCIsIFwiQmx1ZVwiLCBcIlllbGxvd1wiLCBcIkdyZWVuXCJdLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIiMgb2YgVm90ZXNcIixcbiAgICAgICAgZGF0YTogWzEyLCAxOSwgMywgNSwgMiwgM10sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDAuMilcIixcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLFxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAxKVwiLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkPlxuICAgICAgPFN0YXRDYXJkIHRpdGxlPVwiZHJhZ29uIG1pc2lvbnNcIiBpdGVtcz17ZGF0YURyYWdvbn0gLz5cbiAgICAgIDxTdGF0Q2FyZCB0aXRsZT1cIlN0YXJsaW5rLSBpbiBzcGFjZVwiIGl0ZW1zPXtkYXRhU3Rhcmxpbmt9IC8+XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZFN0YXRzO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9