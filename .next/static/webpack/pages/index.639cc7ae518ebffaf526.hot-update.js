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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_services_getNextLaunch__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (data) {
      setNextlaunch(_objectSpread({}, data));

      if (nextlaunch.rocket) {
        return Object(_services_getOneRocket__WEBPACK_IMPORTED_MODULE_5__["default"])(nextlaunch.rocket).then(function (data) {
          return setRocketUsed(_objectSpread({}, data));
        });
      }
    }); // setDate(nextlaunch.date_local);
  }, []);

  var calculateTimeLeft = function calculateTimeLeft() {
    var year = new Date().getFullYear();
    var difference = +new Date("2021-10-1") - +new Date();
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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Date().getFullYear()),
      year = _useState5[0];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTimeout(function () {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  var timerComponents = [];
  Object.keys(timeLeft).forEach(function (interval) {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      children: [timeLeft[interval], " ", interval, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, _this));
  });
  console.log(nextLaunch);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Counter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Up Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["NumberContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["3", timerComponents.length ? timerComponents : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Time's up!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 57
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Info"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "mission:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this), " ", nextlaunch.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "Rocket:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this), " ", rocketUsed.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, _this);
};

_s(CountDown, "bdCtzhKW0LWHtntWVCzXRLilwl8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudERvd24vaW5kZXguanMiXSwibmFtZXMiOlsiQ291bnREb3duIiwidXNlU3RhdGUiLCJuZXh0bGF1bmNoIiwic2V0TmV4dGxhdW5jaCIsInJvY2tldFVzZWQiLCJzZXRSb2NrZXRVc2VkIiwiZGF0ZSIsInNldERhdGUiLCJ1c2VFZmZlY3QiLCJnZXROZXh0TGF1bmNoIiwidGhlbiIsImRhdGEiLCJyb2NrZXQiLCJnZXRPbmVSb2NrZXQiLCJjYWxjdWxhdGVUaW1lTGVmdCIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJkaWZmZXJlbmNlIiwidGltZUxlZnQiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInNldFRpbWVMZWZ0Iiwic2V0VGltZW91dCIsInRpbWVyQ29tcG9uZW50cyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaW50ZXJ2YWwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIm5leHRMYXVuY2giLCJsZW5ndGgiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsRUFBRCxDQUR0QjtBQUFBLE1BQ2ZDLFVBRGU7QUFBQSxNQUNIQyxhQURHOztBQUFBLG1CQUVjRixzREFBUSxDQUFDLEVBQUQsQ0FGdEI7QUFBQSxNQUVmRyxVQUZlO0FBQUEsTUFFSEMsYUFGRzs7QUFBQSxtQkFHRUosc0RBQVEsQ0FBQyxFQUFELENBSFY7QUFBQSxNQUdmSyxJQUhlO0FBQUEsTUFHVEMsT0FIUzs7QUFNdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQywyRUFBYSxHQUNaQyxJQURELENBQ00sVUFBQ0MsSUFBRCxFQUFTO0FBQ2JSLG1CQUFhLG1CQUFLUSxJQUFM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QTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQVlFLHFFQUFDLDhDQUFEO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsZUFnQkUscUVBQUMsOENBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUF3QkUscUVBQUMsNENBQUQ7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLE9BQ3lCMUIsVUFBVSxDQUFDb0MsSUFEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixPQUN3QmxDLFVBQVUsQ0FBQ2tDLElBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUNELENBbkdEOztHQUFNdEMsUzs7S0FBQUEsUztBQXFHU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjM5Y2M3YWU1MThlYmZmYWY1MjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VjdGlvbiwgQ291bnRlciwgTnVtYmVyLCBOdW1iZXJDb250YWluZXIsIEluZm8gfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBnZXROZXh0TGF1bmNoIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXROZXh0TGF1bmNoXCI7XG5pbXBvcnQgZ2V0T25lUm9ja2V0IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRPbmVSb2NrZXRcIjtcblxuXG5jb25zdCBDb3VudERvd24gPSAoKSA9PiB7XG4gIGNvbnN0IFtuZXh0bGF1bmNoLCBzZXROZXh0bGF1bmNoXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3JvY2tldFVzZWQsIHNldFJvY2tldFVzZWRdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TmV4dExhdW5jaCgpXG4gICAgLnRoZW4oKGRhdGEpID0+eyBcbiAgICAgIHNldE5leHRsYXVuY2goey4uLmRhdGF9KVxuICAgICAgaWYgKG5leHRsYXVuY2gucm9ja2V0KSB7XG4gICAgICAgIHJldHVybiBnZXRPbmVSb2NrZXQobmV4dGxhdW5jaC5yb2NrZXQpLnRoZW4oKGRhdGEpID0+XG4gICAgICAgIHNldFJvY2tldFVzZWQoeyAuLi5kYXRhIH0pXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIC8vIHNldERhdGUobmV4dGxhdW5jaC5kYXRlX2xvY2FsKTtcbiAgICBcbiAgfSwgW10pO1xuXG4gICAgY29uc3QgY2FsY3VsYXRlVGltZUxlZnQgPSAoKSA9PiB7XG4gICAgICBsZXQgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSArbmV3IERhdGUoYDIwMjEtMTAtMWApIC0gK25ldyBEYXRlKCk7XG4gICAgICBsZXQgdGltZUxlZnQgPSB7fTtcblxuICAgICAgaWYgKGRpZmZlcmVuY2UgPiAwKSB7XG4gICAgICAgIHRpbWVMZWZ0ID0ge1xuICAgICAgICAgIGRheXM6IE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXG4gICAgICAgICAgaG91cnM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KSxcbiAgICAgICAgICBtaW51dGVzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gMTAwMCAvIDYwKSAlIDYwKSxcbiAgICAgICAgICBzZWNvbmRzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gMTAwMCkgJSA2MCksXG4gICAgICAgIH07XG4gICAgICB9IFxuXG4gICAgICByZXR1cm4gdGltZUxlZnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IFt0aW1lTGVmdCwgc2V0VGltZUxlZnRdID0gdXNlU3RhdGUoY2FsY3VsYXRlVGltZUxlZnQoKSk7XG4gICAgY29uc3QgW3llYXJdID0gdXNlU3RhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0VGltZUxlZnQoY2FsY3VsYXRlVGltZUxlZnQoKSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRpbWVyQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXModGltZUxlZnQpLmZvckVhY2goKGludGVydmFsKSA9PiB7XG4gICAgICBpZiAoIXRpbWVMZWZ0W2ludGVydmFsXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRpbWVyQ29tcG9uZW50cy5wdXNoKFxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7dGltZUxlZnRbaW50ZXJ2YWxdfSB7aW50ZXJ2YWx9e1wiIFwifVxuICAgICAgICA8L3NwYW4+XG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKG5leHRMYXVuY2gpXG4gXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Q291bnRlcj5cbiAgICAgICAgPGgxPlVwIE5leHQ8L2gxPlxuXG4gICAgICAgIDxOdW1iZXJDb250YWluZXI+XG4gICAgICAgICAgPE51bWJlcj5cbiAgICAgICAgICAgIDxwPjM8L3A+XG4gICAgICAgICAgICA8c21hbGw+ZGF5czwvc21hbGw+XG4gICAgICAgICAgPC9OdW1iZXI+XG4gICAgICAgICAgPE51bWJlcj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAzXG4gICAgICAgICAgICB7dGltZXJDb21wb25lbnRzLmxlbmd0aCA/IHRpbWVyQ29tcG9uZW50cyA6IDxzcGFuPlRpbWUncyB1cCE8L3NwYW4+fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHNtYWxsPmRheXM8L3NtYWxsPlxuICAgICAgICAgIDwvTnVtYmVyPlxuICAgICAgICAgIDxOdW1iZXI+XG4gICAgICAgICAgICA8cD4zPC9wPlxuICAgICAgICAgICAgPHNtYWxsPmRheXM8L3NtYWxsPlxuICAgICAgICAgIDwvTnVtYmVyPlxuICAgICAgICAgIDxOdW1iZXI+XG4gICAgICAgICAgICA8cD4zPC9wPlxuICAgICAgICAgICAgPHNtYWxsPmRheXM8L3NtYWxsPlxuICAgICAgICAgIDwvTnVtYmVyPlxuICAgICAgICA8L051bWJlckNvbnRhaW5lcj5cbiAgICAgICAgPEluZm8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Bhbj5taXNzaW9uOjwvc3Bhbj4ge25leHRsYXVuY2gubmFtZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Bhbj5Sb2NrZXQ6PC9zcGFuPiB7cm9ja2V0VXNlZC5uYW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9JbmZvPlxuICAgICAgPC9Db3VudGVyPlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50RG93bjsiXSwic291cmNlUm9vdCI6IiJ9