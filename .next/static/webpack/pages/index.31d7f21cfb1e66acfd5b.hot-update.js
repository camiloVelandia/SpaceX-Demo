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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("2020-12-05T11:39:00-05:00"),
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
    }); // ;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTimeout(function () {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    setDate(nextlaunch.date_local);
  });
  var timerComponents = [];
  Object.keys(timeLeft).forEach(function (interval, index) {
    if (timeLeft[interval] == 0) {
      return timerComponents.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: timeLeft[interval]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: interval
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this), " "]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this));
    }

    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: timeLeft[interval]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: interval
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, _this), " "]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, _this));
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Counter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Up Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["NumberContainer"], {
        children: timerComponents.length ? timerComponents : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: "Time's up!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 57
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Info"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "mission:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this), " ", nextlaunch.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "Rocket:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this), " ", rocketUsed.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, _this);
};

_s(CountDown, "79oRUqkjugOYHFOlxv47NKbeGWI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudERvd24vaW5kZXguanMiXSwibmFtZXMiOlsiQ291bnREb3duIiwidXNlU3RhdGUiLCJuZXh0bGF1bmNoIiwic2V0TmV4dGxhdW5jaCIsInJvY2tldFVzZWQiLCJzZXRSb2NrZXRVc2VkIiwiZGF0ZSIsInNldERhdGUiLCJjYWxjdWxhdGVUaW1lTGVmdCIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJkaWZmZXJlbmNlIiwidGltZUxlZnQiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInNldFRpbWVMZWZ0IiwidXNlRWZmZWN0IiwiZ2V0TmV4dExhdW5jaCIsInRoZW4iLCJkYXRhIiwicm9ja2V0IiwiZ2V0T25lUm9ja2V0Iiwic2V0VGltZW91dCIsImRhdGVfbG9jYWwiLCJ0aW1lckNvbXBvbmVudHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImludGVydmFsIiwiaW5kZXgiLCJwdXNoIiwibGVuZ3RoIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUNmQyxVQURlO0FBQUEsTUFDSEMsYUFERzs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFZkcsVUFGZTtBQUFBLE1BRUhDLGFBRkc7O0FBQUEsbUJBR0VKLHNEQUFRLDZCQUhWO0FBQUEsTUFHZkssSUFIZTtBQUFBLE1BR1RDLE9BSFM7O0FBS3RCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM3QixRQUFJQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQVg7QUFDQSxRQUFNQyxVQUFV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LDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRSxxRUFBQyx1REFBRDtBQUFBLGtCQUdLTCxlQUFlLENBQUNPLE1BQWhCLEdBQXlCUCxlQUF6QixnQkFBMkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBVUUscUVBQUMsNENBQUQ7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLE9BQ3lCM0IsVUFBVSxDQUFDbUMsSUFEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixPQUN3QmpDLFVBQVUsQ0FBQ2lDLElBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0FqR0Q7O0dBQU1yQyxTOztLQUFBQSxTO0FBbUdTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMWQ3ZjIxY2ZiMWU2NmFjZmQ1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWN0aW9uLCBDb3VudGVyLCBOdW1iZXIsIE51bWJlckNvbnRhaW5lciwgSW5mbyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IGdldE5leHRMYXVuY2ggZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldE5leHRMYXVuY2hcIjtcbmltcG9ydCBnZXRPbmVSb2NrZXQgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldE9uZVJvY2tldFwiO1xuXG5cbmNvbnN0IENvdW50RG93biA9ICgpID0+IHtcbiAgY29uc3QgW25leHRsYXVuY2gsIHNldE5leHRsYXVuY2hdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbcm9ja2V0VXNlZCwgc2V0Um9ja2V0VXNlZF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKGAyMDIwLTEyLTA1VDExOjM5OjAwLTA1OjAwYCk7XG4gIFxuICBjb25zdCBjYWxjdWxhdGVUaW1lTGVmdCA9ICgpID0+IHtcbiAgICAgbGV0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgIGNvbnN0IGRpZmZlcmVuY2UgPSArbmV3IERhdGUoZGF0ZSkgLSArbmV3IERhdGUoKTtcbiAgICAgbGV0IHRpbWVMZWZ0ID0ge307XG4gICAgIFxuICAgICBpZiAoZGlmZmVyZW5jZSA+IDApIHtcbiAgICAgICB0aW1lTGVmdCA9IHtcbiAgICAgICAgIGRheXM6IE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXG4gICAgICAgICBob3VyczogTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpLFxuICAgICAgICAgbWludXRlczogTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvIDEwMDAgLyA2MCkgJSA2MCksXG4gICAgICAgICBzZWNvbmRzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gMTAwMCkgJSA2MCksXG4gICAgICAgfTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuIHRpbWVMZWZ0O1xuICAgIH07XG4gICAgXG4gIGNvbnN0IFt0aW1lTGVmdCwgc2V0VGltZUxlZnRdID0gdXNlU3RhdGUoY2FsY3VsYXRlVGltZUxlZnQoKSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5leHRMYXVuY2goKVxuICAgIC50aGVuKChkYXRhKSA9PnsgXG4gICAgICBzZXROZXh0bGF1bmNoKHsuLi5kYXRhfSlcbiAgICAgIGlmIChuZXh0bGF1bmNoLnJvY2tldCkge1xuICAgICAgICByZXR1cm4gZ2V0T25lUm9ja2V0KG5leHRsYXVuY2gucm9ja2V0KS50aGVuKChkYXRhKSA9PlxuICAgICAgICBzZXRSb2NrZXRVc2VkKHsgLi4uZGF0YSB9KVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcbiAgICBcbiAgICAvLyA7XG4gICAgXG4gIH0sIFtdKTtcblxuICAgXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVMZWZ0KGNhbGN1bGF0ZVRpbWVMZWZ0KCkpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgICBzZXREYXRlKG5leHRsYXVuY2guZGF0ZV9sb2NhbCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aW1lckNvbXBvbmVudHMgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKHRpbWVMZWZ0KS5mb3JFYWNoKChpbnRlcnZhbCwgaW5kZXgpID0+IHtcbiAgICAgIGlmICh0aW1lTGVmdFtpbnRlcnZhbF0gPT0wKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICB0aW1lckNvbXBvbmVudHMucHVzaChcbiAgICAgICAgPE51bWJlciBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8cD57dGltZUxlZnRbaW50ZXJ2YWxdfTwvcD5cbiAgICAgICAgICA8c3Bhbj57aW50ZXJ2YWx9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgPC9OdW1iZXI+XG4gICAgICApXG4gICAgICApXG4gICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGltZUxlZnRbaW50ZXJ2YWxdKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICB0aW1lckNvbXBvbmVudHMucHVzaChcbiAgICAgICAgPE51bWJlciBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8cD57dGltZUxlZnRbaW50ZXJ2YWxdfTwvcD5cbiAgICAgICAgICA8c3Bhbj57aW50ZXJ2YWx9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgPC9OdW1iZXI+XG4gICAgICApO1xuICAgIH0pO1xuIFxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uPlxuICAgICAgPENvdW50ZXI+XG4gICAgICAgIDxoMT5VcCBOZXh0PC9oMT5cblxuICAgICAgICA8TnVtYmVyQ29udGFpbmVyPlxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgICAge3RpbWVyQ29tcG9uZW50cy5sZW5ndGggPyB0aW1lckNvbXBvbmVudHMgOiA8c3Bhbj5UaW1lJ3MgdXAhPC9zcGFuPn1cbiAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICA8L051bWJlckNvbnRhaW5lcj5cbiAgICAgICAgPEluZm8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Bhbj5taXNzaW9uOjwvc3Bhbj4ge25leHRsYXVuY2gubmFtZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Bhbj5Sb2NrZXQ6PC9zcGFuPiB7cm9ja2V0VXNlZC5uYW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9JbmZvPlxuICAgICAgPC9Db3VudGVyPlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50RG93bjsiXSwic291cmNlUm9vdCI6IiJ9