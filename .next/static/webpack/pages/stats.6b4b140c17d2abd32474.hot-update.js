webpackHotUpdate_N_E("pages/stats",{

/***/ "./components/GridStats/index.js":
/*!***************************************!*\
  !*** ./components/GridStats/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getPastLaunchesNP */ "./services/getPastLaunchesNP.js");
/* harmony import */ var _services_getPayload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/getPayload */ "./services/getPayload.js");
/* harmony import */ var _StatCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../StatCard */ "./components/StatCard/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/GridStats/styles.js");



var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/spaceX/components/GridStats/index.js",
    _this = undefined,
    _s = $RefreshSig$();







var GridStats = function GridStats() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      dragonInfo = _useState[0],
      setdragonInfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      succes = _useState2[0],
      setsucces = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      fail = _useState3[0],
      setfail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      customer = _useState4[0],
      setcustomer = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      customerName = _useState5[0],
      setcustomerName = _useState5[1]; // bring the data for launch stats


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_services_getPastLaunchesNP__WEBPACK_IMPORTED_MODULE_3__["default"])().then(function (data) {
      setdragonInfo(data);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
  }; // bring the data for customer stats

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_services_getPayload__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (data) {
      setcustomer(data);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var name = customer.map(function (item) {
      return item.customers[0];
    });

    var namesl = Object(_mnt_c_Users_cmax9_documents_Developer_spaceX_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Set(name));

    console.log(namesl + 'sdf');
    setcustomerName(namesl);
  }, [customer]);
  console.log(customerName);
  var dataCustomer = {
    labels: [],
    datasets: [{
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
      borderWidth: 1
    }]
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "launch stats",
      items: dataSucces
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StatCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "commercial Customers",
      items: dataCustomer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, _this);
};

