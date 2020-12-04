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
    }); // setDate(nextlaunch.date_local);
  }, []);

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
      lineNumber: 61,
      columnNumber: 9
    }, _this));
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Counter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Up Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["NumberContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {}, void 0, false, {
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
            children: timerComponents.length ? timerComponents : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Time's up!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 57
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
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
            lineNumber: 85,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
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
      lineNumber: 69,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudERvd24vaW5kZXguanMiXSwibmFtZXMiOlsiQ291bnREb3duIiwidXNlU3RhdGUiLCJuZXh0bGF1bmNoIiwic2V0TmV4dGxhdW5jaCIsInJvY2tldFVzZWQiLCJzZXRSb2NrZXRVc2VkIiwiZGF0ZSIsInNldERhdGUiLCJjYWxjdWxhdGVUaW1lTGVmdCIsInRpbWVMZWZ0Iiwic2V0VGltZUxlZnQiLCJ1c2VFZmZlY3QiLCJnZXROZXh0TGF1bmNoIiwidGhlbiIsImRhdGEiLCJyb2NrZXQiLCJnZXRPbmVSb2NrZXQiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZGlmZmVyZW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwic2V0VGltZW91dCIsInRpbWVyQ29tcG9uZW50cyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaW50ZXJ2YWwiLCJwdXNoIiwibGVuZ3RoIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUNmQyxVQURlO0FBQUEsTUFDSEMsYUFERzs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFZkcsVUFGZTtBQUFBLE1BRUhDLGFBRkc7O0FBQUEsbUJBR0VKLHNEQUFRLDZCQUhWO0FBQUEsTUFHZkssSUFIZTtBQUFBLE1BR1RDLE9BSFM7O0FBQUEsbUJBSWNOLHNEQUFRLENBQUNPLGlCQUFpQixFQUFsQixDQUp0QjtBQUFBLE1BSVhDLFFBSlc7QUFBQSxNQUlEQyxXQUpDOztBQU90QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLDJFQUFhLEdBQ1pDLElBREQsQ0FDTSxV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QURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBZ0JFLHFFQUFDLDhDQUFEO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBd0JFLHFFQUFDLDRDQUFEO0FBQUEsZ0NBQ0U7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixPQUN5QjFCLFVBQVUsQ0FBQ2lDLElBRHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsT0FDd0IvQixVQUFVLENBQUMrQixJQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFDRCxDQWpHRDs7R0FBTW5DLFM7O0tBQUFBLFM7QUFtR1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI1NTBkNDExMmQ2OTA2NGU0OGQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlY3Rpb24sIENvdW50ZXIsIE51bWJlciwgTnVtYmVyQ29udGFpbmVyLCBJbmZvIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgZ2V0TmV4dExhdW5jaCBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0TmV4dExhdW5jaFwiO1xuaW1wb3J0IGdldE9uZVJvY2tldCBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0T25lUm9ja2V0XCI7XG5cblxuY29uc3QgQ291bnREb3duID0gKCkgPT4ge1xuICBjb25zdCBbbmV4dGxhdW5jaCwgc2V0TmV4dGxhdW5jaF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtyb2NrZXRVc2VkLCBzZXRSb2NrZXRVc2VkXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoYDIwMjAtMTItMDVUMTE6Mzk6MDAtMDU6MDBgKTtcbiAgICAgIGNvbnN0IFt0aW1lTGVmdCwgc2V0VGltZUxlZnRdID0gdXNlU3RhdGUoY2FsY3VsYXRlVGltZUxlZnQoKSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5leHRMYXVuY2goKVxuICAgIC50aGVuKChkYXRhKSA9PnsgXG4gICAgICBzZXROZXh0bGF1bmNoKHsuLi5kYXRhfSlcbiAgICAgIGlmIChuZXh0bGF1bmNoLnJvY2tldCkge1xuICAgICAgICByZXR1cm4gZ2V0T25lUm9ja2V0KG5leHRsYXVuY2gucm9ja2V0KS50aGVuKChkYXRhKSA9PlxuICAgICAgICBzZXRSb2NrZXRVc2VkKHsgLi4uZGF0YSB9KVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcbiAgICBcbiAgICAvLyBzZXREYXRlKG5leHRsYXVuY2guZGF0ZV9sb2NhbCk7XG4gICAgXG4gIH0sIFtdKTtcblxuICAgIGNvbnN0IGNhbGN1bGF0ZVRpbWVMZWZ0ID0gKCkgPT4ge1xuICAgICAgbGV0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gK25ldyBEYXRlKGRhdGUpIC0gK25ldyBEYXRlKCk7XG4gICAgICBsZXQgdGltZUxlZnQgPSB7fTtcblxuICAgICAgaWYgKGRpZmZlcmVuY2UgPiAwKSB7XG4gICAgICAgIHRpbWVMZWZ0ID0ge1xuICAgICAgICAgIGRheXM6IE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXG4gICAgICAgICAgaG91cnM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KSxcbiAgICAgICAgICBtaW51dGVzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gMTAwMCAvIDYwKSAlIDYwKSxcbiAgICAgICAgICBzZWNvbmRzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gMTAwMCkgJSA2MCksXG4gICAgICAgIH07XG4gICAgICB9IFxuXG4gICAgICByZXR1cm4gdGltZUxlZnQ7XG4gICAgfTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lTGVmdChjYWxjdWxhdGVUaW1lTGVmdCgpKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGltZXJDb21wb25lbnRzID0gW107XG5cbiAgICBPYmplY3Qua2V5cyh0aW1lTGVmdCkuZm9yRWFjaCgoaW50ZXJ2YWwpID0+IHtcbiAgICAgIGlmICghdGltZUxlZnRbaW50ZXJ2YWxdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGltZXJDb21wb25lbnRzLnB1c2goXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHt0aW1lTGVmdFtpbnRlcnZhbF19IHtpbnRlcnZhbH17XCIgXCJ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfSk7XG4gXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Q291bnRlcj5cbiAgICAgICAgPGgxPlVwIE5leHQ8L2gxPlxuXG4gICAgICAgIDxOdW1iZXJDb250YWluZXI+XG4gICAgICAgICAgPE51bWJlcj5cbiAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICAgIDxzbWFsbD5kYXlzPC9zbWFsbD5cbiAgICAgICAgICA8L051bWJlcj5cbiAgICAgICAgICA8TnVtYmVyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAge3RpbWVyQ29tcG9uZW50cy5sZW5ndGggPyB0aW1lckNvbXBvbmVudHMgOiA8c3Bhbj5UaW1lJ3MgdXAhPC9zcGFuPn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxzbWFsbD5kYXlzPC9zbWFsbD5cbiAgICAgICAgICA8L051bWJlcj5cbiAgICAgICAgICA8TnVtYmVyPlxuICAgICAgICAgICAgPHA+MzwvcD5cbiAgICAgICAgICAgIDxzbWFsbD5kYXlzPC9zbWFsbD5cbiAgICAgICAgICA8L051bWJlcj5cbiAgICAgICAgICA8TnVtYmVyPlxuICAgICAgICAgICAgPHA+MzwvcD5cbiAgICAgICAgICAgIDxzbWFsbD5kYXlzPC9zbWFsbD5cbiAgICAgICAgICA8L051bWJlcj5cbiAgICAgICAgPC9OdW1iZXJDb250YWluZXI+XG4gICAgICAgIDxJbmZvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4+bWlzc2lvbjo8L3NwYW4+IHtuZXh0bGF1bmNoLm5hbWV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4+Um9ja2V0Ojwvc3Bhbj4ge3JvY2tldFVzZWQubmFtZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvSW5mbz5cbiAgICAgIDwvQ291bnRlcj5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudERvd247Il0sInNvdXJjZVJvb3QiOiIifQ==