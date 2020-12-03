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

    var countdown = function countdown(deadline, finalMessage) {
      var timerUpdate = setInterval(function () {
        var t = getRemainingTime(deadline);
        var r = {
          a: t.remainDays,
          b: t.remainHours,
          c: t.remainMinutes,
          d: t.remainSeconds
        }; // console.log(r);

        return r; //   clearInterval(timerUpdate);
        // if (t.remainTime <= 1) {
        //   el.innerHTML = finalMessage;
        // }
      }, 1000);
      console.log(timerUpdate);
    };
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
  }; // console.log(countdown("Dec 31 2025 21:34:40 GMT-0500", "¡Ya empezó!"));


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Counter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Up Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["NumberContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Number"], {
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
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
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
            lineNumber: 84,
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
          lineNumber: 83,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Info"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "mission:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this), " ", nextlaunch.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "Rocket:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), " ", rocketUsed.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudERvd24vaW5kZXguanMiXSwibmFtZXMiOlsiQ291bnREb3duIiwidXNlU3RhdGUiLCJuZXh0bGF1bmNoIiwic2V0TmV4dGxhdW5jaCIsInJvY2tldFVzZWQiLCJzZXRSb2NrZXRVc2VkIiwidXNlRWZmZWN0IiwiZ2V0TmV4dExhdW5jaCIsInRoZW4iLCJkYXRhIiwicm9ja2V0IiwiZ2V0T25lUm9ja2V0IiwiY291bnRkb3duIiwiZGVhZGxpbmUiLCJmaW5hbE1lc3NhZ2UiLCJ0aW1lclVwZGF0ZSIsInNldEludGVydmFsIiwidCIsImdldFJlbWFpbmluZ1RpbWUiLCJyIiwiYSIsInJlbWFpbkRheXMiLCJiIiwicmVtYWluSG91cnMiLCJjIiwicmVtYWluTWludXRlcyIsImQiLCJyZW1haW5TZWNvbmRzIiwiY29uc29sZSIsImxvZyIsIm5vdyIsIkRhdGUiLCJyZW1haW5UaW1lIiwiTWF0aCIsImZsb29yIiwic2xpY2UiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsRUFBRCxDQUR0QjtBQUFBLE1BQ2ZDLFVBRGU7QUFBQSxNQUNIQyxhQURHOztBQUFBLG1CQUVjRixzREFBUSxDQUFDLEVBQUQsQ0FGdEI7QUFBQSxNQUVmRyxVQUZlO0FBQUEsTUFFSEMsYUFGRzs7QUFLdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQywyRUFBYSxHQUNaQyxJQURELENBQ00sVUFBQ0MsSUFBRCxFQUFTO0FBQ2JOLG1CQUFhLG1CQUFLTSxJQUFMLEVBQWI7O0FBQ0EsVUFBSVAsVUFBVSxDQUFDUSxNQUFmLEVBQXVCO0FBQ3JCLGVBQU9DLHNFQUFZLENBQUNULFVBQVUsQ0FBQ1EsTUFBWixDQUFaLENBQWdDRixJQUFoQyxDQUFxQyxVQUFDQyxJQUFEO0FBQUEsaUJBQzFDSixhQUFhLG1CQUFNSSxJQUFOLEVBRDZCO0FBQUEsU0FBckMsQ0FBUDtBQUdEO0FBQ0YsS0FSRDs7QUFVQSxRQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxRQUFELEVBQVdDLFlBQVgsRUFBNEI7QUFDNUMsVUFBTUMsV0FBVyxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUNwQyxZQUFJQyxDQUFDLEdBQUdDLGdCQUFnQixDQUFDTCxRQUFELENBQXhCO0FBQ0EsWUFBTU0sQ0FBQyxHQUFHO0FBQ1JDLFdBQUMsRUFBRUgsQ0FBQyxDQUFDSSxVQURHO0FBRVJDLFdBQUMsRUFBRUwsQ0FBQyxDQUFDTSxXQUZHO0FBR1JDLFdBQUMsRUFBRVAsQ0FBQyxDQUFDUSxhQUhHO0FBSVJDLFdBQUMsRUFBRVQsQ0FBQyxDQUFDVTtBQUpHLFNBQVYsQ0FGb0MsQ0FRcEM7O0FBQ0EsZUFBT1IsQ0FBUCxDQVRvQyxDQVVwQztBQUNBO0FBQ0E7QUFDQTtBQUNELE9BZDhCLEVBYzVCLElBZDRCLENBQS9CO0FBZUFTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZCxXQUFaO0FBQ0QsS0FqQkQ7QUFtQkQsR0E5QlEsRUE4Qk4sRUE5Qk0sQ0FBVDs7QUFnQ0EsTUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDTCxRQUFELEVBQWM7QUFDckMsUUFBSWlCLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEVBQVY7QUFBQSxRQUNFQyxVQUFVLEdBQUcsQ0FBQyxJQUFJRCxJQUFKLENBQVNsQixRQUFULElBQXFCaUIsR0FBckIsR0FBMkIsSUFBNUIsSUFBb0MsSUFEbkQ7QUFBQSxRQUVFSCxhQUFhLEdBQUcsQ0FBQyxNQUFNTSxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsVUFBVSxHQUFHLEVBQXhCLENBQVAsRUFBb0NHLEtBQXBDLENBQTBDLENBQUMsQ0FBM0MsQ0FGbEI7QUFBQSxRQUdFVixhQUFhLEdBQUcsQ0FBQyxNQUFNUSxJQUFJLENBQUNDLEtBQUwsQ0FBWUYsVUFBVSxHQUFHLEVBQWQsR0FBb0IsRUFBL0IsQ0FBUCxFQUEyQ0csS0FBM0MsQ0FBaUQsQ0FBQyxDQUFsRCxDQUhsQjtBQUFBLFFBSUVaLFdBQVcsR0FBRyxDQUFDLE1BQU1VLElBQUksQ0FBQ0MsS0FBTCxDQUFZRixVQUFVLEdBQUcsSUFBZCxHQUFzQixFQUFqQyxDQUFQLEVBQTZDRyxLQUE3QyxDQUFtRCxDQUFDLENBQXBELENBSmhCO0FBQUEsUUFLRWQsVUFBVSxHQUFHWSxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsVUFBVSxJQUFJLE9BQU8sRUFBWCxDQUFyQixDQUxmO0FBT0EsV0FBTztBQUNMTCxtQkFBYSxFQUFiQSxhQURLO0FBRUxGLG1CQUFhLEVBQWJBLGFBRks7QUFHTEYsaUJBQVcsRUFBWEEsV0FISztBQUlMRixnQkFBVSxFQUFWQSxVQUpLO0FBS0xXLGdCQUFVLEVBQVZBO0FBTEssS0FBUDtBQU9ELEdBZkQsQ0FyQ3NCLENBdUR0Qjs7O0FBQ0Esc0JBQ0UscUVBQUMsK0NBQUQ7QUFBQSwyQkFDRSxxRUFBQywrQ0FBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRSxxRUFBQyx1REFBRDtBQUFBLGdDQUNFLHFFQUFDLDhDQUFEO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRSxxRUFBQyw4Q0FBRDtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBV0UscUVBQUMsOENBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixlQWVFLHFFQUFDLDhDQUFEO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUF1QkUscUVBQUMsNENBQUQ7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLE9BQ3lCOUIsVUFBVSxDQUFDa0MsSUFEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixPQUN3QmhDLFVBQVUsQ0FBQ2dDLElBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBNUZEOztHQUFNcEMsUzs7S0FBQUEsUztBQThGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmI5ODE0ODFhNWZiYTQ1MDA3OGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VjdGlvbiwgQ291bnRlciwgTnVtYmVyLCBOdW1iZXJDb250YWluZXIsIEluZm8gfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBnZXROZXh0TGF1bmNoIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXROZXh0TGF1bmNoXCI7XG5pbXBvcnQgZ2V0T25lUm9ja2V0IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRPbmVSb2NrZXRcIjtcblxuXG5jb25zdCBDb3VudERvd24gPSAoKSA9PiB7XG4gIGNvbnN0IFtuZXh0bGF1bmNoLCBzZXROZXh0bGF1bmNoXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3JvY2tldFVzZWQsIHNldFJvY2tldFVzZWRdID0gdXNlU3RhdGUoe30pO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXROZXh0TGF1bmNoKClcbiAgICAudGhlbigoZGF0YSkgPT57IFxuICAgICAgc2V0TmV4dGxhdW5jaCh7Li4uZGF0YX0pXG4gICAgICBpZiAobmV4dGxhdW5jaC5yb2NrZXQpIHtcbiAgICAgICAgcmV0dXJuIGdldE9uZVJvY2tldChuZXh0bGF1bmNoLnJvY2tldCkudGhlbigoZGF0YSkgPT5cbiAgICAgICAgICBzZXRSb2NrZXRVc2VkKHsgLi4uZGF0YSB9KVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNvdW50ZG93biA9IChkZWFkbGluZSwgZmluYWxNZXNzYWdlKSA9PiB7XG4gICAgICBjb25zdCB0aW1lclVwZGF0ZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgbGV0IHQgPSBnZXRSZW1haW5pbmdUaW1lKGRlYWRsaW5lKTtcbiAgICAgICAgY29uc3QgciA9IHtcbiAgICAgICAgICBhOiB0LnJlbWFpbkRheXMsXG4gICAgICAgICAgYjogdC5yZW1haW5Ib3VycyxcbiAgICAgICAgICBjOiB0LnJlbWFpbk1pbnV0ZXMsXG4gICAgICAgICAgZDogdC5yZW1haW5TZWNvbmRzLFxuICAgICAgICB9O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIC8vICAgY2xlYXJJbnRlcnZhbCh0aW1lclVwZGF0ZSk7XG4gICAgICAgIC8vIGlmICh0LnJlbWFpblRpbWUgPD0gMSkge1xuICAgICAgICAvLyAgIGVsLmlubmVySFRNTCA9IGZpbmFsTWVzc2FnZTtcbiAgICAgICAgLy8gfVxuICAgICAgfSwgMTAwMCk7XG4gICAgICBjb25zb2xlLmxvZyh0aW1lclVwZGF0ZSk7XG4gICAgfTtcbiAgIFxuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0UmVtYWluaW5nVGltZSA9IChkZWFkbGluZSkgPT4ge1xuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLFxuICAgICAgcmVtYWluVGltZSA9IChuZXcgRGF0ZShkZWFkbGluZSkgLSBub3cgKyAxMDAwKSAvIDEwMDAsXG4gICAgICByZW1haW5TZWNvbmRzID0gKFwiMFwiICsgTWF0aC5mbG9vcihyZW1haW5UaW1lICUgNjApKS5zbGljZSgtMiksXG4gICAgICByZW1haW5NaW51dGVzID0gKFwiMFwiICsgTWF0aC5mbG9vcigocmVtYWluVGltZSAvIDYwKSAlIDYwKSkuc2xpY2UoLTIpLFxuICAgICAgcmVtYWluSG91cnMgPSAoXCIwXCIgKyBNYXRoLmZsb29yKChyZW1haW5UaW1lIC8gMzYwMCkgJSAyNCkpLnNsaWNlKC0yKSxcbiAgICAgIHJlbWFpbkRheXMgPSBNYXRoLmZsb29yKHJlbWFpblRpbWUgLyAoMzYwMCAqIDI0KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVtYWluU2Vjb25kcyxcbiAgICAgIHJlbWFpbk1pbnV0ZXMsXG4gICAgICByZW1haW5Ib3VycyxcbiAgICAgIHJlbWFpbkRheXMsXG4gICAgICByZW1haW5UaW1lLFxuICAgIH07XG4gIH07XG5cbiAgXG4gIC8vIGNvbnNvbGUubG9nKGNvdW50ZG93bihcIkRlYyAzMSAyMDI1IDIxOjM0OjQwIEdNVC0wNTAwXCIsIFwiwqFZYSBlbXBlesOzIVwiKSk7XG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Q291bnRlcj5cbiAgICAgICAgPGgxPlVwIE5leHQ8L2gxPlxuXG4gICAgICAgIDxOdW1iZXJDb250YWluZXI+XG4gICAgICAgICAgPE51bWJlcj5cbiAgICAgICAgICAgIDxwPjM8L3A+XG4gICAgICAgICAgICA8c21hbGw+ZGF5c1xuICAgICAgICAgICAgey8qIHtjb3VudGRvd24oJ0RlYyAzMSAyMDI1IDIxOjM0OjQwIEdNVC0wNTAwJywgICfCoVlhIGVtcGV6w7MhJyl9ICovfVxuICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICA8L051bWJlcj5cbiAgICAgICAgICA8TnVtYmVyPlxuICAgICAgICAgICAgPHA+MzwvcD5cbiAgICAgICAgICAgIDxzbWFsbD5kYXlzPC9zbWFsbD5cbiAgICAgICAgICA8L051bWJlcj5cbiAgICAgICAgICA8TnVtYmVyPlxuICAgICAgICAgICAgPHA+MzwvcD5cbiAgICAgICAgICAgIDxzbWFsbD5kYXlzPC9zbWFsbD5cbiAgICAgICAgICA8L051bWJlcj5cbiAgICAgICAgICA8TnVtYmVyPlxuICAgICAgICAgICAgPHA+MzwvcD5cbiAgICAgICAgICAgIDxzbWFsbD5kYXlzPC9zbWFsbD5cbiAgICAgICAgICA8L051bWJlcj5cbiAgICAgICAgPC9OdW1iZXJDb250YWluZXI+XG4gICAgICAgIDxJbmZvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4+bWlzc2lvbjo8L3NwYW4+IHtuZXh0bGF1bmNoLm5hbWV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4+Um9ja2V0Ojwvc3Bhbj4ge3JvY2tldFVzZWQubmFtZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvSW5mbz5cbiAgICAgIDwvQ291bnRlcj5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudERvd247Il0sInNvdXJjZVJvb3QiOiIifQ==