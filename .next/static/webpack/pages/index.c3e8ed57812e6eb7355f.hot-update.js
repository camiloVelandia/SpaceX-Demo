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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      date = _useState3[0],
      setDate = _useState3[1];

  var calculateTimeLeft = function calculateTimeLeft() {
    var year = new Date().getFullYear();
    var difference = +new Date(date) - +new Date();
    var timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor(difference / 1000 / 60 % 60),
        seconds: Math.floor(difference / 1000 % 60)
      };
    }

    return timeLeft;
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(calculateTimeLeft()),
      timeLeft = _useState4[0],
      setTimeLeft = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_services_getNextLaunch__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (data) {
      setNextlaunch(_objectSpread({}, data));

      if (nextlaunch.rocket) {
        return Object(_services_getOneRocket__WEBPACK_IMPORTED_MODULE_5__["default"])(nextlaunch.rocket).then(function (data) {
          return setRocketUsed(_objectSpread({}, data));
        });
      }
    });
  }, [nextlaunch]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTimeout(function () {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    setDate(nextlaunch.date_local);
  }, [nextlaunch]);
  var timerComponents = [];
  Object.keys(timeLeft).forEach(function (interval, index) {
    timerComponents.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: timeLeft[interval]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: interval
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), " "]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this));
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Counter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Up Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["NumberContainer"], {
        children: timerComponents.length ? timerComponents : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          children: "Time's up!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 55
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Info"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "mission:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this), " ", nextlaunch.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "Rocket:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this), " ", rocketUsed.name || 'falcon']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, _this);
};

