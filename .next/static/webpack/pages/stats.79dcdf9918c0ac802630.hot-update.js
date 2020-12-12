webpackHotUpdate_N_E("pages/stats",{

/***/ "./components/GridStats/index.js":
/*!***************************************!*\
  !*** ./components/GridStats/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/getPastLaunchesNP */ "./services/getPastLaunchesNP.js");
/* harmony import */ var _services_getPayload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getPayload */ "./services/getPayload.js");
/* harmony import */ var _StatCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StatCard */ "./components/StatCard/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/GridStats/styles.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/GridStats/index.js",
    _this = undefined,
    _s = $RefreshSig$();







var GridStats = function GridStats() {
  _s();

  var dataStarlink = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [{
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
      borderWidth: 1
    }]
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dragonInfo = _useState[0],
      setdragonInfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      customer = _useState2[0],
      setcustomer = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      succes = _useState3[0],
      setsucces = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      fail = _useState4[0],
      setfail = _useState4[1]; // bring the data for launch stats


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_2__["default"])().then(function (data) {
      setdragonInfo(data);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var succeslaunch = dragonInfo.filter(function (item) {
      return !item.success;
    });
    var faillaunch = dragonInfo.filter(function (item) {
      return item.success;
    });
    setsucces(succeslaunch.length);
    setfail(faillaunch.length);
  }, [dragonInfo]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getPayload__WEBPACK_IMPORTED_MODULE_3__["default"])().then(function (data) {
      setcustomer(data);
    });
  }, []);
  var dataSucces = {
    labels: ["fail", "succes"],
    datasets: [{
      label: "# of Votes",
      data: [fail, succes],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1
    }]
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "launch stats",
      items: dataSucces
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "commercial Customers",
      items: dataStarlink
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, _this);
};

_s(GridStats, "lWgGg2zzoONYKEzCHmLLMhIzy74=");

_c = GridStats;
/* harmony default export */ __webpack_exports__["default"] = (GridStats);

var _c;

