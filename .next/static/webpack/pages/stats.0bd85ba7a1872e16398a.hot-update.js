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
  console.log(dragonInfo);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var succes = dragonInfo.filter(function (item) {
      return !item.success;
    });
  }, [dragonInfo]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "succes stat",
      items: dataSucces
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Starlink- in space",
      items: dataStarlink
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFN0YXRzIiwiZGF0YVN1Y2NlcyIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImRhdGFTdGFybGluayIsInVzZVN0YXRlIiwiZHJhZ29uSW5mbyIsInNldGRyYWdvbkluZm8iLCJzdWNjZXMiLCJzZXRzdWNjZXMiLCJmYWlsIiwic2V0ZmFpbCIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwiaXRlbSIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFFdEIsTUFBTUMsVUFBVSxHQUFFO0FBQ2hCQyxVQUFNLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixDQURRO0FBRWhCQyxZQUFRLEVBQUUsQ0FDUjtBQUNFQyxXQUFLLEVBQUUsWUFEVDtBQUVFQyxVQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixDQUZSO0FBR0VDLHFCQUFlLEVBQUUsQ0FDZix5QkFEZSxFQUVmLHlCQUZlLENBSG5CO0FBUUVDLGlCQUFXLEVBQUUsQ0FDWCx1QkFEVyxFQUVYLHVCQUZXLENBUmY7QUFhRUMsaUJBQVcsRUFBRTtBQWJmLEtBRFE7QUFGTSxHQUFsQjtBQW9CQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJQLFVBQU0sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFFBQWhCLEVBQTBCLE9BQTFCLENBRFc7QUFFbkJDLFlBQVEsRUFBRSxDQUNSO0FBQ0VDLFdBQUssRUFBRSxZQURUO0FBRUVDLFVBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsQ0FBVCxFQUFZLENBQVosQ0FGUjtBQUdFQyxxQkFBZSxFQUFFLENBQ2YseUJBRGUsRUFFZix5QkFGZSxFQUdmLHlCQUhlLEVBSWYseUJBSmUsQ0FIbkI7QUFTRUMsaUJBQVcsRUFBRSxDQUNYLHVCQURXLEVBRVgsdUJBRlcsRUFHWCx1QkFIVyxFQUlYLHVCQUpXLENBVGY7QUFlRUMsaUJBQVcsRUFBRTtBQWZmLEtBRFE7QUFGUyxHQUFyQjs7QUF0QnNCLGtCQTZDY0Usc0RBQVEsQ0FBQyxFQUFELENBN0N0QjtBQUFBLE1BNkNmQyxVQTdDZTtBQUFBLE1BNkNIQyxhQTdDRzs7QUFBQSxtQkE4Q01GLHNEQUFRLENBQUMsRUFBRCxDQTlDZDtBQUFBLE1BOENmRyxNQTlDZTtBQUFBLE1BOENQQyxTQTlDTzs7QUFBQSxtQkErQ0VKLHNEQUFRLENBQUMsRUFBRCxDQS9DVjtBQUFBLE1BK0NmSyxJQS9DZTtBQUFBLE1BK0NUQyxPQS9DUzs7QUFrRHBCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsK0VBQWUsR0FBR0MsSUFBbEIsQ0FBdUIsVUFBQ2QsSUFBRCxFQUFVO0FBQy9CTyxtQkFBYSxDQUFDUCxJQUFELENBQWI7QUFDRCxLQUZEO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQUtEZSxTQUFPLENBQUNDLEdBQVIsQ0FBWVYsVUFBWjtBQUVBTSx5REFBUyxDQUFDLFlBQUk7QUFDWixRQUFNSixNQUFNLEdBQUdGLFVBQVUsQ0FBQ1csTUFBWCxDQUFrQixVQUFBQyxJQUFJLEVBQUU7QUFDdEMsYUFBTyxDQUFDQSxJQUFJLENBQUNDLE9BQWI7QUFDQSxLQUZjLENBQWY7QUFJRCxHQUxRLEVBS1AsQ0FBQ2IsVUFBRCxDQUxPLENBQVQ7QUFRRCxzQkFDRSxxRUFBQyw0Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGlEQUFEO0FBQVUsV0FBSyxFQUFDLGFBQWhCO0FBQThCLFdBQUssRUFBRVY7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsaURBQUQ7QUFBVSxXQUFLLEVBQUMsb0JBQWhCO0FBQXFDLFdBQUssRUFBRVE7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0F2RUQ7O0dBQU1ULFM7O0tBQUFBLFM7QUF5RVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YXRzLjBiZDg1YmE3YTE4NzJlMTYzOThhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldFBhc3RMYXVuY2hlcyBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2V0UGFzdExhdW5jaGVzTlBcIjtcblxuaW1wb3J0IFN0YXRDYXJkIGZyb20gXCIuLi9TdGF0Q2FyZFwiO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IEdyaWRTdGF0cyA9ICgpID0+IHtcblxuICBjb25zdCBkYXRhU3VjY2VzPSB7XG4gICAgbGFiZWxzOiBbXCJjcnNcIiwgXCJjcmV3XCJdLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIiMgb2YgVm90ZXNcIixcbiAgICAgICAgZGF0YTogWzQsIDIzLCBdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKVwiLFxuICAgICAgICAgIFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIixcbiAgICAgICAgICBcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIGNvbnN0IGRhdGFTdGFybGluayA9IHtcbiAgICBsYWJlbHM6IFtcIlJlZFwiLCBcIkJsdWVcIiwgXCJZZWxsb3dcIiwgXCJHcmVlblwiXSxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCIjIG9mIFZvdGVzXCIsXG4gICAgICAgIGRhdGE6IFsxMiwgMTksIDMsIDVdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSgyNTUsIDIwNiwgODYsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAwLjIpXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiLFxuICAgICAgICAgIFwicmdiYSgyNTUsIDIwNiwgODYsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDc1LCAxOTIsIDE5MiwgMSlcIixcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgY29uc3QgW2RyYWdvbkluZm8sIHNldGRyYWdvbkluZm9dID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtzdWNjZXMsIHNldHN1Y2Nlc10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2ZhaWwsIHNldGZhaWxdID0gdXNlU3RhdGUoJycpXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBnZXRQYXN0TGF1bmNoZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldGRyYWdvbkluZm8oZGF0YSk7XG4gICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICBjb25zb2xlLmxvZyhkcmFnb25JbmZvKTtcblxuICAgdXNlRWZmZWN0KCgpPT57XG4gICAgIGNvbnN0IHN1Y2NlcyA9IGRyYWdvbkluZm8uZmlsdGVyKGl0ZW09PntcbiAgICAgIHJldHVybiAhaXRlbS5zdWNjZXNzIFxuICAgICB9IClcblxuICAgfSxbZHJhZ29uSW5mb10pXG5cblxuICByZXR1cm4gKFxuICAgIDxHcmlkPlxuICAgICAgPFN0YXRDYXJkIHRpdGxlPVwic3VjY2VzIHN0YXRcIiBpdGVtcz17ZGF0YVN1Y2Nlc30gLz5cbiAgICAgIDxTdGF0Q2FyZCB0aXRsZT1cIlN0YXJsaW5rLSBpbiBzcGFjZVwiIGl0ZW1zPXtkYXRhU3Rhcmxpbmt9IC8+XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZFN0YXRzO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9