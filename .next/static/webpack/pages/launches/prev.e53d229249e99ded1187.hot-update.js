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
    setdocs(pastlaunches.docs);
    Object(_services_getPastLaunches__WEBPACK_IMPORTED_MODULE_4__["default"])(page).then(function (nextPagelaunch) {
      setpastlaunches(nextPagelaunch);
      setdocs(docs.concat(nextPagelaunch.docs));
    });
  }, [page]);

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
      children: docs.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PastCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: item.name,
          detail: item.details,
          image: item.links.patch.small,
          number: item.flight_number,
          date: item.date_local,
          succes: item.success ? "succes" : "fail"
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["BtnContainer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
        onClick: handleNextPage,
        children: "view more"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, _this), !pastlaunches.nextPage ? 'no hay mas resultados' : '']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
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

/***/ }),

/***/ "./components/PastLayout/styles.js":
/*!*****************************************!*\
  !*** ./components/PastLayout/styles.js ***!
  \*****************************************/
/*! exports provided: Section, BtnContainer, Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnContainer", function() { return BtnContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "styles__Section",
  componentId: "sc-1kw0mqr-0"
})(["width:80%;margin:0 auto;margin-top:180px;margin-bottom:70px;display:flex;justify-content:space-between;flex-wrap:wrap;"]);
var BtnContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "styles__BtnContainer",
  componentId: "sc-1kw0mqr-1"
})(["width:80%;margin:0 auto;margin-bottom:120px;display:flex;flex-direction:column;align-items:center;"]);
var Pagination = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "styles__Pagination",
  componentId: "sc-1kw0mqr-2"
})(["margin:0 auto;margin-top:70px;box-sizing:border-box;appearance:none;background-color:transparent;border:2px solid ", ";border-radius:0.6em;color:", ";cursor:pointer;display:flex;align-self:center;font-size:1rem;font-weight:400;line-height:1;padding:1.2em 2.8em;text-decoration:none;text-align:center;text-transform:uppercase;font-family:sans-serif;font-weight:700;border-color:", ";box-shadow:0 0 40px 40px ", " inset,0 0 0 0 ", ";transition:all 150ms ease-in-out;&:hover,&:focus{color:", ";outline:0;box-shadow:0 0 10px 0 white inset,0 0 10px 4px white;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.text;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.body;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.text;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.text;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.text;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.text;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXN0TGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bhc3RMYXlvdXQvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIlBhc3RMYXlvdXQiLCJ1c2VTdGF0ZSIsImRvY3MiLCJwYXN0bGF1bmNoZXMiLCJzZXRwYXN0bGF1bmNoZXMiLCJzZXRkb2NzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwYWdlIiwic2V0UGFnZSIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJkYXRhIiwiaGFuZGxlTmV4dFBhZ2UiLCJwcmV2UGFnZSIsIm5leHRQYWdlbGF1bmNoIiwiY29uY2F0IiwibWFwIiwiaXRlbSIsImluZGV4IiwibmFtZSIsImRldGFpbHMiLCJsaW5rcyIsInBhdGNoIiwic21hbGwiLCJmbGlnaHRfbnVtYmVyIiwiZGF0ZV9sb2NhbCIsInN1Y2Nlc3MiLCJpZCIsIm5leHRQYWdlIiwiU2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJCdG5Db250YWluZXIiLCJQYWdpbmF0aW9uIiwiYnV0dG9uIiwidGhlbWUiLCJ0ZXh0IiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFFaUJDLHNEQUFRLENBQUM7QUFBQ0MsUUFBSSxFQUFDO0FBQU4sR0FBRCxDQUZ6QjtBQUFBLE1BRWhCQyxZQUZnQjtBQUFBLE1BRUZDLGVBRkU7O0FBQUEsbUJBR0NILHNEQUFRLENBQUNFLFlBQVksQ0FBQ0QsSUFBZCxDQUhUO0FBQUEsTUFHaEJBLElBSGdCO0FBQUEsTUFHVkcsT0FIVTs7QUFBQSxtQkFJT0osc0RBQVEsQ0FBQyxLQUFELENBSmY7QUFBQSxNQUloQkssT0FKZ0I7QUFBQSxNQUlQQyxVQUpPOztB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ckI7QUFBQSxDQU5DLEVBUVo7QUFBQSxNQUFHRCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNFLElBQXJCO0FBQUEsQ0FSWSxFQXFCTDtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsSUFBckI7QUFBQSxDQXJCSyxFQXNCTztBQUFBLE1BQUdELEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsSUFBckI7QUFBQSxDQXRCUCxFQXVCVDtBQUFBLE1BQUdELEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsSUFBckI7QUFBQSxDQXZCUyxFQTJCVjtBQUFBLE1BQUdELEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsSUFBckI7QUFBQSxDQTNCVSxDQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYXVuY2hlcy9wcmV2LmU1M2QyMjkyNDllOTlkZWQxMTg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYXN0Q2FyZCBmcm9tICcuLi9QYXN0Q2FyZCdcbmltcG9ydCB7U2VjdGlvbiwgUGFnaW5hdGlvbiwgQnRuQ29udGFpbmVyfSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCBnZXRQYXN0TGF1bmNoZXMgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldFBhc3RMYXVuY2hlc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL1NwaW5uZXJcIjtcblxuY29uc3QgUGFzdExheW91dCA9ICgpID0+IHtcblxuICBjb25zdCBbcGFzdGxhdW5jaGVzLCBzZXRwYXN0bGF1bmNoZXNdID0gdXNlU3RhdGUoe2RvY3M6W119KTtcbiAgY29uc3QgW2RvY3MsIHNldGRvY3NdID0gdXNlU3RhdGUocGFzdGxhdW5jaGVzLmRvY3MpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGdldFBhc3RMYXVuY2hlcygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldHBhc3RsYXVuY2hlcyhkYXRhKTtcbiAgICAgIHNldFBhZ2UoZGF0YS5wYWdlKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgXG4gIFxuICBjb25zdCBoYW5kbGVOZXh0UGFnZT0oKT0+e1xuICAgIHNldFBhZ2UocHJldlBhZ2UgPT4gcHJldlBhZ2UrMSlcbiAgfVxuICBcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYocGFnZT09PTApcmV0dXJuXG4gICAgc2V0ZG9jcyhwYXN0bGF1bmNoZXMuZG9jcylcbiAgICBnZXRQYXN0TGF1bmNoZXMocGFnZSlcbiAgICAudGhlbihuZXh0UGFnZWxhdW5jaD0+e1xuICAgICAgc2V0cGFzdGxhdW5jaGVzKCBuZXh0UGFnZWxhdW5jaClcbiAgICAgIHNldGRvY3MoZG9jcy5jb25jYXQobmV4dFBhZ2VsYXVuY2guZG9jcykpO1xuICAgIH0pXG4gIH0sW3BhZ2VdKVxuXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8U2VjdGlvbj5cbiAgICAgICB7ZG9jcy5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQYXN0Q2FyZFxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIGRldGFpbD17aXRlbS5kZXRhaWxzfVxuICAgICAgICAgICAgaW1hZ2U9e2l0ZW0ubGlua3MucGF0Y2guc21hbGx9XG4gICAgICAgICAgICBudW1iZXI9e2l0ZW0uZmxpZ2h0X251bWJlcn1cbiAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZV9sb2NhbH1cbiAgICAgICAgICAgIHN1Y2Nlcz17aXRlbS5zdWNjZXNzID8gXCJzdWNjZXNcIiA6IFwiZmFpbFwifVxuICAgICAgICAgIC8+XG4gICAgICAgICk7fSlcbiAgICAgICAgfSBcbiAgICA8L1NlY3Rpb24+XG4gICAgPEJ0bkNvbnRhaW5lcj5cbiAgICA8UGFnaW5hdGlvbiBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX0+dmlldyBtb3JlPC9QYWdpbmF0aW9uPlxuICAgIHshcGFzdGxhdW5jaGVzLm5leHRQYWdlID8gJ25vIGhheSBtYXMgcmVzdWx0YWRvcycgOiAnJyB9XG4gICAgPC9CdG5Db250YWluZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXN0TGF5b3V0OyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxODBweDtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOndyYXA7XG4gIFxuYDtcbmV4cG9ydCBjb25zdCBCdG5Db250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcblxuYDtcbmV4cG9ydCBjb25zdCBQYWdpbmF0aW9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICBib3JkZXItcmFkaXVzOiAwLjZlbTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9keX07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBwYWRkaW5nOiAxLjJlbSAyLjhlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fSBpbnNldCxcbiAgICAwIDAgMCAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHdoaXRlIGluc2V0LCAwIDAgMTBweCA0cHggd2hpdGU7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9