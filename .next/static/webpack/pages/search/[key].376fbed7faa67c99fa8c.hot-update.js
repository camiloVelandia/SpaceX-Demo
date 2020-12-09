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
        var _search = launches.filter(function (item) {
          return item.name === "crs-21";
        });

        setresult(_search);
      }

      console.log(search);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1trZXldLmpzIl0sIm5hbWVzIjpbIlJlc3VsdCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibGF1bmNoZXMiLCJzZXRsYXVuY2hlcyIsInJlc3VsdCIsInNldHJlc3VsdCIsInVzZUVmZmVjdCIsImdldEFsbExhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJsZW5ndGgiLCJzZWFyY2giLCJmaWx0ZXIiLCJpdGVtIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImtleSIsIm1hcCIsImluZGV4IiwiZGV0YWlscyIsImxpbmtzIiwicGF0Y2giLCJzbWFsbCIsImZsaWdodF9udW1iZXIiLCJkYXRlX2xvY2FsIiwic3VjY2VzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1CLGtCQUVhQyxzREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUVaQyxRQUZZO0FBQUEsTUFFRkMsV0FGRTs7QUFBQSxtQkFHU0Ysc0RBQVEsQ0FBQyxFQUFELENBSGpCO0FBQUEsTUFHWkcsTUFIWTtBQUFBLE1BR0pDLFNBSEk7O0FBS3JCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsNEVBQWMsR0FDYkMsSUFERCxDQUNNLFVBQUNDLElBQUQsRUFBVTtBQUNkTixpQkFBVyxDQUFDTSxJQUFELENBQVg7O0FBQ0EsVUFBSVAsUUFBUSxDQUFDUSxNQUFULEdBQWdCLENBQXBCLEVBQXNCO0FBRXBCLFlBQU1DLE9BQU0sR0FBR1QsUUFBUSxDQUFDVSxNQUFULENBQWdCLFVBQUNDLElBQUQ7QUFBQSxpQkFBVUEsSUFBSSxDQUFDQyxJQUFMLEtBQWMsUUFBeEI7QUFBQSxTQUFoQixDQUFmOztBQUNBVCxpQkFBUyxDQUFDTSxPQUFELENBQVQ7QUFDRDs7QUFDREksYUFBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVo7QUFDRCxLQVREO0FBWUQsR0FiUSxFQWFOLEVBYk0sQ0FBVCxDQUxxQixDQXFCckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUksU0FBTyxDQUFDQyxHQUFSLENBQVlkLFFBQVo7QUFDQWEsU0FBTyxDQUFDQyxHQUFSLENBQVlaLE1BQVo7QUFFRSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQUtFO0FBQUEsbUNBQWtCTCxNQUFNLENBQUNrQixLQUFQLENBQWFDLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBTUU7QUFBQSxnQkFDR2QsTUFBTSxDQUFDZSxHQUFQLENBQVcsVUFBQ04sSUFBRCxFQUFPTyxLQUFQLEVBQWlCO0FBQ3pCLDRCQUNFLHFFQUFDLDREQUFEO0FBRUUsZUFBSyxFQUFFUCxJQUFJLENBQUNDLElBRmQ7QUFHRSxnQkFBTSxFQUFFRCxJQUFJLENBQUNRLE9BSGY7QUFJRSxlQUFLLEVBQUVSLElBQUksQ0FBQ1MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxLQUoxQjtBQUtFLGdCQUFNLEVBQUVYLElBQUksQ0FBQ1ksYUFMZjtBQU1FLGNBQUksRUFBRVosSUFBSSxDQUFDYSxVQU5iO0FBT0UsZ0JBQU0sRUFBRWIsSUFBSSxDQUFDYyxNQUFMLEdBQWMsUUFBZCxHQUF5QjtBQVBuQyxXQUNPZCxJQUFJLENBQUNlLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVlILE9BYkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0F4REQ7O0dBQU05QixNO1VBQ1dFLHFEOzs7S0FEWEYsTTtBQTBEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoL1trZXldLjM3NmZiZWQ3ZmFhNjdjOTlmYThjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgZ2V0QWxsTGF1bmNoZXMgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldEFsbExhdW5jaGVzXCI7XG5pbXBvcnQgUGFzdENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFzdENhcmRcIjtcblxuY29uc3QgUmVzdWx0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2xhdW5jaGVzLCBzZXRsYXVuY2hlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldHJlc3VsdF0gPSB1c2VTdGF0ZShbXSk7XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGdldEFsbExhdW5jaGVzKClcbiAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICBzZXRsYXVuY2hlcyhkYXRhKVxuICAgIGlmIChsYXVuY2hlcy5sZW5ndGg+MCl7XG5cbiAgICAgIGNvbnN0IHNlYXJjaCA9IGxhdW5jaGVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBcImNycy0yMVwiKVxuICAgICAgc2V0cmVzdWx0KHNlYXJjaCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHNlYXJjaClcbiAgfSlcblxuXG59LCBbXSk7XG5cblxuLy8gdXNlRWZmZWN0KCgpPT57XG4vLyAgIGNvbnN0IHNlYXJjaCA9IGxhdW5jaGVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5uYW1lID09PSAnY3JzLTIxJyk7XG4vLyAgIHNldHJlc3VsdChzZWFyY2gpXG4vLyAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS5rZXkpO1xuLy8gfSxbbGF1bmNoZXNdKVxuXG5jb25zb2xlLmxvZyhsYXVuY2hlcylcbmNvbnNvbGUubG9nKHJlc3VsdClcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxwPiByZXN1bHRzIGZvcjoge3JvdXRlci5xdWVyeS5rZXl9PC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAge3Jlc3VsdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UGFzdENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICBkZXRhaWw9e2l0ZW0uZGV0YWlsc31cbiAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5saW5rcy5wYXRjaC5zbWFsbH1cbiAgICAgICAgICAgICAgICBudW1iZXI9e2l0ZW0uZmxpZ2h0X251bWJlcn1cbiAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGVfbG9jYWx9XG4gICAgICAgICAgICAgICAgc3VjY2VzPXtpdGVtLnN1Y2NlcyA/IFwic3VjY2VzXCIgOiBcImZhaWxcIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgXG4gICAgICAgIH0pfVxuICAgICAgICB7IH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=