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
  }, [pastlaunches]);

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
    children: [pastlaunches.docs.map(function (item, index) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXN0TGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhc3RMYXlvdXQiLCJ1c2VTdGF0ZSIsImRvY3MiLCJwYXN0bGF1bmNoZXMiLCJzZXRwYXN0bGF1bmNoZXMiLCJzZXRkb2NzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwYWdlIiwic2V0UGFnZSIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJkYXRhIiwiaGFuZGxlTmV4dFBhZ2UiLCJwcmV2UGFnZSIsIm5leHRQYWdlbGF1bmNoIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwibmV4dFBhZ2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYW1lIiwiZGV0YWlscyIsImxpbmtzIiwicGF0Y2giLCJzbWFsbCIsImZsaWdodF9udW1iZXIiLCJkYXRlX2xvY2FsIiwic3VjY2VzcyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBRWlCQyxzREFBUSxDQUFDO0FBQUNDLFFBQUksRUFBQztBQUFOLEdBQUQsQ0FGekI7QUFBQSxNQUVoQkMsWUFGZ0I7QUFBQSxNQUVGQyxlQUZFOztBQUFBLG1CQUdDSCxzREFBUSxDQUFDRSxZQUFZLENBQUNELElBQWQsQ0FIVDtBQUFBLE1BR2hCQSxJQUhnQjtBQUFBLE1BR1ZHLE9BSFU7O0FBQUEsbUJBSU9KLHNEQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJaEJLLE9BSmdCO0FBQUEsTUFJUEMsVUFKTzs7QUFBQSxtQkFLQ04sc0RBQVEsQ0FBQyxDQUFELENBTFQ7QUFBQSxNQUtoQk8sSUFMZ0I7QUFBQSxNQUtWQyxPQUxVOztBQVF2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RILGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUksNkVBQWUsR0FBR0MsSUFBbEIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQy9CVCxxQkFBZSxDQUFDUyxJQUFELENBQWY7QUFDQVIsYUFBTyxDQUFDRixZQUFZLENBQUNELElBQWQsQ0FBUDtBQUNBTyxhQUFPLENBQUNJLElBQUksQ0FBQ0wsSUFBTixDQUFQO0FBQ0FELGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FMRDtBQU1ELEdBUlEsRUFRTixDQUFDSixZQUFELENBUk0sQ0FBVDs7QUFXQSxNQUFNVyxjQUFjLEdBQUMsU0FBZkEsY0FBZSxHQUFJO0FBQ3ZCTCxXQUFPLENBQUMsVUFBQU0sUUFBUTtBQUFBLGFBQUlBLFFBQVEsR0FBQyxDQUFiO0FBQUEsS0FBVCxDQUFQO0FBQ0QsR0FGRDs7QUFJQUwseURBQVMsQ0FBQyxZQUFJO0FBQ1osUUFBR0YsSUFBSSxLQUFHLENBQVYsRUFBWTtBQUNaRyw2RUFBZSxDQUFDSCxJQUFELENBQWYsQ0FDQ0ksSUFERCxDQUNNLFVBQUFJLGNBQWMsRUFBRTtBQUNwQixVQUFNQyxLQUFLLEdBQUVkLFlBQWI7QUFDQUMscUJBQWUsQ0FBRVksY0FBRixDQUFmO0FBQ0QsS0FKRDtBQUtELEdBUFEsRUFPUCxDQUFDUixJQUFELENBUE8sQ0FBVDtBQVNBVSxTQUFPLENBQUNDLEdBQVIsQ0FBWWpCLElBQVo7O0FBRUEsTUFBSUksT0FBSixFQUFhO0FBQ1gsd0JBQU8scUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBQ0QsTUFBRyxDQUFDSCxZQUFZLENBQUNpQixRQUFqQixFQUEwQjtBQUN4Qix3QkFBTyxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFDRCxzQkFDRSxxRUFBQywrQ0FBRDtBQUFBLGVBQ0lqQixZQUFZLENBQUNELElBQWIsQ0FBa0JtQixHQUFsQixDQUFzQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBZTtBQUNyQywwQkFDRSxxRUFBQyxpREFBRDtBQUVFLGFBQUssRUFBRUQsSUFBSSxDQUFDRSxJQUZkO0FBR0UsY0FBTSxFQUFFRixJQUFJLENBQUNHLE9BSGY7QUFJRSxhQUFLLEVBQUVILElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxLQUoxQjtBQUtFLGNBQU0sRUFBRU4sSUFBSSxDQUFDTyxhQUxmO0FBTUUsWUFBSSxFQUFFUCxJQUFJLENBQUNRLFVBTmI7QUFPRSxjQUFNLEVBQUVSLElBQUksQ0FBQ1MsT0FBTCxHQUFlLFFBQWYsR0FBMEI7QUFQcEMsU0FDT1QsSUFBSSxDQUFDVSxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVVHLEtBWEgsQ0FESixlQWNJLHFFQUFDLGtEQUFEO0FBQVksYUFBTyxFQUFFbEIsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQTFERDs7R0FBTWQsVTs7S0FBQUEsVTtBQTREU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGF1bmNoZXMvcHJldi41Yjc5MTA1OGZlNWRkZGJhYjgwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFzdENhcmQgZnJvbSAnLi4vUGFzdENhcmQnXG5pbXBvcnQge1NlY3Rpb24sIFBhZ2luYXRpb259IGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IGdldFBhc3RMYXVuY2hlcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0UGFzdExhdW5jaGVzXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vU3Bpbm5lclwiO1xuXG5jb25zdCBQYXN0TGF5b3V0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtwYXN0bGF1bmNoZXMsIHNldHBhc3RsYXVuY2hlc10gPSB1c2VTdGF0ZSh7ZG9jczpbXX0pO1xuICBjb25zdCBbZG9jcywgc2V0ZG9jc10gPSB1c2VTdGF0ZShwYXN0bGF1bmNoZXMuZG9jcyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgZ2V0UGFzdExhdW5jaGVzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0cGFzdGxhdW5jaGVzKGRhdGEpO1xuICAgICAgc2V0ZG9jcyhwYXN0bGF1bmNoZXMuZG9jcylcbiAgICAgIHNldFBhZ2UoZGF0YS5wYWdlKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH0sIFtwYXN0bGF1bmNoZXNdKTtcblxuXG4gIGNvbnN0IGhhbmRsZU5leHRQYWdlPSgpPT57XG4gICAgc2V0UGFnZShwcmV2UGFnZSA9PiBwcmV2UGFnZSsxKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYocGFnZT09PTApcmV0dXJuXG4gICAgZ2V0UGFzdExhdW5jaGVzKHBhZ2UpXG4gICAgLnRoZW4obmV4dFBhZ2VsYXVuY2g9PntcbiAgICAgIGNvbnN0IHRvdGFsPSBwYXN0bGF1bmNoZXNcbiAgICAgIHNldHBhc3RsYXVuY2hlcyggbmV4dFBhZ2VsYXVuY2gpXG4gICAgfSlcbiAgfSxbcGFnZV0pXG5cbiAgY29uc29sZS5sb2coZG9jcyk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gIH1cbiAgaWYoIXBhc3RsYXVuY2hlcy5uZXh0UGFnZSl7XG4gICAgcmV0dXJuIDxTcGlubmVyLz5cbiAgfVxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uPlxuICAgICAgIHtwYXN0bGF1bmNoZXMuZG9jcy5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQYXN0Q2FyZFxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIGRldGFpbD17aXRlbS5kZXRhaWxzfVxuICAgICAgICAgICAgaW1hZ2U9e2l0ZW0ubGlua3MucGF0Y2guc21hbGx9XG4gICAgICAgICAgICBudW1iZXI9e2l0ZW0uZmxpZ2h0X251bWJlcn1cbiAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZV9sb2NhbH1cbiAgICAgICAgICAgIHN1Y2Nlcz17aXRlbS5zdWNjZXNzID8gXCJzdWNjZXNcIiA6IFwiZmFpbFwifVxuICAgICAgICAgIC8+XG4gICAgICAgICk7fSlcbiAgICAgICAgfSBcbiAgICAgICAgPFBhZ2luYXRpb24gb25DbGljaz17aGFuZGxlTmV4dFBhZ2V9PnZpZXcgbW9yZTwvUGFnaW5hdGlvbj5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXN0TGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=