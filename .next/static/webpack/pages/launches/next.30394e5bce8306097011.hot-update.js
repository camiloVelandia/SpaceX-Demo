webpackHotUpdate_N_E("pages/launches/next",{

/***/ "./components/NextCard/index.js":
/*!**************************************!*\
  !*** ./components/NextCard/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/NextCard/styles.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/NextCard/index.js",
    _this = undefined,
    _s = $RefreshSig$();




var NextCard = function NextCard(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      date = _useState[0],
      setDate = _useState[1];

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  var today = new Date(props.date);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setDate(today.toLocaleDateString("en-US"));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      children: "Next missions"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Figure"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: props.image || "/images/escudo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Name"], {
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      children: props.details || 'Details must be ready in the upcomings days, the information is not provides still.'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Info"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Bullet"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "date:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Bullet"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "flight number:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.number
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(NextCard, "b1Zb5C0n2TNX0+cawpWtILgzQ/c=");

_c = NextCard;
/* harmony default export */ __webpack_exports__["default"] = (NextCard);

var _c;

$RefreshReg$(_c, "NextCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXh0Q2FyZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXh0Q2FyZCIsInByb3BzIiwidXNlU3RhdGUiLCJkYXRlIiwic2V0RGF0ZSIsIm9wdGlvbnMiLCJ3ZWVrZGF5IiwieWVhciIsIm1vbnRoIiwiZGF5IiwidG9kYXkiLCJEYXRlIiwidXNlRWZmZWN0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiaW1hZ2UiLCJuYW1lIiwiZGV0YWlscyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBSUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRURDLHNEQUFRLENBQUMsRUFBRCxDQUZQO0FBQUEsTUFFbEJDLElBRmtCO0FBQUEsTUFFWkMsT0FGWTs7QUFJekIsTUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFdBQU8sRUFBRSxNQURLO0FBRWRDLFFBQUksRUFBRSxTQUZRO0FBR2RDLFNBQUssRUFBRSxNQUhPO0FBSWRDLE9BQUcsRUFBRTtBQUpTLEdBQWhCO0FBTUEsTUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosQ0FBU1YsS0FBSyxDQUFDRSxJQUFmLENBQWQ7QUFFQVMseURBQVMsQ0FBQyxZQUFNO0FBQ2RSLFdBQU8sQ0FBQ00sS0FBSyxDQUFDRyxrQkFBTixDQUF5QixPQUF6QixDQUFELENBQVA7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUQsc0JBQ0UscUVBQUMsK0NBQUQ7QUFBQSw0QkFDRSxxRUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsOENBQUQ7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRVosS0FBSyxDQUFDYSxLQUFOLElBQWU7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUtFLHFFQUFDLDRDQUFEO0FBQUEsZ0JBQU9iLEtBQUssQ0FBQ2M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFNRSxxRUFBQyw0Q0FBRDtBQUFBLGdCQUNHZCxLQUFLLENBQUNlLE9BQU4sSUFBaUI7QUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBU0UscUVBQUMsNENBQUQ7QUFBQSw4QkFDRSxxRUFBQyw4Q0FBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxvQkFBSWI7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0UscUVBQUMsOENBQUQ7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsb0JBQUlGLEtBQUssQ0FBQ2dCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQXZDRDs7R0FBTWpCLFE7O0tBQUFBLFE7QUF5Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaGVzL25leHQuMzAzOTRlNWJjZTgzMDYwOTcwMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTZWN0aW9uLCBUaXRsZSwgRmlndXJlLCBOYW1lLCBUZXh0LCBJbmZvLCBCdWxsZXQgfSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuXG5cbmNvbnN0IE5leHRDYXJkID0gKHByb3BzKSA9PiB7XG5cbiAgIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICBjb25zdCBvcHRpb25zID0ge1xuICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgIH07XG4gICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKHByb3BzLmRhdGUpO1xuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBzZXREYXRlKHRvZGF5LnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIpKTtcbiAgIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uPlxuICAgICAgPFRpdGxlPk5leHQgbWlzc2lvbnM8L1RpdGxlPlxuICAgICAgPEZpZ3VyZT5cbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlIHx8IFwiL2ltYWdlcy9lc2N1ZG8ucG5nXCJ9IC8+XG4gICAgICA8L0ZpZ3VyZT5cbiAgICAgIDxOYW1lPntwcm9wcy5uYW1lfTwvTmFtZT5cbiAgICAgIDxUZXh0PlxuICAgICAgICB7cHJvcHMuZGV0YWlscyB8fCAnRGV0YWlscyBtdXN0IGJlIHJlYWR5IGluIHRoZSB1cGNvbWluZ3MgZGF5cywgdGhlIGluZm9ybWF0aW9uIGlzIG5vdCBwcm92aWRlcyBzdGlsbC4nfVxuICAgICAgPC9UZXh0PlxuICAgICAgPEluZm8+XG4gICAgICAgIDxCdWxsZXQ+XG4gICAgICAgICAgPHA+ZGF0ZTo8L3A+XG4gICAgICAgICAgPHA+e2RhdGV9PC9wPlxuICAgICAgICA8L0J1bGxldD5cbiAgICAgICAgPEJ1bGxldD5cbiAgICAgICAgICA8cD5mbGlnaHQgbnVtYmVyOjwvcD5cbiAgICAgICAgICA8cD57cHJvcHMubnVtYmVyfTwvcD5cbiAgICAgICAgPC9CdWxsZXQ+XG4gICAgICAgIFxuICAgICAgPC9JbmZvPlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==