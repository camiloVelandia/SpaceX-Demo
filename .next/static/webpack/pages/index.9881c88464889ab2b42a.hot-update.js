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
  Object.keys(timeLeft).forEach(function (interval) {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      children: [timeLeft[interval], " ", interval, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, _this));
  });
  console.log(date);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Counter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Up Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["NumberContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {}, void 0, false, {
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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: timerComponents.length ? timerComponents : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Time's up!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 57
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Info"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "mission:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this), " ", nextlaunch.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "Rocket:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), " ", rocketUsed.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudERvd24vaW5kZXguanMiXSwibmFtZXMiOlsiQ291bnREb3duIiwidXNlU3RhdGUiLCJuZXh0bGF1bmNoIiwic2V0TmV4dGxhdW5jaCIsInJvY2tldFVzZWQiLCJzZXRSb2NrZXRVc2VkIiwiZGF0ZSIsInNldERhdGUiLCJjYWxjdWxhdGVUaW1lTGVmdCIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJkaWZmZXJlbmNlIiwidGltZUxlZnQiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInNldFRpbWVMZWZ0IiwidXNlRWZmZWN0IiwiZ2V0TmV4dExhdW5jaCIsInRoZW4iLCJkYXRhIiwicm9ja2V0IiwiZ2V0T25lUm9ja2V0Iiwic2V0VGltZW91dCIsImRhdGVfbG9jYWwiLCJ0aW1lckNvbXBvbmVudHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImludGVydmFsIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsRUFBRCxDQUR0QjtBQUFBLE1BQ2ZDLFVBRGU7QUFBQSxNQUNIQyxhQURHOztBQUFBLG1CQUVjRixzREFBUSxDQUFDLEVBQUQsQ0FGdEI7QUFBQSxNQUVmRyxVQUZlO0FBQUEsTUFFSEMsYUFGRzs7QUFBQSxtQkFHRUosc0RBQVEsNkJBSFY7QUFBQSxNQUdmSyxJQUhlO0FBQUEsTUFHVEMsT0FIUzs7QUFLdEIsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzdCLFFBQUlDLElBQUksR0FBRyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFBWDtBQUNBLFFB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QUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFnQkUscUVBQUMsNENBQUQ7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLE9BQ3lCM0IsVUFBVSxDQUFDb0MsSUFEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixPQUN3QmxDLFVBQVUsQ0FBQ2tDLElBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkJELENBN0ZEOztHQUFNdEMsUzs7S0FBQUEsUztBQStGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTg4MWM4ODQ2NDg4OWFiMmI0MmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VjdGlvbiwgQ291bnRlciwgTnVtYmVyLCBOdW1iZXJDb250YWluZXIsIEluZm8gfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBnZXROZXh0TGF1bmNoIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXROZXh0TGF1bmNoXCI7XG5pbXBvcnQgZ2V0T25lUm9ja2V0IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRPbmVSb2NrZXRcIjtcblxuXG5jb25zdCBDb3VudERvd24gPSAoKSA9PiB7XG4gIGNvbnN0IFtuZXh0bGF1bmNoLCBzZXROZXh0bGF1bmNoXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3JvY2tldFVzZWQsIHNldFJvY2tldFVzZWRdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShgMjAyMC0xMi0wNVQxMTozOTowMC0wNTowMGApO1xuICBcbiAgY29uc3QgY2FsY3VsYXRlVGltZUxlZnQgPSAoKSA9PiB7XG4gICAgIGxldCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICBjb25zdCBkaWZmZXJlbmNlID0gK25ldyBEYXRlKGRhdGUpIC0gK25ldyBEYXRlKCk7XG4gICAgIGxldCB0aW1lTGVmdCA9IHt9O1xuICAgICBcbiAgICAgaWYgKGRpZmZlcmVuY2UgPiAwKSB7XG4gICAgICAgdGltZUxlZnQgPSB7XG4gICAgICAgICBkYXlzOiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpLFxuICAgICAgICAgaG91cnM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KSxcbiAgICAgICAgIG1pbnV0ZXM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAxMDAwIC8gNjApICUgNjApLFxuICAgICAgICAgc2Vjb25kczogTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvIDEwMDApICUgNjApLFxuICAgICAgIH07XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiB0aW1lTGVmdDtcbiAgICB9O1xuICAgIFxuICBjb25zdCBbdGltZUxlZnQsIHNldFRpbWVMZWZ0XSA9IHVzZVN0YXRlKGNhbGN1bGF0ZVRpbWVMZWZ0KCkpO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXROZXh0TGF1bmNoKClcbiAgICAudGhlbigoZGF0YSkgPT57IFxuICAgICAgc2V0TmV4dGxhdW5jaCh7Li4uZGF0YX0pXG4gICAgICBpZiAobmV4dGxhdW5jaC5yb2NrZXQpIHtcbiAgICAgICAgcmV0dXJuIGdldE9uZVJvY2tldChuZXh0bGF1bmNoLnJvY2tldCkudGhlbigoZGF0YSkgPT5cbiAgICAgICAgc2V0Um9ja2V0VXNlZCh7IC4uLmRhdGEgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgLy8gO1xuICAgIFxuICB9LCBbXSk7XG5cbiAgIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lTGVmdChjYWxjdWxhdGVUaW1lTGVmdCgpKTtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgc2V0RGF0ZShuZXh0bGF1bmNoLmRhdGVfbG9jYWwpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGltZXJDb21wb25lbnRzID0gW107XG5cbiAgICBPYmplY3Qua2V5cyh0aW1lTGVmdCkuZm9yRWFjaCgoaW50ZXJ2YWwpID0+IHtcbiAgICAgIGlmICghdGltZUxlZnRbaW50ZXJ2YWxdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGltZXJDb21wb25lbnRzLnB1c2goXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHt0aW1lTGVmdFtpbnRlcnZhbF19IHtpbnRlcnZhbH17XCIgXCJ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coZGF0ZSk7XG4gXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Q291bnRlcj5cbiAgICAgICAgPGgxPlVwIE5leHQ8L2gxPlxuXG4gICAgICAgIDxOdW1iZXJDb250YWluZXI+XG4gICAgICAgICAgPE51bWJlcj5cbiAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICAgIDxzbWFsbD5kYXlzPC9zbWFsbD5cbiAgICAgICAgICA8L051bWJlcj5cbiAgICAgICAgICA8TnVtYmVyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAge3RpbWVyQ29tcG9uZW50cy5sZW5ndGggPyB0aW1lckNvbXBvbmVudHMgOiA8c3Bhbj5UaW1lJ3MgdXAhPC9zcGFuPn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L051bWJlcj5cbiAgICAgICAgICBcbiAgICAgICAgPC9OdW1iZXJDb250YWluZXI+XG4gICAgICAgIDxJbmZvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4+bWlzc2lvbjo8L3NwYW4+IHtuZXh0bGF1bmNoLm5hbWV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4+Um9ja2V0Ojwvc3Bhbj4ge3JvY2tldFVzZWQubmFtZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvSW5mbz5cbiAgICAgIDwvQ291bnRlcj5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudERvd247Il0sInNvdXJjZVJvb3QiOiIifQ==