webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CountDown/index.js":
/*!***************************************!*\
  !*** ./components/CountDown/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/CountDown/styles.js");
/* harmony import */ var _services_getNextLaunch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/getNextLaunch */ "./services/getNextLaunch.js");
/* harmony import */ var _services_getOneRocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/getOneRocket */ "./services/getOneRocket.js");



var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/CountDown/index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var CountDown = function CountDown() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      nextlaunch = _useState[0],
      setNextlaunch = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      rocketUsed = _useState2[0],
      setRocketUsed = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_services_getNextLaunch__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (data) {
      setNextlaunch(_objectSpread({}, data));

      if (nextlaunch.rocket) {
        return Object(_services_getOneRocket__WEBPACK_IMPORTED_MODULE_5__["default"])(nextlaunch.rocket).then(function (data) {
          return setRocketUsed(_objectSpread({}, data));
        });
      }
    });
  }, []);

  var getRemainingTime = function getRemainingTime(deadline) {
    var now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
    return {
      remainSeconds: remainSeconds,
      remainMinutes: remainMinutes,
      remainHours: remainHours,
      remainDays: remainDays,
      remainTime: remainTime
    };
  };

  var countdown = function countdown(deadline, finalMessage) {
    var timerUpdate = setInterval(function () {
      var t = getRemainingTime(deadline);
      console.log("".concat(t.remainDays, "d:").concat(t.remainHours, "h:").concat(t.remainMinutes, "m:").concat(t.remainSeconds, "s"));
      var r = "".concat(t.remainDays, "d:").concat(t.remainHours, "h:").concat(t.remainMinutes, "m:").concat(t.remainSeconds, "s");
      return r; // if (t.remainTime <= 1) {
      //   clearInterval(timerUpdate);
      //   el.innerHTML = finalMessage;
      // }
    }, 1000);
  };

  console.log(nextlaunch);
  console.log(new Date("2020-12-05T11:39:00-05:00"));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Counter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Up Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["NumberContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: ["days", countdown('Dec 31 2025 21:34:40 GMT-0500', '¡Ya empezó!')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Info"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "mission:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), " ", nextlaunch.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "Rocket:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this), " ", rocketUsed.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, _this);
};

_s(CountDown, "1bP44hroEu/aWLO93J1PsH/v8NQ=");

_c = CountDown;
/* harmony default export */ __webpack_exports__["default"] = (CountDown);

var _c;

