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
      var search = launches.filter(function (item) {
        return item.name === "crs-21";
      });
      setresult(search);
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
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: router.query.key
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
          lineNumber: 42,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1trZXldLmpzIl0sIm5hbWVzIjpbIlJlc3VsdCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibGF1bmNoZXMiLCJzZXRsYXVuY2hlcyIsInJlc3VsdCIsInNldHJlc3VsdCIsInVzZUVmZmVjdCIsImdldEFsbExhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJzZWFyY2giLCJmaWx0ZXIiLCJpdGVtIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImtleSIsIm1hcCIsImluZGV4IiwiZGV0YWlscyIsImxpbmtzIiwicGF0Y2giLCJzbWFsbCIsImZsaWdodF9udW1iZXIiLCJkYXRlX2xvY2FsIiwic3VjY2VzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1CLGtCQUVhQyxzREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUVaQyxRQUZZO0FBQUEsTUFFRkMsV0FGRTs7QUFBQSxtQkFHU0Ysc0RBQVEsQ0FBQyxFQUFELENBSGpCO0FBQUEsTUFHWkcsTUFIWTtBQUFBLE1BR0pDLFNBSEk7O0FBS3JCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsNEVBQWMsR0FDYkMsSUFERCxDQUNNLFVBQUNDLElBQUQsRUFBVTtBQUNkTixpQkFBVyxDQUFDTSxJQUFELENBQVg7QUFDQSxVQUFNQyxNQUFNLEdBQUdSLFFBQVEsQ0FBQ1MsTUFBVCxDQUFnQixVQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDQyxJQUFMLEtBQWMsUUFBeEI7QUFBQSxPQUFoQixDQUFmO0FBQ0FSLGVBQVMsQ0FBQ0ssTUFBRCxDQUFUO0FBQ0QsS0FMRDtBQVFELEdBVFEsRUFTTixFQVRNLENBQVQsQ0FMcUIsQ0FpQnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZYixRQUFaO0FBQ0FZLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWCxNQUFaO0FBRUUsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRTtBQUFBLGdCQUFJTCxNQUFNLENBQUNpQixLQUFQLENBQWFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FO0FBQUEsZ0JBQ0diLE1BQU0sQ0FBQ2MsR0FBUCxDQUFXLFVBQUNOLElBQUQsRUFBT08sS0FBUCxFQUFpQjtBQUN6Qiw0QkFDRSxxRUFBQyw0REFBRDtBQUVFLGVBQUssRUFBRVAsSUFBSSxDQUFDQyxJQUZkO0FBR0UsZ0JBQU0sRUFBRUQsSUFBSSxDQUFDUSxPQUhmO0FBSUUsZUFBSyxFQUFFUixJQUFJLENBQUNTLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsS0FKMUI7QUFLRSxnQkFBTSxFQUFFWCxJQUFJLENBQUNZLGFBTGY7QUFNRSxjQUFJLEVBQUVaLElBQUksQ0FBQ2EsVUFOYjtBQU9FLGdCQUFNLEVBQUViLElBQUksQ0FBQ2MsTUFBTCxHQUFjLFFBQWQsR0FBeUI7QUFQbkMsV0FDT2QsSUFBSSxDQUFDZSxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFZSCxPQWJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBcEREOztHQUFNN0IsTTtVQUNXRSxxRDs7O0tBRFhGLE07QUFzRFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC9ba2V5XS5mNDU1NDIwM2UwZTEyZDAxM2VmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGdldEFsbExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRBbGxMYXVuY2hlc1wiO1xuaW1wb3J0IFBhc3RDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bhc3RDYXJkXCI7XG5cbmNvbnN0IFJlc3VsdCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtsYXVuY2hlcywgc2V0bGF1bmNoZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcmVzdWx0LCBzZXRyZXN1bHRdID0gdXNlU3RhdGUoW10pO1xuXG51c2VFZmZlY3QoKCkgPT4ge1xuICBnZXRBbGxMYXVuY2hlcygpXG4gIC50aGVuKChkYXRhKSA9PiB7XG4gICAgc2V0bGF1bmNoZXMoZGF0YSlcbiAgICBjb25zdCBzZWFyY2ggPSBsYXVuY2hlcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gXCJjcnMtMjFcIilcbiAgICBzZXRyZXN1bHQoc2VhcmNoKTtcbiAgfSlcblxuXG59LCBbXSk7XG5cblxuLy8gdXNlRWZmZWN0KCgpPT57XG4vLyAgIGNvbnN0IHNlYXJjaCA9IGxhdW5jaGVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5uYW1lID09PSAnY3JzLTIxJyk7XG4vLyAgIHNldHJlc3VsdChzZWFyY2gpXG4vLyAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS5rZXkpO1xuLy8gfSxbbGF1bmNoZXNdKVxuXG5jb25zb2xlLmxvZyhsYXVuY2hlcylcbmNvbnNvbGUubG9nKHJlc3VsdClcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxwPntyb3V0ZXIucXVlcnkua2V5fTwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtyZXN1bHQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFBhc3RDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgZGV0YWlsPXtpdGVtLmRldGFpbHN9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0ubGlua3MucGF0Y2guc21hbGx9XG4gICAgICAgICAgICAgICAgbnVtYmVyPXtpdGVtLmZsaWdodF9udW1iZXJ9XG4gICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlX2xvY2FsfVxuICAgICAgICAgICAgICAgIHN1Y2Nlcz17aXRlbS5zdWNjZXMgPyBcInN1Y2Nlc1wiIDogXCJmYWlsXCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIFxuICAgICAgICB9KX1cbiAgICAgICAgeyB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdDsiXSwic291cmNlUm9vdCI6IiJ9