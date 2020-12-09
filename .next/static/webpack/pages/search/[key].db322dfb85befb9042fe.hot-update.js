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
/* harmony import */ var _services_getAllLaunches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getAllLaunches */ "./services/getAllLaunches.js");
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
    Object(_services_getAllLaunches__WEBPACK_IMPORTED_MODULE_3__["default"])().then(function (data) {
      setlaunches(data);

      if (launches.length > 0) {
        console.log(launches.length);
        var search = launches.filter(function (item) {
          return item.name === "FalconSat";
        });
        setresult(search);
        console.log(search);
      }
    });
  }, []); // useEffect(()=>{
  //   const search = launches.filter((item) => item.name === 'crs-21');
  //   setresult(search)
  //   console.log(router.query.key);
  // },[launches])

  console.log(launches);
  console.log(result);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [" results for: ", router.query.key]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
          lineNumber: 46,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1trZXldLmpzIl0sIm5hbWVzIjpbIlJlc3VsdCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibGF1bmNoZXMiLCJzZXRsYXVuY2hlcyIsInJlc3VsdCIsInNldHJlc3VsdCIsInVzZUVmZmVjdCIsImdldEFsbExhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoIiwiZmlsdGVyIiwiaXRlbSIsIm5hbWUiLCJxdWVyeSIsImtleSIsIm1hcCIsImluZGV4IiwiZGV0YWlscyIsImxpbmtzIiwicGF0Y2giLCJzbWFsbCIsImZsaWdodF9udW1iZXIiLCJkYXRlX2xvY2FsIiwic3VjY2VzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1CLGtCQUVhQyxzREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUVaQyxRQUZZO0FBQUEsTUFFRkMsV0FGRTs7QUFBQSxtQkFHU0Ysc0RBQVEsQ0FBQyxFQUFELENBSGpCO0FBQUEsTUFHWkcsTUFIWTtBQUFBLE1BR0pDLFNBSEk7O0FBS3JCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsNEVBQWMsR0FDYkMsSUFERCxDQUNNLFVBQUNDLElBQUQsRUFBVTtBQUNkTixpQkFBVyxDQUFDTSxJQUFELENBQVg7O0FBQ0EsVUFBSVAsUUFBUSxDQUFDUSxNQUFULEdBQWdCLENBQXBCLEVBQXNCO0FBQ3BCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWVYsUUFBUSxDQUFDUSxNQUFyQjtBQUNBLFlBQU1HLE1BQU0sR0FBR1gsUUFBUSxDQUFDWSxNQUFULENBQWdCLFVBQUNDLElBQUQ7QUFBQSxpQkFBVUEsSUFBSSxDQUFDQyxJQUFMLEtBQWMsV0FBeEI7QUFBQSxTQUFoQixDQUFmO0FBQ0FYLGlCQUFTLENBQUNRLE1BQUQsQ0FBVDtBQUNBRixlQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBWjtBQUNEO0FBQ0YsS0FURDtBQVlELEdBYlEsRUFhTixFQWJNLENBQVQsQ0FMcUIsQ0FxQnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixRQUFaO0FBQ0FTLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixNQUFaO0FBRUUsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRTtBQUFBLG1DQUFrQkwsTUFBTSxDQUFDa0IsS0FBUCxDQUFhQyxHQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FO0FBQUEsZ0JBQ0dkLE1BQU0sQ0FBQ2UsR0FBUCxDQUFXLFVBQUNKLElBQUQsRUFBT0ssS0FBUCxFQUFpQjtBQUN6Qiw0QkFDRSxxRUFBQyw0REFBRDtBQUVFLGVBQUssRUFBRUwsSUFBSSxDQUFDQyxJQUZkO0FBR0UsZ0JBQU0sRUFBRUQsSUFBSSxDQUFDTSxPQUhmO0FBSUUsZUFBSyxFQUFFTixJQUFJLENBQUNPLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsS0FKMUI7QUFLRSxnQkFBTSxFQUFFVCxJQUFJLENBQUNVLGFBTGY7QUFNRSxjQUFJLEVBQUVWLElBQUksQ0FBQ1csVUFOYjtBQU9FLGdCQUFNLEVBQUVYLElBQUksQ0FBQ1ksTUFBTCxHQUFjLFFBQWQsR0FBeUI7QUFQbkMsV0FDT1osSUFBSSxDQUFDYSxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFZSCxPQWJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBeEREOztHQUFNOUIsTTtVQUNXRSxxRDs7O0tBRFhGLE07QUEwRFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC9ba2V5XS5kYjMyMmRmYjg1YmVmYjkwNDJmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGdldEFsbExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRBbGxMYXVuY2hlc1wiO1xuaW1wb3J0IFBhc3RDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bhc3RDYXJkXCI7XG5cbmNvbnN0IFJlc3VsdCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtsYXVuY2hlcywgc2V0bGF1bmNoZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcmVzdWx0LCBzZXRyZXN1bHRdID0gdXNlU3RhdGUoW10pO1xuXG51c2VFZmZlY3QoKCkgPT4ge1xuICBnZXRBbGxMYXVuY2hlcygpXG4gIC50aGVuKChkYXRhKSA9PiB7XG4gICAgc2V0bGF1bmNoZXMoZGF0YSlcbiAgICBpZiAobGF1bmNoZXMubGVuZ3RoPjApe1xuICAgICAgY29uc29sZS5sb2cobGF1bmNoZXMubGVuZ3RoKVxuICAgICAgY29uc3Qgc2VhcmNoID0gbGF1bmNoZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IFwiRmFsY29uU2F0XCIpO1xuICAgICAgc2V0cmVzdWx0KHNlYXJjaCk7XG4gICAgICBjb25zb2xlLmxvZyhzZWFyY2gpXG4gICAgfVxuICB9KVxuXG5cbn0sIFtdKTtcblxuXG4vLyB1c2VFZmZlY3QoKCk9Pntcbi8vICAgY29uc3Qgc2VhcmNoID0gbGF1bmNoZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09ICdjcnMtMjEnKTtcbi8vICAgc2V0cmVzdWx0KHNlYXJjaClcbi8vICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LmtleSk7XG4vLyB9LFtsYXVuY2hlc10pXG5cbmNvbnNvbGUubG9nKGxhdW5jaGVzKVxuY29uc29sZS5sb2cocmVzdWx0KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPHA+IHJlc3VsdHMgZm9yOiB7cm91dGVyLnF1ZXJ5LmtleX08L3A+XG4gICAgICA8ZGl2PlxuICAgICAgICB7cmVzdWx0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxQYXN0Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIGRldGFpbD17aXRlbS5kZXRhaWxzfVxuICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmxpbmtzLnBhdGNoLnNtYWxsfVxuICAgICAgICAgICAgICAgIG51bWJlcj17aXRlbS5mbGlnaHRfbnVtYmVyfVxuICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZV9sb2NhbH1cbiAgICAgICAgICAgICAgICBzdWNjZXM9e2l0ZW0uc3VjY2VzID8gXCJzdWNjZXNcIiA6IFwiZmFpbFwifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICBcbiAgICAgICAgfSl9XG4gICAgICAgIHsgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==