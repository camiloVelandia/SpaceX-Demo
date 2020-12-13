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
    preventDefault();
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
      lineNumber: 42,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Section"], {
      children: [docs.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PastCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: item.name,
          detail: item.details,
          image: item.links.patch.small,
          number: item.flight_number,
          date: item.date_local,
          succes: item.success ? "succes" : "fail"
        }, item.id + 1, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["BtnContainer"], {
        children: [!pastlaunches.nextPage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "no hay mas resultados"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 35
        }, _this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
          onClick: handleNextPage,
          children: "view more"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXN0TGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhc3RMYXlvdXQiLCJ1c2VTdGF0ZSIsImRvY3MiLCJwYXN0bGF1bmNoZXMiLCJzZXRwYXN0bGF1bmNoZXMiLCJzZXRkb2NzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwYWdlIiwic2V0UGFnZSIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJkYXRhIiwiaGFuZGxlTmV4dFBhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZQYWdlIiwibmV4dFBhZ2VsYXVuY2giLCJjb25jYXQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYW1lIiwiZGV0YWlscyIsImxpbmtzIiwicGF0Y2giLCJzbWFsbCIsImZsaWdodF9udW1iZXIiLCJkYXRlX2xvY2FsIiwic3VjY2VzcyIsImlkIiwibmV4dFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBRWlCQyxzREFBUSxDQUFDO0FBQUNDLFFBQUksRUFBQztBQUFOLEdBQUQsQ0FGekI7QUFBQSxNQUVoQkMsWUFGZ0I7QUFBQSxNQUVGQyxlQUZFOztBQUFBLG1CQUdDSCxzREFBUSxDQUFDRSxZQUFZLENBQUNELElBQWQsQ0FIVDtBQUFBLE1BR2hCQSxJQUhnQjtBQUFBLE1BR1ZHLE9BSFU7O0FBQUEsbUJBSU9KLHNEQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJaEJLLE9BSmdCO0FBQUEsTUFJUEMsVUFKTzs7QUFBQSxtQkFLQ04sc0RBQVEsQ0FBQyxDQUFELENBTFQ7QUFBQSxNQUtoQk8sSUFMZ0I7QUFBQSxNQUtWQyxPQUxVOztBQVF2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RILGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUksNkVBQWUsR0FBR0MsSUFBbEIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQy9CVCxxQkFBZSxDQUFDUyxJQUFELENBQWY7QUFDQUosYUFBTyxDQUFDSSxJQUFJLENBQUNMLElBQU4sQ0FBUDtBQUNBRCxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBSkQ7QUFLRCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVVBLE1BQU1PLGNBQWMsR0FBQyxTQUFmQSxjQUFlLEdBQUk7QUFDdkJDLGtCQUFjO0FBQ2ROLFdBQU8sQ0FBQyxVQUFBTyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxHQUFDLENBQWI7QUFBQSxLQUFULENBQVA7QUFDRCxHQUhEOztBQUtBTix5REFBUyxDQUFDLFlBQUk7QUFDWixRQUFHRixJQUFJLEtBQUcsQ0FBVixFQUFZO0FBQ1pILFdBQU8sQ0FBQ0YsWUFBWSxDQUFDRCxJQUFkLENBQVA7QUFDQVMsNkVBQWUsQ0FBQ0gsSUFBRCxDQUFmLENBQ0NJLElBREQsQ0FDTSxVQUFBSyxjQUFjLEVBQUU7QUFDcEJiLHFCQUFlLENBQUVhLGNBQUYsQ0FBZjtBQUNBWixhQUFPLENBQUNILElBQUksQ0FBQ2dCLE1BQUwsQ0FBWUQsY0FBYyxDQUFDZixJQUEzQixDQUFELENBQVA7QUFDRCxLQUpEO0FBS0QsR0FSUSxFQVFQLENBQUNNLElBQUQsQ0FSTyxDQUFUOztBQVdBLE1BQUlGLE9BQUosRUFBYTtBQUNYLHdCQUFPLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsK0NBQUQ7QUFBQSxpQkFDR0osSUFBSSxDQUFDaUIsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN6Qiw0QkFDRSxxRUFBQyxpREFBRDtBQUVFLGVBQUssRUFBRUQsSUFBSSxDQUFDRSxJQUZkO0FBR0UsZ0JBQU0sRUFBRUYsSUFBSSxDQUFDRyxPQUhmO0FBSUUsZUFBSyxFQUFFSCxJQUFJLENBQUNJLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsS0FKMUI7QUFLRSxnQkFBTSxFQUFFTixJQUFJLENBQUNPLGFBTGY7QUFNRSxjQUFJLEVBQUVQLElBQUksQ0FBQ1EsVUFOYjtBQU9FLGdCQUFNLEVBQUVSLElBQUksQ0FBQ1MsT0FBTCxHQUFlLFFBQWYsR0FBMEI7QUFQcEMsV0FDT1QsSUFBSSxDQUFDVSxFQUFMLEdBQVEsQ0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBV0QsT0FaQSxDQURILGVBY0EscUVBQUMsb0RBQUQ7QUFBQSxtQkFDRyxDQUFDM0IsWUFBWSxDQUFDNEIsUUFBZCxnQkFBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXpCLEdBQXdELEVBRDNELGVBRUUscUVBQUMsa0RBQUQ7QUFBWSxpQkFBTyxFQUFFakIsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF1QkQsQ0E3REQ7O0dBQU1kLFU7O0tBQUFBLFU7QUErRFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaGVzL3ByZXYuNTI3MTdmMDYzMmJjYWU1ZmY3ZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhc3RDYXJkIGZyb20gJy4uL1Bhc3RDYXJkJ1xuaW1wb3J0IHtTZWN0aW9uLCBQYWdpbmF0aW9uLCBCdG5Db250YWluZXJ9IGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IGdldFBhc3RMYXVuY2hlcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0UGFzdExhdW5jaGVzXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vU3Bpbm5lclwiO1xuXG5jb25zdCBQYXN0TGF5b3V0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtwYXN0bGF1bmNoZXMsIHNldHBhc3RsYXVuY2hlc10gPSB1c2VTdGF0ZSh7ZG9jczpbXX0pO1xuICBjb25zdCBbZG9jcywgc2V0ZG9jc10gPSB1c2VTdGF0ZShwYXN0bGF1bmNoZXMuZG9jcyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgZ2V0UGFzdExhdW5jaGVzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0cGFzdGxhdW5jaGVzKGRhdGEpO1xuICAgICAgc2V0UGFnZShkYXRhLnBhZ2UpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICBcbiAgXG4gIGNvbnN0IGhhbmRsZU5leHRQYWdlPSgpPT57XG4gICAgcHJldmVudERlZmF1bHQoKVxuICAgIHNldFBhZ2UocHJldlBhZ2UgPT4gcHJldlBhZ2UrMSlcbiAgfVxuICBcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYocGFnZT09PTApcmV0dXJuXG4gICAgc2V0ZG9jcyhwYXN0bGF1bmNoZXMuZG9jcylcbiAgICBnZXRQYXN0TGF1bmNoZXMocGFnZSlcbiAgICAudGhlbihuZXh0UGFnZWxhdW5jaD0+e1xuICAgICAgc2V0cGFzdGxhdW5jaGVzKCBuZXh0UGFnZWxhdW5jaClcbiAgICAgIHNldGRvY3MoZG9jcy5jb25jYXQobmV4dFBhZ2VsYXVuY2guZG9jcykpO1xuICAgIH0pXG4gIH0sW3BhZ2VdKVxuXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICB7ZG9jcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYXN0Q2FyZFxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWQrMX1cbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgZGV0YWlsPXtpdGVtLmRldGFpbHN9XG4gICAgICAgICAgICAgIGltYWdlPXtpdGVtLmxpbmtzLnBhdGNoLnNtYWxsfVxuICAgICAgICAgICAgICBudW1iZXI9e2l0ZW0uZmxpZ2h0X251bWJlcn1cbiAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlX2xvY2FsfVxuICAgICAgICAgICAgICBzdWNjZXM9e2l0ZW0uc3VjY2VzcyA/IFwic3VjY2VzXCIgOiBcImZhaWxcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8QnRuQ29udGFpbmVyPlxuICAgICAgICB7IXBhc3RsYXVuY2hlcy5uZXh0UGFnZSA/IDxwPm5vIGhheSBtYXMgcmVzdWx0YWRvczwvcD4gOiBcIlwifVxuICAgICAgICA8UGFnaW5hdGlvbiBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX0+dmlldyBtb3JlPC9QYWdpbmF0aW9uPlxuICAgICAgPC9CdG5Db250YWluZXI+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXN0TGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=