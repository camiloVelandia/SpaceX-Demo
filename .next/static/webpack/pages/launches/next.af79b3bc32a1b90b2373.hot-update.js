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
          children: props.date
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXh0Q2FyZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXh0Q2FyZCIsInByb3BzIiwidXNlU3RhdGUiLCJkYXRlIiwic2V0RGF0ZSIsIm9wdGlvbnMiLCJ3ZWVrZGF5IiwieWVhciIsIm1vbnRoIiwiZGF5IiwidG9kYXkiLCJEYXRlIiwidXNlRWZmZWN0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiaW1hZ2UiLCJuYW1lIiwiZGV0YWlscyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBSUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRURDLHNEQUFRLENBQUMsRUFBRCxDQUZQO0FBQUEsTUFFbEJDLElBRmtCO0FBQUEsTUFFWkMsT0FGWTs7QUFJekIsTUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFdBQU8sRUFBRSxNQURLO0FBRWRDLFFBQUksRUFBRSxTQUZRO0FBR2RDLFNBQUssRUFBRSxNQUhPO0FBSWRDLE9BQUcsRUFBRTtBQUpTLEdBQWhCO0FBTUEsTUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosQ0FBU1YsS0FBSyxDQUFDRSxJQUFmLENBQWQ7QUFFQVMseURBQVMsQ0FBQyxZQUFNO0FBQ2RSLFdBQU8sQ0FBQ00sS0FBSyxDQUFDRyxrQkFBTixDQUF5QixPQUF6QixDQUFELENBQVA7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUQsc0JBQ0UscUVBQUMsK0NBQUQ7QUFBQSw0QkFDRSxxRUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsOENBQUQ7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRVosS0FBSyxDQUFDYSxLQUFOLElBQWU7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUtFLHFFQUFDLDRDQUFEO0FBQUEsZ0JBQU9iLEtBQUssQ0FBQ2M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFNRSxxRUFBQyw0Q0FBRDtBQUFBLGdCQUNHZCxLQUFLLENBQUNlLE9BQU4sSUFBaUI7QUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBU0UscUVBQUMsNENBQUQ7QUFBQSw4QkFDRSxxRUFBQyw4Q0FBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxvQkFBSWYsS0FBSyxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRSxxRUFBQyw4Q0FBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxvQkFBSUYsS0FBSyxDQUFDZ0I7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBdkNEOztHQUFNakIsUTs7S0FBQUEsUTtBQXlDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGF1bmNoZXMvbmV4dC5hZjc5YjNiYzMyYTFiOTBiMjM3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlY3Rpb24sIFRpdGxlLCBGaWd1cmUsIE5hbWUsIFRleHQsIEluZm8sIEJ1bGxldCB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5cblxuY29uc3QgTmV4dENhcmQgPSAocHJvcHMpID0+IHtcblxuICAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgfTtcbiAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUocHJvcHMuZGF0ZSk7XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIHNldERhdGUodG9kYXkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIikpO1xuICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICA8VGl0bGU+TmV4dCBtaXNzaW9uczwvVGl0bGU+XG4gICAgICA8RmlndXJlPlxuICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2UgfHwgXCIvaW1hZ2VzL2VzY3Vkby5wbmdcIn0gLz5cbiAgICAgIDwvRmlndXJlPlxuICAgICAgPE5hbWU+e3Byb3BzLm5hbWV9PC9OYW1lPlxuICAgICAgPFRleHQ+XG4gICAgICAgIHtwcm9wcy5kZXRhaWxzIHx8ICdEZXRhaWxzIG11c3QgYmUgcmVhZHkgaW4gdGhlIHVwY29taW5ncyBkYXlzLCB0aGUgaW5mb3JtYXRpb24gaXMgbm90IHByb3ZpZGVzIHN0aWxsLid9XG4gICAgICA8L1RleHQ+XG4gICAgICA8SW5mbz5cbiAgICAgICAgPEJ1bGxldD5cbiAgICAgICAgICA8cD5kYXRlOjwvcD5cbiAgICAgICAgICA8cD57cHJvcHMuZGF0ZX08L3A+XG4gICAgICAgIDwvQnVsbGV0PlxuICAgICAgICA8QnVsbGV0PlxuICAgICAgICAgIDxwPmZsaWdodCBudW1iZXI6PC9wPlxuICAgICAgICAgIDxwPntwcm9wcy5udW1iZXJ9PC9wPlxuICAgICAgICA8L0J1bGxldD5cbiAgICAgICAgXG4gICAgICA8L0luZm8+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9