$RefreshReg$(_c, "CountDown");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudERvd24vaW5kZXguanMiXSwibmFtZXMiOlsiQ291bnREb3duIiwidXNlU3RhdGUiLCJuZXh0bGF1bmNoIiwic2V0TmV4dGxhdW5jaCIsInJvY2tldFVzZWQiLCJzZXRSb2NrZXRVc2VkIiwidXNlRWZmZWN0IiwiZ2V0TmV4dExhdW5jaCIsInRoZW4iLCJkYXRhIiwicm9ja2V0IiwiZ2V0T25lUm9ja2V0IiwiZ2V0UmVtYWluaW5nVGltZSIsImRlYWRsaW5lIiwibm93IiwiRGF0ZSIsInJlbWFpblRpbWUiLCJyZW1haW5TZWNvbmRzIiwiTWF0aCIsImZsb29yIiwic2xpY2UiLCJyZW1haW5NaW51dGVzIiwicmVtYWluSG91cnMiLCJyZW1haW5EYXlzIiwiY291bnRkb3duIiwiZmluYWxNZXNzYWdlIiwidGltZXJVcGRhdGUiLCJzZXRJbnRlcnZhbCIsInQiLCJjb25zb2xlIiwibG9nIiwiciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxFQUFELENBRHRCO0FBQUEsTUFDZkMsVUFEZTtBQUFBLE1BQ0hDLGFBREc7O0FBQUEsbUJBRWNGLHNEQUFRLENBQUMsRUFBRCxDQUZ0QjtBQUFBLE1BRWZHLFVBRmU7QUFBQSxNQUVIQyxhQUZHOztBQUt0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLDJFQUFhLEdBQ1pDLElBREQsQ0FDTSxVQUFDQyxJQUFELEVBQVM7QUFDYk4sbUJBQWEsbUJBQUtNLElBQUwsRUFBYjs7QUFDQSxVQUFJUCxVQUFVLENBQUNRLE1BQWYsRUFBdUI7QUFDckIsZUFBT0Msc0VBQVksQ0FBQ1QsVUFBVSxDQUFDUSxNQUFaLENBQVosQ0FBZ0NGLElBQWhDLENBQXFDLFVBQUNDLElBQUQ7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QUE7QUFBQTtBQUFBLGlCQVBGLGVBV0UscUVBQUMsOENBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixlQWVFLHFFQUFDLDhDQUFEO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUF1QkUscUVBQUMsNENBQUQ7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLE9BQ3lCdEIsVUFBVSxDQUFDOEIsSUFEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixPQUN3QjVCLFVBQVUsQ0FBQzRCLElBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBMUZEOztHQUFNaEMsUzs7S0FBQUEsUztBQTRGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYThjN2I5YzQ0NzEyNjcxNjE1ODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VjdGlvbiwgQ291bnRlciwgTnVtYmVyLCBOdW1iZXJDb250YWluZXIsIEluZm8gfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBnZXROZXh0TGF1bmNoIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXROZXh0TGF1bmNoXCI7XG5pbXBvcnQgZ2V0T25lUm9ja2V0IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRPbmVSb2NrZXRcIjtcblxuXG5jb25zdCBDb3VudERvd24gPSAoKSA9PiB7XG4gIGNvbnN0IFtuZXh0bGF1bmNoLCBzZXROZXh0bGF1bmNoXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3JvY2tldFVzZWQsIHNldFJvY2tldFVzZWRdID0gdXNlU3RhdGUoe30pO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXROZXh0TGF1bmNoKClcbiAgICAudGhlbigoZGF0YSkgPT57IFxuICAgICAgc2V0TmV4dGxhdW5jaCh7Li4uZGF0YX0pXG4gICAgICBpZiAobmV4dGxhdW5jaC5yb2NrZXQpIHtcbiAgICAgICAgcmV0dXJuIGdldE9uZVJvY2tldChuZXh0bGF1bmNoLnJvY2tldCkudGhlbigoZGF0YSkgPT5cbiAgICAgICAgICBzZXRSb2NrZXRVc2VkKHsgLi4uZGF0YSB9KVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcbiAgIFxuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0UmVtYWluaW5nVGltZSA9IChkZWFkbGluZSkgPT4ge1xuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLFxuICAgICAgcmVtYWluVGltZSA9IChuZXcgRGF0ZShkZWFkbGluZSkgLSBub3cgKyAxMDAwKSAvIDEwMDAsXG4gICAgICByZW1haW5TZWNvbmRzID0gKFwiMFwiICsgTWF0aC5mbG9vcihyZW1haW5UaW1lICUgNjApKS5zbGljZSgtMiksXG4gICAgICByZW1haW5NaW51dGVzID0gKFwiMFwiICsgTWF0aC5mbG9vcigocmVtYWluVGltZSAvIDYwKSAlIDYwKSkuc2xpY2UoLTIpLFxuICAgICAgcmVtYWluSG91cnMgPSAoXCIwXCIgKyBNYXRoLmZsb29yKChyZW1haW5UaW1lIC8gMzYwMCkgJSAyNCkpLnNsaWNlKC0yKSxcbiAgICAgIHJlbWFpbkRheXMgPSBNYXRoLmZsb29yKHJlbWFpblRpbWUgLyAoMzYwMCAqIDI0KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVtYWluU2Vjb25kcyxcbiAgICAgIHJlbWFpbk1pbnV0ZXMsXG4gICAgICByZW1haW5Ib3VycyxcbiAgICAgIHJlbWFpbkRheXMsXG4gICAgICByZW1haW5UaW1lLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgY291bnRkb3duID0gKGRlYWRsaW5lLCAgZmluYWxNZXNzYWdlKSA9PiB7XG5cbiAgICBjb25zdCB0aW1lclVwZGF0ZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGxldCB0ID0gZ2V0UmVtYWluaW5nVGltZShkZWFkbGluZSk7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCR7dC5yZW1haW5EYXlzfWQ6JHt0LnJlbWFpbkhvdXJzfWg6JHt0LnJlbWFpbk1pbnV0ZXN9bToke3QucmVtYWluU2Vjb25kc31zYFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHIgPSBgJHt0LnJlbWFpbkRheXN9ZDoke3QucmVtYWluSG91cnN9aDoke3QucmVtYWluTWludXRlc31tOiR7dC5yZW1haW5TZWNvbmRzfXNgO1xuICAgICAgcmV0dXJuIHJcbiAgICAgICAgLy8gaWYgKHQucmVtYWluVGltZSA8PSAxKSB7XG4gICAgICAgIC8vICAgY2xlYXJJbnRlcnZhbCh0aW1lclVwZGF0ZSk7XG4gICAgICAgIC8vICAgZWwuaW5uZXJIVE1MID0gZmluYWxNZXNzYWdlO1xuICAgICAgICAvLyB9XG5cbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuY29uc29sZS5sb2cobmV4dGxhdW5jaClcbmNvbnNvbGUubG9nKG5ldyBEYXRlKFwiMjAyMC0xMi0wNVQxMTozOTowMC0wNTowMFwiKSk7XG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Q291bnRlcj5cbiAgICAgICAgPGgxPlVwIE5leHQ8L2gxPlxuXG4gICAgICAgIDxOdW1iZXJDb250YWluZXI+XG4gICAgICAgICAgPE51bWJlcj5cbiAgICAgICAgICAgIDxwPjM8L3A+XG4gICAgICAgICAgICA8c21hbGw+ZGF5c1xuICAgICAgICAgICAge2NvdW50ZG93bignRGVjIDMxIDIwMjUgMjE6MzQ6NDAgR01ULTA1MDAnLCAgJ8KhWWEgZW1wZXrDsyEnKX1cbiAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgPC9OdW1iZXI+XG4gICAgICAgICAgPE51bWJlcj5cbiAgICAgICAgICAgIDxwPjM8L3A+XG4gICAgICAgICAgICA8c21hbGw+ZGF5czwvc21hbGw+XG4gICAgICAgICAgPC9OdW1iZXI+XG4gICAgICAgICAgPE51bWJlcj5cbiAgICAgICAgICAgIDxwPjM8L3A+XG4gICAgICAgICAgICA8c21hbGw+ZGF5czwvc21hbGw+XG4gICAgICAgICAgPC9OdW1iZXI+XG4gICAgICAgICAgPE51bWJlcj5cbiAgICAgICAgICAgIDxwPjM8L3A+XG4gICAgICAgICAgICA8c21hbGw+ZGF5czwvc21hbGw+XG4gICAgICAgICAgPC9OdW1iZXI+XG4gICAgICAgIDwvTnVtYmVyQ29udGFpbmVyPlxuICAgICAgICA8SW5mbz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuPm1pc3Npb246PC9zcGFuPiB7bmV4dGxhdW5jaC5uYW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuPlJvY2tldDo8L3NwYW4+IHtyb2NrZXRVc2VkLm5hbWV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0luZm8+XG4gICAgICA8L0NvdW50ZXI+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnREb3duOyJdLCJzb3VyY2VSb290IjoiIn0=