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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(pastlaunches.page),
      page = _useState3[0],
      setPage = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
    Object(_services_getPastLaunches__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (data) {
      setpastlaunches(data);
      setLoading(false);
    });
  }, []);
  console.log(pastlaunches.page + 'asd');
  console.log(page);

  var handleNextPage = function handleNextPage() {// setPage(prevPage => prevPage+1)
  }; // useEffect(()=>{
  //   if(page===0)return
  //   getPastLaunches(page)
  //   .then(nextlaunch=>{
  //     setpastlaunches(prevLaunches=> prevLaunches.concat(nextlaunch))
  //   })
  // },[page])


  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
        lineNumber: 46,
        columnNumber: 11
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: handleNextPage,
      children: "view more"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_s(PastLayout, "JWtAoKenYvKWfhLfW5YMYyV0Rwk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXN0TGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhc3RMYXlvdXQiLCJ1c2VTdGF0ZSIsImRvY3MiLCJwYXN0bGF1bmNoZXMiLCJzZXRwYXN0bGF1bmNoZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBhZ2UiLCJzZXRQYWdlIiwidXNlRWZmZWN0IiwiZ2V0UGFzdExhdW5jaGVzIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTmV4dFBhZ2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYW1lIiwiZGV0YWlscyIsImxpbmtzIiwicGF0Y2giLCJzbWFsbCIsImZsaWdodF9udW1iZXIiLCJkYXRlX2xvY2FsIiwic3VjY2VzcyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBRWlCQyxzREFBUSxDQUFDO0FBQUNDLFFBQUksRUFBQztBQUFOLEdBQUQsQ0FGekI7QUFBQSxNQUVoQkMsWUFGZ0I7QUFBQSxNQUVGQyxlQUZFOztBQUFBLG1CQUdPSCxzREFBUSxDQUFDLEtBQUQsQ0FIZjtBQUFBLE1BR2hCSSxPQUhnQjtBQUFBLE1BR1BDLFVBSE87O0FBQUEsbUJBSUNMLHNEQUFRLENBQUNFLFlBQVksQ0FBQ0ksSUFBZCxDQUpUO0FBQUEsTUFJaEJBLElBSmdCO0FBQUEsTUFJVkMsT0FKVTs7QUFPdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkSCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FJLDZFQUFlLEdBQUdDLElBQWxCLENBQXVCLFVBQUNDLElBQUQsRUFBVTtBQUMvQlIscUJBQWUsQ0FBQ1EsSUFBRCxDQUFmO0FBQ0FOLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FIRDtBQUlELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFVRU8sU0FBTyxDQUFDQyxHQUFSLENBQVlYLFlBQVksQ0FBQ0ksSUFBYixHQUFvQixLQUFoQztBQUNBTSxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBWjs7QUFFRixNQUFNUSxjQUFjLEdBQUMsU0FBZkEsY0FBZSxHQUFJLENBQ3ZCO0FBQ0QsR0FGRCxDQXBCdUIsQ0F3QnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFJVixPQUFKLEVBQWE7QUFDWCx3QkFBTyxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFDRCxzQkFDRSxxRUFBQywrQ0FBRDtBQUFBLGVBQ0lGLFlBQVksQ0FBQ0QsSUFBYixDQUFrQmMsR0FBbEIsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWU7QUFDckMsMEJBQ0UscUVBQUMsaURBQUQ7QUFFRSxhQUFLLEVBQUVELElBQUksQ0FBQ0UsSUFGZDtBQUdFLGNBQU0sRUFBRUYsSUFBSSxDQUFDRyxPQUhmO0FBSUUsYUFBSyxFQUFFSCxJQUFJLENBQUNJLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsS0FKMUI7QUFLRSxjQUFNLEVBQUVOLElBQUksQ0FBQ08sYUFMZjtBQU1FLFlBQUksRUFBRVAsSUFBSSxDQUFDUSxVQU5iO0FBT0UsY0FBTSxFQUFFUixJQUFJLENBQUNTLE9BQUwsR0FBZSxRQUFmLEdBQTBCO0FBUHBDLFNBQ09ULElBQUksQ0FBQ1UsRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFVRyxLQVhILENBREosZUFjSTtBQUFRLGFBQU8sRUFBRVosY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQXJERDs7R0FBTWYsVTs7S0FBQUEsVTtBQXVEU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGF1bmNoZXMvcHJldi5jNjYyOTNkMWQ2ZTYwMGJiY2FlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFzdENhcmQgZnJvbSAnLi4vUGFzdENhcmQnXG5pbXBvcnQge1NlY3Rpb259IGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IGdldFBhc3RMYXVuY2hlcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0UGFzdExhdW5jaGVzXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vU3Bpbm5lclwiO1xuXG5jb25zdCBQYXN0TGF5b3V0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtwYXN0bGF1bmNoZXMsIHNldHBhc3RsYXVuY2hlc10gPSB1c2VTdGF0ZSh7ZG9jczpbXX0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKHBhc3RsYXVuY2hlcy5wYWdlKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBnZXRQYXN0TGF1bmNoZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRwYXN0bGF1bmNoZXMoZGF0YSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIFxuXG4gICAgY29uc29sZS5sb2cocGFzdGxhdW5jaGVzLnBhZ2UgKyAnYXNkJyk7XG4gICAgY29uc29sZS5sb2cocGFnZSk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dFBhZ2U9KCk9PntcbiAgICAvLyBzZXRQYWdlKHByZXZQYWdlID0+IHByZXZQYWdlKzEpXG4gIH1cblxuICAvLyB1c2VFZmZlY3QoKCk9PntcbiAgLy8gICBpZihwYWdlPT09MClyZXR1cm5cbiAgLy8gICBnZXRQYXN0TGF1bmNoZXMocGFnZSlcbiAgLy8gICAudGhlbihuZXh0bGF1bmNoPT57XG4gIC8vICAgICBzZXRwYXN0bGF1bmNoZXMocHJldkxhdW5jaGVzPT4gcHJldkxhdW5jaGVzLmNvbmNhdChuZXh0bGF1bmNoKSlcbiAgLy8gICB9KVxuICAvLyB9LFtwYWdlXSlcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uPlxuICAgICAgIHtwYXN0bGF1bmNoZXMuZG9jcy5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQYXN0Q2FyZFxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIGRldGFpbD17aXRlbS5kZXRhaWxzfVxuICAgICAgICAgICAgaW1hZ2U9e2l0ZW0ubGlua3MucGF0Y2guc21hbGx9XG4gICAgICAgICAgICBudW1iZXI9e2l0ZW0uZmxpZ2h0X251bWJlcn1cbiAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZV9sb2NhbH1cbiAgICAgICAgICAgIHN1Y2Nlcz17aXRlbS5zdWNjZXNzID8gXCJzdWNjZXNcIiA6IFwiZmFpbFwifVxuICAgICAgICAgIC8+XG4gICAgICAgICk7fSlcbiAgICAgICAgfSBcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX0+dmlldyBtb3JlPC9idXR0b24+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzdExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9