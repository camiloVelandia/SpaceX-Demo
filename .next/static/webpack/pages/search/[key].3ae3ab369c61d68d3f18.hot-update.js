webpackHotUpdate_N_E("pages/search/[key]",{

/***/ "./pages/search/[key].js":
/*!*******************************!*\
  !*** ./pages/search/[key].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_getFilterLaunches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getFilterLaunches */ "./services/getFilterLaunches.js");
/* harmony import */ var _components_PastCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PastCard */ "./components/PastCard/index.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/pages/search/[key].js",
    _this = undefined,
    _s = $RefreshSig$();






var Result = function Result() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      launches = _useState[0],
      setlaunches = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      result = _useState2[0],
      setresult = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getFilterLaunches__WEBPACK_IMPORTED_MODULE_3__["default"])().then(function (data) {
      return setlaunches(data);
    });
  }, []);
  console.log(launches); // useEffect(()=>{
  //   const search = launches.filter(
  //     (item) => item.name.toLowerCase() === router.query.key.toLowerCase()
  //   );
  //   setresult(search)
  // },[launches])

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "result",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "result-title",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: " results for:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), " ", router.query.key]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "resultContainer",
      children: result.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PastCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: item.name,
          detail: item.details,
          image: item.links.patch.small,
          number: item.flight_number,
          date: item.date_local,
          succes: item.succes ? "succes" : "fail"
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(Result, "daQhle1IX27tQu4Ap2yn6Gfejb0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Result;
/* harmony default export */ __webpack_exports__["default"] = (Result);

var _c;

$RefreshReg$(_c, "Result");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1trZXldLmpzIl0sIm5hbWVzIjpbIlJlc3VsdCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibGF1bmNoZXMiLCJzZXRsYXVuY2hlcyIsInJlc3VsdCIsInNldHJlc3VsdCIsInVzZUVmZmVjdCIsImdldEZpbHRlckxhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJrZXkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYW1lIiwiZGV0YWlscyIsImxpbmtzIiwicGF0Y2giLCJzbWFsbCIsImZsaWdodF9udW1iZXIiLCJkYXRlX2xvY2FsIiwic3VjY2VzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1CLGtCQUVhQyxzREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUVaQyxRQUZZO0FBQUEsTUFFRkMsV0FGRTs7QUFBQSxtQkFHU0Ysc0RBQVEsQ0FBQyxFQUFELENBSGpCO0FBQUEsTUFHWkcsTUFIWTtBQUFBLE1BR0pDLFNBSEk7O0FBS3JCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsK0VBQWlCLEdBQUdDLElBQXBCLENBQXlCLFVBQUNDLElBQUQ7QUFBQSxhQUFVTixXQUFXLENBQUNNLElBQUQsQ0FBckI7QUFBQSxLQUF6QjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlULFFBQVosRUFUcUIsQ0FZckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlFLHNCQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSw0QkFDRTtBQUFHLGVBQVMsRUFBQyxjQUFiO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixPQUM4QkgsTUFBTSxDQUFDYSxLQUFQLENBQWFDLEdBRDNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSxnQkFDR1QsTUFBTSxDQUFDVSxHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzNCLDRCQUNFLHFFQUFDLDREQUFEO0FBRUUsZUFBSyxFQUFFRCxJQUFJLENBQUNFLElBRmQ7QUFHRSxnQkFBTSxFQUFFRixJQUFJLENBQUNHLE9BSGY7QUFJRSxlQUFLLEVBQUVILElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxLQUoxQjtBQUtFLGdCQUFNLEVBQUVOLElBQUksQ0FBQ08sYUFMZjtBQU1FLGNBQUksRUFBRVAsSUFBSSxDQUFDUSxVQU5iO0FBT0UsZ0JBQU0sRUFBRVIsSUFBSSxDQUFDUyxNQUFMLEdBQWMsUUFBZCxHQUF5QjtBQVBuQyxXQUNPVCxJQUFJLENBQUNVLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVdELE9BWkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0EzQ0Q7O0dBQU0zQixNO1VBQ1dFLHFEOzs7S0FEWEYsTTtBQTZDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoL1trZXldLjNhZTNhYjM2OWM2MWQ2OGQzZjE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgZ2V0RmlsdGVyTGF1bmNoZXMgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldEZpbHRlckxhdW5jaGVzXCI7XG5pbXBvcnQgUGFzdENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFzdENhcmRcIjtcblxuY29uc3QgUmVzdWx0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2xhdW5jaGVzLCBzZXRsYXVuY2hlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldHJlc3VsdF0gPSB1c2VTdGF0ZShbXSk7XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGdldEZpbHRlckxhdW5jaGVzKCkudGhlbigoZGF0YSkgPT4gc2V0bGF1bmNoZXMoZGF0YSkpO1xufSwgW10pO1xuXG5jb25zb2xlLmxvZyhsYXVuY2hlcylcblxuXG4vLyB1c2VFZmZlY3QoKCk9Pntcbi8vICAgY29uc3Qgc2VhcmNoID0gbGF1bmNoZXMuZmlsdGVyKFxuLy8gICAgIChpdGVtKSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gcm91dGVyLnF1ZXJ5LmtleS50b0xvd2VyQ2FzZSgpXG4vLyAgICk7XG4vLyAgIHNldHJlc3VsdChzZWFyY2gpXG4vLyB9LFtsYXVuY2hlc10pXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInJlc3VsdC10aXRsZVwiPlxuICAgICAgICA8c3Bhbj4gcmVzdWx0cyBmb3I6PC9zcGFuPiB7cm91dGVyLnF1ZXJ5LmtleX1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0Q29udGFpbmVyXCI+XG4gICAgICAgIHtyZXN1bHQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFzdENhcmRcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICBkZXRhaWw9e2l0ZW0uZGV0YWlsc31cbiAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0ubGlua3MucGF0Y2guc21hbGx9XG4gICAgICAgICAgICAgIG51bWJlcj17aXRlbS5mbGlnaHRfbnVtYmVyfVxuICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGVfbG9jYWx9XG4gICAgICAgICAgICAgIHN1Y2Nlcz17aXRlbS5zdWNjZXMgPyBcInN1Y2Nlc1wiIDogXCJmYWlsXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==