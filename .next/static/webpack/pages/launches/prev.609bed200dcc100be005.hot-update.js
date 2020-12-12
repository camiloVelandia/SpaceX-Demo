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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      page = _useState3[0],
      setPage = _useState3[1];

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
      setpastlaunches(nextPagelaunch);
    });
  }, [page]);

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 12
    }, _this);
  }

  if (!pastlaunches.nextPage) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
        lineNumber: 47,
        columnNumber: 11
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
      onClick: handleNextPage,
      children: "view more"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_s(PastLayout, "n7y4CBRdbx7LIB/pVKv7GyVB00U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXN0TGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhc3RMYXlvdXQiLCJ1c2VTdGF0ZSIsImRvY3MiLCJwYXN0bGF1bmNoZXMiLCJzZXRwYXN0bGF1bmNoZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBhZ2UiLCJzZXRQYWdlIiwidXNlRWZmZWN0IiwiZ2V0UGFzdExhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJoYW5kbGVOZXh0UGFnZSIsInByZXZQYWdlIiwibmV4dFBhZ2VsYXVuY2giLCJ0b3RhbCIsIm5leHRQYWdlIiwibWFwIiwiaXRlbSIsImluZGV4IiwibmFtZSIsImRldGFpbHMiLCJsaW5rcyIsInBhdGNoIiwic21hbGwiLCJmbGlnaHRfbnVtYmVyIiwiZGF0ZV9sb2NhbCIsInN1Y2Nlc3MiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUVpQkMsc0RBQVEsQ0FBQztBQUFDQyxRQUFJLEVBQUM7QUFBTixHQUFELENBRnpCO0FBQUEsTUFFaEJDLFlBRmdCO0FBQUEsTUFFRkMsZUFGRTs7QUFBQSxtQkFHT0gsc0RBQVEsQ0FBQyxLQUFELENBSGY7QUFBQSxNQUdoQkksT0FIZ0I7QUFBQSxNQUdQQyxVQUhPOztBQUFBLG1CQUlDTCxzREFBUSxDQUFDLENBQUQsQ0FKVDtBQUFBLE1BSWhCTSxJQUpnQjtBQUFBLE1BSVZDLE9BSlU7O0FBT3ZCQyx5REFBUyxDQUFDLFlBQU07QUFDZEgsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBSSw2RUFBZSxHQUFHQyxJQUFsQixDQUF1QixVQUFDQyxJQUFELEVBQVU7QUFDL0JSLHFCQUFlLENBQUNRLElBQUQsQ0FBZjtBQUNBSixhQUFPLENBQUNJLElBQUksQ0FBQ0wsSUFBTixDQUFQO0FBQ0FELGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FKRDtBQUtELEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBVUEsTUFBTU8sY0FBYyxHQUFDLFNBQWZBLGNBQWUsR0FBSTtBQUN2QkwsV0FBTyxDQUFDLFVBQUFNLFFBQVE7QUFBQSxhQUFJQSxRQUFRLEdBQUMsQ0FBYjtBQUFBLEtBQVQsQ0FBUDtBQUNELEdBRkQ7O0FBSUFMLHlEQUFTLENBQUMsWUFBSTtBQUNaLFFBQUdGLElBQUksS0FBRyxDQUFWLEVBQVk7QUFDWkcsNkVBQWUsQ0FBQ0gsSUFBRCxDQUFmLENBQ0NJLElBREQsQ0FDTSxVQUFBSSxjQUFjLEVBQUU7QUFDcEIsVUFBTUMsS0FBSyxHQUFFYixZQUFiO0FBQ0FDLHFCQUFlLENBQUVXLGNBQUYsQ0FBZjtBQUNELEtBSkQ7QUFLRCxHQVBRLEVBT1AsQ0FBQ1IsSUFBRCxDQVBPLENBQVQ7O0FBU0EsTUFBSUYsT0FBSixFQUFhO0FBQ1gsd0JBQU8scUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBQ0QsTUFBRyxDQUFDRixZQUFZLENBQUNjLFFBQWpCLEVBQTBCO0FBQ3hCLHdCQUFPLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUNELHNCQUNFLHFFQUFDLCtDQUFEO0FBQUEsZUFDSWQsWUFBWSxDQUFDRCxJQUFiLENBQWtCZ0IsR0FBbEIsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWU7QUFDckMsMEJBQ0UscUVBQUMsaURBQUQ7QUFFRSxhQUFLLEVBQUVELElBQUksQ0FBQ0UsSUFGZDtBQUdFLGNBQU0sRUFBRUYsSUFBSSxDQUFDRyxPQUhmO0FBSUUsYUFBSyxFQUFFSCxJQUFJLENBQUNJLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsS0FKMUI7QUFLRSxjQUFNLEVBQUVOLElBQUksQ0FBQ08sYUFMZjtBQU1FLFlBQUksRUFBRVAsSUFBSSxDQUFDUSxVQU5iO0FBT0UsY0FBTSxFQUFFUixJQUFJLENBQUNTLE9BQUwsR0FBZSxRQUFmLEdBQTBCO0FBUHBDLFNBQ09ULElBQUksQ0FBQ1UsRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFVRyxLQVhILENBREosZUFjSSxxRUFBQyxrREFBRDtBQUFZLGFBQU8sRUFBRWhCLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0F0REQ7O0dBQU1iLFU7O0tBQUFBLFU7QUF3RFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaGVzL3ByZXYuNjA5YmVkMjAwZGNjMTAwYmUwMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhc3RDYXJkIGZyb20gJy4uL1Bhc3RDYXJkJ1xuaW1wb3J0IHtTZWN0aW9uLCBQYWdpbmF0aW9ufSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCBnZXRQYXN0TGF1bmNoZXMgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldFBhc3RMYXVuY2hlc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL1NwaW5uZXJcIjtcblxuY29uc3QgUGFzdExheW91dCA9ICgpID0+IHtcblxuICBjb25zdCBbcGFzdGxhdW5jaGVzLCBzZXRwYXN0bGF1bmNoZXNdID0gdXNlU3RhdGUoe2RvY3M6W119KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBnZXRQYXN0TGF1bmNoZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRwYXN0bGF1bmNoZXMoZGF0YSk7XG4gICAgICBzZXRQYWdlKGRhdGEucGFnZSlcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cblxuICBjb25zdCBoYW5kbGVOZXh0UGFnZT0oKT0+e1xuICAgIHNldFBhZ2UocHJldlBhZ2UgPT4gcHJldlBhZ2UrMSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGlmKHBhZ2U9PT0wKXJldHVyblxuICAgIGdldFBhc3RMYXVuY2hlcyhwYWdlKVxuICAgIC50aGVuKG5leHRQYWdlbGF1bmNoPT57XG4gICAgICBjb25zdCB0b3RhbD0gcGFzdGxhdW5jaGVzXG4gICAgICBzZXRwYXN0bGF1bmNoZXMoIG5leHRQYWdlbGF1bmNoKVxuICAgIH0pXG4gIH0sW3BhZ2VdKVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICB9XG4gIGlmKCFwYXN0bGF1bmNoZXMubmV4dFBhZ2Upe1xuICAgIHJldHVybiA8U3Bpbm5lci8+XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbj5cbiAgICAgICB7cGFzdGxhdW5jaGVzLmRvY3MubWFwKChpdGVtLCBpbmRleCk9PntcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGFzdENhcmRcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICBkZXRhaWw9e2l0ZW0uZGV0YWlsc31cbiAgICAgICAgICAgIGltYWdlPXtpdGVtLmxpbmtzLnBhdGNoLnNtYWxsfVxuICAgICAgICAgICAgbnVtYmVyPXtpdGVtLmZsaWdodF9udW1iZXJ9XG4gICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGVfbG9jYWx9XG4gICAgICAgICAgICBzdWNjZXM9e2l0ZW0uc3VjY2VzcyA/IFwic3VjY2VzXCIgOiBcImZhaWxcIn1cbiAgICAgICAgICAvPlxuICAgICAgICApO30pXG4gICAgICAgIH0gXG4gICAgICAgIDxQYWdpbmF0aW9uIG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfT52aWV3IG1vcmU8L1BhZ2luYXRpb24+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzdExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9