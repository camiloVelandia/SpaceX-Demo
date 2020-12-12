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
      setfail = _useState4[1];

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
      lineNumber: 77,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Customers",
      items: dataStarlink
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, _this);
};

_s(GridStats, "LbKFZg52AoKKLzdBOO50x9zkrEE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFN0YXRzIiwiZGF0YVN0YXJsaW5rIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwidXNlU3RhdGUiLCJkcmFnb25JbmZvIiwic2V0ZHJhZ29uSW5mbyIsImN1c3RvbWVyIiwic2V0Y3VzdG9tZXIiLCJzdWNjZXMiLCJzZXRzdWNjZXMiLCJmYWlsIiwic2V0ZmFpbCIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJzdWNjZXNsYXVuY2giLCJmaWx0ZXIiLCJpdGVtIiwic3VjY2VzcyIsImZhaWxsYXVuY2giLCJsZW5ndGgiLCJkYXRhU3VjY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBR3RCLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsVUFBTSxFQUFFLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsUUFBaEIsRUFBMEIsT0FBMUIsQ0FEVztBQUVuQkMsWUFBUSxFQUFFLENBQ1I7QUFDRUMsV0FBSyxFQUFFLFlBRFQ7QUFFRUMsVUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxDQUFULEVBQVksQ0FBWixDQUZSO0FBR0VDLHFCQUFlLEVBQUUsQ0FDZix5QkFEZSxFQUVmLHlCQUZlLEVBR2YseUJBSGUsRUFJZix5QkFKZSxDQUhuQjtBQVNFQyxpQkFBVyxFQUFFLENBQ1gsdUJBRFcsRUFFWCx1QkFGVyxFQUdYLHVCQUhXLEVBSVgsdUJBSlcsQ0FUZjtBQWVFQyxpQkFBVyxFQUFFO0FBZmYsS0FEUTtBQUZTLEdBQXJCOztBQUhzQixrQkEwQmNDLHNEQUFRLENBQUMsRUFBRCxDQTFCdEI7QUFBQSxNQTBCZkMsVUExQmU7QUFBQSxNQTBCSEMsYUExQkc7O0FBQUEsbUJBMkJVRixzREFBUSxDQUFDLEVBQUQsQ0EzQmxCO0FBQUEsTUEyQmZHLFFBM0JlO0FBQUEsTUEyQkxDLFdBM0JLOztBQUFBLG1CQTRCTUosc0RBQVEsQ0FBQyxFQUFELENBNUJkO0FBQUEsTUE0QmZLLE1BNUJlO0FBQUEsTUE0QlBDLFNBNUJPOztBQUFBLG1CQTZCRU4sc0RBQVEsQ0FBQyxFQUFELENBN0JWO0FBQUEsTUE2QmZPLElBN0JlO0FBQUEsTUE2QlRDLE9BN0JTOztBQWdDcEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQywrRUFBZSxHQUFHQyxJQUFsQixDQUF1QixVQUFDZixJQUFELEVBQVU7QUFDL0JNLG1CQUFhLENBQUNOLElBQUQsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFhLHlEQUFTLENBQUMsWUFBSTtBQUNiLFFBQU1HLFlBQVksR0FBR1gsVUFBVSxDQUFDWSxNQUFYLENBQWtCLFVBQUFDLElBQUksRUFBRTtBQUM1QyxhQUFPLENBQUNBLElBQUksQ0FBQ0MsT0FBYjtBQUNBLEtBRm9CLENBQXJCO0FBR0EsUUFBTUMsVUFBVSxHQUFHZixVQUFVLENBQUNZLE1BQVgsQ0FBa0IsVUFBQUMsSUFBSSxFQUFFO0FBQzFDLGFBQU9BLElBQUksQ0FBQ0MsT0FBWjtBQUNBLEtBRmtCLENBQW5CO0FBR0FULGFBQVMsQ0FBQ00sWUFBWSxDQUFDSyxNQUFkLENBQVQ7QUFDQVQsV0FBTyxDQUFDUSxVQUFVLENBQUNDLE1BQVosQ0FBUDtBQUNELEdBVFMsRUFTUixDQUFDaEIsVUFBRCxDQVRRLENBQVQ7QUFZRCxNQUFNaUIsVUFBVSxHQUFHO0FBQ2pCekIsVUFBTSxFQUFFLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FEUztBQUVqQkMsWUFBUSxFQUFFLENBQ1I7QUFDRUMsV0FBSyxFQUFFLFlBRFQ7QUFFRUMsVUFBSSxFQUFFLENBQUNXLElBQUQsRUFBTUYsTUFBTixDQUZSO0FBR0VSLHFCQUFlLEVBQUUsQ0FDZix5QkFEZSxFQUVmLHlCQUZlLENBSG5CO0FBT0VDLGlCQUFXLEVBQUUsQ0FBQyx1QkFBRCxFQUEwQix1QkFBMUIsQ0FQZjtBQVFFQyxpQkFBVyxFQUFFO0FBUmYsS0FEUTtBQUZPLEdBQW5CO0FBZ0JELHNCQUNFLHFFQUFDLDRDQUFEO0FBQUEsNEJBQ0UscUVBQUMsaURBQUQ7QUFBVSxXQUFLLEVBQUMsY0FBaEI7QUFBK0IsV0FBSyxFQUFFbUI7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsaURBQUQ7QUFBVSxXQUFLLEVBQUMsV0FBaEI7QUFBNEIsV0FBSyxFQUFFMUI7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0F4RUQ7O0dBQU1ELFM7O0tBQUFBLFM7QUEwRVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YXRzLjlmNzQwODFlY2M5NDRiZjNlMDZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldFBhc3RMYXVuY2hlcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0UGFzdExhdW5jaGVzTlBcIjtcbmltcG9ydCBnZXRQYXlsb2FkIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRQYXlsb2FkXCI7XG5cbmltcG9ydCBTdGF0Q2FyZCBmcm9tIFwiLi4vU3RhdENhcmRcIjtcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBHcmlkU3RhdHMgPSAoKSA9PiB7XG5cbiAgXG4gIGNvbnN0IGRhdGFTdGFybGluayA9IHtcbiAgICBsYWJlbHM6IFtcIlJlZFwiLCBcIkJsdWVcIiwgXCJZZWxsb3dcIiwgXCJHcmVlblwiXSxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCIjIG9mIFZvdGVzXCIsXG4gICAgICAgIGRhdGE6IFsxMiwgMTksIDMsIDVdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSgyNTUsIDIwNiwgODYsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAwLjIpXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiLFxuICAgICAgICAgIFwicmdiYSgyNTUsIDIwNiwgODYsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDc1LCAxOTIsIDE5MiwgMSlcIixcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgY29uc3QgW2RyYWdvbkluZm8sIHNldGRyYWdvbkluZm9dID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Y3VzdG9tZXJdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtzdWNjZXMsIHNldHN1Y2Nlc10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2ZhaWwsIHNldGZhaWxdID0gdXNlU3RhdGUoJycpXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBnZXRQYXN0TGF1bmNoZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldGRyYWdvbkluZm8oZGF0YSk7XG4gICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgY29uc3Qgc3VjY2VzbGF1bmNoID0gZHJhZ29uSW5mby5maWx0ZXIoaXRlbT0+e1xuICAgICAgcmV0dXJuICFpdGVtLnN1Y2Nlc3MgXG4gICAgIH0pXG4gICAgIGNvbnN0IGZhaWxsYXVuY2ggPSBkcmFnb25JbmZvLmZpbHRlcihpdGVtPT57XG4gICAgICByZXR1cm4gaXRlbS5zdWNjZXNzIFxuICAgICB9KVxuICAgICBzZXRzdWNjZXMoc3VjY2VzbGF1bmNoLmxlbmd0aClcbiAgICAgc2V0ZmFpbChmYWlsbGF1bmNoLmxlbmd0aClcbiAgIH0sW2RyYWdvbkluZm9dKVxuXG5cbiAgIGNvbnN0IGRhdGFTdWNjZXMgPSB7XG4gICAgIGxhYmVsczogW1wiZmFpbFwiLCBcInN1Y2Nlc1wiXSxcbiAgICAgZGF0YXNldHM6IFtcbiAgICAgICB7XG4gICAgICAgICBsYWJlbDogXCIjIG9mIFZvdGVzXCIsXG4gICAgICAgICBkYXRhOiBbZmFpbCxzdWNjZXNdLFxuICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKVwiLFxuICAgICAgICAgXSxcbiAgICAgICAgIGJvcmRlckNvbG9yOiBbXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIiwgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIl0sXG4gICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICB9LFxuICAgICBdLFxuICAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkPlxuICAgICAgPFN0YXRDYXJkIHRpdGxlPVwibGF1bmNoIHN0YXRzXCIgaXRlbXM9e2RhdGFTdWNjZXN9IC8+XG4gICAgICA8U3RhdENhcmQgdGl0bGU9XCJDdXN0b21lcnNcIiBpdGVtcz17ZGF0YVN0YXJsaW5rfSAvPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRTdGF0cztcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==