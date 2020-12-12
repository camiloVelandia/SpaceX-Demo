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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(dataSucces),
      dragonInfo = _useState[0],
      setdragonInfo = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_2__["default"])().then(function (data) {
      setdragonInfo(data);
    });
  }, []);
  console.log(dragonInfo);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "succes stat",
      items: dataSucces
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Starlink- in space",
      items: dataStarlink
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, _this);
};

_s(GridStats, "WTpUPGfwXRnGGeeRy+eItbu0BUE=");

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

/***/ }),

/***/ "./services/getPastLaunches.js":
false,

/***/ "./services/getPastLaunchesNP.js":
/*!***************************************!*\
  !*** ./services/getPastLaunchesNP.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAllpastLaunches; });
/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


function getAllpastLaunches(_x) {
  return _getAllpastLaunches.apply(this, arguments);
}

function _getAllpastLaunches() {
  _getAllpastLaunches = Object(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(page) {
    var API, response, data;
    return _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            API = "https://api.spacexdata.com/v4/launches/past/";
            _context.next = 3;
            return fetch(API);

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAllpastLaunches.apply(this, arguments);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL2dldFBhc3RMYXVuY2hlc05QLmpzIl0sIm5hbWVzIjpbIkdyaWRTdGF0cyIsImRhdGFTdWNjZXMiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJkYXRhU3RhcmxpbmsiLCJ1c2VTdGF0ZSIsImRyYWdvbkluZm8iLCJzZXRkcmFnb25JbmZvIiwidXNlRWZmZWN0IiwiZ2V0UGFzdExhdW5jaGVzIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRBbGxwYXN0TGF1bmNoZXMiLCJwYWdlIiwiQVBJIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFFdEIsTUFBTUMsVUFBVSxHQUFFO0FBQ2hCQyxVQUFNLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixDQURRO0FBRWhCQyxZQUFRLEVBQUUsQ0FDUjtBQUNFQyxXQUFLLEVBQUUsWUFEVDtBQUVFQyxVQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixDQUZSO0FBR0VDLHFCQUFlLEVBQUUsQ0FDZix5QkFEZSxFQUVmLHlCQUZlLENBSG5CO0FBUUVDLGlCQUFXLEVBQUUsQ0FDWCx1QkFEVyxFQUVYLHVCQUZXLENBUmY7QUFhRUMsaUJBQVcsRUFBRTtBQWJmLEtBRFE7QUFGTSxHQUFsQjtBQW9CQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJQLFVBQU0sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFFBQWhCLEVBQTBCLE9BQTFCLENBRFc7QUFFbkJDLFlBQVEsRUFBRSxDQUNSO0FBQ0VDLFdBQUssRUFBRSxZQURUO0FBRUVDLFVBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsQ0FBVCxFQUFZLENBQVosQ0FGUjtBQUdFQyxxQkFBZSxFQUFFLENBQ2YseUJBRGUsRUFFZix5QkFGZSxFQUdmLHlCQUhlLEVBSWYseUJBSmUsQ0FIbkI7QUFTRUMsaUJBQVcsRUFBRSxDQUNYLHVCQURXLEVBRVgsdUJBRlcsRUFHWCx1QkFIVyxFQUlYLHVCQUpXLENBVGY7QUFlRUMsaUJBQVcsRUFBRTtBQWZmLEtBRFE7QUFGUyxHQUFyQjs7QUF0QnNCLGtCQTZDY0Usc0RBQVEsQ0FBQ1QsVUFBRCxDQTdDdEI7QUFBQSxNQTZDZlUsVUE3Q2U7QUFBQSxNQTZDSEMsYUE3Q0c7O0FBZ0RwQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLCtFQUFlLEdBQUdDLElBQWxCLENBQXVCLFVBQUNWLElBQUQsRUFBVTtBQUMvQk8sbUJBQWEsQ0FBQ1AsSUFBRCxDQUFiO0FBQ0QsS0FGRDtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLRFcsU0FBTyxDQUFDQyxHQUFSLENBQVlOLFVBQVo7QUFFRCxzQkFDRSxxRUFBQyw0Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGlEQUFEO0FBQVUsV0FBSyxFQUFDLGFBQWhCO0FBQThCLFdBQUssRUFBRVY7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsaURBQUQ7QUFBVSxXQUFLLEVBQUMsb0JBQWhCO0FBQXFDLFdBQUssRUFBRVE7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0E3REQ7O0dBQU1ULFM7O0tBQUFBLFM7QUErRFNBLHdFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFZSxTQUFla0Isa0JBQTlCO0FBQUE7QUFBQTs7OzZUQUFlLGlCQUFrQ0MsSUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BDLGVBRE87QUFBQTtBQUFBLG1CQUdRQyxLQUFLLENBQUNELEdBQUQsQ0FIYjs7QUFBQTtBQUdURSxvQkFIUztBQUFBO0FBQUEsbUJBSUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUpKOztBQUFBO0FBSVRsQixnQkFKUztBQUFBLDZDQUtOQSxJQUxNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RhdHMuNmRlOGEwNjUzMWM0MDkxMGY2NjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ2V0UGFzdExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRQYXN0TGF1bmNoZXNOUFwiO1xuXG5pbXBvcnQgU3RhdENhcmQgZnJvbSBcIi4uL1N0YXRDYXJkXCI7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgR3JpZFN0YXRzID0gKCkgPT4ge1xuXG4gIGNvbnN0IGRhdGFTdWNjZXM9IHtcbiAgICBsYWJlbHM6IFtcImNyc1wiLCBcImNyZXdcIl0sXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiIyBvZiBWb3Rlc1wiLFxuICAgICAgICBkYXRhOiBbNCwgMjMsIF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCIsXG4gICAgICAgICAgXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiLFxuICAgICAgICAgIFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgY29uc3QgZGF0YVN0YXJsaW5rID0ge1xuICAgIGxhYmVsczogW1wiUmVkXCIsIFwiQmx1ZVwiLCBcIlllbGxvd1wiLCBcIkdyZWVuXCJdLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIiMgb2YgVm90ZXNcIixcbiAgICAgICAgZGF0YTogWzEyLCAxOSwgMywgNV0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDAuMilcIixcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLFxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMSlcIixcbiAgICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAxKVwiLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCBbZHJhZ29uSW5mbywgc2V0ZHJhZ29uSW5mb10gPSB1c2VTdGF0ZShkYXRhU3VjY2VzKVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZ2V0UGFzdExhdW5jaGVzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRkcmFnb25JbmZvKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgY29uc29sZS5sb2coZHJhZ29uSW5mbyk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZD5cbiAgICAgIDxTdGF0Q2FyZCB0aXRsZT1cInN1Y2NlcyBzdGF0XCIgaXRlbXM9e2RhdGFTdWNjZXN9IC8+XG4gICAgICA8U3RhdENhcmQgdGl0bGU9XCJTdGFybGluay0gaW4gc3BhY2VcIiBpdGVtcz17ZGF0YVN0YXJsaW5rfSAvPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRTdGF0cztcblxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxscGFzdExhdW5jaGVzKHBhZ2UpIHtcbiAgY29uc3QgQVBJID0gYGh0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3Y0L2xhdW5jaGVzL3Bhc3QvYDtcblxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUEkpO1xuICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9