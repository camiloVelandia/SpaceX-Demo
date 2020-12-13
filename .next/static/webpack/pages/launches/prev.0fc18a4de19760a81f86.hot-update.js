webpackHotUpdate_N_E("pages/launches/prev",{

/***/ "./components/PastLayout/index.js":
/*!****************************************!*\
  !*** ./components/PastLayout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PastCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PastCard */ "./components/PastCard/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/PastLayout/styles.js");
/* harmony import */ var _services_getPastLaunches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/getPastLaunches */ "./services/getPastLaunches.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Spinner */ "./components/Spinner/index.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/PastLayout/index.js",
    _this = undefined,
    _s = $RefreshSig$();







var PastLayout = function PastLayout() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    docs: []
  }),
      pastlaunches = _useState[0],
      setpastlaunches = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(pastlaunches.docs),
      docs = _useState2[0],
      setdocs = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      page = _useState4[0],
      setPage = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
    Object(_services_getPastLaunches__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (data) {
      setpastlaunches(data);
      setdocs(pastlaunches.docs);
      setPage(data.page);
      setLoading(false);
    });
  }, []);

  var handleNextPage = function handleNextPage() {
    setPage(function (prevPage) {
      return prevPage + 1;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (page === 0) return;
    Object(_services_getPastLaunches__WEBPACK_IMPORTED_MODULE_4__["default"])(page).then(function (nextPagelaunch) {
      var total = pastlaunches;
      setpastlaunches(nextPagelaunch);
    });
  }, [page]);
  console.log(docs);

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }, _this);
  }

  if (!pastlaunches.nextPage) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    children: [docs.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PastCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: item.name,
        detail: item.details,
        image: item.links.patch.small,
        number: item.flight_number,
        date: item.date_local,
        succes: item.success ? "succes" : "fail"
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
      onClick: handleNextPage,
      children: "view more"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, _this);
};

_s(PastLayout, "+DXtl5EVHh6EYFH74+ThbM1020k=");

_c = PastLayout;
/* harmony default export */ __webpack_exports__["default"] = (PastLayout);

var _c;

