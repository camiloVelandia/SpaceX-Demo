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
/* harmony import */ var _StatCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../StatCard */ "./components/StatCard/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/GridStats/styles.js");


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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      succes = _useState2[0],
      setsucces = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      fail = _useState3[0],
      setfail = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_2__["default"])().then(function (data) {
      setdragonInfo(data);
    });
  }, []);
  console.log(fail);
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
    labels: ["crs", "crew"],
    datasets: [{
      label: "# of Votes",
      data: [4, 23],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1
    }]
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "succes launch stats",
      items: dataSucces
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Starlink- in space",
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

_s(GridStats, "giyZwznbj1pemFak6WQZPkZ03Tc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFN0YXRzIiwiZGF0YVN0YXJsaW5rIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwidXNlU3RhdGUiLCJkcmFnb25JbmZvIiwic2V0ZHJhZ29uSW5mbyIsInN1Y2NlcyIsInNldHN1Y2NlcyIsImZhaWwiLCJzZXRmYWlsIiwidXNlRWZmZWN0IiwiZ2V0UGFzdExhdW5jaGVzIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNsYXVuY2giLCJmaWx0ZXIiLCJpdGVtIiwic3VjY2VzcyIsImZhaWxsYXVuY2giLCJsZW5ndGgiLCJkYXRhU3VjY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBR3RCLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsVUFBTSxFQUFFLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsUUFBaEIsRUFBMEIsT0FBMUIsQ0FEVztBQUVuQkMsWUFBUSxFQUFFLENBQ1I7QUFDRUMsV0FBSyxFQUFFLFlBRFQ7QUFFRUMsVUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxDQUFULEVBQVksQ0FBWixDQUZSO0FBR0VDLHFCQUFlLEVBQUUsQ0FDZix5QkFEZSxFQUVmLHlCQUZlLEVBR2YseUJBSGUsRUFJZix5QkFKZSxDQUhuQjtBQVNFQyxpQkFBVyxFQUFFLENBQ1gsdUJBRFcsRUFFWCx1QkFGVyxFQUdYLHVCQUhXLEVBSVgsdUJBSlcsQ0FUZjtBQWVFQyxpQkFBVyxFQUFFO0FBZmYsS0FEUTtBQUZTLEdBQXJCOztBQUhzQixrQkEwQmNDLHNEQUFRLENBQUMsRUFBRCxDQTFCdEI7QUFBQSxNQTBCZkMsVUExQmU7QUFBQSxNQTBCSEMsYUExQkc7O0FBQUEsbUJBMkJNRixzREFBUSxDQUFDLEVBQUQsQ0EzQmQ7QUFBQSxNQTJCZkcsTUEzQmU7QUFBQSxNQTJCUEMsU0EzQk87O0FBQUEsbUJBNEJFSixzREFBUSxDQUFDLEVBQUQsQ0E1QlY7QUFBQSxNQTRCZkssSUE1QmU7QUFBQSxNQTRCVEMsT0E1QlM7O0FBK0JwQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLCtFQUFlLEdBQUdDLElBQWxCLENBQXVCLFVBQUNiLElBQUQsRUFBVTtBQUMvQk0sbUJBQWEsQ0FBQ04sSUFBRCxDQUFiO0FBQ0QsS0FGRDtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLRGMsU0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7QUFFQUUseURBQVMsQ0FBQyxZQUFJO0FBQ1osUUFBTUssWUFBWSxHQUFHWCxVQUFVLENBQUNZLE1BQVgsQ0FBa0IsVUFBQUMsSUFBSSxFQUFFO0FBQzVDLGFBQU8sQ0FBQ0EsSUFBSSxDQUFDQyxPQUFiO0FBQ0EsS0FGb0IsQ0FBckI7QUFHQSxRQUFNQyxVQUFVLEdBQUdmLFVBQVUsQ0FBQ1ksTUFBWCxDQUFrQixVQUFBQyxJQUFJLEVBQUU7QUFDMUMsYUFBT0EsSUFBSSxDQUFDQyxPQUFaO0FBQ0EsS0FGa0IsQ0FBbkI7QUFHQVgsYUFBUyxDQUFDUSxZQUFZLENBQUNLLE1BQWQsQ0FBVDtBQUNBWCxXQUFPLENBQUNVLFVBQVUsQ0FBQ0MsTUFBWixDQUFQO0FBQ0QsR0FUUSxFQVNQLENBQUNoQixVQUFELENBVE8sQ0FBVDtBQVlBLE1BQU1pQixVQUFVLEdBQUc7QUFDakJ6QixVQUFNLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixDQURTO0FBRWpCQyxZQUFRLEVBQUUsQ0FDUjtBQUNFQyxXQUFLLEVBQUUsWUFEVDtBQUVFQyxVQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixDQUZSO0FBR0VDLHFCQUFlLEVBQUUsQ0FDZix5QkFEZSxFQUVmLHlCQUZlLENBSG5CO0FBT0VDLGlCQUFXLEVBQUUsQ0FBQyx1QkFBRCxFQUEwQix1QkFBMUIsQ0FQZjtBQVFFQyxpQkFBVyxFQUFFO0FBUmYsS0FEUTtBQUZPLEdBQW5CO0FBZ0JELHNCQUNFLHFFQUFDLDRDQUFEO0FBQUEsNEJBQ0UscUVBQUMsaURBQUQ7QUFBVSxXQUFLLEVBQUMscUJBQWhCO0FBQXNDLFdBQUssRUFBRW1CO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLGlEQUFEO0FBQVUsV0FBSyxFQUFDLG9CQUFoQjtBQUFxQyxXQUFLLEVBQUUxQjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQXhFRDs7R0FBTUQsUzs7S0FBQUEsUztBQTBFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RhdHMuNDczNjRiMmY3ZjdkODJmNjYyMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ2V0UGFzdExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRQYXN0TGF1bmNoZXNOUFwiO1xuXG5pbXBvcnQgU3RhdENhcmQgZnJvbSBcIi4uL1N0YXRDYXJkXCI7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgR3JpZFN0YXRzID0gKCkgPT4ge1xuXG4gIFxuICBjb25zdCBkYXRhU3RhcmxpbmsgPSB7XG4gICAgbGFiZWxzOiBbXCJSZWRcIiwgXCJCbHVlXCIsIFwiWWVsbG93XCIsIFwiR3JlZW5cIl0sXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiIyBvZiBWb3Rlc1wiLFxuICAgICAgICBkYXRhOiBbMTIsIDE5LCAzLCA1XSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKVwiLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIixcbiAgICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAxKVwiLFxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDEpXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IFtkcmFnb25JbmZvLCBzZXRkcmFnb25JbmZvXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbc3VjY2VzLCBzZXRzdWNjZXNdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtmYWlsLCBzZXRmYWlsXSA9IHVzZVN0YXRlKCcnKVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZ2V0UGFzdExhdW5jaGVzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRkcmFnb25JbmZvKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgY29uc29sZS5sb2coZmFpbCk7XG5cbiAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICBjb25zdCBzdWNjZXNsYXVuY2ggPSBkcmFnb25JbmZvLmZpbHRlcihpdGVtPT57XG4gICAgICByZXR1cm4gIWl0ZW0uc3VjY2VzcyBcbiAgICAgfSlcbiAgICAgY29uc3QgZmFpbGxhdW5jaCA9IGRyYWdvbkluZm8uZmlsdGVyKGl0ZW09PntcbiAgICAgIHJldHVybiBpdGVtLnN1Y2Nlc3MgXG4gICAgIH0pXG4gICAgIHNldHN1Y2NlcyhzdWNjZXNsYXVuY2gubGVuZ3RoKVxuICAgICBzZXRmYWlsKGZhaWxsYXVuY2gubGVuZ3RoKVxuICAgfSxbZHJhZ29uSW5mb10pXG5cblxuICAgY29uc3QgZGF0YVN1Y2NlcyA9IHtcbiAgICAgbGFiZWxzOiBbXCJjcnNcIiwgXCJjcmV3XCJdLFxuICAgICBkYXRhc2V0czogW1xuICAgICAgIHtcbiAgICAgICAgIGxhYmVsOiBcIiMgb2YgVm90ZXNcIixcbiAgICAgICAgIGRhdGE6IFs0LCAyM10sXG4gICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKVwiLFxuICAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCIsXG4gICAgICAgICBdLFxuICAgICAgICAgYm9yZGVyQ29sb3I6IFtcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLCBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiXSxcbiAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgIH0sXG4gICAgIF0sXG4gICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQ+XG4gICAgICA8U3RhdENhcmQgdGl0bGU9XCJzdWNjZXMgbGF1bmNoIHN0YXRzXCIgaXRlbXM9e2RhdGFTdWNjZXN9IC8+XG4gICAgICA8U3RhdENhcmQgdGl0bGU9XCJTdGFybGluay0gaW4gc3BhY2VcIiBpdGVtcz17ZGF0YVN0YXJsaW5rfSAvPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRTdGF0cztcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==