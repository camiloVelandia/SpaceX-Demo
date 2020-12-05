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
/* harmony import */ var _services_getOneRocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/getOneRocket */ "./services/getOneRocket.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Spinner */ "./components/Spinner/index.js");



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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      rocketUsed = _useState2[0],
      setRocketUsed = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      date = _useState4[0],
      setDate = _useState4[1];

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  var today = new Date(latest.date_local);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setLoading(true);
    Object(_services_getLatestLaunch__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (data) {
      setLatest(_objectSpread({}, data));
      setLoading(false);
    });

    if (latest.rocket) {
      return Object(_services_getOneRocket__WEBPACK_IMPORTED_MODULE_5__["default"])(latest.rocket).then(function (data) {
        return setRocketUsed(_objectSpread({}, data));
      });
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setDate(today.toLocaleDateString("en-US"));
  }, [1]);

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 10
    }, _this);
  }

  console.log(latest.date_local);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
        children: "latest mission"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Main"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("figure", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            src: latest.links.patch.large
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Info"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
          children: latest.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: latest.details
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Bullets"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: ["Date: ", date]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: ["succes: ", latest.success ? "yes" : "fail"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: ["rocket: ", rocketUsed.name || 'falcon']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_s(Latest, "wISnoKc1cOJsQCGvbWI0ntPGAvw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXRlc3QvaW5kZXguanMiXSwibmFtZXMiOlsiTGF0ZXN0IiwidXNlU3RhdGUiLCJsaW5rcyIsInBhdGNoIiwibGF0ZXN0Iiwic2V0TGF0ZXN0Iiwicm9ja2V0VXNlZCIsInNldFJvY2tldFVzZWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGUiLCJzZXREYXRlIiwib3B0aW9ucyIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJ0b2RheSIsIkRhdGUiLCJkYXRlX2xvY2FsIiwidXNlRWZmZWN0IiwiZ2V0TGF0ZXN0TGF1bmNoIiwidGhlbiIsImRhdGEiLCJyb2NrZXQiLCJnZXRPbmVSb2NrZXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJjb25zb2xlIiwibG9nIiwibGFyZ2UiLCJuYW1lIiwiZGV0YWlscyIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFFT0Msc0RBQVEsQ0FBQztBQUFDQyxTQUFLLEVBQUM7QUFBQ0MsV0FBSyxFQUFDO0FBQVA7QUFBUCxHQUFELENBRmY7QUFBQSxNQUVkQyxNQUZjO0FBQUEsTUFFTkMsU0FGTTs7QUFBQSxtQkFHZUosc0RBQVEsQ0FBQyxFQUFELENBSHZCO0FBQUEsTUFHZEssVUFIYztBQUFBLE1BR0ZDLGFBSEU7O0FBQUEsbUJBSVNOLHNEQUFRLENBQUMsS0FBRCxDQUpqQjtBQUFBLE1BSWRPLE9BSmM7QUFBQSxNQUlMQyxVQUpLOztBQUFBLG1CQUtHUixzREFBUSxDQUFDLEVBQUQsQ0FMWDtBQUFBLE1BS2RTLElBTGM7QUFBQSxNQUtSQyxPQUxROztBQU9yQixNQUFNQyxPQUFPLEdBQUc7QUFDZEMsV0FBTyxFQUFFLE1BREs7QUFFZEMsUUFBSSxFQUFFLFNBRlE7QUFHZEMsU0FBSyxFQUFFLE1BSE87QUFJZEMsT0FBRyxFQUFFO0FBSlMsR0FBaEI7QUFNQSxNQUFNQyxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTZCxNQUFNLENBQUNlLFVBQWhCLENBQWQ7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RYLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQ1ksNkVBQWUsR0FDZEMsSUFERCxDQUNNLFVBQUNDLElBQUQsRUFBUztBQUNabEIsZUFBUyxtQkFBS2tCLElBQUwsRUFBVDtBQUNBZCxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBSkY7O0FBS0EsUUFBR0wsTUFBTSxDQUFDb0IsTUFBVixFQUFpQjtBQUNoQixhQUFPQyxzRUFBWSxDQUFDckIsTUFBTSxDQUFDb0IsTUFBUixDQUFaLENBQTRCRixJQUE1QixDQUFpQyxVQUFDQyxJQUFEO0FBQUEsZUFBVWhCLGFBQWEsbUJBQU1nQixJQUFOLEVBQXZCO0FBQUEsT0FBakMsQ0FBUDtBQUNEO0FBQ0YsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBSCx5REFBUyxDQUFDLFlBQUk7QUFDWlQsV0FBTyxDQUFDTSxLQUFLLENBQUNTLGtCQUFOLENBQXlCLE9BQXpCLENBQUQsQ0FBUDtBQUNELEdBRlEsRUFFUCxDQUFDLENBQUQsQ0FGTyxDQUFUOztBQUlBLE1BQUlsQixPQUFKLEVBQWE7QUFDWCx3QkFBTyxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRG1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZeEIsTUFBTSxDQUFDZSxVQUFuQjtBQUVFLHNCQUNFLHFFQUFDLCtDQUFEO0FBQUEsNEJBQ0UscUVBQUMsNkNBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLHFFQUFDLDRDQUFEO0FBQUEsOEJBQ0UscUVBQUMsNkNBQUQ7QUFBQSwrQkFDRTtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFFZixNQUFNLENBQUNGLEtBQVAsQ0FBYUMsS0FBYixDQUFtQjBCO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUUscUVBQUMsNENBQUQ7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLekIsTUFBTSxDQUFDMEI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxvQkFBSTFCLE1BQU0sQ0FBQzJCO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQVVFLHFFQUFDLCtDQUFEO0FBQUEsZ0NBQ0U7QUFBQSwrQkFBVXJCLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxpQ0FBWU4sTUFBTSxDQUFDNEIsT0FBUCxHQUFpQixLQUFqQixHQUF5QixNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBLGlDQUFZMUIsVUFBVSxDQUFDd0IsSUFBWCxJQUFtQixRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0EzREQ7O0dBQU05QixNOztLQUFBQSxNO0FBNkRTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYXVuY2hlcy40Y2JjYTY2YWNjY2E3MjJkMGMzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NlY3Rpb24sIFRpdGxlLCBNYWluLCBJbWFnZSwgSW5mbywgQnVsbGV0c30gZnJvbSAnLi9zdHlsZXMnXG5pbXBvcnQgZ2V0TGF0ZXN0TGF1bmNoIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRMYXRlc3RMYXVuY2hcIjtcbmltcG9ydCBnZXRPbmVSb2NrZXQgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldE9uZVJvY2tldFwiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL1NwaW5uZXJcIjtcblxuY29uc3QgTGF0ZXN0ID0gKCkgPT4ge1xuXG5jb25zdCBbbGF0ZXN0LCBzZXRMYXRlc3RdID0gdXNlU3RhdGUoe2xpbmtzOntwYXRjaDp7fX19KVxuY29uc3QgW3JvY2tldFVzZWQsIHNldFJvY2tldFVzZWRdID0gdXNlU3RhdGUoe30pXG5jb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5jb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgnJylcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgd2Vla2RheTogXCJsb25nXCIsXG4gIHllYXI6IFwibnVtZXJpY1wiLFxuICBtb250aDogXCJsb25nXCIsXG4gIGRheTogXCJudW1lcmljXCIsXG59O1xuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShsYXRlc3QuZGF0ZV9sb2NhbCk7XG51c2VFZmZlY3QoKCkgPT4ge1xuICBzZXRMb2FkaW5nKHRydWUpO1xuICAgZ2V0TGF0ZXN0TGF1bmNoKClcbiAgIC50aGVuKChkYXRhKSA9PntcbiAgICAgIHNldExhdGVzdCh7Li4uZGF0YX0pXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH0pXG4gICBpZihsYXRlc3Qucm9ja2V0KXtcbiAgICByZXR1cm4gZ2V0T25lUm9ja2V0KGxhdGVzdC5yb2NrZXQpLnRoZW4oKGRhdGEpID0+IHNldFJvY2tldFVzZWQoeyAuLi5kYXRhIH0pKTtcbiAgfVxufSwgW10pO1xuXG51c2VFZmZlY3QoKCk9PntcbiAgc2V0RGF0ZSh0b2RheS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiKSlcbn0sWzFdKVxuXG5pZiAobG9hZGluZykge1xuICByZXR1cm4gPFNwaW5uZXIgLz47XG59XG5cbmNvbnNvbGUubG9nKGxhdGVzdC5kYXRlX2xvY2FsKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uPlxuICAgICAgPFRpdGxlPlxuICAgICAgICA8aDI+bGF0ZXN0IG1pc3Npb248L2gyPlxuICAgICAgPC9UaXRsZT5cbiAgICAgIDxNYWluPlxuICAgICAgICA8SW1hZ2U+XG4gICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtsYXRlc3QubGlua3MucGF0Y2gubGFyZ2V9IC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDwvSW1hZ2U+XG4gICAgICAgIDxJbmZvPlxuICAgICAgICAgIDxoMz57bGF0ZXN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICA8cD57bGF0ZXN0LmRldGFpbHN9PC9wPlxuICAgICAgICA8L0luZm8+XG4gICAgICAgIDxCdWxsZXRzPlxuICAgICAgICAgIDxwPkRhdGU6IHtkYXRlfTwvcD5cbiAgICAgICAgICA8cD5zdWNjZXM6IHtsYXRlc3Quc3VjY2VzcyA/IFwieWVzXCIgOiBcImZhaWxcIn08L3A+XG4gICAgICAgICAgPHA+cm9ja2V0OiB7cm9ja2V0VXNlZC5uYW1lIHx8ICdmYWxjb24nfTwvcD5cbiAgICAgICAgPC9CdWxsZXRzPlxuICAgICAgPC9NYWluPlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhdGVzdDsiXSwic291cmNlUm9vdCI6IiJ9