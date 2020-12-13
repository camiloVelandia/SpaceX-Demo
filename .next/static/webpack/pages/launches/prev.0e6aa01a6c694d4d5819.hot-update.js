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
          lineNumber: 49,
          columnNumber: 11
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
        onClick: handleNextPage,
        children: "view more"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }, _this), !pastlaunches.nextPage ? 'sdf' : '']
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXN0TGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhc3RMYXlvdXQiLCJ1c2VTdGF0ZSIsImRvY3MiLCJwYXN0bGF1bmNoZXMiLCJzZXRwYXN0bGF1bmNoZXMiLCJzZXRkb2NzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwYWdlIiwic2V0UGFnZSIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJkYXRhIiwiaGFuZGxlTmV4dFBhZ2UiLCJwcmV2UGFnZSIsIm5leHRQYWdlbGF1bmNoIiwiY29uY2F0IiwibWFwIiwiaXRlbSIsImluZGV4IiwibmFtZSIsImRldGFpbHMiLCJsaW5rcyIsInBhdGNoIiwic21hbGwiLCJmbGlnaHRfbnVtYmVyIiwiZGF0ZV9sb2NhbCIsInN1Y2Nlc3MiLCJpZCIsIm5leHRQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUVpQkMsc0RBQVEsQ0FBQztBQUFDQyxRQUFJLEVBQUM7QUFBTixHQUFELENBRnpCO0FBQUEsTUFFaEJDLFlBRmdCO0FBQUEsTUFFRkMsZUFGRTs7QUFBQSxtQkFHQ0gsc0RBQVEsQ0FBQ0UsWUFBWSxDQUFDRCxJQUFkLENBSFQ7QUFBQSxNQUdoQkEsSUFIZ0I7QUFBQSxNQUdWRyxPQUhVOztBQUFBLG1CQUlPSixzREFBUSxDQUFDLEtBQUQsQ0FKZjtBQUFBLE1BSWhCSyxPQUpnQjtBQUFBLE1BSVBDLFVBSk87O0FBQUEsbUJBS0NOLHNEQUFRLENBQUMsQ0FBRCxDQUxUO0FBQUEsTUFLaEJPLElBTGdCO0FBQUEsTUFLVkMsT0FMVTs7QUFRdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkSCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FJLDZFQUFlLEdBQUdDLElBQWxCLENBQXVCLFVBQUNDLElBQUQsRUFBVTtBQUMvQlQscUJBQWUsQ0FBQ1MsSUFBRCxDQUFmO0FBQ0FKLGFBQU8sQ0FBQ0ksSUFBSSxDQUFDTCxJQUFOLENBQVA7QUFDQUQsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxLQUpEO0FBS0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFVQSxNQUFNTyxjQUFjLEdBQUMsU0FBZkEsY0FBZSxHQUFJO0FBQ3ZCTCxXQUFPLENBQUMsVUFBQU0sUUFBUTtBQUFBLGFBQUlBLFFBQVEsR0FBQyxDQUFiO0FBQUEsS0FBVCxDQUFQO0FBQ0QsR0FGRDs7QUFJQUwseURBQVMsQ0FBQyxZQUFJO0FBQ1osUUFBR0YsSUFBSSxLQUFHLENBQVYsRUFBWTtBQUNaSCxXQUFPLENBQUNGLFlBQVksQ0FBQ0QsSUFBZCxDQUFQO0FBQ0FTLDZFQUFlLENBQUNILElBQUQsQ0FBZixDQUNDSSxJQURELENBQ00sVUFBQUksY0FBYyxFQUFFO0FBQ3BCWixxQkFBZSxDQUFFWSxjQUFGLENBQWY7QUFDQVgsYUFBTyxDQUFDSCxJQUFJLENBQUNlLE1BQUwsQ0FBWUQsY0FBYyxDQUFDZCxJQUEzQixDQUFELENBQVA7QUFDRCxLQUpEO0FBS0QsR0FSUSxFQVFQLENBQUNNLElBQUQsQ0FSTyxDQUFUOztBQVdBLE1BQUlGLE9BQUosRUFBYTtBQUNYLHdCQUFPLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0EscUVBQUMsK0NBQUQ7QUFBQSxpQkFDSUosSUFBSSxDQUFDZ0IsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFlO0FBQ3hCLDRCQUNFLHFFQUFDLGlEQUFEO0FBRUUsZUFBSyxFQUFFRCxJQUFJLENBQUNFLElBRmQ7QUFHRSxnQkFBTSxFQUFFRixJQUFJLENBQUNHLE9BSGY7QUFJRSxlQUFLLEVBQUVILElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxLQUoxQjtBQUtFLGdCQUFNLEVBQUVOLElBQUksQ0FBQ08sYUFMZjtBQU1FLGNBQUksRUFBRVAsSUFBSSxDQUFDUSxVQU5iO0FBT0UsZ0JBQU0sRUFBRVIsSUFBSSxDQUFDUyxPQUFMLEdBQWUsUUFBZixHQUEwQjtBQVBwQyxXQUNPVCxJQUFJLENBQUNVLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVVHLE9BWEgsQ0FESixlQWNJLHFFQUFDLGtEQUFEO0FBQVksZUFBTyxFQUFFZixjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLEVBaUJLLENBQUNYLFlBQVksQ0FBQzJCLFFBQWQsR0FBeUIsS0FBekIsR0FBaUMsRUFqQnRDO0FBQUEsa0JBREY7QUFxQkQsQ0ExREQ7O0dBQU05QixVOztLQUFBQSxVO0FBNERTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYXVuY2hlcy9wcmV2LjBlNmFhMDFhNmM2OTRkNGQ1ODE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYXN0Q2FyZCBmcm9tICcuLi9QYXN0Q2FyZCdcbmltcG9ydCB7U2VjdGlvbiwgUGFnaW5hdGlvbn0gZnJvbSAnLi9zdHlsZXMnXG5pbXBvcnQgZ2V0UGFzdExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRQYXN0TGF1bmNoZXNcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9TcGlubmVyXCI7XG5cbmNvbnN0IFBhc3RMYXlvdXQgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3Bhc3RsYXVuY2hlcywgc2V0cGFzdGxhdW5jaGVzXSA9IHVzZVN0YXRlKHtkb2NzOltdfSk7XG4gIGNvbnN0IFtkb2NzLCBzZXRkb2NzXSA9IHVzZVN0YXRlKHBhc3RsYXVuY2hlcy5kb2NzKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBnZXRQYXN0TGF1bmNoZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRwYXN0bGF1bmNoZXMoZGF0YSk7XG4gICAgICBzZXRQYWdlKGRhdGEucGFnZSlcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIFxuICBcbiAgY29uc3QgaGFuZGxlTmV4dFBhZ2U9KCk9PntcbiAgICBzZXRQYWdlKHByZXZQYWdlID0+IHByZXZQYWdlKzEpXG4gIH1cbiAgXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGlmKHBhZ2U9PT0wKXJldHVyblxuICAgIHNldGRvY3MocGFzdGxhdW5jaGVzLmRvY3MpXG4gICAgZ2V0UGFzdExhdW5jaGVzKHBhZ2UpXG4gICAgLnRoZW4obmV4dFBhZ2VsYXVuY2g9PntcbiAgICAgIHNldHBhc3RsYXVuY2hlcyggbmV4dFBhZ2VsYXVuY2gpXG4gICAgICBzZXRkb2NzKGRvY3MuY29uY2F0KG5leHRQYWdlbGF1bmNoLmRvY3MpKTtcbiAgICB9KVxuICB9LFtwYWdlXSlcblxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPFNlY3Rpb24+XG4gICAgICAge2RvY3MubWFwKChpdGVtLCBpbmRleCk9PntcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGFzdENhcmRcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICBkZXRhaWw9e2l0ZW0uZGV0YWlsc31cbiAgICAgICAgICAgIGltYWdlPXtpdGVtLmxpbmtzLnBhdGNoLnNtYWxsfVxuICAgICAgICAgICAgbnVtYmVyPXtpdGVtLmZsaWdodF9udW1iZXJ9XG4gICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGVfbG9jYWx9XG4gICAgICAgICAgICBzdWNjZXM9e2l0ZW0uc3VjY2VzcyA/IFwic3VjY2VzXCIgOiBcImZhaWxcIn1cbiAgICAgICAgICAvPlxuICAgICAgICApO30pXG4gICAgICAgIH0gXG4gICAgICAgIDxQYWdpbmF0aW9uIG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfT52aWV3IG1vcmU8L1BhZ2luYXRpb24+XG4gICAgPC9TZWN0aW9uPlxuICAgICAgICB7IXBhc3RsYXVuY2hlcy5uZXh0UGFnZSA/ICdzZGYnIDogJycgfVxuICAgICAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3RMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==