$RefreshReg$(_c, "PastLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXN0TGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhc3RMYXlvdXQiLCJ1c2VTdGF0ZSIsImRvY3MiLCJwYXN0bGF1bmNoZXMiLCJzZXRwYXN0bGF1bmNoZXMiLCJzZXRkb2NzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwYWdlIiwic2V0UGFnZSIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJkYXRhIiwiaGFuZGxlTmV4dFBhZ2UiLCJwcmV2UGFnZSIsIm5leHRQYWdlbGF1bmNoIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwibmV4dFBhZ2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYW1lIiwiZGV0YWlscyIsImxpbmtzIiwicGF0Y2giLCJzbWFsbCIsImZsaWdodF9udW1iZXIiLCJkYXRlX2xvY2FsIiwic3VjY2VzcyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBRWlCQyxzREFBUSxDQUFDO0FBQUNDLFFBQUksRUFBQztBQUFOLEdBQUQsQ0FGekI7QUFBQSxNQUVoQkMsWUFGZ0I7QUFBQSxNQUVGQyxlQUZFOztBQUFBLG1CQUdDSCxzREFBUSxDQUFDRSxZQUFZLENBQUNELElBQWQsQ0FIVDtBQUFBLE1BR2hCQSxJQUhnQjtBQUFBLE1BR1ZHLE9BSFU7O0FBQUEsbUJBSU9KLHNEQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJaEJLLE9BSmdCO0FBQUEsTUFJUEMsVUFKTzs7QUFBQSxtQkFLQ04sc0RBQVEsQ0FBQyxDQUFELENBTFQ7QUFBQSxNQUtoQk8sSUFMZ0I7QUFBQSxNQUtWQyxPQUxVOztBQVF2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RILGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUksNkVBQWUsR0FBR0MsSUFBbEIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQy9CVCxxQkFBZSxDQUFDUyxJQUFELENBQWY7QUFDQVIsYUFBTyxDQUFDRixZQUFZLENBQUNELElBQWQsQ0FBUDtBQUNBTyxhQUFPLENBQUNJLElBQUksQ0FBQ0wsSUFBTixDQUFQO0FBQ0FELGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FMRDtBQU1ELEdBUlEsRUFRTixFQVJNLENBQVQ7O0FBV0EsTUFBTU8sY0FBYyxHQUFDLFNBQWZBLGNBQWUsR0FBSTtBQUN2QkwsV0FBTyxDQUFDLFVBQUFNLFFBQVE7QUFBQSxhQUFJQSxRQUFRLEdBQUMsQ0FBYjtBQUFBLEtBQVQsQ0FBUDtBQUNELEdBRkQ7O0FBSUFMLHlEQUFTLENBQUMsWUFBSTtBQUNaLFFBQUdGLElBQUksS0FBRyxDQUFWLEVBQVk7QUFDWkcsNkVBQWUsQ0FBQ0gsSUFBRCxDQUFmLENBQ0NJLElBREQsQ0FDTSxVQUFBSSxjQUFjLEVBQUU7QUFDcEIsVUFBTUMsS0FBSyxHQUFFZCxZQUFiO0FBQ0FDLHFCQUFlLENBQUVZLGNBQUYsQ0FBZjtBQUNELEtBSkQ7QUFLRCxHQVBRLEVBT1AsQ0FBQ1IsSUFBRCxDQVBPLENBQVQ7QUFTQVUsU0FBTyxDQUFDQyxHQUFSLENBQVlqQixJQUFaOztBQUVBLE1BQUlJLE9BQUosRUFBYTtBQUNYLHdCQUFPLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUNELE1BQUcsQ0FBQ0gsWUFBWSxDQUFDaUIsUUFBakIsRUFBMEI7QUFDeEIsd0JBQU8scUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBQ0Qsc0JBQ0UscUVBQUMsK0NBQUQ7QUFBQSxlQUNJbEIsSUFBSSxDQUFDbUIsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFlO0FBQ3hCLDBCQUNFLHFFQUFDLGlEQUFEO0FBRUUsYUFBSyxFQUFFRCxJQUFJLENBQUNFLElBRmQ7QUFHRSxjQUFNLEVBQUVGLElBQUksQ0FBQ0csT0FIZjtBQUlFLGFBQUssRUFBRUgsSUFBSSxDQUFDSSxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEtBSjFCO0FBS0UsY0FBTSxFQUFFTixJQUFJLENBQUNPLGFBTGY7QUFNRSxZQUFJLEVBQUVQLElBQUksQ0FBQ1EsVUFOYjtBQU9FLGNBQU0sRUFBRVIsSUFBSSxDQUFDUyxPQUFMLEdBQWUsUUFBZixHQUEwQjtBQVBwQyxTQUNPVCxJQUFJLENBQUNVLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUcsS0FYSCxDQURKLGVBY0kscUVBQUMsa0RBQUQ7QUFBWSxhQUFPLEVBQUVsQixjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBMUREOztHQUFNZCxVOztLQUFBQSxVO0FBNERTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYXVuY2hlcy9wcmV2LjBmYzE4YTRkZTE5NzYwYTgxZjg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYXN0Q2FyZCBmcm9tICcuLi9QYXN0Q2FyZCdcbmltcG9ydCB7U2VjdGlvbiwgUGFnaW5hdGlvbn0gZnJvbSAnLi9zdHlsZXMnXG5pbXBvcnQgZ2V0UGFzdExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRQYXN0TGF1bmNoZXNcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9TcGlubmVyXCI7XG5cbmNvbnN0IFBhc3RMYXlvdXQgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3Bhc3RsYXVuY2hlcywgc2V0cGFzdGxhdW5jaGVzXSA9IHVzZVN0YXRlKHtkb2NzOltdfSk7XG4gIGNvbnN0IFtkb2NzLCBzZXRkb2NzXSA9IHVzZVN0YXRlKHBhc3RsYXVuY2hlcy5kb2NzKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBnZXRQYXN0TGF1bmNoZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRwYXN0bGF1bmNoZXMoZGF0YSk7XG4gICAgICBzZXRkb2NzKHBhc3RsYXVuY2hlcy5kb2NzKVxuICAgICAgc2V0UGFnZShkYXRhLnBhZ2UpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIFxuICBjb25zdCBoYW5kbGVOZXh0UGFnZT0oKT0+e1xuICAgIHNldFBhZ2UocHJldlBhZ2UgPT4gcHJldlBhZ2UrMSlcbiAgfVxuICBcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYocGFnZT09PTApcmV0dXJuXG4gICAgZ2V0UGFzdExhdW5jaGVzKHBhZ2UpXG4gICAgLnRoZW4obmV4dFBhZ2VsYXVuY2g9PntcbiAgICAgIGNvbnN0IHRvdGFsPSBwYXN0bGF1bmNoZXNcbiAgICAgIHNldHBhc3RsYXVuY2hlcyggbmV4dFBhZ2VsYXVuY2gpXG4gICAgfSlcbiAgfSxbcGFnZV0pXG5cbiAgY29uc29sZS5sb2coZG9jcyk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gIH1cbiAgaWYoIXBhc3RsYXVuY2hlcy5uZXh0UGFnZSl7XG4gICAgcmV0dXJuIDxTcGlubmVyLz5cbiAgfVxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uPlxuICAgICAgIHtkb2NzLm1hcCgoaXRlbSwgaW5kZXgpPT57XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFBhc3RDYXJkXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgZGV0YWlsPXtpdGVtLmRldGFpbHN9XG4gICAgICAgICAgICBpbWFnZT17aXRlbS5saW5rcy5wYXRjaC5zbWFsbH1cbiAgICAgICAgICAgIG51bWJlcj17aXRlbS5mbGlnaHRfbnVtYmVyfVxuICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlX2xvY2FsfVxuICAgICAgICAgICAgc3VjY2VzPXtpdGVtLnN1Y2Nlc3MgPyBcInN1Y2Nlc1wiIDogXCJmYWlsXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTt9KVxuICAgICAgICB9IFxuICAgICAgICA8UGFnaW5hdGlvbiBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX0+dmlldyBtb3JlPC9QYWdpbmF0aW9uPlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3RMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==