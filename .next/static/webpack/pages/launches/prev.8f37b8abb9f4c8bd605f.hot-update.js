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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
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
      setpastlaunches(function (pastlaunches) {
        return pastlaunches.docs.concat(nextPagelaunch);
      });
    });
  }, [page]);
  console.log(pastlaunches);

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 12
    }, _this);
  }

  if (!pastlaunches.nextPage) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
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
        lineNumber: 50,
        columnNumber: 11
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
      onClick: handleNextPage,
      children: "view more"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_s(PastLayout, "F3yITxwMOrnOlo5aATo2aN6UptY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXN0TGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhc3RMYXlvdXQiLCJ1c2VTdGF0ZSIsImRvY3MiLCJwYXN0bGF1bmNoZXMiLCJzZXRwYXN0bGF1bmNoZXMiLCJzZXRkb2NzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwYWdlIiwic2V0UGFnZSIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJkYXRhIiwiaGFuZGxlTmV4dFBhZ2UiLCJwcmV2UGFnZSIsIm5leHRQYWdlbGF1bmNoIiwidG90YWwiLCJjb25jYXQiLCJjb25zb2xlIiwibG9nIiwibmV4dFBhZ2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYW1lIiwiZGV0YWlscyIsImxpbmtzIiwicGF0Y2giLCJzbWFsbCIsImZsaWdodF9udW1iZXIiLCJkYXRlX2xvY2FsIiwic3VjY2VzcyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBRWlCQyxzREFBUSxDQUFDO0FBQUNDLFFBQUksRUFBQztBQUFOLEdBQUQsQ0FGekI7QUFBQSxNQUVoQkMsWUFGZ0I7QUFBQSxNQUVGQyxlQUZFOztBQUFBLG1CQUdDSCxzREFBUSxDQUFDLEVBQUQsQ0FIVDtBQUFBLE1BR2hCQyxJQUhnQjtBQUFBLE1BR1ZHLE9BSFU7O0FBQUEsbUJBSU9KLHNEQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJaEJLLE9BSmdCO0FBQUEsTUFJUEMsVUFKTzs7QUFBQSxtQkFLQ04sc0RBQVEsQ0FBQyxDQUFELENBTFQ7QUFBQSxNQUtoQk8sSUFMZ0I7QUFBQSxNQUtWQyxPQUxVOztBQVF2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RILGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUksNkVBQWUsR0FBR0MsSUFBbEIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQy9CVCxxQkFBZSxDQUFDUyxJQUFELENBQWY7QUFDQUosYUFBTyxDQUFDSSxJQUFJLENBQUNMLElBQU4sQ0FBUDtBQUNBRCxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBSkQ7QUFLRCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVVBLE1BQU1PLGNBQWMsR0FBQyxTQUFmQSxjQUFlLEdBQUk7QUFDdkJMLFdBQU8sQ0FBQyxVQUFBTSxRQUFRO0FBQUEsYUFBSUEsUUFBUSxHQUFDLENBQWI7QUFBQSxLQUFULENBQVA7QUFDRCxHQUZEOztBQUlBTCx5REFBUyxDQUFDLFlBQUk7QUFDWixRQUFHRixJQUFJLEtBQUcsQ0FBVixFQUFZO0FBQ1pHLDZFQUFlLENBQUNILElBQUQsQ0FBZixDQUNDSSxJQURELENBQ00sVUFBQUksY0FBYyxFQUFFO0FBQ3BCLFVBQU1DLEtBQUssR0FBRWQsWUFBYjtBQUNBQyxxQkFBZSxDQUFFLFVBQUFELFlBQVk7QUFBQSxlQUFJQSxZQUFZLENBQUNELElBQWIsQ0FBa0JnQixNQUFsQixDQUF5QkYsY0FBekIsQ0FBSjtBQUFBLE9BQWQsQ0FBZjtBQUNELEtBSkQ7QUFLRCxHQVBRLEVBT1AsQ0FBQ1IsSUFBRCxDQVBPLENBQVQ7QUFTQVcsU0FBTyxDQUFDQyxHQUFSLENBQVlqQixZQUFaOztBQUVBLE1BQUlHLE9BQUosRUFBYTtBQUNYLHdCQUFPLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUNELE1BQUcsQ0FBQ0gsWUFBWSxDQUFDa0IsUUFBakIsRUFBMEI7QUFDeEIsd0JBQU8scUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBQ0Qsc0JBQ0UscUVBQUMsK0NBQUQ7QUFBQSxlQUNJbEIsWUFBWSxDQUFDRCxJQUFiLENBQWtCb0IsR0FBbEIsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWU7QUFDckMsMEJBQ0UscUVBQUMsaURBQUQ7QUFFRSxhQUFLLEVBQUVELElBQUksQ0FBQ0UsSUFGZDtBQUdFLGNBQU0sRUFBRUYsSUFBSSxDQUFDRyxPQUhmO0FBSUUsYUFBSyxFQUFFSCxJQUFJLENBQUNJLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsS0FKMUI7QUFLRSxjQUFNLEVBQUVOLElBQUksQ0FBQ08sYUFMZjtBQU1FLFlBQUksRUFBRVAsSUFBSSxDQUFDUSxVQU5iO0FBT0UsY0FBTSxFQUFFUixJQUFJLENBQUNTLE9BQUwsR0FBZSxRQUFmLEdBQTBCO0FBUHBDLFNBQ09ULElBQUksQ0FBQ1UsRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFVRyxLQVhILENBREosZUFjSSxxRUFBQyxrREFBRDtBQUFZLGFBQU8sRUFBRW5CLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0F6REQ7O0dBQU1kLFU7O0tBQUFBLFU7QUEyRFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaGVzL3ByZXYuOGYzN2I4YWJiOWY0YzhiZDYwNWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhc3RDYXJkIGZyb20gJy4uL1Bhc3RDYXJkJ1xuaW1wb3J0IHtTZWN0aW9uLCBQYWdpbmF0aW9ufSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCBnZXRQYXN0TGF1bmNoZXMgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldFBhc3RMYXVuY2hlc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL1NwaW5uZXJcIjtcblxuY29uc3QgUGFzdExheW91dCA9ICgpID0+IHtcblxuICBjb25zdCBbcGFzdGxhdW5jaGVzLCBzZXRwYXN0bGF1bmNoZXNdID0gdXNlU3RhdGUoe2RvY3M6W119KTtcbiAgY29uc3QgW2RvY3MsIHNldGRvY3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGdldFBhc3RMYXVuY2hlcygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldHBhc3RsYXVuY2hlcyhkYXRhKTtcbiAgICAgIHNldFBhZ2UoZGF0YS5wYWdlKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuXG4gIGNvbnN0IGhhbmRsZU5leHRQYWdlPSgpPT57XG4gICAgc2V0UGFnZShwcmV2UGFnZSA9PiBwcmV2UGFnZSsxKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYocGFnZT09PTApcmV0dXJuXG4gICAgZ2V0UGFzdExhdW5jaGVzKHBhZ2UpXG4gICAgLnRoZW4obmV4dFBhZ2VsYXVuY2g9PntcbiAgICAgIGNvbnN0IHRvdGFsPSBwYXN0bGF1bmNoZXNcbiAgICAgIHNldHBhc3RsYXVuY2hlcyggcGFzdGxhdW5jaGVzID0+IHBhc3RsYXVuY2hlcy5kb2NzLmNvbmNhdChuZXh0UGFnZWxhdW5jaCkpXG4gICAgfSlcbiAgfSxbcGFnZV0pXG5cbiAgY29uc29sZS5sb2cocGFzdGxhdW5jaGVzKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgfVxuICBpZighcGFzdGxhdW5jaGVzLm5leHRQYWdlKXtcbiAgICByZXR1cm4gPFNwaW5uZXIvPlxuICB9XG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICAge3Bhc3RsYXVuY2hlcy5kb2NzLm1hcCgoaXRlbSwgaW5kZXgpPT57XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFBhc3RDYXJkXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgZGV0YWlsPXtpdGVtLmRldGFpbHN9XG4gICAgICAgICAgICBpbWFnZT17aXRlbS5saW5rcy5wYXRjaC5zbWFsbH1cbiAgICAgICAgICAgIG51bWJlcj17aXRlbS5mbGlnaHRfbnVtYmVyfVxuICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlX2xvY2FsfVxuICAgICAgICAgICAgc3VjY2VzPXtpdGVtLnN1Y2Nlc3MgPyBcInN1Y2Nlc1wiIDogXCJmYWlsXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTt9KVxuICAgICAgICB9IFxuICAgICAgICA8UGFnaW5hdGlvbiBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX0+dmlldyBtb3JlPC9QYWdpbmF0aW9uPlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3RMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==