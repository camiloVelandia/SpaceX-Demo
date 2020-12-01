webpackHotUpdate_N_E("pages/launches",{

/***/ "./components/Latest/index.js":
/*!************************************!*\
  !*** ./components/Latest/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/Latest/styles.js");
/* harmony import */ var _services_getLatestLaunch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/getLatestLaunch */ "./services/getLatestLaunch.js");



var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/Latest/index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Latest = function Latest() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    links: {
      patch: {}
    }
  }),
      latest = _useState[0],
      setLatest = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_services_getLatestLaunch__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (data) {
      return setLatest(_objectSpread({}, data));
    });
  }, []);
  console.log(latest);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
        children: "latest mission"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Main"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("figure", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            src: latest.links.patch.large
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Info"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
          children: latest.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: latest.details
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Bullets"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: ["Date: ", latest.date_local]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: "site: november 10"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: "rocket: november 10"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_s(Latest, "iwzuuLyWZXtBrU4NTn6EvGPYloI=");

_c = Latest;
/* harmony default export */ __webpack_exports__["default"] = (Latest);

var _c;

$RefreshReg$(_c, "Latest");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXRlc3QvaW5kZXguanMiXSwibmFtZXMiOlsiTGF0ZXN0IiwidXNlU3RhdGUiLCJsaW5rcyIsInBhdGNoIiwibGF0ZXN0Iiwic2V0TGF0ZXN0IiwidXNlRWZmZWN0IiwiZ2V0TGF0ZXN0TGF1bmNoIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibGFyZ2UiLCJuYW1lIiwiZGV0YWlscyIsImRhdGVfbG9jYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFFT0Msc0RBQVEsQ0FBQztBQUFDQyxTQUFLLEVBQUM7QUFBQ0MsV0FBSyxFQUFDO0FBQVA7QUFBUCxHQUFELENBRmY7QUFBQSxNQUVkQyxNQUZjO0FBQUEsTUFFTkMsU0FGTTs7QUFJckJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyw2RUFBZSxHQUFHQyxJQUFsQixDQUF1QixVQUFDQyxJQUFEO0FBQUEsYUFBVUosU0FBUyxtQkFBS0ksSUFBTCxFQUFuQjtBQUFBLEtBQXZCO0FBRUQsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsTUFBWjtBQUVFLHNCQUNFLHFFQUFDLCtDQUFEO0FBQUEsNEJBQ0UscUVBQUMsNkNBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLHFFQUFDLDRDQUFEO0FBQUEsOEJBQ0UscUVBQUMsNkNBQUQ7QUFBQSwrQkFDRTtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFFQSxNQUFNLENBQUNGLEtBQVAsQ0FBYUMsS0FBYixDQUFtQlM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRSxxRUFBQyw0Q0FBRDtBQUFBLGdDQUNFO0FBQUEsb0JBQUtSLE1BQU0sQ0FBQ1M7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxvQkFDR1QsTUFBTSxDQUFDVTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFZRSxxRUFBQywrQ0FBRDtBQUFBLGdDQUNFO0FBQUEsK0JBQVVWLE1BQU0sQ0FBQ1csVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQXBDRDs7R0FBTWYsTTs7S0FBQUEsTTtBQXNDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGF1bmNoZXMuZmJhNjU4YWM3N2JkMjk2MGViOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTZWN0aW9uLCBUaXRsZSwgTWFpbiwgSW1hZ2UsIEluZm8sIEJ1bGxldHN9IGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IGdldExhdGVzdExhdW5jaCBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0TGF0ZXN0TGF1bmNoXCI7XG5cbmNvbnN0IExhdGVzdCA9ICgpID0+IHtcblxuY29uc3QgW2xhdGVzdCwgc2V0TGF0ZXN0XSA9IHVzZVN0YXRlKHtsaW5rczp7cGF0Y2g6e319fSlcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgZ2V0TGF0ZXN0TGF1bmNoKCkudGhlbigoZGF0YSkgPT4gc2V0TGF0ZXN0KHsuLi5kYXRhfSkpO1xuXG59LCBbXSk7XG5cbmNvbnNvbGUubG9nKGxhdGVzdClcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uPlxuICAgICAgPFRpdGxlPlxuICAgICAgICA8aDI+bGF0ZXN0IG1pc3Npb248L2gyPlxuICAgICAgPC9UaXRsZT5cbiAgICAgIDxNYWluPlxuICAgICAgICA8SW1hZ2U+XG4gICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtsYXRlc3QubGlua3MucGF0Y2gubGFyZ2V9IC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDwvSW1hZ2U+XG4gICAgICAgIDxJbmZvPlxuICAgICAgICAgIDxoMz57bGF0ZXN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtsYXRlc3QuZGV0YWlsc31cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvSW5mbz5cbiAgICAgICAgPEJ1bGxldHM+XG4gICAgICAgICAgPHA+RGF0ZToge2xhdGVzdC5kYXRlX2xvY2FsfTwvcD5cbiAgICAgICAgICA8cD5zaXRlOiBub3ZlbWJlciAxMDwvcD5cbiAgICAgICAgICA8cD5yb2NrZXQ6IG5vdmVtYmVyIDEwPC9wPlxuICAgICAgICA8L0J1bGxldHM+XG4gICAgICA8L01haW4+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF0ZXN0OyJdLCJzb3VyY2VSb290IjoiIn0=