_s(GridStats, "J0CieGQRBv97m37sT/x/z2V7AtI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhdHMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFN0YXRzIiwidXNlU3RhdGUiLCJkcmFnb25JbmZvIiwic2V0ZHJhZ29uSW5mbyIsInN1Y2NlcyIsInNldHN1Y2NlcyIsImZhaWwiLCJzZXRmYWlsIiwiY3VzdG9tZXIiLCJzZXRjdXN0b21lciIsImN1c3RvbWVyTmFtZSIsInNldGN1c3RvbWVyTmFtZSIsInVzZUVmZmVjdCIsImdldFBhc3RMYXVuY2hlcyIsInRoZW4iLCJkYXRhIiwic3VjY2VzbGF1bmNoIiwiZmlsdGVyIiwiaXRlbSIsInN1Y2Nlc3MiLCJmYWlsbGF1bmNoIiwibGVuZ3RoIiwiZGF0YVN1Y2NlcyIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZ2V0UGF5bG9hZCIsIm5hbWUiLCJtYXAiLCJjdXN0b21lcnMiLCJuYW1lc2wiLCJTZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YUN1c3RvbWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFHY0Msc0RBQVEsQ0FBQyxFQUFELENBSHRCO0FBQUEsTUFHZkMsVUFIZTtBQUFBLE1BR0hDLGFBSEc7O0FBQUEsbUJBSU1GLHNEQUFRLENBQUMsRUFBRCxDQUpkO0FBQUEsTUFJZkcsTUFKZTtBQUFBLE1BSVBDLFNBSk87O0FBQUEsbUJBS0VKLHNEQUFRLENBQUMsRUFBRCxDQUxWO0FBQUEsTUFLZkssSUFMZTtBQUFBLE1BS1RDLE9BTFM7O0FBQUEsbUJBT1VOLHNEQUFRLENBQUMsRUFBRCxDQVBsQjtBQUFBLE1BT2ZPLFFBUGU7QUFBQSxNQU9MQyxXQVBLOztBQUFBLG1CQVFrQlIsc0RBQVEsQ0FBQyxFQUFELENBUjFCO0FBQUEsTUFRZlMsWUFSZTtBQUFBLE1BUURDLGVBUkMsa0JBV3RCOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLCtFQUFlLEdBQUdDLElBQWxCLENBQXVCLFVBQUNDLElBQUQsRUFBVTtBQUMvQlosbUJBQWEsQ0FBQ1ksSUFBRCxDQUFiO0FBQ0QsS0FGRDtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLQUgseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUksWUFBWSxHQUFHZCxVQUFVLENBQUNlLE1BQVgsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQy9DLGFBQU8sQ0FBQ0EsSUFBSSxDQUFDQyxPQUFiO0FBQ0QsS0FGb0IsQ0FBckI7QUFHQSxRQUFNQyxVQUFVLEdBQUdsQixVQUFVLENBQUNlLE1BQVgsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzdDLGFBQU9BLElBQUksQ0FBQ0MsT0FBWjtBQUNELEtBRmtCLENBQW5CO0FBR0FkLGFBQVMsQ0FBQ1csWUFBWSxDQUFDSyxNQUFkLENBQVQ7QUFDQWQsV0FBTyxDQUFDYSxVQUFVLENBQUNDLE1BQVosQ0FBUDtBQUNELEdBVFEsRUFTTixDQUFDbkIsVUFBRCxDQVRNLENBQVQ7QUFXRSxNQUFNb0IsVUFBVSxHQUFHO0FBQ2pCQyxVQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsUUFBVCxDQURTO0FBRWpCQyxZQUFRLEVBQUUsQ0FDUjtBQUNFQyxXQUFLLEVBQUUsWUFEVDtBQUVFVixVQUFJLEVBQUUsQ0FBQ1QsSUFBRCxFQUFPRixNQUFQLENBRlI7QUFHRXNCLHFCQUFlLEVBQUUsQ0FBQyx5QkFBRCxFQUE0Qix5QkFBNUIsQ0FIbkI7QUFJRUMsaUJBQVcsRUFBRSxDQUFDLHVCQUFELEVBQTBCLHVCQUExQixDQUpmO0FBS0VDLGlCQUFXLEVBQUU7QUFMZixLQURRO0FBRk8sR0FBbkIsQ0E1Qm9CLENBeUN0Qjs7QUFDQWhCLHlEQUFTLENBQUMsWUFBTTtBQUNkaUIsd0VBQVUsR0FBR2YsSUFBYixDQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDMUJOLGlCQUFXLENBQUNNLElBQUQsQ0FBWDtBQUNELEtBRkQ7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFILHlEQUFTLENBQUMsWUFBSTtBQUNaLFFBQU1rQixJQUFJLEdBQUV0QixRQUFRLENBQUN1QixHQUFULENBQWEsVUFBQ2IsSUFBRCxFQUFRO0FBQy9CLGFBQU9BLElBQUksQ0FBQ2MsU0FBTCxDQUFlLENBQWYsQ0FBUDtBQUNELEtBRlcsQ0FBWjs7QUFHQSxRQUFNQyxNQUFNLEdBQUcsdUpBQUksSUFBSUMsR0FBSixDQUFRSixJQUFSLENBQVAsQ0FBWjs7QUFDQUssV0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sR0FBRSxLQUFwQjtBQUNBdEIsbUJBQWUsQ0FBQ3NCLE1BQUQsQ0FBZjtBQUNELEdBUFEsRUFPUCxDQUFDekIsUUFBRCxDQVBPLENBQVQ7QUFRQTJCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZMUIsWUFBWjtBQUVBLE1BQU0yQixZQUFZLEdBQUc7QUFDbkJkLFVBQU0sRUFBRSxFQURXO0FBRW5CQyxZQUFRLEVBQUUsQ0FDUjtBQUNFQyxXQUFLLEVBQUUsWUFEVDtBQUVFVixVQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLENBQVQsRUFBWSxDQUFaLENBRlI7QUFHRVcscUJBQWUsRUFBRSxDQUNmLHlCQURlLEVBRWYseUJBRmUsRUFHZix5QkFIZSxFQUlmLHlCQUplLENBSG5CO0FBU0VDLGlCQUFXLEVBQUUsQ0FDWCx1QkFEVyxFQUVYLHVCQUZXLEVBR1gsdUJBSFcsRUFJWCx1QkFKVyxDQVRmO0FBZUVDLGlCQUFXLEVBQUU7QUFmZixLQURRO0FBRlMsR0FBckI7QUF1QkEsc0JBQ0UscUVBQUMsNENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxpREFBRDtBQUFVLFdBQUssRUFBQyxjQUFoQjtBQUErQixXQUFLLEVBQUVOO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLGlEQUFEO0FBQVUsV0FBSyxFQUFDLHNCQUFoQjtBQUF1QyxXQUFLLEVBQUVlO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBdkZEOztHQUFNckMsUzs7S0FBQUEsUztBQXlGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RhdHMuNmI0YjE0MGMxN2QyYWJkMzI0NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ2V0UGFzdExhdW5jaGVzIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9nZXRQYXN0TGF1bmNoZXNOUFwiO1xuaW1wb3J0IGdldFBheWxvYWQgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dldFBheWxvYWRcIjtcblxuaW1wb3J0IFN0YXRDYXJkIGZyb20gXCIuLi9TdGF0Q2FyZFwiO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IEdyaWRTdGF0cyA9ICgpID0+IHtcbiAgXG5cbiAgY29uc3QgW2RyYWdvbkluZm8sIHNldGRyYWdvbkluZm9dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3VjY2VzLCBzZXRzdWNjZXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmYWlsLCBzZXRmYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBcbiAgY29uc3QgW2N1c3RvbWVyLCBzZXRjdXN0b21lcl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjdXN0b21lck5hbWUsIHNldGN1c3RvbWVyTmFtZV0gPSB1c2VTdGF0ZShbXSk7XG5cblxuICAvLyBicmluZyB0aGUgZGF0YSBmb3IgbGF1bmNoIHN0YXRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UGFzdExhdW5jaGVzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0ZHJhZ29uSW5mbyhkYXRhKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc2xhdW5jaCA9IGRyYWdvbkluZm8uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gIWl0ZW0uc3VjY2VzcztcbiAgICB9KTtcbiAgICBjb25zdCBmYWlsbGF1bmNoID0gZHJhZ29uSW5mby5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBpdGVtLnN1Y2Nlc3M7XG4gICAgfSk7XG4gICAgc2V0c3VjY2VzKHN1Y2Nlc2xhdW5jaC5sZW5ndGgpO1xuICAgIHNldGZhaWwoZmFpbGxhdW5jaC5sZW5ndGgpO1xuICB9LCBbZHJhZ29uSW5mb10pO1xuXG4gICAgY29uc3QgZGF0YVN1Y2NlcyA9IHtcbiAgICAgIGxhYmVsczogW1wiZmFpbFwiLCBcInN1Y2Nlc1wiXSxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCIjIG9mIFZvdGVzXCIsXG4gICAgICAgICAgZGF0YTogW2ZhaWwsIHN1Y2Nlc10sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCJyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKVwiLCBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCJdLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBbXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIiwgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIl0sXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG5cbiAgLy8gYnJpbmcgdGhlIGRhdGEgZm9yIGN1c3RvbWVyIHN0YXRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UGF5bG9hZCgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldGN1c3RvbWVyKGRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIFxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCBuYW1lPSBjdXN0b21lci5tYXAoKGl0ZW0pPT57XG4gICAgICByZXR1cm4gaXRlbS5jdXN0b21lcnNbMF07XG4gICAgfSlcbiAgICBjb25zdCBuYW1lc2wgPSBbLi4ubmV3IFNldChuYW1lKV07XG4gICAgY29uc29sZS5sb2cobmFtZXNsICsnc2RmJylcbiAgICBzZXRjdXN0b21lck5hbWUobmFtZXNsKTtcbiAgfSxbY3VzdG9tZXJdKVxuICBjb25zb2xlLmxvZyhjdXN0b21lck5hbWUpXG5cbiAgY29uc3QgZGF0YUN1c3RvbWVyID0ge1xuICAgIGxhYmVsczogW10sXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiIyBvZiBWb3Rlc1wiLFxuICAgICAgICBkYXRhOiBbMTIsIDE5LCAzLCA1XSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKVwiLFxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDAuMilcIixcbiAgICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAwLjIpXCIsXG4gICAgICAgICAgXCJyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKVwiLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJDb2xvcjogW1xuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDEpXCIsXG4gICAgICAgICAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMSlcIixcbiAgICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAxKVwiLFxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDEpXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQ+XG4gICAgICA8U3RhdENhcmQgdGl0bGU9XCJsYXVuY2ggc3RhdHNcIiBpdGVtcz17ZGF0YVN1Y2Nlc30gLz5cbiAgICAgIDxTdGF0Q2FyZCB0aXRsZT1cImNvbW1lcmNpYWwgQ3VzdG9tZXJzXCIgaXRlbXM9e2RhdGFDdXN0b21lcn0gLz5cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkU3RhdHM7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=