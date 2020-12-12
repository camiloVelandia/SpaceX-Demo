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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      succes = _useState[0],
      setsucces = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      fail = _useState2[0],
      setfail = _useState2[1];

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
      lineNumber: 76,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "commercial Customers",
      items: dataStarlink
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, _this);
};

_s(GridStats, "Y/2rQIEyIw3fMrpTtqIHfmgFEfM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFN0YXRzIiwiZGF0YVN0YXJsaW5rIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwidXNlU3RhdGUiLCJzdWNjZXMiLCJzZXRzdWNjZXMiLCJmYWlsIiwic2V0ZmFpbCIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJzZXRkcmFnb25JbmZvIiwic3VjY2VzbGF1bmNoIiwiZHJhZ29uSW5mbyIsImZpbHRlciIsIml0ZW0iLCJzdWNjZXNzIiwiZmFpbGxhdW5jaCIsImxlbmd0aCIsImRhdGFTdWNjZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFHdEIsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxVQUFNLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixRQUFoQixFQUEwQixPQUExQixDQURXO0FBRW5CQyxZQUFRLEVBQUUsQ0FDUjtBQUNFQyxXQUFLLEVBQUUsWUFEVDtBQUVFQyxVQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLENBQVQsRUFBWSxDQUFaLENBRlI7QUFHRUMscUJBQWUsRUFBRSxDQUNmLHlCQURlLEVBRWYseUJBRmUsRUFHZix5QkFIZSxFQUlmLHlCQUplLENBSG5CO0FBU0VDLGlCQUFXLEVBQUUsQ0FDWCx1QkFEVyxFQUVYLHVCQUZXLEVBR1gsdUJBSFcsRUFJWCx1QkFKVyxDQVRmO0FBZUVDLGlCQUFXLEVBQUU7QUFmZixLQURRO0FBRlMsR0FBckI7O0FBSHNCLGtCQTJCTUMsc0RBQVEsQ0FBQyxFQUFELENBM0JkO0FBQUEsTUEyQmZDLE1BM0JlO0FBQUEsTUEyQlBDLFNBM0JPOztBQUFBLG1CQTRCRUYsc0RBQVEsQ0FBQyxFQUFELENBNUJWO0FBQUEsTUE0QmZHLElBNUJlO0FBQUEsTUE0QlRDLE9BNUJTOztBQStCcEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQywrRUFBZSxHQUFHQyxJQUFsQixDQUF1QixVQUFDWCxJQUFELEVBQVU7QUFDL0JZLG1CQUFhLENBQUNaLElBQUQsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFTLHlEQUFTLENBQUMsWUFBSTtBQUNiLFFBQU1JLFlBQVksR0FBR0MsVUFBVSxDQUFDQyxNQUFYLENBQWtCLFVBQUFDLElBQUksRUFBRTtBQUM1QyxhQUFPLENBQUNBLElBQUksQ0FBQ0MsT0FBYjtBQUNBLEtBRm9CLENBQXJCO0FBR0EsUUFBTUMsVUFBVSxHQUFHSixVQUFVLENBQUNDLE1BQVgsQ0FBa0IsVUFBQUMsSUFBSSxFQUFFO0FBQzFDLGFBQU9BLElBQUksQ0FBQ0MsT0FBWjtBQUNBLEtBRmtCLENBQW5CO0FBR0FYLGFBQVMsQ0FBQ08sWUFBWSxDQUFDTSxNQUFkLENBQVQ7QUFDQVgsV0FBTyxDQUFDVSxVQUFVLENBQUNDLE1BQVosQ0FBUDtBQUNELEdBVFMsRUFTUixDQUFDTCxVQUFELENBVFEsQ0FBVDtBQVlELE1BQU1NLFVBQVUsR0FBRztBQUNqQnZCLFVBQU0sRUFBRSxDQUFDLE1BQUQsRUFBUyxRQUFULENBRFM7QUFFakJDLFlBQVEsRUFBRSxDQUNSO0FBQ0VDLFdBQUssRUFBRSxZQURUO0FBRUVDLFVBQUksRUFBRSxDQUFDTyxJQUFELEVBQU1GLE1BQU4sQ0FGUjtBQUdFSixxQkFBZSxFQUFFLENBQ2YseUJBRGUsRUFFZix5QkFGZSxDQUhuQjtBQU9FQyxpQkFBVyxFQUFFLENBQUMsdUJBQUQsRUFBMEIsdUJBQTFCLENBUGY7QUFRRUMsaUJBQVcsRUFBRTtBQVJmLEtBRFE7QUFGTyxHQUFuQjtBQWdCRCxzQkFDRSxxRUFBQyw0Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGlEQUFEO0FBQVUsV0FBSyxFQUFDLGNBQWhCO0FBQStCLFdBQUssRUFBRWlCO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLGlEQUFEO0FBQVUsV0FBSyxFQUFDLHNCQUFoQjtBQUF1QyxXQUFLLEVBQUV4QjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQXZFRDs7R0FBTUQsUzs7S0FBQUEsUztBQXlFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RhdHMuN2U0ZWZmZmFiNmNkYzcyMGI4ZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ2V0UGFzdExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRQYXN0TGF1bmNoZXNOUFwiO1xuaW1wb3J0IGdldFBheWxvYWQgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldFBheWxvYWRcIjtcblxuaW1wb3J0IFN0YXRDYXJkIGZyb20gXCIuLi9TdGF0Q2FyZFwiO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IEdyaWRTdGF0cyA9ICgpID0+IHtcblxuICBcbiAgY29uc3QgZGF0YVN0YXJsaW5rID0ge1xuICAgIGxhYmVsczogW1wiUmVkXCIsIFwiQmx1ZVwiLCBcIlllbGxvd1wiLCBcIkdyZWVuXCJdLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIiMgb2YgVm90ZXNcIixcbiAgICAgICAgZGF0YTogWzEyLCAxOSwgMywgNV0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDAuMilcIixcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLFxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAxKVwiLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuXG4gIGNvbnN0IFtzdWNjZXMsIHNldHN1Y2Nlc10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2ZhaWwsIHNldGZhaWxdID0gdXNlU3RhdGUoJycpXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBnZXRQYXN0TGF1bmNoZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldGRyYWdvbkluZm8oZGF0YSk7XG4gICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgY29uc3Qgc3VjY2VzbGF1bmNoID0gZHJhZ29uSW5mby5maWx0ZXIoaXRlbT0+e1xuICAgICAgcmV0dXJuICFpdGVtLnN1Y2Nlc3MgXG4gICAgIH0pXG4gICAgIGNvbnN0IGZhaWxsYXVuY2ggPSBkcmFnb25JbmZvLmZpbHRlcihpdGVtPT57XG4gICAgICByZXR1cm4gaXRlbS5zdWNjZXNzIFxuICAgICB9KVxuICAgICBzZXRzdWNjZXMoc3VjY2VzbGF1bmNoLmxlbmd0aClcbiAgICAgc2V0ZmFpbChmYWlsbGF1bmNoLmxlbmd0aClcbiAgIH0sW2RyYWdvbkluZm9dKVxuXG5cbiAgIGNvbnN0IGRhdGFTdWNjZXMgPSB7XG4gICAgIGxhYmVsczogW1wiZmFpbFwiLCBcInN1Y2Nlc1wiXSxcbiAgICAgZGF0YXNldHM6IFtcbiAgICAgICB7XG4gICAgICAgICBsYWJlbDogXCIjIG9mIFZvdGVzXCIsXG4gICAgICAgICBkYXRhOiBbZmFpbCxzdWNjZXNdLFxuICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKVwiLFxuICAgICAgICAgXSxcbiAgICAgICAgIGJvcmRlckNvbG9yOiBbXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIiwgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIl0sXG4gICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICB9LFxuICAgICBdLFxuICAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkPlxuICAgICAgPFN0YXRDYXJkIHRpdGxlPVwibGF1bmNoIHN0YXRzXCIgaXRlbXM9e2RhdGFTdWNjZXN9IC8+XG4gICAgICA8U3RhdENhcmQgdGl0bGU9XCJjb21tZXJjaWFsIEN1c3RvbWVyc1wiIGl0ZW1zPXtkYXRhU3Rhcmxpbmt9IC8+XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZFN0YXRzO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9