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
    });
    setTimeout(function () {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // setDate(nextlaunch.date_local);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {});
  var timerComponents = [];
  Object.keys(timeLeft).forEach(function (interval) {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      children: [timeLeft[interval], " ", interval, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, _this));
  });
  console.log(Object.keys(timeLeft));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Counter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Up Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["NumberContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: timerComponents.length ? timerComponents : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Time's up!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 57
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Info"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "mission:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this), " ", nextlaunch.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "Rocket:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this), " ", rocketUsed.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudERvd24vaW5kZXguanMiXSwibmFtZXMiOlsiQ291bnREb3duIiwidXNlU3RhdGUiLCJuZXh0bGF1bmNoIiwic2V0TmV4dGxhdW5jaCIsInJvY2tldFVzZWQiLCJzZXRSb2NrZXRVc2VkIiwiZGF0ZSIsInNldERhdGUiLCJjYWxjdWxhdGVUaW1lTGVmdCIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJkaWZmZXJlbmNlIiwidGltZUxlZnQiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInNldFRpbWVMZWZ0IiwidXNlRWZmZWN0IiwiZ2V0TmV4dExhdW5jaCIsInRoZW4iLCJkYXRhIiwicm9ja2V0IiwiZ2V0T25lUm9ja2V0Iiwic2V0VGltZW91dCIsInRpbWVyQ29tcG9uZW50cyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaW50ZXJ2YWwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxFQUFELENBRHRCO0FBQUEsTUFDZkMsVUFEZTtBQUFBLE1BQ0hDLGFBREc7O0FBQUEsbUJBRWNGLHNEQUFRLENBQUMsRUFBRCxDQUZ0QjtBQUFBLE1BRWZHLFVBRmU7QUFBQSxNQUVIQyxhQUZHOztBQUFBLG1CQUdFSixzREFBUSw2QkFIVjtBQUFBLE1BR2ZLLElBSGU7QUFBQSxNQUdUQyxPQUhTOztBQUt0QixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDN0IsUUFBSUMsSUFBSSxHQUFHLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFYO0FBQ0EsUUFBTUMsVUFBVSxHQUFH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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFZRSxxRUFBQyw4Q0FBRDtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBZ0JFLHFFQUFDLDhDQUFEO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBd0JFLHFFQUFDLDRDQUFEO0FBQUEsZ0NBQ0U7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixPQUN5QjFCLFVBQVUsQ0FBQ21DLElBRHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsT0FDd0JqQyxVQUFVLENBQUNpQyxJQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFDRCxDQXBHRDs7R0FBTXJDLFM7O0tBQUFBLFM7QUFzR1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJmZDQwZTg2ZDc0MmI0NjY4MWRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlY3Rpb24sIENvdW50ZXIsIE51bWJlciwgTnVtYmVyQ29udGFpbmVyLCBJbmZvIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgZ2V0TmV4dExhdW5jaCBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0TmV4dExhdW5jaFwiO1xuaW1wb3J0IGdldE9uZVJvY2tldCBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0T25lUm9ja2V0XCI7XG5cblxuY29uc3QgQ291bnREb3duID0gKCkgPT4ge1xuICBjb25zdCBbbmV4dGxhdW5jaCwgc2V0TmV4dGxhdW5jaF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtyb2NrZXRVc2VkLCBzZXRSb2NrZXRVc2VkXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoYDIwMjAtMTItMDVUMTE6Mzk6MDAtMDU6MDBgKTtcbiAgXG4gIGNvbnN0IGNhbGN1bGF0ZVRpbWVMZWZ0ID0gKCkgPT4ge1xuICAgICBsZXQgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgY29uc3QgZGlmZmVyZW5jZSA9ICtuZXcgRGF0ZShkYXRlKSAtICtuZXcgRGF0ZSgpO1xuICAgICBsZXQgdGltZUxlZnQgPSB7fTtcbiAgICAgXG4gICAgIGlmIChkaWZmZXJlbmNlID4gMCkge1xuICAgICAgIHRpbWVMZWZ0ID0ge1xuICAgICAgICAgZGF5czogTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSxcbiAgICAgICAgIGhvdXJzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCksXG4gICAgICAgICBtaW51dGVzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gMTAwMCAvIDYwKSAlIDYwKSxcbiAgICAgICAgIHNlY29uZHM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAxMDAwKSAlIDYwKSxcbiAgICAgICB9O1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gdGltZUxlZnQ7XG4gICAgfTtcbiAgICBcbiAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZShjYWxjdWxhdGVUaW1lTGVmdCgpKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TmV4dExhdW5jaCgpXG4gICAgLnRoZW4oKGRhdGEpID0+eyBcbiAgICAgIHNldE5leHRsYXVuY2goey4uLmRhdGF9KVxuICAgICAgaWYgKG5leHRsYXVuY2gucm9ja2V0KSB7XG4gICAgICAgIHJldHVybiBnZXRPbmVSb2NrZXQobmV4dGxhdW5jaC5yb2NrZXQpLnRoZW4oKGRhdGEpID0+XG4gICAgICAgIHNldFJvY2tldFVzZWQoeyAuLi5kYXRhIH0pXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0VGltZUxlZnQoY2FsY3VsYXRlVGltZUxlZnQoKSk7XG4gICAgfSwgMTAwMCk7XG4gICAgLy8gc2V0RGF0ZShuZXh0bGF1bmNoLmRhdGVfbG9jYWwpO1xuICAgIFxuICB9LCBbXSk7XG5cbiAgIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGltZXJDb21wb25lbnRzID0gW107XG5cbiAgICBPYmplY3Qua2V5cyh0aW1lTGVmdCkuZm9yRWFjaCgoaW50ZXJ2YWwpID0+IHtcbiAgICAgIGlmICghdGltZUxlZnRbaW50ZXJ2YWxdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGltZXJDb21wb25lbnRzLnB1c2goXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHt0aW1lTGVmdFtpbnRlcnZhbF19IHtpbnRlcnZhbH17XCIgXCJ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coT2JqZWN0LmtleXModGltZUxlZnQpKTtcbiBcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbj5cbiAgICAgIDxDb3VudGVyPlxuICAgICAgICA8aDE+VXAgTmV4dDwvaDE+XG5cbiAgICAgICAgPE51bWJlckNvbnRhaW5lcj5cbiAgICAgICAgICA8TnVtYmVyPlxuICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICAgPHNtYWxsPmRheXM8L3NtYWxsPlxuICAgICAgICAgIDwvTnVtYmVyPlxuICAgICAgICAgIDxOdW1iZXI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB7dGltZXJDb21wb25lbnRzLmxlbmd0aCA/IHRpbWVyQ29tcG9uZW50cyA6IDxzcGFuPlRpbWUncyB1cCE8L3NwYW4+fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHNtYWxsPmRheXM8L3NtYWxsPlxuICAgICAgICAgIDwvTnVtYmVyPlxuICAgICAgICAgIDxOdW1iZXI+XG4gICAgICAgICAgICA8cD4zPC9wPlxuICAgICAgICAgICAgPHNtYWxsPmRheXM8L3NtYWxsPlxuICAgICAgICAgIDwvTnVtYmVyPlxuICAgICAgICAgIDxOdW1iZXI+XG4gICAgICAgICAgICA8cD4zPC9wPlxuICAgICAgICAgICAgPHNtYWxsPmRheXM8L3NtYWxsPlxuICAgICAgICAgIDwvTnVtYmVyPlxuICAgICAgICA8L051bWJlckNvbnRhaW5lcj5cbiAgICAgICAgPEluZm8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Bhbj5taXNzaW9uOjwvc3Bhbj4ge25leHRsYXVuY2gubmFtZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Bhbj5Sb2NrZXQ6PC9zcGFuPiB7cm9ja2V0VXNlZC5uYW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9JbmZvPlxuICAgICAgPC9Db3VudGVyPlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50RG93bjsiXSwic291cmNlUm9vdCI6IiJ9