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
      var r = "".concat(t.remainDays, "d:").concat(t.remainHours, "h:").concat(t.remainMinutes, "m:").concat(t.remainSeconds, "s"); // console.log(r);

      return r; //   clearInterval(timerUpdate);
      // if (t.remainTime <= 1) {
      //   el.innerHTML = finalMessage;
      // }
    }, 1000);
    console.log(timerUpdate);
  };

  console.log(countdown("Dec 31 2025 21:34:40 GMT-0500", "¡Ya empezó!"));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Counter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Up Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["NumberContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: ["days", countdown('Dec 31 2025 21:34:40 GMT-0500', '¡Ya empezó!')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Info"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "mission:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this), " ", nextlaunch.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "Rocket:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), " ", rocketUsed.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudERvd24vaW5kZXguanMiXSwibmFtZXMiOlsiQ291bnREb3duIiwidXNlU3RhdGUiLCJuZXh0bGF1bmNoIiwic2V0TmV4dGxhdW5jaCIsInJvY2tldFVzZWQiLCJzZXRSb2NrZXRVc2VkIiwidXNlRWZmZWN0IiwiZ2V0TmV4dExhdW5jaCIsInRoZW4iLCJkYXRhIiwicm9ja2V0IiwiZ2V0T25lUm9ja2V0IiwiZ2V0UmVtYWluaW5nVGltZSIsImRlYWRsaW5lIiwibm93IiwiRGF0ZSIsInJlbWFpblRpbWUiLCJyZW1haW5TZWNvbmRzIiwiTWF0aCIsImZsb29yIiwic2xpY2UiLCJyZW1haW5NaW51dGVzIiwicmVtYWluSG91cnMiLCJyZW1haW5EYXlzIiwiY291bnRkb3duIiwiZmluYWxNZXNzYWdlIiwidGltZXJVcGRhdGUiLCJzZXRJbnRlcnZhbCIsInQiLCJyIiwiY29uc29sZSIsImxvZyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxFQUFELENBRHRCO0FBQUEsTUFDZkMsVUFEZTtBQUFBLE1BQ0hDLGFBREc7O0FBQUEsbUJBRWNGLHNEQUFRLENBQUMsRUFBRCxDQUZ0QjtBQUFBLE1BRWZHLFVBRmU7QUFBQSxNQUVIQyxhQUZHOztBQUt0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLDJFQUFhLEdBQ1pDLElBREQsQ0FDTSxVQUFDQyxJQUFELEVBQVM7QUFDYk4sbUJBQWEsbUJBQUtNLElBQUwsRUFBYjs7QUFDQSxVQUFJUCxVQUFVLENBQUNRLE1BQWYsRUFBdUI7QUFDckIsZUFBT0Msc0VBQVksQ0FBQ1QsVUFBVSxDQUFDUSxNQUFaLENBQVosQ0FBZ0NGLElBQWhDLENBQXFDLFVBQUNDLElBQUQ7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QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsZUFlRSxxRUFBQyw4Q0FBRDtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBdUJFLHFFQUFDLDRDQUFEO0FBQUEsZ0NBQ0U7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixPQUN5QnRCLFVBQVUsQ0FBQzhCLElBRHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsT0FDd0I1QixVQUFVLENBQUM0QixJQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9DRCxDQXZGRDs7R0FBTWhDLFM7O0tBQUFBLFM7QUF5RlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlkZDFiN2M0OGIzODY1NWMzNzM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlY3Rpb24sIENvdW50ZXIsIE51bWJlciwgTnVtYmVyQ29udGFpbmVyLCBJbmZvIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgZ2V0TmV4dExhdW5jaCBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0TmV4dExhdW5jaFwiO1xuaW1wb3J0IGdldE9uZVJvY2tldCBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0T25lUm9ja2V0XCI7XG5cblxuY29uc3QgQ291bnREb3duID0gKCkgPT4ge1xuICBjb25zdCBbbmV4dGxhdW5jaCwgc2V0TmV4dGxhdW5jaF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtyb2NrZXRVc2VkLCBzZXRSb2NrZXRVc2VkXSA9IHVzZVN0YXRlKHt9KTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TmV4dExhdW5jaCgpXG4gICAgLnRoZW4oKGRhdGEpID0+eyBcbiAgICAgIHNldE5leHRsYXVuY2goey4uLmRhdGF9KVxuICAgICAgaWYgKG5leHRsYXVuY2gucm9ja2V0KSB7XG4gICAgICAgIHJldHVybiBnZXRPbmVSb2NrZXQobmV4dGxhdW5jaC5yb2NrZXQpLnRoZW4oKGRhdGEpID0+XG4gICAgICAgICAgc2V0Um9ja2V0VXNlZCh7IC4uLmRhdGEgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG4gICBcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldFJlbWFpbmluZ1RpbWUgPSAoZGVhZGxpbmUpID0+IHtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKSxcbiAgICAgIHJlbWFpblRpbWUgPSAobmV3IERhdGUoZGVhZGxpbmUpIC0gbm93ICsgMTAwMCkgLyAxMDAwLFxuICAgICAgcmVtYWluU2Vjb25kcyA9IChcIjBcIiArIE1hdGguZmxvb3IocmVtYWluVGltZSAlIDYwKSkuc2xpY2UoLTIpLFxuICAgICAgcmVtYWluTWludXRlcyA9IChcIjBcIiArIE1hdGguZmxvb3IoKHJlbWFpblRpbWUgLyA2MCkgJSA2MCkpLnNsaWNlKC0yKSxcbiAgICAgIHJlbWFpbkhvdXJzID0gKFwiMFwiICsgTWF0aC5mbG9vcigocmVtYWluVGltZSAvIDM2MDApICUgMjQpKS5zbGljZSgtMiksXG4gICAgICByZW1haW5EYXlzID0gTWF0aC5mbG9vcihyZW1haW5UaW1lIC8gKDM2MDAgKiAyNCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbWFpblNlY29uZHMsXG4gICAgICByZW1haW5NaW51dGVzLFxuICAgICAgcmVtYWluSG91cnMsXG4gICAgICByZW1haW5EYXlzLFxuICAgICAgcmVtYWluVGltZSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGNvdW50ZG93biA9IChkZWFkbGluZSwgIGZpbmFsTWVzc2FnZSkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHRpbWVyVXBkYXRlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgbGV0IHQgPSBnZXRSZW1haW5pbmdUaW1lKGRlYWRsaW5lKTtcbiAgICAgIGNvbnN0IHIgPSBgJHt0LnJlbWFpbkRheXN9ZDoke3QucmVtYWluSG91cnN9aDoke3QucmVtYWluTWludXRlc31tOiR7dC5yZW1haW5TZWNvbmRzfXNgO1xuICAgICAgLy8gY29uc29sZS5sb2cocik7XG4gICAgICByZXR1cm4gclxuICAgICAgLy8gICBjbGVhckludGVydmFsKHRpbWVyVXBkYXRlKTtcbiAgICAgIC8vIGlmICh0LnJlbWFpblRpbWUgPD0gMSkge1xuICAgICAgICAvLyAgIGVsLmlubmVySFRNTCA9IGZpbmFsTWVzc2FnZTtcbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICAgIH0sIDEwMDApO1xuICAgICAgY29uc29sZS5sb2codGltZXJVcGRhdGUgKVxuICB9O1xuICBjb25zb2xlLmxvZyhjb3VudGRvd24oXCJEZWMgMzEgMjAyNSAyMTozNDo0MCBHTVQtMDUwMFwiLCBcIsKhWWEgZW1wZXrDsyFcIikpO1xuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uPlxuICAgICAgPENvdW50ZXI+XG4gICAgICAgIDxoMT5VcCBOZXh0PC9oMT5cblxuICAgICAgICA8TnVtYmVyQ29udGFpbmVyPlxuICAgICAgICAgIDxOdW1iZXI+XG4gICAgICAgICAgICA8cD4zPC9wPlxuICAgICAgICAgICAgPHNtYWxsPmRheXNcbiAgICAgICAgICAgIHtjb3VudGRvd24oJ0RlYyAzMSAyMDI1IDIxOjM0OjQwIEdNVC0wNTAwJywgICfCoVlhIGVtcGV6w7MhJyl9XG4gICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgIDwvTnVtYmVyPlxuICAgICAgICAgIDxOdW1iZXI+XG4gICAgICAgICAgICA8cD4zPC9wPlxuICAgICAgICAgICAgPHNtYWxsPmRheXM8L3NtYWxsPlxuICAgICAgICAgIDwvTnVtYmVyPlxuICAgICAgICAgIDxOdW1iZXI+XG4gICAgICAgICAgICA8cD4zPC9wPlxuICAgICAgICAgICAgPHNtYWxsPmRheXM8L3NtYWxsPlxuICAgICAgICAgIDwvTnVtYmVyPlxuICAgICAgICAgIDxOdW1iZXI+XG4gICAgICAgICAgICA8cD4zPC9wPlxuICAgICAgICAgICAgPHNtYWxsPmRheXM8L3NtYWxsPlxuICAgICAgICAgIDwvTnVtYmVyPlxuICAgICAgICA8L051bWJlckNvbnRhaW5lcj5cbiAgICAgICAgPEluZm8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Bhbj5taXNzaW9uOjwvc3Bhbj4ge25leHRsYXVuY2gubmFtZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Bhbj5Sb2NrZXQ6PC9zcGFuPiB7cm9ja2V0VXNlZC5uYW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9JbmZvPlxuICAgICAgPC9Db3VudGVyPlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50RG93bjsiXSwic291cmNlUm9vdCI6IiJ9