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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_2__["default"])().then(function (data) {
      setdragonInfo(data);
    });
  }, []);
  console.log(dragonInfo);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var succes = dragonInfo.filter(function (item) {
      return item.succes;
    });
  });
  console.log(succes + 'sd');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "succes stat",
      items: dataSucces
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Starlink- in space",
      items: dataStarlink
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, _this);
};

_s(GridStats, "osZ+zu2ANtlQX9ZPaWdHI0V0LY0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFN0YXRzIiwiZGF0YVN1Y2NlcyIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImRhdGFTdGFybGluayIsInVzZVN0YXRlIiwiZHJhZ29uSW5mbyIsInNldGRyYWdvbkluZm8iLCJ1c2VFZmZlY3QiLCJnZXRQYXN0TGF1bmNoZXMiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInN1Y2NlcyIsImZpbHRlciIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFFdEIsTUFBTUMsVUFBVSxHQUFFO0FBQ2hCQyxVQUFNLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixDQURRO0FBRWhCQyxZQUFRLEVBQUUsQ0FDUjtBQUNFQyxXQUFLLEVBQUUsWUFEVDtBQUVFQyxVQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixDQUZSO0FBR0VDLHFCQUFlLEVBQUUsQ0FDZix5QkFEZSxFQUVmLHlCQUZlLENBSG5CO0FBUUVDLGlCQUFXLEVBQUUsQ0FDWCx1QkFEVyxFQUVYLHVCQUZXLENBUmY7QUFhRUMsaUJBQVcsRUFBRTtBQWJmLEtBRFE7QUFGTSxHQUFsQjtBQW9CQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJQLFVBQU0sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFFBQWhCLEVBQTBCLE9BQTFCLENBRFc7QUFFbkJDLFlBQVEsRUFBRSxDQUNSO0FBQ0VDLFdBQUssRUFBRSxZQURUO0FBRUVDLFVBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsQ0FBVCxFQUFZLENBQVosQ0FGUjtBQUdFQyxxQkFBZSxFQUFFLENBQ2YseUJBRGUsRUFFZix5QkFGZSxFQUdmLHlCQUhlLEVBSWYseUJBSmUsQ0FIbkI7QUFTRUMsaUJBQVcsRUFBRSxDQUNYLHVCQURXLEVBRVgsdUJBRlcsRUFHWCx1QkFIVyxFQUlYLHVCQUpXLENBVGY7QUFlRUMsaUJBQVcsRUFBRTtBQWZmLEtBRFE7QUFGUyxHQUFyQjs7QUF0QnNCLGtCQTZDY0Usc0RBQVEsQ0FBQyxFQUFELENBN0N0QjtBQUFBLE1BNkNmQyxVQTdDZTtBQUFBLE1BNkNIQyxhQTdDRzs7QUFnRHBCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsK0VBQWUsR0FBR0MsSUFBbEIsQ0FBdUIsVUFBQ1YsSUFBRCxFQUFVO0FBQy9CTyxtQkFBYSxDQUFDUCxJQUFELENBQWI7QUFDRCxLQUZEO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQUtEVyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sVUFBWjtBQUVBRSx5REFBUyxDQUFDLFlBQUk7QUFDWixRQUFNSyxNQUFNLEdBQUdQLFVBQVUsQ0FBQ1EsTUFBWCxDQUFrQixVQUFBQyxJQUFJO0FBQUEsYUFBR0EsSUFBSSxDQUFDRixNQUFSO0FBQUEsS0FBdEIsQ0FBZjtBQUVELEdBSFEsQ0FBVDtBQUtBRixTQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBTSxHQUFHLElBQXJCO0FBRUQsc0JBQ0UscUVBQUMsNENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxpREFBRDtBQUFVLFdBQUssRUFBQyxhQUFoQjtBQUE4QixXQUFLLEVBQUVqQjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxpREFBRDtBQUFVLFdBQUssRUFBQyxvQkFBaEI7QUFBcUMsV0FBSyxFQUFFUTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQXBFRDs7R0FBTVQsUzs7S0FBQUEsUztBQXNFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RhdHMuMzQwZmUwY2EwMGRhZTAxOWJhMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ2V0UGFzdExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRQYXN0TGF1bmNoZXNOUFwiO1xuXG5pbXBvcnQgU3RhdENhcmQgZnJvbSBcIi4uL1N0YXRDYXJkXCI7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgR3JpZFN0YXRzID0gKCkgPT4ge1xuXG4gIGNvbnN0IGRhdGFTdWNjZXM9IHtcbiAgICBsYWJlbHM6IFtcImNyc1wiLCBcImNyZXdcIl0sXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiIyBvZiBWb3Rlc1wiLFxuICAgICAgICBkYXRhOiBbNCwgMjMsIF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCIsXG4gICAgICAgICAgXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiLFxuICAgICAgICAgIFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgY29uc3QgZGF0YVN0YXJsaW5rID0ge1xuICAgIGxhYmVsczogW1wiUmVkXCIsIFwiQmx1ZVwiLCBcIlllbGxvd1wiLCBcIkdyZWVuXCJdLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIiMgb2YgVm90ZXNcIixcbiAgICAgICAgZGF0YTogWzEyLCAxOSwgMywgNV0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDAuMilcIixcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLFxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAxKVwiLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCBbZHJhZ29uSW5mbywgc2V0ZHJhZ29uSW5mb10gPSB1c2VTdGF0ZShbXSlcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGdldFBhc3RMYXVuY2hlcygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0ZHJhZ29uSW5mbyhkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgIGNvbnNvbGUubG9nKGRyYWdvbkluZm8pO1xuXG4gICB1c2VFZmZlY3QoKCk9PntcbiAgICAgY29uc3Qgc3VjY2VzID0gZHJhZ29uSW5mby5maWx0ZXIoaXRlbT0+IGl0ZW0uc3VjY2VzKVxuXG4gICB9KVxuXG4gICBjb25zb2xlLmxvZyhzdWNjZXMgKyAnc2QnKVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQ+XG4gICAgICA8U3RhdENhcmQgdGl0bGU9XCJzdWNjZXMgc3RhdFwiIGl0ZW1zPXtkYXRhU3VjY2VzfSAvPlxuICAgICAgPFN0YXRDYXJkIHRpdGxlPVwiU3RhcmxpbmstIGluIHNwYWNlXCIgaXRlbXM9e2RhdGFTdGFybGlua30gLz5cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkU3RhdHM7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=