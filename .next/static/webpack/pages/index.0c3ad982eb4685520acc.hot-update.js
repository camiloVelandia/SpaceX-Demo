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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: "".concat(t.remainDays, "d:").concat(t.remainHours, "h:").concat(t.remainMinutes, "m:").concat(t.remainSeconds, "s")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }, _this);

      if (t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      }
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
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["NumberContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: ["days", countdown('Dec 31 2025 21:34:40 GMT-0500', '¡Ya empezó!')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
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
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Info"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "mission:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), " ", nextlaunch.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "Rocket:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this), " ", rocketUsed.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudERvd24vaW5kZXguanMiXSwibmFtZXMiOlsiQ291bnREb3duIiwidXNlU3RhdGUiLCJuZXh0bGF1bmNoIiwic2V0TmV4dGxhdW5jaCIsInJvY2tldFVzZWQiLCJzZXRSb2NrZXRVc2VkIiwidXNlRWZmZWN0IiwiZ2V0TmV4dExhdW5jaCIsInRoZW4iLCJkYXRhIiwicm9ja2V0IiwiZ2V0T25lUm9ja2V0IiwiZ2V0UmVtYWluaW5nVGltZSIsImRlYWRsaW5lIiwibm93IiwiRGF0ZSIsInJlbWFpblRpbWUiLCJyZW1haW5TZWNvbmRzIiwiTWF0aCIsImZsb29yIiwic2xpY2UiLCJyZW1haW5NaW51dGVzIiwicmVtYWluSG91cnMiLCJyZW1haW5EYXlzIiwiY291bnRkb3duIiwiZmluYWxNZXNzYWdlIiwidGltZXJVcGRhdGUiLCJzZXRJbnRlcnZhbCIsInQiLCJjbGVhckludGVydmFsIiwiZWwiLCJpbm5lckhUTUwiLCJjb25zb2xlIiwibG9nIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUNmQyxVQURlO0FBQUEsTUFDSEMsYUFERzs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFZkcsVUFGZTtBQUFBLE1BRUhDLGFBRkc7O0FBS3RCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsMkVBQWEsR0FDWkMsSUFERCxDQUNNLFVBQUNDLElBQUQsRUFBUztBQUNiTixtQkFBYSxtQkFBS00sSUFBTCxFQUFiOztBQUNBLFVBQUlQLFVBQVUsQ0FBQ1EsTUFBZixFQUF1QjtBQUNyQixlQUFPQyxzRUFBWSxDQUFDVCxVQUFVLENBQUNRLE1BQVosQ0FBWixD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O0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFXRSxxRUFBQyw4Q0FBRDtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGLGVBZUUscUVBQUMsOENBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQXVCRSxxRUFBQyw0Q0FBRDtBQUFBLGdDQUNFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsT0FDeUJ0QixVQUFVLENBQUNnQyxJQURwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLE9BQ3dCOUIsVUFBVSxDQUFDOEIsSUFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0F0RkQ7O0dBQU1sQyxTOztLQUFBQSxTO0FBd0ZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYzNhZDk4MmViNDY4NTUyMGFjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWN0aW9uLCBDb3VudGVyLCBOdW1iZXIsIE51bWJlckNvbnRhaW5lciwgSW5mbyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IGdldE5leHRMYXVuY2ggZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldE5leHRMYXVuY2hcIjtcbmltcG9ydCBnZXRPbmVSb2NrZXQgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldE9uZVJvY2tldFwiO1xuXG5cbmNvbnN0IENvdW50RG93biA9ICgpID0+IHtcbiAgY29uc3QgW25leHRsYXVuY2gsIHNldE5leHRsYXVuY2hdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbcm9ja2V0VXNlZCwgc2V0Um9ja2V0VXNlZF0gPSB1c2VTdGF0ZSh7fSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5leHRMYXVuY2goKVxuICAgIC50aGVuKChkYXRhKSA9PnsgXG4gICAgICBzZXROZXh0bGF1bmNoKHsuLi5kYXRhfSlcbiAgICAgIGlmIChuZXh0bGF1bmNoLnJvY2tldCkge1xuICAgICAgICByZXR1cm4gZ2V0T25lUm9ja2V0KG5leHRsYXVuY2gucm9ja2V0KS50aGVuKChkYXRhKSA9PlxuICAgICAgICAgIHNldFJvY2tldFVzZWQoeyAuLi5kYXRhIH0pXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuICAgXG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRSZW1haW5pbmdUaW1lID0gKGRlYWRsaW5lKSA9PiB7XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCksXG4gICAgICByZW1haW5UaW1lID0gKG5ldyBEYXRlKGRlYWRsaW5lKSAtIG5vdyArIDEwMDApIC8gMTAwMCxcbiAgICAgIHJlbWFpblNlY29uZHMgPSAoXCIwXCIgKyBNYXRoLmZsb29yKHJlbWFpblRpbWUgJSA2MCkpLnNsaWNlKC0yKSxcbiAgICAgIHJlbWFpbk1pbnV0ZXMgPSAoXCIwXCIgKyBNYXRoLmZsb29yKChyZW1haW5UaW1lIC8gNjApICUgNjApKS5zbGljZSgtMiksXG4gICAgICByZW1haW5Ib3VycyA9IChcIjBcIiArIE1hdGguZmxvb3IoKHJlbWFpblRpbWUgLyAzNjAwKSAlIDI0KSkuc2xpY2UoLTIpLFxuICAgICAgcmVtYWluRGF5cyA9IE1hdGguZmxvb3IocmVtYWluVGltZSAvICgzNjAwICogMjQpKTtcblxuICAgIHJldHVybiB7XG4gICAgICByZW1haW5TZWNvbmRzLFxuICAgICAgcmVtYWluTWludXRlcyxcbiAgICAgIHJlbWFpbkhvdXJzLFxuICAgICAgcmVtYWluRGF5cyxcbiAgICAgIHJlbWFpblRpbWUsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBjb3VudGRvd24gPSAoZGVhZGxpbmUsICBmaW5hbE1lc3NhZ2UpID0+IHtcblxuICAgIGNvbnN0IHRpbWVyVXBkYXRlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgbGV0IHQgPSBnZXRSZW1haW5pbmdUaW1lKGRlYWRsaW5lKTtcbiAgICAgIHJldHVybiAoPHA+e2Ake3QucmVtYWluRGF5c31kOiR7dC5yZW1haW5Ib3Vyc31oOiR7dC5yZW1haW5NaW51dGVzfW06JHt0LnJlbWFpblNlY29uZHN9c2B9PC9wPilcbiAgICAgICAgaWYgKHQucmVtYWluVGltZSA8PSAxKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lclVwZGF0ZSk7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gZmluYWxNZXNzYWdlO1xuICAgICAgICB9XG5cbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuY29uc29sZS5sb2cobmV4dGxhdW5jaClcbmNvbnNvbGUubG9nKG5ldyBEYXRlKFwiMjAyMC0xMi0wNVQxMTozOTowMC0wNTowMFwiKSk7XG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Q291bnRlcj5cbiAgICAgICAgPGgxPlVwIE5leHQ8L2gxPlxuXG4gICAgICAgIDxOdW1iZXJDb250YWluZXI+XG4gICAgICAgICAgPE51bWJlcj5cbiAgICAgICAgICAgIDxwPjM8L3A+XG4gICAgICAgICAgICA8c21hbGw+ZGF5c1xuICAgICAgICAgICAge2NvdW50ZG93bignRGVjIDMxIDIwMjUgMjE6MzQ6NDAgR01ULTA1MDAnLCAgJ8KhWWEgZW1wZXrDsyEnKX1cbiAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgPC9OdW1iZXI+XG4gICAgICAgICAgPE51bWJlcj5cbiAgICAgICAgICAgIDxwPjM8L3A+XG4gICAgICAgICAgICA8c21hbGw+ZGF5czwvc21hbGw+XG4gICAgICAgICAgPC9OdW1iZXI+XG4gICAgICAgICAgPE51bWJlcj5cbiAgICAgICAgICAgIDxwPjM8L3A+XG4gICAgICAgICAgICA8c21hbGw+ZGF5czwvc21hbGw+XG4gICAgICAgICAgPC9OdW1iZXI+XG4gICAgICAgICAgPE51bWJlcj5cbiAgICAgICAgICAgIDxwPjM8L3A+XG4gICAgICAgICAgICA8c21hbGw+ZGF5czwvc21hbGw+XG4gICAgICAgICAgPC9OdW1iZXI+XG4gICAgICAgIDwvTnVtYmVyQ29udGFpbmVyPlxuICAgICAgICA8SW5mbz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuPm1pc3Npb246PC9zcGFuPiB7bmV4dGxhdW5jaC5uYW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuPlJvY2tldDo8L3NwYW4+IHtyb2NrZXRVc2VkLm5hbWV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0luZm8+XG4gICAgICA8L0NvdW50ZXI+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnREb3duOyJdLCJzb3VyY2VSb290IjoiIn0=