$RefreshReg$(_c, "GridStats");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFN0YXRzIiwiZGF0YVN0YXJsaW5rIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwidXNlU3RhdGUiLCJkcmFnb25JbmZvIiwic2V0ZHJhZ29uSW5mbyIsImN1c3RvbWVyIiwic2V0Y3VzdG9tZXIiLCJzdWNjZXMiLCJzZXRzdWNjZXMiLCJmYWlsIiwic2V0ZmFpbCIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJzdWNjZXNsYXVuY2giLCJmaWx0ZXIiLCJpdGVtIiwic3VjY2VzcyIsImZhaWxsYXVuY2giLCJsZW5ndGgiLCJnZXRQYXlsb2FkIiwiZGF0YVN1Y2NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUd0QixNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFVBQU0sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFFBQWhCLEVBQTBCLE9BQTFCLENBRFc7QUFFbkJDLFlBQVEsRUFBRSxDQUNSO0FBQ0VDLFdBQUssRUFBRSxZQURUO0FBRUVDLFVBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsQ0FBVCxFQUFZLENBQVosQ0FGUjtBQUdFQyxxQkFBZSxFQUFFLENBQ2YseUJBRGUsRUFFZix5QkFGZSxFQUdmLHlCQUhlLEVBSWYseUJBSmUsQ0FIbkI7QUFTRUMsaUJBQVcsRUFBRSxDQUNYLHVCQURXLEVBRVgsdUJBRlcsRUFHWCx1QkFIVyxFQUlYLHVCQUpXLENBVGY7QUFlRUMsaUJBQVcsRUFBRTtBQWZmLEtBRFE7QUFGUyxHQUFyQjs7QUFIc0Isa0JBMEJjQyxzREFBUSxDQUFDLEVBQUQsQ0ExQnRCO0FBQUEsTUEwQmZDLFVBMUJlO0FBQUEsTUEwQkhDLGFBMUJHOztBQUFBLG1CQTJCVUYsc0RBQVEsQ0FBQyxFQUFELENBM0JsQjtBQUFBLE1BMkJmRyxRQTNCZTtBQUFBLE1BMkJMQyxXQTNCSzs7QUFBQSxtQkE0Qk1KLHNEQUFRLENBQUMsRUFBRCxDQTVCZDtBQUFBLE1BNEJmSyxNQTVCZTtBQUFBLE1BNEJQQyxTQTVCTzs7QUFBQSxtQkE2QkVOLHNEQUFRLENBQUMsRUFBRCxDQTdCVjtBQUFBLE1BNkJmTyxJQTdCZTtBQUFBLE1BNkJUQyxPQTdCUyxrQkErQnBCOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLCtFQUFlLEdBQUdDLElBQWxCLENBQXVCLFVBQUNmLElBQUQsRUFBVTtBQUMvQk0sbUJBQWEsQ0FBQ04sSUFBRCxDQUFiO0FBQ0QsS0FGRDtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLQWEseURBQVMsQ0FBQyxZQUFJO0FBQ1osUUFBTUcsWUFBWSxHQUFHWCxVQUFVLENBQUNZLE1BQVgsQ0FBa0IsVUFBQUMsSUFBSSxFQUFFO0FBQzNDLGFBQU8sQ0FBQ0EsSUFBSSxDQUFDQyxPQUFiO0FBQ0QsS0FGb0IsQ0FBckI7QUFHQSxRQUFNQyxVQUFVLEdBQUdmLFVBQVUsQ0FBQ1ksTUFBWCxDQUFrQixVQUFBQyxJQUFJLEVBQUU7QUFDekMsYUFBT0EsSUFBSSxDQUFDQyxPQUFaO0FBQ0QsS0FGa0IsQ0FBbkI7QUFHQVQsYUFBUyxDQUFDTSxZQUFZLENBQUNLLE1BQWQsQ0FBVDtBQUNBVCxXQUFPLENBQUNRLFVBQVUsQ0FBQ0MsTUFBWixDQUFQO0FBQ0QsR0FUUSxFQVNQLENBQUNoQixVQUFELENBVE8sQ0FBVDtBQVdBUSx5REFBUyxDQUFDLFlBQU07QUFDZFMsd0VBQVUsR0FBR1AsSUFBYixDQUFrQixVQUFDZixJQUFELEVBQVU7QUFDMUJRLGlCQUFXLENBQUNSLElBQUQsQ0FBWDtBQUNELEtBRkQ7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUQsTUFBTXVCLFVBQVUsR0FBRztBQUNqQjFCLFVBQU0sRUFBRSxDQUFDLE1BQUQsRUFBUyxRQUFULENBRFM7QUFFakJDLFlBQVEsRUFBRSxDQUNSO0FBQ0VDLFdBQUssRUFBRSxZQURUO0FBRUVDLFVBQUksRUFBRSxDQUFDVyxJQUFELEVBQU1GLE1BQU4sQ0FGUjtBQUdFUixxQkFBZSxFQUFFLENBQ2YseUJBRGUsRUFFZix5QkFGZSxDQUhuQjtBQU9FQyxpQkFBVyxFQUFFLENBQUMsdUJBQUQsRUFBMEIsdUJBQTFCLENBUGY7QUFRRUMsaUJBQVcsRUFBRTtBQVJmLEtBRFE7QUFGTyxHQUFuQjtBQWdCRCxzQkFDRSxxRUFBQyw0Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGlEQUFEO0FBQVUsV0FBSyxFQUFDLGNBQWhCO0FBQStCLFdBQUssRUFBRW9CO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLGlEQUFEO0FBQVUsV0FBSyxFQUFDLHNCQUFoQjtBQUF1QyxXQUFLLEVBQUUzQjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQTVFRDs7R0FBTUQsUzs7S0FBQUEsUztBQThFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RhdHMuNzlkY2RmOTkxOGMwYWM4MDI2MzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ2V0UGFzdExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRQYXN0TGF1bmNoZXNOUFwiO1xuaW1wb3J0IGdldFBheWxvYWQgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldFBheWxvYWRcIjtcblxuaW1wb3J0IFN0YXRDYXJkIGZyb20gXCIuLi9TdGF0Q2FyZFwiO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IEdyaWRTdGF0cyA9ICgpID0+IHtcblxuICBcbiAgY29uc3QgZGF0YVN0YXJsaW5rID0ge1xuICAgIGxhYmVsczogW1wiUmVkXCIsIFwiQmx1ZVwiLCBcIlllbGxvd1wiLCBcIkdyZWVuXCJdLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIiMgb2YgVm90ZXNcIixcbiAgICAgICAgZGF0YTogWzEyLCAxOSwgMywgNV0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDAuMilcIixcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLFxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAxKVwiLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCBbZHJhZ29uSW5mbywgc2V0ZHJhZ29uSW5mb10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2N1c3RvbWVyLCBzZXRjdXN0b21lcl0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3N1Y2Nlcywgc2V0c3VjY2VzXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZmFpbCwgc2V0ZmFpbF0gPSB1c2VTdGF0ZSgnJylcblxuICAgIC8vIGJyaW5nIHRoZSBkYXRhIGZvciBsYXVuY2ggc3RhdHNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZ2V0UGFzdExhdW5jaGVzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRkcmFnb25JbmZvKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgY29uc3Qgc3VjY2VzbGF1bmNoID0gZHJhZ29uSW5mby5maWx0ZXIoaXRlbT0+e1xuICAgICAgICByZXR1cm4gIWl0ZW0uc3VjY2VzcyBcbiAgICAgIH0pXG4gICAgICBjb25zdCBmYWlsbGF1bmNoID0gZHJhZ29uSW5mby5maWx0ZXIoaXRlbT0+e1xuICAgICAgICByZXR1cm4gaXRlbS5zdWNjZXNzIFxuICAgICAgfSlcbiAgICAgIHNldHN1Y2NlcyhzdWNjZXNsYXVuY2gubGVuZ3RoKVxuICAgICAgc2V0ZmFpbChmYWlsbGF1bmNoLmxlbmd0aClcbiAgICB9LFtkcmFnb25JbmZvXSlcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZ2V0UGF5bG9hZCgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0Y3VzdG9tZXIoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgIGNvbnN0IGRhdGFTdWNjZXMgPSB7XG4gICAgIGxhYmVsczogW1wiZmFpbFwiLCBcInN1Y2Nlc1wiXSxcbiAgICAgZGF0YXNldHM6IFtcbiAgICAgICB7XG4gICAgICAgICBsYWJlbDogXCIjIG9mIFZvdGVzXCIsXG4gICAgICAgICBkYXRhOiBbZmFpbCxzdWNjZXNdLFxuICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKVwiLFxuICAgICAgICAgXSxcbiAgICAgICAgIGJvcmRlckNvbG9yOiBbXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIiwgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIl0sXG4gICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICB9LFxuICAgICBdLFxuICAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkPlxuICAgICAgPFN0YXRDYXJkIHRpdGxlPVwibGF1bmNoIHN0YXRzXCIgaXRlbXM9e2RhdGFTdWNjZXN9IC8+XG4gICAgICA8U3RhdENhcmQgdGl0bGU9XCJjb21tZXJjaWFsIEN1c3RvbWVyc1wiIGl0ZW1zPXtkYXRhU3Rhcmxpbmt9IC8+XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZFN0YXRzO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9