_s(CountDown, "ZdauY8HPQ+fXhZODc1WB3p8ejxE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudERvd24vaW5kZXguanMiXSwibmFtZXMiOlsiQ291bnREb3duIiwidXNlU3RhdGUiLCJuZXh0bGF1bmNoIiwic2V0TmV4dGxhdW5jaCIsInJvY2tldFVzZWQiLCJzZXRSb2NrZXRVc2VkIiwiZGF0ZSIsInNldERhdGUiLCJjYWxjdWxhdGVUaW1lTGVmdCIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJkaWZmZXJlbmNlIiwidGltZUxlZnQiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInNldFRpbWVMZWZ0IiwidXNlRWZmZWN0IiwiZ2V0TmV4dExhdW5jaCIsInRoZW4iLCJkYXRhIiwicm9ja2V0IiwiZ2V0T25lUm9ja2V0Iiwic2V0VGltZW91dCIsImRhdGVfbG9jYWwiLCJ0aW1lckNvbXBvbmVudHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImludGVydmFsIiwiaW5kZXgiLCJwdXNoIiwibGVuZ3RoIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUNmQyxVQURlO0FBQUEsTUFDSEMsYUFERzs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFZkcsVUFGZTtBQUFBLE1BRUhDLGFBRkc7O0FBQUEsbUJBR0VKLHNEQUFRLENBQUMsRUFBRCxDQUhWO0FBQUEsTUFHZkssSUFIZTtBQUFBLE1BR1RDLE9BSFM7O0FBS3RCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM3QixRQUFJQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQVg7QUFDQSxR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QUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLE9BQ3dCakMsVUFBVSxDQUFDaUMsSUFBWCxJQUFtQixRQUQzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBNUVEOztHQUFNckMsUzs7S0FBQUEsUztBQThFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzNlOGVkNTc4MTJlNmViNzM1NWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VjdGlvbiwgQ291bnRlciwgTnVtYmVyLCBOdW1iZXJDb250YWluZXIsIEluZm8gfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBnZXROZXh0TGF1bmNoIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXROZXh0TGF1bmNoXCI7XG5pbXBvcnQgZ2V0T25lUm9ja2V0IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRPbmVSb2NrZXRcIjtcblxuXG5jb25zdCBDb3VudERvd24gPSAoKSA9PiB7XG4gIGNvbnN0IFtuZXh0bGF1bmNoLCBzZXROZXh0bGF1bmNoXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3JvY2tldFVzZWQsIHNldFJvY2tldFVzZWRdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIFxuICBjb25zdCBjYWxjdWxhdGVUaW1lTGVmdCA9ICgpID0+IHtcbiAgICAgbGV0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgIGNvbnN0IGRpZmZlcmVuY2UgPSArbmV3IERhdGUoZGF0ZSkgLSArbmV3IERhdGUoKTtcbiAgICAgbGV0IHRpbWVMZWZ0ID0ge307XG4gICAgIFxuICAgICBpZiAoZGlmZmVyZW5jZSA+IDApIHtcbiAgICAgICB0aW1lTGVmdCA9IHtcbiAgICAgICAgIGRheXM6IE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXG4gICAgICAgICBob3VyczogTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpLFxuICAgICAgICAgbWludXRlczogTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvIDEwMDAgLyA2MCkgJSA2MCksXG4gICAgICAgICBzZWNvbmRzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gMTAwMCkgJSA2MCksXG4gICAgICAgfTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuIHRpbWVMZWZ0O1xuICAgIH07XG4gICAgXG4gIGNvbnN0IFt0aW1lTGVmdCwgc2V0VGltZUxlZnRdID0gdXNlU3RhdGUoY2FsY3VsYXRlVGltZUxlZnQoKSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5leHRMYXVuY2goKVxuICAgIC50aGVuKChkYXRhKSA9PnsgXG4gICAgICBzZXROZXh0bGF1bmNoKHsuLi5kYXRhfSlcbiAgICAgIGlmIChuZXh0bGF1bmNoLnJvY2tldCkge1xuICAgICAgICByZXR1cm4gZ2V0T25lUm9ja2V0KG5leHRsYXVuY2gucm9ja2V0KS50aGVuKChkYXRhKSA9PlxuICAgICAgICBzZXRSb2NrZXRVc2VkKHsgLi4uZGF0YSB9KVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcbiAgfSwgW25leHRsYXVuY2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0VGltZUxlZnQoY2FsY3VsYXRlVGltZUxlZnQoKSk7XG4gICAgfSwgMTAwMCk7XG4gICAgc2V0RGF0ZShuZXh0bGF1bmNoLmRhdGVfbG9jYWwpO1xuICB9LFtuZXh0bGF1bmNoXSk7XG5cbiAgY29uc3QgdGltZXJDb21wb25lbnRzID0gW107XG5cbiAgT2JqZWN0LmtleXModGltZUxlZnQpLmZvckVhY2goKGludGVydmFsLCBpbmRleCkgPT4ge1xuICBcblxuICAgIHRpbWVyQ29tcG9uZW50cy5wdXNoKFxuICAgICAgPE51bWJlciBrZXk9e2luZGV4fT5cbiAgICAgICAgPHA+e3RpbWVMZWZ0W2ludGVydmFsXX08L3A+XG4gICAgICAgIDxzcGFuPntpbnRlcnZhbH08L3NwYW4+e1wiIFwifVxuICAgICAgPC9OdW1iZXI+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbj5cbiAgICAgIDxDb3VudGVyPlxuICAgICAgICA8aDE+VXAgTmV4dDwvaDE+XG5cbiAgICAgICAgPE51bWJlckNvbnRhaW5lcj5cbiAgICAgICAgICB7dGltZXJDb21wb25lbnRzLmxlbmd0aCA/IHRpbWVyQ29tcG9uZW50cyA6IDxzbWFsbD5UaW1lJ3MgdXAhPC9zbWFsbD59XG4gICAgICAgIDwvTnVtYmVyQ29udGFpbmVyPlxuICAgICAgICA8SW5mbz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuPm1pc3Npb246PC9zcGFuPiB7bmV4dGxhdW5jaC5uYW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuPlJvY2tldDo8L3NwYW4+IHtyb2NrZXRVc2VkLm5hbWUgfHwgJ2ZhbGNvbid9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0luZm8+XG4gICAgICA8L0NvdW50ZXI+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnREb3duOyJdLCJzb3VyY2VSb290IjoiIn0=