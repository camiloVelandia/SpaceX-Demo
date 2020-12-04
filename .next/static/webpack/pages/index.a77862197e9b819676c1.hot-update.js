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
    //   if (timeLeft[interval] ==0) {
    //     return(
    //       timerComponents.push(
    //     <Number key={index}>
    //       <p>{timeLeft[interval]}</p>
    //       <span>{interval}</span>{" "}
    //     </Number>
    //   )
    //   )
    // }
    //             if (!timeLeft[interval]) {
    //               return;
    //             }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudERvd24vaW5kZXguanMiXSwibmFtZXMiOlsiQ291bnREb3duIiwidXNlU3RhdGUiLCJuZXh0bGF1bmNoIiwic2V0TmV4dGxhdW5jaCIsInJvY2tldFVzZWQiLCJzZXRSb2NrZXRVc2VkIiwiZGF0ZSIsInNldERhdGUiLCJjYWxjdWxhdGVUaW1lTGVmdCIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJkaWZmZXJlbmNlIiwidGltZUxlZnQiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInNldFRpbWVMZWZ0IiwidXNlRWZmZWN0IiwiZ2V0TmV4dExhdW5jaCIsInRoZW4iLCJkYXRhIiwicm9ja2V0IiwiZ2V0T25lUm9ja2V0Iiwic2V0VGltZW91dCIsImRhdGVfbG9jYWwiLCJ0aW1lckNvbXBvbmVudHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImludGVydmFsIiwiaW5kZXgiLCJwdXNoIiwibGVuZ3RoIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUNmQyxVQURlO0FBQUEsTUFDSEMsYUFERzs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFZkcsVUFGZTtBQUFBLE1BRUhDLGFBRkc7O0FBQUEsbUJBR0VKLHNEQUFRLDZCQUhWO0FBQUEsTUFHZkssSUFIZTtBQUFBLE1BR1RDLE9BSFM7O0FBS3RCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM3QixRQUFJQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQVg7QUFDQSxRQUFNQyxVQUFV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O0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLE9BQ3dCakMsVUFBVSxDQUFDaUMsSUFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQWpHRDs7R0FBTXJDLFM7O0tBQUFBLFM7QUFtR1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE3Nzg2MjE5N2U5YjgxOTY3NmMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlY3Rpb24sIENvdW50ZXIsIE51bWJlciwgTnVtYmVyQ29udGFpbmVyLCBJbmZvIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgZ2V0TmV4dExhdW5jaCBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0TmV4dExhdW5jaFwiO1xuaW1wb3J0IGdldE9uZVJvY2tldCBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0T25lUm9ja2V0XCI7XG5cblxuY29uc3QgQ291bnREb3duID0gKCkgPT4ge1xuICBjb25zdCBbbmV4dGxhdW5jaCwgc2V0TmV4dGxhdW5jaF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtyb2NrZXRVc2VkLCBzZXRSb2NrZXRVc2VkXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoYDIwMjAtMTItMDVUMTE6Mzk6MDAtMDU6MDBgKTtcbiAgXG4gIGNvbnN0IGNhbGN1bGF0ZVRpbWVMZWZ0ID0gKCkgPT4ge1xuICAgICBsZXQgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgY29uc3QgZGlmZmVyZW5jZSA9ICtuZXcgRGF0ZShkYXRlKSAtICtuZXcgRGF0ZSgpO1xuICAgICBsZXQgdGltZUxlZnQgPSB7fTtcbiAgICAgXG4gICAgIGlmIChkaWZmZXJlbmNlID4gMCkge1xuICAgICAgIHRpbWVMZWZ0ID0ge1xuICAgICAgICAgZGF5czogTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSxcbiAgICAgICAgIGhvdXJzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCksXG4gICAgICAgICBtaW51dGVzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gMTAwMCAvIDYwKSAlIDYwKSxcbiAgICAgICAgIHNlY29uZHM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAxMDAwKSAlIDYwKSxcbiAgICAgICB9O1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gdGltZUxlZnQ7XG4gICAgfTtcbiAgICBcbiAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZShjYWxjdWxhdGVUaW1lTGVmdCgpKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TmV4dExhdW5jaCgpXG4gICAgLnRoZW4oKGRhdGEpID0+eyBcbiAgICAgIHNldE5leHRsYXVuY2goey4uLmRhdGF9KVxuICAgICAgaWYgKG5leHRsYXVuY2gucm9ja2V0KSB7XG4gICAgICAgIHJldHVybiBnZXRPbmVSb2NrZXQobmV4dGxhdW5jaC5yb2NrZXQpLnRoZW4oKGRhdGEpID0+XG4gICAgICAgIHNldFJvY2tldFVzZWQoeyAuLi5kYXRhIH0pXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIC8vIDtcbiAgICBcbiAgfSwgW10pO1xuXG4gICBcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0VGltZUxlZnQoY2FsY3VsYXRlVGltZUxlZnQoKSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHNldERhdGUobmV4dGxhdW5jaC5kYXRlX2xvY2FsKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRpbWVyQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXModGltZUxlZnQpLmZvckVhY2goKGludGVydmFsLCBpbmRleCkgPT4ge1xuICAgIC8vICAgaWYgKHRpbWVMZWZ0W2ludGVydmFsXSA9PTApIHtcbiAgICAvLyAgICAgcmV0dXJuKFxuICAgIC8vICAgICAgIHRpbWVyQ29tcG9uZW50cy5wdXNoKFxuICAgIC8vICAgICA8TnVtYmVyIGtleT17aW5kZXh9PlxuICAgIC8vICAgICAgIDxwPnt0aW1lTGVmdFtpbnRlcnZhbF19PC9wPlxuICAgIC8vICAgICAgIDxzcGFuPntpbnRlcnZhbH08L3NwYW4+e1wiIFwifVxuICAgIC8vICAgICA8L051bWJlcj5cbiAgICAvLyAgIClcbiAgICAvLyAgIClcbiAgICAvLyB9XG4gICAgLy8gICAgICAgICAgICAgaWYgKCF0aW1lTGVmdFtpbnRlcnZhbF0pIHtcbiAgICAvLyAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAgIHRpbWVyQ29tcG9uZW50cy5wdXNoKFxuICAgICAgICA8TnVtYmVyIGtleT17aW5kZXh9PlxuICAgICAgICAgIDxwPnt0aW1lTGVmdFtpbnRlcnZhbF19PC9wPlxuICAgICAgICAgIDxzcGFuPntpbnRlcnZhbH08L3NwYW4+e1wiIFwifVxuICAgICAgICA8L051bWJlcj5cbiAgICAgICk7XG4gICAgfSk7XG4gXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Q291bnRlcj5cbiAgICAgICAgPGgxPlVwIE5leHQ8L2gxPlxuXG4gICAgICAgIDxOdW1iZXJDb250YWluZXI+XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICB7dGltZXJDb21wb25lbnRzLmxlbmd0aCA/IHRpbWVyQ29tcG9uZW50cyA6IDxzcGFuPlRpbWUncyB1cCE8L3NwYW4+fVxuICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvTnVtYmVyQ29udGFpbmVyPlxuICAgICAgICA8SW5mbz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuPm1pc3Npb246PC9zcGFuPiB7bmV4dGxhdW5jaC5uYW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuPlJvY2tldDo8L3NwYW4+IHtyb2NrZXRVc2VkLm5hbWV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0luZm8+XG4gICAgICA8L0NvdW50ZXI+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnREb3duOyJdLCJzb3VyY2VSb290IjoiIn0=